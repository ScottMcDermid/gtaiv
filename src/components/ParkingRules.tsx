import { useState } from 'react'
import { PARKING_RULES, SAFEHOUSES } from '../data/safehouses'
import { GARAGE_CAPACITY } from '../store/useGarage'

export function ParkingRules() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={`chip chip--sm toolbar__spacer${open ? ' on' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Parking rules
      </button>

      {open && (
        <div className="rules">
          <h3>
            {SAFEHOUSES.length} spots × 2 vehicles = {GARAGE_CAPACITY} slots
          </h3>
          <p className="rules__lead">
            Every spot works from the very start of the game, before the safehouse itself is
            unlocked, and keeps working after a safehouse is lost.
          </p>

          <ol className="rules__houses">
            {SAFEHOUSES.map((house) => (
              <li key={house.id}>
                <b>{house.name}</b>
                <span className="rules__borough">{house.borough}</span>
                <div>{house.unlock}</div>
                {house.warning && <div className="rules__warn">{house.warning}</div>}
              </li>
            ))}
          </ol>

          <h4>Keeping what you park</h4>
          <ul className="rules__list">
            {PARKING_RULES.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
