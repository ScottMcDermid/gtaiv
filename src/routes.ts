import { useSyncExternalStore } from 'react'

/** Every tracker in the app. Add an entry here to put a new page in the nav. */
export const TRACKERS = [
  { id: 'vehicles', label: 'Unique Vehicles', title: 'GTA IV Unique Vehicles' },
  { id: 'characters', label: 'Random Characters', title: 'GTA IV Random Characters' },
  { id: 'map', label: 'Pigeons & Jumps', title: 'GTA IV Pigeons & Stunt Jumps' },
] as const

export type TrackerId = (typeof TRACKERS)[number]['id']

const DEFAULT: TrackerId = 'vehicles'

/**
 * Hash routing (`#/characters`) keeps the static nginx/Vite setup untouched
 * and lets the trackers be bookmarked.
 */
function read(): TrackerId {
  const id = window.location.hash.replace(/^#\/?/, '')
  return TRACKERS.some((t) => t.id === id) ? (id as TrackerId) : DEFAULT
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

export const useRoute = (): TrackerId => useSyncExternalStore(subscribe, read, () => DEFAULT)

export const hrefFor = (id: TrackerId) => `#/${id}`
