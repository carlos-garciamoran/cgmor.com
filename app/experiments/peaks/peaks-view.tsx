'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  bearingDeg,
  type Calibration,
  cameraBasis,
  directionVector,
  distanceMeters,
  elevationAngleRad,
  focalLengthPx,
  horizonDistance,
  project,
  qSlerp,
  quatFromDeviceAngles,
  screenQuaternion,
  toDeg,
} from '@/app/_lib/geo'
import type { Peak } from '@/app/_lib/peaks'

type Phase = 'idle' | 'starting' | 'live' | 'error'

export type Observer = {
  lat: number
  lon: number
  alt: number
  accuracy: number | null
  altSource: 'gps' | 'manual' | 'assumed'
}

type Target = {
  peak: Peak
  azimuth: number
  distance: number
  dir: [number, number, number]
}

type Settings = Calibration & { fovDeg: number; altOverride: number | null }

const STORAGE_KEY = 'peaks-ar-settings'
const SMOOTHING = 0.18
const CARDINALS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

const DEFAULTS: Settings = {
  headingOffsetDeg: 0,
  pitchOffsetDeg: 0,
  fovDeg: 68,
  altOverride: null,
}

interface CompassEvent extends DeviceOrientationEvent {
  webkitCompassHeading?: number
  webkitCompassAccuracy?: number
}

type PermissionRequester = { requestPermission?: () => Promise<PermissionState | string> }

function formatDistance(m: number) {
  const km = m / 1000
  return km < 100 ? `${km.toFixed(1)} km` : `${Math.round(km)} km`
}

function cardinalFor(deg: number) {
  return CARDINALS[Math.round((((deg % 360) + 360) % 360) / 45) % 8]
}

export function PeaksView({ peaks, fallback }: { peaks: Peak[]; fallback: Observer }) {
  const [phase, setPhase] = useState<Phase>('idle')
  const [error, setError] = useState<string | null>(null)
  const [notice, setNotice] = useState<string | null>(null)
  const [observer, setObserver] = useState<Observer>(fallback)
  const [settings, setSettings] = useState<Settings>(DEFAULTS)
  const [showPanel, setShowPanel] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const horizonRef = useRef<SVGPathElement>(null)
  const readoutRef = useRef<HTMLSpanElement>(null)
  const labelRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardinalRefs = useRef<(HTMLDivElement | null)[]>([])

  const orientation = useRef({ alpha: 0, beta: 90, gamma: 0, ready: false })
  const smoothed = useRef<[number, number, number, number] | null>(null)
  const screenAngle = useRef(0)
  const videoSize = useRef({ width: 0, height: 0 })
  const settingsRef = useRef(settings)
  const targetsRef = useRef<Target[]>([])
  const streamRef = useRef<MediaStream | null>(null)

  settingsRef.current = settings

  const effectiveAlt = settings.altOverride ?? observer.alt
  const fallbackAlt = fallback.alt

  // Bearing, distance and direction only change when we move, so keep them out
  // of the render loop.
  const targets = useMemo<Target[]>(() => {
    const eyeHeight = effectiveAlt + 1.6
    const eyeHorizon = horizonDistance(eyeHeight)
    return (
      peaks
        .map((peak) => {
          const distance = distanceMeters(observer, peak)
          return { peak, distance, azimuth: bearingDeg(observer, peak) }
        })
        .filter((t) => t.distance > 50)
        // Without a terrain model we cannot know what ridge is in the way, but we
        // can at least drop anything hiding behind the Earth's own curve.
        .filter((t) => t.distance < eyeHorizon + horizonDistance(t.peak.ele))
        .sort((a, b) => b.distance - a.distance)
        .map((t) => ({
          ...t,
          dir: directionVector(t.azimuth, elevationAngleRad(t.peak.ele - eyeHeight, t.distance)),
        }))
    )
  }, [peaks, observer, effectiveAlt])

  targetsRef.current = targets

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setSettings({ ...DEFAULTS, ...JSON.parse(raw) })
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    } catch {}
  }, [settings])

  useEffect(() => {
    const read = () => {
      screenAngle.current = window.screen?.orientation?.angle ?? 0
    }
    read()
    window.addEventListener('orientationchange', read)
    window.screen?.orientation?.addEventListener('change', read)
    return () => {
      window.removeEventListener('orientationchange', read)
      window.screen?.orientation?.removeEventListener('change', read)
    }
  }, [])

  useEffect(
    () => () => {
      for (const track of streamRef.current?.getTracks() ?? []) track.stop()
    },
    [],
  )

  const start = useCallback(async () => {
    setPhase('starting')
    setError(null)

    // iOS only honours this inside the tap that triggered it, and only if it is
    // reached before the first await. Fire it now, settle it later.
    const orientationApi = window.DeviceOrientationEvent as unknown as PermissionRequester
    const orientationGrant = (
      orientationApi?.requestPermission?.() ?? Promise.resolve('granted')
    ).catch(() => 'denied')

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: 'environment' },
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
        audio: false,
      })
      streamRef.current = stream
    } catch (e) {
      setPhase('error')
      setError(
        e instanceof DOMException && e.name === 'NotAllowedError'
          ? 'Camera permission denied. In-app browsers usually block it, so try Safari or Chrome directly.'
          : `Could not open the camera: ${e instanceof Error ? e.message : String(e)}`,
      )
      return
    }

    if ((await orientationGrant) !== 'granted') {
      setNotice('Motion access was denied, so the overlay cannot follow where you point.')
    }

    const nav = navigator as Navigator & {
      wakeLock?: { request: (t: 'screen') => Promise<unknown> }
    }
    nav.wakeLock?.request('screen').catch(() => {})

    setPhase('live')
  }, [])

  // The video element only mounts once phase flips to live, so the stream has
  // to be handed over here. Assigning it inside the tap handler writes to a ref
  // that is still null, which fails silently and leaves a black screen.
  useEffect(() => {
    const video = videoRef.current
    const stream = streamRef.current
    if (phase !== 'live' || !video || !stream) return
    video.srcObject = stream
    video.play().catch(() => {})
  }, [phase])

  // Sensors live here rather than in the tap handler so React owns the teardown.
  useEffect(() => {
    if (phase !== 'live') return

    let sawAbsolute = false
    const handle = (event: Event, absolute: boolean) => {
      const e = event as CompassEvent
      const compass = e.webkitCompassHeading
      const hasCompass = typeof compass === 'number' && Number.isFinite(compass)
      if (absolute) sawAbsolute = true
      else if (sawAbsolute && !hasCompass) return
      // Safari reports a true-north heading and leaves alpha relative to
      // wherever the page started; Chrome's absolute alpha is magnetic north.
      const alpha = hasCompass ? 360 - (compass as number) : e.alpha
      if (alpha == null || e.beta == null || e.gamma == null) return
      orientation.current = { alpha, beta: e.beta, gamma: e.gamma, ready: true }
    }
    const onAbsolute = (e: Event) => handle(e, true)
    const onRelative = (e: Event) => handle(e, false)
    window.addEventListener('deviceorientationabsolute', onAbsolute)
    window.addEventListener('deviceorientation', onRelative)

    const watch = navigator.geolocation?.watchPosition(
      (pos) => {
        setNotice(null)
        setObserver({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          alt: pos.coords.altitude ?? fallbackAlt,
          accuracy: pos.coords.accuracy,
          altSource: pos.coords.altitude == null ? 'assumed' : 'gps',
        })
      },
      () => setNotice('No location fix yet. Showing the view from central Quito.'),
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 },
    )

    return () => {
      window.removeEventListener('deviceorientationabsolute', onAbsolute)
      window.removeEventListener('deviceorientation', onRelative)
      if (watch != null) navigator.geolocation.clearWatch(watch)
    }
  }, [phase, fallbackAlt])

  useEffect(() => {
    if (phase !== 'live') return
    let frame = 0

    const tick = () => {
      frame = requestAnimationFrame(tick)
      const stage = stageRef.current
      if (!stage) return
      const viewport = { width: stage.clientWidth, height: stage.clientHeight }
      const cal = settingsRef.current

      const { alpha, beta, gamma } = orientation.current
      const raw = quatFromDeviceAngles(alpha, beta, gamma)
      smoothed.current = smoothed.current ? qSlerp(smoothed.current, raw, SMOOTHING) : raw

      const q = screenQuaternion(smoothed.current, screenAngle.current, cal)
      const basis = cameraBasis(q)
      const focal = focalLengthPx(viewport, videoSize.current, cal.fovDeg)

      const margin = 120
      for (let i = 0; i < targetsRef.current.length; i++) {
        const el = labelRefs.current[i]
        if (!el) continue
        const p = project(targetsRef.current[i].dir, basis, focal, viewport)
        const visible =
          p !== null && p.x > -margin && p.x < viewport.width + margin && p.y > -margin
        if (!visible) {
          el.style.visibility = 'hidden'
          continue
        }
        el.style.visibility = 'visible'
        el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) translate(-50%, -100%)`
      }

      for (let i = 0; i < CARDINALS.length; i++) {
        const el = cardinalRefs.current[i]
        if (!el) continue
        const p = project(directionVector(i * 45, 0), basis, focal, viewport)
        if (!p || p.x < 0 || p.x > viewport.width) {
          el.style.visibility = 'hidden'
          continue
        }
        el.style.visibility = 'visible'
        el.style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0) translate(-50%, -50%)`
      }

      // A drawn horizon gives you something to line the real skyline up against,
      // which is the fastest way to get the pitch nudge right.
      if (horizonRef.current) {
        let d = ''
        let pen = false
        for (let az = 0; az <= 360; az += 3) {
          const p = project(directionVector(az, 0), basis, focal, viewport)
          if (!p) {
            pen = false
            continue
          }
          d += `${pen ? 'L' : 'M'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`
          pen = true
        }
        horizonRef.current.setAttribute('d', d)
      }

      if (readoutRef.current) {
        const heading = (toDeg(Math.atan2(basis.forward[0], basis.forward[1])) + 360) % 360
        readoutRef.current.textContent = `${cardinalFor(heading)} ${Math.round(heading)}°`
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [phase])

  const drag = useRef<{ x: number; y: number } | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return
    const stage = stageRef.current
    if (!stage) return
    const dx = e.clientX - drag.current.x
    const dy = e.clientY - drag.current.y
    drag.current = { x: e.clientX, y: e.clientY }
    const focal = focalLengthPx(
      { width: stage.clientWidth, height: stage.clientHeight },
      videoSize.current,
      settingsRef.current.fovDeg,
    )
    setSettings((s) => ({
      ...s,
      headingOffsetDeg: s.headingOffsetDeg - toDeg(dx / focal),
      pitchOffsetDeg: s.pitchOffsetDeg + toDeg(dy / focal),
    }))
  }

  const endDrag = () => {
    drag.current = null
  }

  if (phase === 'idle' || phase === 'starting' || phase === 'error') {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black px-8 text-center text-white">
        <div className="space-y-3">
          <h1 className="font-cormorant text-4xl">Peaks</h1>
          <p className="max-w-xs text-sm text-white/60">
            Point your phone at the horizon and the mountains get named. Works best outdoors, in
            Safari or Chrome rather than an in-app browser.
          </p>
        </div>
        {error && <p className="max-w-xs text-red-400 text-sm">{error}</p>}
        <button
          type="button"
          onClick={start}
          disabled={phase === 'starting'}
          className="rounded-full border border-white/40 px-8 py-3 text-sm tracking-wide disabled:opacity-50"
        >
          {phase === 'starting' ? 'Starting…' : error ? 'Try again' : 'Start'}
        </button>
        <p className="max-w-xs text-white/40 text-xs">
          Needs camera, location and motion access. Nothing leaves your phone.
        </p>
      </div>
    )
  }

  return (
    <div
      ref={stageRef}
      className="fixed inset-0 z-50 touch-none select-none overflow-hidden bg-black"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onLoadedMetadata={(e) => {
          videoSize.current = {
            width: e.currentTarget.videoWidth,
            height: e.currentTarget.videoHeight,
          }
        }}
        className="absolute inset-0 size-full object-cover"
      />

      <svg className="pointer-events-none absolute inset-0 size-full" aria-hidden="true">
        <path ref={horizonRef} fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {CARDINALS.map((c, i) => (
          <div
            key={c}
            ref={(el) => {
              cardinalRefs.current[i] = el
            }}
            style={{ visibility: 'hidden' }}
            className="absolute top-0 left-0 font-gm text-[10px] text-white/50 will-change-transform"
          >
            {c}
          </div>
        ))}

        {targets.map((t, i) => (
          <div
            key={t.peak.name}
            ref={(el) => {
              labelRefs.current[i] = el
            }}
            style={{ visibility: 'hidden' }}
            className="absolute top-0 left-0 flex flex-col items-center will-change-transform"
          >
            <span
              className={`whitespace-nowrap text-shadow-sm ${
                t.peak.featured ? 'text-amber-300 text-base' : 'text-sm text-white'
              }`}
            >
              {t.peak.name}
            </span>
            <span className="whitespace-nowrap font-gm text-[10px] text-white/65">
              {t.peak.ele.toLocaleString()} m · {formatDistance(t.distance)}
            </span>
            <span
              className={`mt-1 w-px flex-none ${
                t.peak.featured ? 'h-10 bg-amber-300/80' : 'h-6 bg-white/60'
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-[max(1rem,env(safe-area-inset-bottom))] text-white">
        <div className="flex items-end justify-between px-4 font-gm text-[11px]">
          <div className="space-y-0.5 text-white/70">
            <div className="text-sm text-white">
              <span ref={readoutRef}>—</span>
            </div>
            <div>
              {observer.lat.toFixed(4)}, {observer.lon.toFixed(4)}
              {observer.accuracy != null && ` ±${Math.round(observer.accuracy)}m`}
            </div>
            <div>
              eye {Math.round(effectiveAlt)} m (
              {settings.altOverride != null ? 'manual' : observer.altSource}){' · '}
              {targets.length} peaks
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowPanel((v) => !v)}
            onPointerDown={(e) => e.stopPropagation()}
            className="rounded-full border border-white/30 px-3 py-1.5"
          >
            {showPanel ? 'Close' : 'Calibrate'}
          </button>
        </div>

        {notice && <p className="px-4 pt-2 font-gm text-[11px] text-amber-300/80">{notice}</p>}

        {showPanel && (
          <div
            onPointerDown={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
            className="mt-3 space-y-3 border-white/15 border-t px-4 pt-3 font-gm text-[11px]"
          >
            <p className="text-white/50">
              Drag the screen to slide the labels onto the real skyline. Sideways fixes the compass,
              up and down fixes the tilt.
            </p>
            <div className="flex items-center justify-between text-white/70">
              <span>heading {settings.headingOffsetDeg.toFixed(1)}°</span>
              <span>pitch {settings.pitchOffsetDeg.toFixed(1)}°</span>
            </div>
            <label className="block space-y-1">
              <span className="text-white/70">lens field of view {settings.fovDeg}°</span>
              <input
                type="range"
                min={45}
                max={95}
                step={1}
                value={settings.fovDeg}
                onChange={(e) => setSettings((s) => ({ ...s, fovDeg: Number(e.target.value) }))}
                className="w-full accent-amber-300"
              />
            </label>
            <label className="flex items-center gap-2">
              <span className="text-white/70">eye elevation</span>
              <input
                type="number"
                inputMode="numeric"
                value={settings.altOverride ?? Math.round(observer.alt)}
                onChange={(e) =>
                  setSettings((s) => ({ ...s, altOverride: Number(e.target.value) }))
                }
                className="w-20 rounded border border-white/25 bg-transparent px-2 py-1"
              />
              <span className="text-white/40">m</span>
            </label>
            <button
              type="button"
              onClick={() => setSettings(DEFAULTS)}
              className="rounded-full border border-white/30 px-3 py-1.5"
            >
              Reset calibration
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
