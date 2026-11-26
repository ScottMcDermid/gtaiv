import type { Encounter, RandomCharacter } from '../../types'
import { useEncounters } from '../../store/useEncounters'
import { EncounterRow } from './EncounterRow'

interface Props {
  character: RandomCharacter
  encounters: Encounter[]
  selectedId: string | null
  onSelect: (id: string) => void
}

export function CharacterCard({ character, encounters, selectedId, onSelect }: Props) {
  const done = useEncounters(
    (s) => character.encounters.filter((e) => s.states[e.id] === 'done').length,
  )
  const total = character.encounters.length
  const portrait = `/characters/${character.encounters[0].image}-Thumbnail.webp`

  return (
    <section className="card rc-card">
      <div className="rc-card__banner" style={{ backgroundImage: `url(${portrait})` }}>
        <div className="rc-card__title">
          <h2>{character.name}</h2>
          <span className={`card__tally${done === total ? ' done' : ''}`}>
            {done}/{total}
          </span>
        </div>
        <p className="rc-card__blurb">{character.blurb}</p>
      </div>
      {character.missable && <div className="rc-card__missable">{character.missable}</div>}
      {encounters.map((encounter) => (
        <EncounterRow
          key={encounter.id}
          character={character}
          encounter={encounter}
          selected={encounter.id === selectedId}
          onSelect={onSelect}
        />
      ))}
    </section>
  )
}
