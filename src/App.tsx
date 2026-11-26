import { useEffect } from 'react'
import { TRACKERS, useRoute } from './routes'
import { VehiclesPage } from './pages/VehiclesPage'
import { CharactersPage } from './pages/CharactersPage'
import { CollectiblesPage } from './pages/CollectiblesPage'

export default function App() {
  const route = useRoute()

  useEffect(() => {
    document.title = TRACKERS.find((t) => t.id === route)?.title ?? 'GTA IV Trackers'
    window.scrollTo(0, 0)
  }, [route])

  // Publish the sticky header's height so content pinned below it (the map) never slides underneath.
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.topbar')
    if (!header) return
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty('--topbar-h', `${header.offsetHeight}px`)
    })
    observer.observe(header)
    return () => observer.disconnect()
  }, [route])

  const page =
    route === 'characters' ? <CharactersPage /> : route === 'map' ? <CollectiblesPage /> : <VehiclesPage />

  return <div className="app">{page}</div>
}
