import type { Encounter, EncounterState, RandomCharacter } from '../../types'
import { toMapPoint } from '../../data/characters'
import { useEncounterState, useEncounters } from '../../store/useEncounters'
import { MiniMap } from './MiniMap'

const imageFor = (encounter: Encounter, kind: 'StartingPoint' | 'Thumbnail') =>
  `/characters/${encounter.image}-${kind}.webp`

interface Props {
  character: RandomCharacter
  encounter: Encounter
  selected: boolean
  onSelect: (id: string) => void
}

export function EncounterRow({ character, encounter, selected, onSelect }: Props) {
  const state = useEncounterState(encounter.id)
  const setState = useEncounters((s) => s.setState)
  const missable = Boolean(character.missable || encounter.missable)
  const point = encounter.map && toMapPoint(encounter.map)

  const options: { value: EncounterState; label: string }[] = [
    { value: 'todo', label: 'To do' },
    { value: 'done', label: 'Done' },
    ...(missable ? [{ value: 'missed' as const, label: 'Missed' }] : []),
  ]

  return (
    <div
      id={`enc-${encounter.id}`}
      className={`enc is-${state}${selected ? ' is-selected' : ''}`}
    >
      <div className="row__top">
        <span className="enc__label">{encounter.label}</span>
        <div className="tags">
          {encounter.time !== 'Anytime' && (
            <span className="tag tag--time" title="Only appears at this time of day">
              ◷ {encounter.time}
            </span>
          )}
          {encounter.reward && (
            <span className={`tag ${encounter.reward.startsWith('−') ? 'tag--cost' : 'tag--reward'}`}>
              {encounter.reward}
            </span>
          )}
          {encounter.missable && <span className="tag tag--missable">Missable</span>}
        </div>
      </div>

      <div className="enc__media">
        <a href={imageFor(encounter, 'Thumbnail')} target="_blank" rel="noreferrer" title="Open the cutscene still">
          <img
            className="enc__shot"
            src={imageFor(encounter, 'StartingPoint')}
            alt={`${character.name} at the start point`}
            loading="lazy"
            width={640}
            height={360}
          />
        </a>
        {point ? (
          <button
            type="button"
            className="enc__mapbtn"
            onClick={() => onSelect(encounter.id)}
            title="Show on the city map"
          >
            <MiniMap x={point.x} y={point.y} label={encounter.location} />
          </button>
        ) : (
          <div className="minimap minimap--none">
            <span>☎ Phone call</span>
          </div>
        )}
      </div>

      <div className="enc__where">
        <b>{encounter.location}</b>
        <span className="enc__area">
          {encounter.area}, {encounter.borough}
        </span>
      </div>
      {encounter.trigger && <div className="where">{encounter.trigger}</div>}
      <div className="where">Unlocked by {encounter.requires}</div>

      <p className="enc__summary">{encounter.summary}</p>

      {encounter.tips?.map((tip) => (
        <div key={tip} className="note">
          {tip}
        </div>
      ))}
      {encounter.locksOut && <div className="missable">{encounter.locksOut}</div>}
      {encounter.missable && <div className="missable">{encounter.missable}</div>}

      <div className="enc__foot">
        <div className="own" role="group" aria-label="Progress">
          {options.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              className={`v-${value}`}
              aria-pressed={state === value}
              onClick={() => setState(encounter.id, value)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="guide">
          {encounter.video && (
            <>
              <a href={`https://www.youtube.com/watch?v=${encounter.video}`} target="_blank" rel="noreferrer">
                Video
              </a>
              <span className="guide__sep">·</span>
            </>
          )}
          <a href={encounter.wiki} target="_blank" rel="noreferrer">
            Wiki
          </a>
        </div>
      </div>
    </div>
  )
}
