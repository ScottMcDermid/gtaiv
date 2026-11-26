import { useMemo, useState } from 'react'
import { TOTAL_VARIANTS, VEHICLES } from '../data'
import { GARAGE_CAPACITY, useCounts, useGarage } from '../store/useGarage'
import type { Category, OwnState } from '../types'
import { GarageMeter } from '../components/GarageMeter'
import { VehicleCard } from '../components/VehicleCard'
import { ParkingRules } from '../components/ParkingRules'
import { TrackerNav } from '../components/TrackerNav'

type StatusFilter = 'all' | OwnState
type CategoryFilter = 'all' | Category

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'none', label: 'Not owned' },
  { value: 'want', label: 'Want' },
  { value: 'owned', label: 'Owned' },
]

const CATEGORY_FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'Everything' },
  { value: 'Car', label: 'Cars' },
  { value: 'Bike', label: 'Bikes' },
  { value: 'Aircraft', label: 'Aircraft' },
  { value: 'Other', label: 'Other' },
]

export function VehiclesPage() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const [missableOnly, setMissableOnly] = useState(false)
  const [lusterOnly, setLusterOnly] = useState(false)
  const [withVideo, setWithVideo] = useState(false)

  const states = useGarage((s) => s.states)
  const reset = useGarage((s) => s.reset)
  const { owned } = useCounts()
  const garageFull = owned >= GARAGE_CAPACITY

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return VEHICLES.map((vehicle) => {
      if (category !== 'all' && vehicle.category !== category) {
        return { vehicle, variants: [] }
      }
      const variants = vehicle.variants.filter((variant) => {
        if (missableOnly && !variant.missable) return false
        if (lusterOnly && variant.luster !== 'yes') return false
        if (withVideo && !variant.videos?.length) return false
        if (status !== 'all' && (states[variant.id] ?? 'none') !== status) return false
        if (!needle) return true
        return [
          vehicle.name,
          vehicle.className,
          variant.color,
          variant.quest,
          variant.source,
          variant.location ?? '',
          variant.tags.join(' '),
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      })
      return { vehicle, variants }
    }).filter((group) => group.variants.length > 0)
  }, [query, status, category, missableOnly, lusterOnly, withVideo, states])

  const shown = groups.reduce((n, g) => n + g.variants.length, 0)

  return (
    <>
      <header className="topbar">
        <TrackerNav />
        <div className="topbar__main">
          <h1>
            GTA <span>IV</span> Unique Vehicles
          </h1>
          <span className="subtitle">
            {shown === TOTAL_VARIANTS ? TOTAL_VARIANTS : `${shown} of ${TOTAL_VARIANTS}`} variants
            across {VEHICLES.length} models
          </span>
          <GarageMeter />
        </div>

        <div className="toolbar">
          <input
            className="search"
            type="search"
            placeholder="Search model, colour, mission or location…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
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
          <button
            type="button"
            className={`chip${missableOnly ? ' on' : ''}`}
            onClick={() => setMissableOnly((v) => !v)}
          >
            Missable
          </button>
          <button
            type="button"
            className={`chip${lusterOnly ? ' on' : ''}`}
            onClick={() => setLusterOnly((v) => !v)}
          >
            Luster
          </button>
          <button
            type="button"
            className={`chip${withVideo ? ' on' : ''}`}
            onClick={() => setWithVideo((v) => !v)}
          >
            Has video
          </button>
          <button
            type="button"
            className="chip danger toolbar__spacer"
            onClick={() => {
              if (confirm('Clear every want/owned mark?')) reset()
            }}
          >
            Reset
          </button>
        </div>

        <div className="toolbar">
          {CATEGORY_FILTERS.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`chip chip--sm${category === value ? ' on' : ''}`}
              onClick={() => setCategory(value)}
            >
              {label}
            </button>
          ))}
          <ParkingRules />
        </div>
      </header>

      {groups.length === 0 ? (
        <p className="empty">Nothing matches those filters.</p>
      ) : (
        <div className="grid">
          {groups.map(({ vehicle, variants }) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              variants={variants}
              garageFull={garageFull}
            />
          ))}
        </div>
      )}

      <footer className="credits">
        Vehicle data from Lethal Vaccine&apos;s GTA IV Special Vehicle Guide and LancetJades&apos;
        Special Vehicle FAQ. Photographs from{' '}
        <a href="https://www.grandtheftwiki.com/Special_Vehicles_in_GTA_IV" target="_blank" rel="noreferrer">
          Grand Theft Wiki
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
