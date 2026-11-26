import { TRACKERS, hrefFor, useRoute } from '../routes'

/** Small switcher between the GTA IV trackers, sitting above each page title. */
export function TrackerNav() {
  const route = useRoute()

  return (
    <nav className="trackers" aria-label="Trackers">
      {TRACKERS.map(({ id, label }) => (
        <a
          key={id}
          href={hrefFor(id)}
          className="trackers__link"
          aria-current={route === id ? 'page' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
