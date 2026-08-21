export type Peak = {
  name: string
  lat: number
  lon: number
  /** Summit elevation in metres above sea level. */
  ele: number
  /** Renders in the accent colour. One per view, or the overlay gets noisy. */
  featured?: boolean
}

/**
 * Hardcoded for now: the volcanoes around the Quito basin, from OpenStreetMap
 * `natural=peak`. Step 2 replaces this with an Overpass query against the
 * user's actual position.
 */
export const PEAKS: Peak[] = [
  { name: 'Cotopaxi', lat: -0.6807, lon: -78.4378, ele: 5897, featured: true },
  { name: 'Chimborazo', lat: -1.4694, lon: -78.8175, ele: 6263 },
  { name: 'Cayambe', lat: 0.0289, lon: -77.9861, ele: 5790 },
  { name: 'Antisana', lat: -0.4814, lon: -78.1414, ele: 5704 },
  { name: 'Illiniza Sur', lat: -0.6594, lon: -78.7139, ele: 5248 },
  { name: 'Illiniza Norte', lat: -0.6394, lon: -78.7139, ele: 5116 },
  { name: 'Tungurahua', lat: -1.4675, lon: -78.4425, ele: 5023 },
  { name: 'Sincholagua', lat: -0.5333, lon: -78.3667, ele: 4873 },
  { name: 'Corazón', lat: -0.5386, lon: -78.6461, ele: 4790 },
  { name: 'Guagua Pichincha', lat: -0.1714, lon: -78.5983, ele: 4784 },
  { name: 'Rucu Pichincha', lat: -0.165, lon: -78.5342, ele: 4696 },
  { name: 'Atacazo', lat: -0.3436, lon: -78.6167, ele: 4463 },
  { name: 'Cerro Puntas', lat: -0.1683, lon: -78.2867, ele: 4452 },
  { name: 'Pasochoa', lat: -0.4633, lon: -78.4967, ele: 4200 },
  { name: 'Reventador', lat: -0.0775, lon: -77.6558, ele: 3562 },
  { name: 'Ilaló', lat: -0.2606, lon: -78.4114, ele: 3169 },
]

/** Plaza Grande. Used when geolocation is unavailable, so desktop still renders. */
export const QUITO = { lat: -0.2201, lon: -78.5123, alt: 2850 }
