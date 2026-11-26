import { KINDS, imagesFor, type Collectible } from '../../data/collectibles'

interface Props {
  item: Collectible | null
  done: boolean
  onToggle: (done: boolean) => void
  /** Closest unfinished pin on show, if any. */
  next: Collectible | null
  /** Mark this one done and move to `next`. */
  onNext: () => void
  /** Move to `next` without marking this one. */
  onSkip: () => void
}

/** Screenshots, notes and the done toggle for whatever pin is picked. */
export function CollectibleDetail({ item, done, onToggle, next, onNext, onSkip }: Props) {
  if (!item) {
    return (
      <div className="card cl-detail cl-detail--empty">
        Pick a pin on the map or a number below to see where it is. <b>Done &amp; next</b> then
        walks you to the closest one you still need.
      </div>
    )
  }

  const images = imagesFor(item)

  return (
    <div className={`card cl-detail cl-detail--${item.kind}${done ? ' is-done' : ''}`}>
      <div className="cl-detail__head">
        <h2>
          {KINDS[item.kind].label} <span>#{item.n}</span>
        </h2>
        <span className="cl-detail__where">
          {item.area}, {item.borough}
        </span>
        {item.direction && <span className="tag tag--time">Heading {item.direction.toLowerCase()}</span>}
      </div>

      <div className={`cl-detail__media${images.length > 1 ? ' cl-detail__media--two' : ''}`}>
        {images.map((img) => (
          <a key={img.src} href={img.src} target="_blank" rel="noreferrer" title="Open full size">
            <img className="enc__shot" src={img.src} alt={img.alt} width={640} height={360} />
          </a>
        ))}
      </div>

      {item.approach && (
        <dl className="cl-detail__notes">
          <dt>Ramp</dt>
          <dd>{item.approach}</dd>
          <dt>Landing</dt>
          <dd>{item.landing}</dd>
        </dl>
      )}

      <div className="cl-detail__foot">
        <div className="own" role="group" aria-label="Progress">
          <button type="button" className="v-todo" aria-pressed={!done} onClick={() => onToggle(false)}>
            To do
          </button>
          <button type="button" className="v-done" aria-pressed={done} onClick={() => onToggle(true)}>
            Done
          </button>
        </div>
        {next && (
          <>
            <button type="button" className="chip on cl-detail__next" onClick={onNext}>
              {done ? 'Next' : 'Done & next'} → #{next.n}
            </button>
            {!done && (
              <button
                type="button"
                className="chip"
                onClick={onSkip}
                title="Go to the closest one without marking this one"
              >
                Skip
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
