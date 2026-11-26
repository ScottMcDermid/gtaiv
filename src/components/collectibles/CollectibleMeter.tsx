import { COLLECTIBLES, KINDS, type CollectibleKind } from '../../data/collectibles'
import { useCollectibles } from '../../store/useCollectibles'

/** A progress bar per collectible type, with its achievement once complete. */
export function CollectibleMeter() {
  const done = useCollectibles((s) => s.done)

  return (
    <div className="cl-meter">
      {(Object.keys(KINDS) as CollectibleKind[]).map((kind) => {
        const { plural, total, achievement, reward } = KINDS[kind]
        const count = COLLECTIBLES.filter((c) => c.kind === kind && done[c.id]).length
        const complete = count === total
        return (
          <div key={kind} className={`cl-meter__row cl-meter__row--${kind}`} title={reward}>
            <span className="cl-meter__label">{plural}</span>
            <span className="cl-meter__bar">
              <span style={{ width: `${(count / total) * 100}%` }} />
            </span>
            <b className="cl-meter__count">
              {count}/{total}
            </b>
            <span className={`achv${complete ? ' achv--done' : ''}`}>
              {complete ? '★' : '☆'} {achievement}
            </span>
          </div>
        )
      })}
    </div>
  )
}
