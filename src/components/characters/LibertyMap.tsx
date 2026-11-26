import { useEffect, useRef, useState, type PointerEvent } from 'react'
import type { EncounterState } from '../../types'

export const MAP_IMAGE = '/maps/liberty-city.webp'

export interface MapPin {
  id: string
  /** 0–1 from the left / top of the map image. */
  x: number
  y: number
  /** Short text inside the pin. */
  short: string
  title: string
  state: EncounterState
  optional?: boolean
  dimmed?: boolean
  /** Extra modifier, rendered as a `pin--<kind>` class. */
  kind?: string
  /** Compass heading in degrees (0 = north) to draw as an arrow on the pin. */
  heading?: number
}

interface View {
  /** Map point at the centre of the frame (0–1). */
  cx: number
  cy: number
  zoom: number
}

const MIN_ZOOM = 1
const MAX_ZOOM = 6
const FOCUS_ZOOM = 3
const HOME: View = { cx: 0.5, cy: 0.5, zoom: 1 }

/** Keep the map covering the frame: the centre can't get closer than half a frame to an edge. */
function clamp(view: View): View {
  const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, view.zoom))
  const half = 0.5 / zoom
  const fit = (c: number) => Math.min(1 - half, Math.max(half, c))
  return { zoom, cx: fit(view.cx), cy: fit(view.cy) }
}

interface Props {
  pins: MapPin[]
  selectedId: string | null
  onSelect: (id: string) => void
}

/** Zoom at which pins have room to show their labels (see `.lcmap--zoomed`). */
const LABEL_ZOOM = 2.5

/** Overview of Liberty City with a pin per point of interest. Drag to pan, wheel or buttons to zoom. */
export function LibertyMap({ pins, selectedId, onSelect }: Props) {
  const [view, setView] = useState<View>(HOME)
  const [dragging, setDragging] = useState(false)
  const frame = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; view: View; moved: boolean } | null>(null)
  /** Swallows the click that ends a drag so panning never selects a pin. */
  const justDragged = useRef(false)

  // Fly to whatever was picked from the list.
  // Fly to whatever was just picked (adjusting state during render, not in an effect).
  const [focusedId, setFocusedId] = useState(selectedId)
  if (selectedId !== focusedId) {
    setFocusedId(selectedId)
    const selected = pins.find((p) => p.id === selectedId)
    if (selected) {
      setView(clamp({ cx: selected.x, cy: selected.y, zoom: Math.max(view.zoom, FOCUS_ZOOM) }))
    }
  }

  // Wheel zoom needs a non-passive listener to stop the page scrolling.
  useEffect(() => {
    const el = frame.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      const rect = el.getBoundingClientRect()
      const factor = e.deltaY < 0 ? 1.25 : 0.8
      setView((v) => {
        // Zoom toward the cursor: keep the map point under it fixed.
        const fx = (e.clientX - rect.left) / rect.width - 0.5
        const fy = (e.clientY - rect.top) / rect.height - 0.5
        const px = v.cx + fx / v.zoom
        const py = v.cy + fy / v.zoom
        const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, v.zoom * factor))
        return clamp({ zoom, cx: px - fx / zoom, cy: py - fy / zoom })
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    justDragged.current = false
    drag.current = { x: e.clientX, y: e.clientY, view, moved: false }
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const start = drag.current
    const el = frame.current
    if (!start || !el) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    if (!start.moved && Math.hypot(dx, dy) < 4) return
    if (!start.moved) {
      start.moved = true
      el.setPointerCapture(e.pointerId)
      setDragging(true)
    }
    const rect = el.getBoundingClientRect()
    setView(
      clamp({
        zoom: start.view.zoom,
        cx: start.view.cx - dx / rect.width / start.view.zoom,
        cy: start.view.cy - dy / rect.height / start.view.zoom,
      }),
    )
  }

  const endDrag = () => {
    justDragged.current = drag.current?.moved ?? false
    drag.current = null
    setDragging(false)
  }

  const zoomBy = (factor: number) => setView((v) => clamp({ ...v, zoom: v.zoom * factor }))

  // The layer is the map at frame size; scale it about its top-left, then shift the centre point to the middle.
  const tx = (0.5 - view.cx * view.zoom) * 100
  const ty = (0.5 - view.cy * view.zoom) * 100

  return (
    <div className={`lcmap${view.zoom >= LABEL_ZOOM ? ' lcmap--zoomed' : ''}`}>
      <div
        ref={frame}
        className={`lcmap__frame${dragging ? ' is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="lcmap__layer"
          style={{
            transform: `translate(${tx}%, ${ty}%) scale(${view.zoom})`,
            ['--inv' as string]: 1 / view.zoom,
          }}
        >
          <img className="lcmap__img" src={MAP_IMAGE} alt="Map of Liberty City" draggable={false} />
          {pins.map((pin) => (
            <button
              key={pin.id}
              type="button"
              className={`pin pin--${pin.state}${pin.kind ? ` pin--${pin.kind}` : ''}${
                pin.optional ? ' pin--optional' : ''
              }${pin.dimmed ? ' pin--dim' : ''}${pin.id === selectedId ? ' is-selected' : ''}`}
              style={{ left: `${pin.x * 100}%`, top: `${pin.y * 100}%` }}
              title={pin.title}
              aria-label={pin.title}
              onClick={() => {
                if (!justDragged.current) onSelect(pin.id)
              }}
            >
              {pin.heading !== undefined && (
                <span className="pin__dir" style={{ rotate: `${pin.heading}deg` }} aria-hidden />
              )}
              <span className="pin__label">{pin.short}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lcmap__controls">
        <button type="button" onClick={() => zoomBy(1.5)} aria-label="Zoom in">
          +
        </button>
        <button type="button" onClick={() => zoomBy(1 / 1.5)} aria-label="Zoom out">
          −
        </button>
        <button type="button" onClick={() => setView(HOME)} aria-label="Show the whole city">
          ⤢
        </button>
      </div>
    </div>
  )
}
