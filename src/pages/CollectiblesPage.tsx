import { useMemo, useRef, useState } from 'react'
import type { Borough } from '../types'
import { COLLECTIBLES, KINDS, headingOf, type Collectible, type CollectibleKind } from '../data/collectibles'
import { useCollectibles } from '../store/useCollectibles'
import { TrackerNav } from '../components/TrackerNav'
import { LibertyMap, type MapPin } from '../components/characters/LibertyMap'
import { CollectibleMeter } from '../components/collectibles/CollectibleMeter'
import { CollectibleDetail } from '../components/collectibles/CollectibleDetail'
import { CollectibleList } from '../components/collectibles/CollectibleList'

type StatusFilter = 'all' | 'todo' | 'done'
type BoroughFilter = 'all' | Borough

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'todo', label: 'To do' },
  { value: 'done', label: 'Done' },
]

const BOROUGHS: Borough[] = ['Broker', 'Dukes', 'Bohan', 'Algonquin', 'Alderney']

const BY_ID = new Map(COLLECTIBLES.map((c) => [c.id, c]))

export function CollectiblesPage() {
  const [layers, setLayers] = useState<Record<CollectibleKind, boolean>>({ pigeon: true, jump: true })
  const [status, setStatus] = useState<StatusFilter>('all')
  const [borough, setBorough] = useState<BoroughFilter>('all')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const mapRef = useRef<HTMLElement>(null)

  const done = useCollectibles((s) => s.done)
  const setDone = useCollectibles((s) => s.setDone)
  const reset = useCollectibles((s) => s.reset)

  const visible = useMemo(
    () =>
      COLLECTIBLES.filter((c) => {
        if (!layers[c.kind]) return false
        if (borough !== 'all' && c.borough !== borough) return false
        if (status === 'todo' && done[c.id]) return false
        if (status === 'done' && !done[c.id]) return false
        return true
      }),
    [layers, borough, status, done],
  )

  const selected = selectedId ? (BY_ID.get(selectedId) ?? null) : null

  const pins = useMemo<MapPin[]>(() => {
    // Keep the selected pin on the map even after a filter (say, "To do") would hide it.
    const shown = selected && !visible.includes(selected) ? [...visible, selected] : visible
    return shown.map((c) => ({
      id: c.id,
      x: c.x,
      y: c.y,
      short: String(c.n),
      title: `${KINDS[c.kind].label} ${c.n}\n${c.area}, ${c.borough}${c.direction ? `\nHeading ${c.direction.toLowerCase()}` : ''}`,
      state: done[c.id] ? 'done' : 'todo',
      kind: c.kind,
      heading: headingOf(c.direction),
    }))
  }, [visible, selected, done])

  /** The closest unfinished pin among the ones on show, so you can sweep an area. */
  const nearestTodo = (from: Collectible) => {
    let best: Collectible | null = null
    let bestDist = Infinity
    for (const c of visible) {
      if (c.id === from.id || done[c.id]) continue
      // The map image is 6000 × 3800 units, so scale y back before measuring.
      const d = Math.hypot(c.x - from.x, (c.y - from.y) * (3800 / 6000))
      if (d < bestDist) {
        best = c
        bestDist = d
      }
    }
    return best
  }

  const selectFromList = (id: string) => {
    setSelectedId(id)
    // On narrow screens the map sits above the list rather than beside it.
    const map = mapRef.current
    if (map && map.getBoundingClientRect().bottom < 0) {
      map.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleLayer = (kind: CollectibleKind) =>
    setLayers((l) => {
      const next = { ...l, [kind]: !l[kind] }
      // Never hide everything: switching off the last layer shows only the other one.
      return next.pigeon || next.jump ? next : { pigeon: kind !== 'pigeon', jump: kind !== 'jump' }
    })

  const next = selected ? nearestTodo(selected) : null

  return (
    <>
      <header className="topbar">
        <TrackerNav />
        <div className="topbar__main">
          <h1>
            GTA <span>IV</span> Pigeons &amp; Stunt Jumps
          </h1>
          <span className="subtitle">
            {visible.length === COLLECTIBLES.length
              ? COLLECTIBLES.length
              : `${visible.length} of ${COLLECTIBLES.length}`}{' '}
            on the map
          </span>
          <CollectibleMeter />
        </div>

        <div className="toolbar">
          {(Object.keys(KINDS) as CollectibleKind[]).map((kind) => (
            <button
              key={kind}
              type="button"
              className={`chip chip--layer chip--${kind}${layers[kind] ? ' on' : ''}`}
              onClick={() => toggleLayer(kind)}
              aria-pressed={layers[kind]}
            >
              {KINDS[kind].plural}
            </button>
          ))}
          <span className="toolbar__div" />
          {STATUS_FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`chip${status === value ? ' on' : ''}`}
              onClick={() => setStatus(value)}
            >
              {label}
            </button>
          ))}
          <span className="toolbar__div" />
          {(['all', ...BOROUGHS] as BoroughFilter[]).map((value) => (
            <button
              key={value}
              type="button"
              className={`chip chip--sm${borough === value ? ' on' : ''}`}
              onClick={() => setBorough(value)}
            >
              {value === 'all' ? 'All boroughs' : value}
            </button>
          ))}
          <button
            type="button"
            className="chip danger toolbar__spacer"
            onClick={() => {
              const kinds = (Object.keys(KINDS) as CollectibleKind[]).filter((k) => layers[k])
              const what = kinds.map((k) => KINDS[k].plural.toLowerCase()).join(' and ')
              if (!confirm(`Clear every mark on ${what}?`)) return
              if (kinds.length === 2) reset()
              else reset(`${kinds[0]}-`)
            }}
          >
            Reset
          </button>
        </div>
      </header>

      <div className="cl-layout">
        <section className="cl-layout__map" ref={mapRef}>
          <LibertyMap pins={pins} selectedId={selectedId} onSelect={setSelectedId} />
          <p className="lcmap__hint">
            Pigeons glow red and coo — listen for them. Before <i>Blow Your Cover</i> unlocks
            Algonquin and Happiness Island, and <i>Three Leaf Clover</i> unlocks Alderney, crossing
            over earns a six-star wanted level. Zoom in to see numbers; arrows show which way each
            jump takes off.
          </p>
        </section>

        <aside className="cl-layout__side">
          <CollectibleDetail
            item={selected}
            done={selected ? Boolean(done[selected.id]) : false}
            onToggle={(isDone) => selected && setDone(selected.id, isDone)}
            next={next}
            onNext={() => {
              if (!selected || !next) return
              setDone(selected.id, true)
              setSelectedId(next.id)
            }}
            onSkip={() => next && setSelectedId(next.id)}
          />
          {visible.length === 0 ? (
            <p className="empty">Nothing matches those filters.</p>
          ) : (
            <CollectibleList items={visible} selectedId={selectedId} onSelect={selectFromList} />
          )}
        </aside>
      </div>

      <footer className="credits">
        Locations, screenshots and stunt jump notes from{' '}
        <a href="https://gta.fandom.com/wiki/Flying_Rats" target="_blank" rel="noreferrer">
          GTA Wiki: Flying Rats
        </a>{' '}
        and{' '}
        <a href="https://gta.fandom.com/wiki/Unique_Stunt_Jumps_in_GTA_IV" target="_blank" rel="noreferrer">
          Unique Stunt Jumps in GTA IV
        </a>
        , used under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noreferrer">
          CC BY-SA 3.0
        </a>
        .
      </footer>
    </>
  )
}
