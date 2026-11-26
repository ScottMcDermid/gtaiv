import { ACHIEVEMENT_IDS, CHARACTERS, REQUIRED_IDS } from '../../data/characters'
import { useEncounters } from '../../store/useEncounters'

/** One pip per encounter, grouped by character — mirrors the garage meter. */
export function EncounterMeter() {
  const states = useEncounters((s) => s.states)

  const count = (ids: Set<string>) => [...ids].filter((id) => states[id] === 'done').length
  const required = count(REQUIRED_IDS)
  const achievement = count(ACHIEVEMENT_IDS)
  const unlocked = achievement === ACHIEVEMENT_IDS.size

  return (
    <div className="garage garage--rc">
      <div className="garage__slots">
        {CHARACTERS.map((character) => (
          <div key={character.id} className="garage__house" title={character.name}>
            {character.encounters.map((encounter) => {
              const state = states[encounter.id] ?? 'todo'
              return (
                <a
                  key={encounter.id}
                  href={`#enc-${encounter.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document
                      .getElementById(`enc-${encounter.id}`)
                      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                  }}
                  className={`slot slot--pip${state === 'done' ? ' filled' : ''}${state === 'missed' ? ' missed' : ''}${
                    character.missable || encounter.missable ? ' optional' : ''
                  }`}
                  title={`${character.name} — ${encounter.label}`}
                  aria-label={`${character.name} — ${encounter.label}: ${state}`}
                />
              )
            })}
          </div>
        ))}
      </div>

      <div className="garage__count">
        <b>
          {required}/{REQUIRED_IDS.size}
        </b>{' '}
        for 100%
        <span
          className={`achv${unlocked ? ' achv--done' : ''}`}
          title="No More Strangers — complete the first encounter of every non-missable character"
        >
          {unlocked ? '★' : '☆'} No More Strangers {achievement}/{ACHIEVEMENT_IDS.size}
        </span>
      </div>
    </div>
  )
}
