import type { Variant, Vehicle } from '../types'
import { useGarage } from '../store/useGarage'
import { VariantRow } from './VariantRow'

interface Props {
  vehicle: Vehicle
  variants: Variant[]
  garageFull: boolean
}

export function VehicleCard({ vehicle, variants, garageFull }: Props) {
  const ownedHere = useGarage(
    (s) => variants.filter((v) => s.states[v.id] === 'owned').length,
  )

  return (
    <section className="card">
      <div className="card__head">
        <h2>{vehicle.name}</h2>
        <span className="card__class">{vehicle.className}</span>
        <span className={`card__tally${ownedHere > 0 ? ' done' : ''}`}>
          {ownedHere}/{variants.length}
        </span>
      </div>
      {variants.map((variant) => (
        <VariantRow key={variant.id} variant={variant} garageFull={garageFull} />
      ))}
    </section>
  )
}
