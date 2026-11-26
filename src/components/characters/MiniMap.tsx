import { MAP_SIZE } from '../../data/characters'
import { MAP_IMAGE } from './LibertyMap'

const ZOOM = 5
/** Frame aspect (width / height) — matches the 16:9 screenshots beside it. */
const FRAME = 16 / 9
const MAP = MAP_SIZE.width / MAP_SIZE.height

/**
 * A zoomed crop of the city map centred on one point, drawn with background
 * positioning so every card reuses the single map image.
 */
export function MiniMap({ x, y, label }: { x: number; y: number; label: string }) {
  // background-position % maps the image's p-point onto the frame's p-point,
  // so solve for the p that puts (x, y) in the middle of the frame.
  const px = ((0.5 - x * ZOOM) / (1 - ZOOM)) * 100
  const py = ((1 / (2 * FRAME) - (y * ZOOM) / MAP) / (1 / FRAME - ZOOM / MAP)) * 100

  return (
    <div
      className="minimap"
      role="img"
      aria-label={`Map: ${label}`}
      style={{
        backgroundImage: `url(${MAP_IMAGE})`,
        backgroundSize: `${ZOOM * 100}% auto`,
        backgroundPosition: `${px}% ${py}%`,
      }}
    >
      <span className="minimap__pin" />
    </div>
  )
}
