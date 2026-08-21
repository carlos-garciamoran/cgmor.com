/**
 * Geodesy + orientation math for the AR peak overlay.
 *
 * World frame is ENU: x = east, y = north, z = up.
 * Device frame follows the W3C DeviceOrientation spec: x = right edge, y = top
 * edge, z = out of the screen. At alpha/beta/gamma = 0 the phone lies flat with
 * its top pointing at true north.
 */

export const EARTH_RADIUS = 6371008.8

/**
 * Light bends downward with the atmosphere, so distant peaks sit higher than
 * pure geometry predicts. The usual fix is to pretend the Earth is 7/6 as big
 * (refraction coefficient k = 0.13) and keep the math straight-line.
 */
export const REFRACTED_RADIUS = (EARTH_RADIUS * 7) / 6

export const toRad = (deg: number) => (deg * Math.PI) / 180
export const toDeg = (rad: number) => (rad * 180) / Math.PI

export type LatLon = { lat: number; lon: number }
export type Vec3 = [x: number, y: number, z: number]
/** Hamilton quaternion, stored as [w, x, y, z]. */
export type Quat = [w: number, x: number, y: number, z: number]

export function distanceMeters(a: LatLon, b: LatLon): number {
  const lat1 = toRad(a.lat)
  const lat2 = toRad(b.lat)
  const dLat = lat2 - lat1
  const dLon = toRad(b.lon - a.lon)
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
  return 2 * EARTH_RADIUS * Math.asin(Math.min(1, Math.sqrt(h)))
}

/** Initial great-circle bearing, degrees clockwise from true north. */
export function bearingDeg(from: LatLon, to: LatLon): number {
  const lat1 = toRad(from.lat)
  const lat2 = toRad(to.lat)
  const dLon = toRad(to.lon - from.lon)
  const y = Math.sin(dLon) * Math.cos(lat2)
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon)
  return (toDeg(Math.atan2(y, x)) + 360) % 360
}

/**
 * Apparent elevation angle in radians, with the Earth's bulge and refraction
 * subtracted. Over 55 km the drop is already ~200 m, so this is not optional.
 */
export function elevationAngleRad(heightDiff: number, distance: number): number {
  const drop = (distance * distance) / (2 * REFRACTED_RADIUS)
  return Math.atan2(heightDiff - drop, distance)
}

/** How far the horizon is for an eye at this height, in metres. */
export function horizonDistance(height: number): number {
  return Math.sqrt(2 * REFRACTED_RADIUS * Math.max(0, height))
}

/** Unit vector in ENU for a bearing (deg clockwise from north) and elevation (rad). */
export function directionVector(azimuthDeg: number, elevationRad: number): Vec3 {
  const az = toRad(azimuthDeg)
  const c = Math.cos(elevationRad)
  return [c * Math.sin(az), c * Math.cos(az), Math.sin(elevationRad)]
}

export function qMul(a: Quat, b: Quat): Quat {
  const [aw, ax, ay, az] = a
  const [bw, bx, by, bz] = b
  return [
    aw * bw - ax * bx - ay * by - az * bz,
    aw * bx + ax * bw + ay * bz - az * by,
    aw * by - ax * bz + ay * bw + az * bx,
    aw * bz + ax * by - ay * bx + az * bw,
  ]
}

export function qFromAxisAngle(axis: Vec3, angleRad: number): Quat {
  const h = angleRad / 2
  const s = Math.sin(h)
  return [Math.cos(h), axis[0] * s, axis[1] * s, axis[2] * s]
}

export function qRotate(q: Quat, v: Vec3): Vec3 {
  const [w, x, y, z] = q
  const [vx, vy, vz] = v
  // t = 2 * (q.xyz x v)
  const tx = 2 * (y * vz - z * vy)
  const ty = 2 * (z * vx - x * vz)
  const tz = 2 * (x * vy - y * vx)
  return [
    vx + w * tx + (y * tz - z * ty),
    vy + w * ty + (z * tx - x * tz),
    vz + w * tz + (x * ty - y * tx),
  ]
}

export function qNormalize(q: Quat): Quat {
  const n = Math.hypot(q[0], q[1], q[2], q[3]) || 1
  return [q[0] / n, q[1] / n, q[2] / n, q[3] / n]
}

/**
 * Spherical interpolation. Smoothing in quaternion space rather than on the raw
 * Euler angles matters here: holding a phone upright puts beta near 90 degrees,
 * which is exactly where the ZXY decomposition goes degenerate and alpha starts
 * flailing even though the device is perfectly still.
 */
export function qSlerp(a: Quat, b: Quat, t: number): Quat {
  let dot = a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
  let end = b
  if (dot < 0) {
    end = [-b[0], -b[1], -b[2], -b[3]]
    dot = -dot
  }
  if (dot > 0.9995) {
    return qNormalize([
      a[0] + (end[0] - a[0]) * t,
      a[1] + (end[1] - a[1]) * t,
      a[2] + (end[2] - a[2]) * t,
      a[3] + (end[3] - a[3]) * t,
    ])
  }
  const theta0 = Math.acos(dot)
  const theta = theta0 * t
  const sin0 = Math.sin(theta0)
  const s1 = Math.sin(theta) / sin0
  const s0 = Math.cos(theta) - dot * s1
  return [
    a[0] * s0 + end[0] * s1,
    a[1] * s0 + end[1] * s1,
    a[2] * s0 + end[2] * s1,
    a[3] * s0 + end[3] * s1,
  ]
}

/** Device-to-world rotation, built as the spec's intrinsic Z-X'-Y'' sequence. */
export function quatFromDeviceAngles(alpha: number, beta: number, gamma: number): Quat {
  const a = toRad(alpha) / 2
  const b = toRad(beta) / 2
  const g = toRad(gamma) / 2
  const qz: Quat = [Math.cos(a), 0, 0, Math.sin(a)]
  const qx: Quat = [Math.cos(b), Math.sin(b), 0, 0]
  const qy: Quat = [Math.cos(g), 0, Math.sin(g), 0]
  return qMul(qMul(qz, qx), qy)
}

const AXIS_Z: Vec3 = [0, 0, 1]
const AXIS_X: Vec3 = [1, 0, 0]

export type Calibration = { headingOffsetDeg: number; pitchOffsetDeg: number }

/**
 * Screen-to-world rotation: the device rotation, undone by however far the page
 * content is rotated, plus the two manual nudges.
 *
 * Heading is a pre-multiply because it turns the camera about the world's
 * vertical. Pitch is a post-multiply because it tilts about the screen's own
 * horizontal, which keeps it correct when the phone is rolled.
 */
export function screenQuaternion(device: Quat, screenAngleDeg: number, cal: Calibration): Quat {
  const unrollScreen = qFromAxisAngle(AXIS_Z, -toRad(screenAngleDeg))
  const heading = qFromAxisAngle(AXIS_Z, -toRad(cal.headingOffsetDeg))
  const pitch = qFromAxisAngle(AXIS_X, toRad(cal.pitchOffsetDeg))
  return qNormalize(qMul(qMul(heading, qMul(device, unrollScreen)), pitch))
}

export type CameraBasis = { right: Vec3; up: Vec3; forward: Vec3 }

export function cameraBasis(q: Quat): CameraBasis {
  return {
    right: qRotate(q, [1, 0, 0]),
    up: qRotate(q, [0, 1, 0]),
    // The rear camera looks out the back of the screen, along -z.
    forward: qRotate(q, [0, 0, -1]),
  }
}

const dot3 = (a: Vec3, b: Vec3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]

/**
 * Focal length in CSS pixels for a video painted with object-fit: cover.
 *
 * Cover crops the frame, so the field of view you can actually see is narrower
 * than the camera's. Anchoring the tunable to the long edge of the native frame
 * keeps it a property of the lens (a phone main camera is roughly 65-75 degrees
 * there) instead of something that shifts when the phone rotates. Square pixels
 * mean this same focal length is correct on both axes.
 */
export function focalLengthPx(
  viewport: { width: number; height: number },
  video: { width: number; height: number },
  fovDeg: number,
): number {
  const halfTan = Math.tan(toRad(fovDeg) / 2)
  if (!video.width || !video.height) {
    return Math.max(viewport.width, viewport.height) / 2 / halfTan
  }
  const coverScale = Math.max(viewport.width / video.width, viewport.height / video.height)
  const longEdge = Math.max(video.width, video.height)
  return (longEdge * coverScale) / 2 / halfTan
}

export type Projected = { x: number; y: number; depth: number }

/** Perspective-project an ENU direction into CSS pixels. Null when behind us. */
export function project(
  dir: Vec3,
  basis: CameraBasis,
  focal: number,
  viewport: { width: number; height: number },
): Projected | null {
  const depth = dot3(dir, basis.forward)
  if (depth <= 1e-4) return null
  const x = dot3(dir, basis.right)
  const y = dot3(dir, basis.up)
  return {
    x: viewport.width / 2 + (focal * x) / depth,
    y: viewport.height / 2 - (focal * y) / depth,
    depth,
  }
}
