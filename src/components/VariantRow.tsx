import type { Variant } from '../types'
import { useVariantState } from '../store/useGarage'
import { Swatch } from './Swatch'
import { OwnToggle } from './OwnToggle'

const LUSTER_LABEL = {
  yes: 'Luster',
  no: 'No luster',
  unknown: '—',
} as const

const TAG_TITLE: Record<string, string> = {
  Unique: 'The model itself only exists in missions',
  EC: "Exclusive colour — Pay 'n' Spray and traffic cannot reproduce it",
  EC2: 'Exclusive invisible secondary colour — only visible in a save editor',
  Lustered: 'Random pearlescent overlay, re-rolled every time the mission starts',
  Hybrid: 'Gang or tuner parts mixed with civilian parts',
  NE: 'No Extra — a normally present part is missing',
  UJ: 'Unjackable — the vehicle has to be pushed, not driven',
}

const difficultyClass = (d: string) => `d-${d.toLowerCase().replace(/[\s–]+/g, '-')}`

interface Props {
  variant: Variant
  garageFull: boolean
}

export function VariantRow({ variant, garageFull }: Props) {
  const state = useVariantState(variant.id)

  return (
    <div className={`row${state === 'owned' ? ' is-owned' : state === 'want' ? ' is-want' : ''}`}>
      <div className="row__top">
        <Swatch colors={variant.swatch} title={variant.color} />
        <span className="color">{variant.color}</span>
        <div className="tags">
          <span className={`tag tag--luster-${variant.luster}`}>
            {LUSTER_LABEL[variant.luster]}
          </span>
          {variant.missable && <span className="tag tag--missable">Missable</span>}
          <span className={`tag tag--difficulty ${difficultyClass(variant.difficulty)}`}>
            {variant.difficulty}
          </span>
        </div>
      </div>

      <div className="row__body">
        {variant.image && (
          <img
            className="shot"
            src={`${import.meta.env.BASE_URL}vehicles/${variant.image}`}
            alt={`${variant.color} — ${variant.quest}`}
            loading="lazy"
            decoding="async"
            width={450}
            height={253}
          />
        )}

        <div className="quest">
          {variant.quest}
          <span className="quest__source">{variant.source}</span>
        </div>

        {variant.location && <div className="where">{variant.location}</div>}

        {(variant.tags.length > 0 || variant.requiresFailure || variant.unverified) && (
          <div className="chips">
            {variant.tags.map((tag) => (
              <span className="minitag" key={tag} title={TAG_TITLE[tag]}>
                {tag}
              </span>
            ))}
            {variant.requiresFailure && (
              <span
                className="minitag minitag--fail"
                title="The only way to keep it is to deliberately fail the mission"
              >
                Needs mission fail
              </span>
            )}
            {variant.unverified && (
              <span
                className="minitag minitag--unverified"
                title="A guide video exists but no written entry confirms the details"
              >
                Unverified
              </span>
            )}
          </div>
        )}

        {variant.missableHow && <div className="missable">{variant.missableHow}</div>}

        {variant.notes?.map((note) => (
          <div className="note" key={note}>
            {note}
          </div>
        ))}

        {variant.videos && variant.videos.length > 0 && (
          <div className="guide">
            {variant.videos.map((video, i) => (
              <span key={video.url}>
                {i > 0 && <span className="guide__sep"> · </span>}
                <a href={video.url} target="_blank" rel="noreferrer">
                  ▶ {video.label}
                </a>
              </span>
            ))}
          </div>
        )}

        <OwnToggle variantId={variant.id} blocked={garageFull} />
      </div>
    </div>
  )
}
