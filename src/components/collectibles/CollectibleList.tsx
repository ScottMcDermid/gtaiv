import { useMemo } from 'react'
import type { Borough } from '../../types'
import { KINDS, type Collectible } from '../../data/collectibles'
import { useCollectibles } from '../../store/useCollectibles'

interface Props {
  items: Collectible[]
  selectedId: string | null
  onSelect: (id: string) => void
}

const BOROUGH_ORDER: Borough[] = ['Broker', 'Dukes', 'Bohan', 'Algonquin', 'Alderney']

/** Every pin on show, grouped by borough and neighbourhood, as compact numbered chips. */
export function CollectibleList({ items, selectedId, onSelect }: Props) {
  const done = useCollectibles((s) => s.done)

  const groups = useMemo(() => {
    const byBorough = new Map<Borough, Map<string, Collectible[]>>()
    for (const c of items) {
      const areas = byBorough.get(c.borough) ?? new Map<string, Collectible[]>()
      byBorough.set(c.borough, areas)
      areas.set(c.area, [...(areas.get(c.area) ?? []), c])
    }
    return BOROUGH_ORDER.filter((b) => byBorough.has(b)).map((borough) => ({
      borough,
      areas: [...byBorough.get(borough)!.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([area, list]) => ({
          area,
          // Jumps before pigeons, each in number order.
          items: list.sort((a, b) => (a.kind === b.kind ? a.n - b.n : a.kind === 'jump' ? -1 : 1)),
        })),
    }))
  }, [items])

  return (
    <div className="cl-list">
      {groups.map(({ borough, areas }) => {
        const all = areas.flatMap((a) => a.items)
        const finished = all.filter((c) => done[c.id]).length
        return (
          <section key={borough} className="cl-list__borough">
            <h3>
              {borough}
              <span className={`card__tally${finished === all.length ? ' done' : ''}`}>
                {finished}/{all.length}
              </span>
            </h3>
            {areas.map(({ area, items: list }) => (
              <div key={area} className="cl-list__area">
                <span className="cl-list__name">{area}</span>
                <span className="cl-list__items">
                  {list.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`cl-chip cl-chip--${c.kind}${done[c.id] ? ' is-done' : ''}${
                        c.id === selectedId ? ' is-selected' : ''
                      }`}
                      title={`${KINDS[c.kind].label} ${c.n}${done[c.id] ? ' (done)' : ''}`}
                      onClick={() => onSelect(c.id)}
                    >
                      {c.n}
                    </button>
                  ))}
                </span>
              </div>
            ))}
          </section>
        )
      })}
    </div>
  )
}
