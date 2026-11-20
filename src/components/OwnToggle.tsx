import type { OwnState } from '../types'
import { useGarage, useVariantState } from '../store/useGarage'

const OPTIONS: { value: OwnState; label: string }[] = [
  { value: 'none', label: 'Not owned' },
  { value: 'want', label: 'Want' },
  { value: 'owned', label: 'Owned' },
]

interface Props {
  variantId: string
  /** True when the garage is full and this variant is not already parked. */
  blocked: boolean
}

export function OwnToggle({ variantId, blocked }: Props) {
  const state = useVariantState(variantId)
  const setState = useGarage((s) => s.setState)

  return (
    <div className="own" role="group" aria-label="Ownership">
      {OPTIONS.map(({ value, label }) => {
        const disabled = value === 'owned' && blocked && state !== 'owned'
        return (
          <button
            key={value}
            type="button"
            className={`v-${value}`}
            aria-pressed={state === value}
            disabled={disabled}
            title={disabled ? 'All 10 parking spaces are taken' : undefined}
            onClick={() => setState(variantId, value)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
