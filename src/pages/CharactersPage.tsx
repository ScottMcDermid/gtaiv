import { useMemo, useRef, useState } from 'react'
import { CHARACTERS, ENCOUNTERS, toMapPoint } from '../data/characters'
import { useEncounters } from '../store/useEncounters'
import type { Borough, EncounterState } from '../types'
import { TrackerNav } from '../components/TrackerNav'
import { EncounterMeter } from '../components/characters/EncounterMeter'
import { CharacterCard } from '../components/characters/CharacterCard'
import { LibertyMap, type MapPin } from '../components/characters/LibertyMap'

type StatusFilter = 'all' | EncounterState
type BoroughFilter = 'all' | Borough

const STATUS_FILTERS: { value: StatusFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'todo', label: 'To do' },
  { value: 'done', label: 'Done' },
  { value: 'missed', label: 'Missed' },
]

/** Only boroughs that actually have encounters. */
const BOROUGHS = [...new Set(ENCOUNTERS.map(({ encounter }) => encounter.borough))]

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')

export function CharactersPage() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [borough, setBorough] = useState<BoroughFilter>('all')
  const [missableOnly, setMissableOnly] = useState(false)
  const [timedOnly, setTimedOnly] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const mapRef = useRef<HTMLElement>(null)

  const states = useEncounters((s) => s.states)
  const reset = useEncounters((s) => s.reset)

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return CHARACTERS.map((character) => ({
      character,
      encounters: character.encounters.filter((encounter) => {
        if (borough !== 'all' && encounter.borough !== borough) return false
        if (missableOnly && !character.missable && !encounter.missable && !encounter.locksOut)
          return false
        if (timedOnly && encounter.time === 'Anytime') return false
        if (status !== 'all' && (states[encounter.id] ?? 'todo') !== status) return false
        if (!needle) return true
        return [
          character.name,
          encounter.label,
          encounter.location,
          encounter.area,
          encounter.borough,
          encounter.requires,
          encounter.summary,
        ]
          .join(' ')
          .toLowerCase()
          .includes(needle)
      }),
    })).filter((g) => g.encounters.length > 0)
  }, [query, status, borough, missableOnly, timedOnly, states])

  const visible = useMemo(
    () => new Set(groups.flatMap((g) => g.encounters.map((e) => e.id))),
    [groups],
  )
  const shown = visible.size

  const pins = useMemo<MapPin[]>(
    () =>
      ENCOUNTERS.flatMap(({ character, encounter }) => {
        if (!encounter.map) return []
        const { x, y } = toMapPoint(encounter.map)
        const index = character.encounters.indexOf(encounter)
        return [
          {
            id: encounter.id,
            x,
            y,
            short: initials(character.name) + (character.encounters.length > 1 ? index + 1 : ''),
            title: `${character.name} — ${encounter.label}\n${encounter.location}, ${encounter.area}`,
            state: states[encounter.id] ?? 'todo',
            optional: Boolean(character.missable || encounter.missable),
            dimmed: !visible.has(encounter.id),
          },
        ]
      }),
    [states, visible],
  )

  const selectFromMap = (id: string) => {
    setSelectedId(id)
    document.getElementById(`enc-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const selectFromList = (id: string) => {
    setSelectedId(id)
    // On narrow screens the map is above the list rather than pinned beside it.
    const map = mapRef.current
    if (map && map.getBoundingClientRect().bottom < 0) {
      map.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <header className="topbar">
        <TrackerNav />
        <div className="topbar__main">
          <h1>
            GTA <span>IV</span> Random Characters
          </h1>
          <span className="subtitle">
            {shown === ENCOUNTERS.length ? ENCOUNTERS.length : `${shown} of ${ENCOUNTERS.length}`}{' '}
            encounters with {CHARACTERS.length} characters
          </span>
          <EncounterMeter />
        </div>

        <div className="toolbar">
          <input
            className="search"
            type="search"
            placeholder="Search name, place or mission…"
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
            title="Encounters that a story choice can lock out, or that lock out later ones"
          >
            Missable
          </button>
          <button
            type="button"
            className={`chip${timedOnly ? ' on' : ''}`}
            onClick={() => setTimedOnly((v) => !v)}
            title="Only appear at certain times of day"
          >
            Time-limited
          </button>
          <button
            type="button"
            className="chip danger toolbar__spacer"
            onClick={() => {
              if (confirm('Clear every encounter mark?')) reset()
            }}
          >
            Reset
          </button>
        </div>

        <div className="toolbar">
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
        </div>
      </header>

      <div className="rc-layout">
        <aside className="rc-layout__map" ref={mapRef}>
          <LibertyMap pins={pins} selectedId={selectedId} onSelect={selectFromMap} />
          <p className="lcmap__hint">
            Characters only show up on the radar (a blue person icon) when you are close. After
            finishing one encounter, wait a few in-game days for the next — saving at a safehouse
            skips time.
          </p>
        </aside>

        <div className="rc-layout__list">
          {groups.length === 0 ? (
            <p className="empty">Nothing matches those filters.</p>
          ) : (
            <div className="grid grid--rc">
              {groups.map(({ character, encounters }) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  encounters={encounters}
                  selectedId={selectedId}
                  onSelect={selectFromList}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="credits">
        Encounter details, screenshots and map positions from{' '}
        <a href="https://gta.fandom.com/wiki/Random_Characters_in_GTA_IV" target="_blank" rel="noreferrer">
          GTA Wiki
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
