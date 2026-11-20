import { GARAGE_CAPACITY, useCounts } from '../store/useGarage'
import { SAFEHOUSES, type Safehouse } from '../data/safehouses'

export function GarageMeter() {
  const { owned, want } = useCounts()
  const over = owned > GARAGE_CAPACITY

  // Fill the safehouses in order so the meter reads left to right.
  const houses = SAFEHOUSES.reduce<{ used: number; list: (Safehouse & { used: number })[] }>(
    (acc, house) => {
      const used = Math.min(house.spaces, Math.max(owned - acc.used, 0))
      acc.list.push({ ...house, used })
      acc.used += used
      return acc
    },
    { used: 0, list: [] },
  ).list
  const overflow = Math.max(owned - GARAGE_CAPACITY, 0)

  return (
    <div className="garage">
      <div className="garage__slots">
        {houses.map((house) => (
          <div
            key={house.id}
            className="garage__house"
            title={`${house.name} — ${house.used}/${house.spaces} used. ${house.unlock}`}
          >
            {Array.from({ length: house.spaces }, (_, i) => (
              <span key={i} className={`slot${i < house.used ? ' filled' : ''}`} />
            ))}
          </div>
        ))}
        {overflow > 0 && (
          <div className="garage__house" title="More cars than parking spaces">
            {Array.from({ length: overflow }, (_, i) => (
              <span key={i} className="slot over" />
            ))}
          </div>
        )}
      </div>

      <div className={`garage__count${over ? ' over' : ''}`}>
        <b>
          {owned}/{GARAGE_CAPACITY}
        </b>{' '}
        parked
        {want > 0 && ` · ${want} wanted`}
      </div>

      {over && (
        <span className="garage__warn">
          {overflow} over capacity — you can only keep {GARAGE_CAPACITY}
        </span>
      )}
    </div>
  )
}
