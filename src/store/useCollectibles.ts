import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CollectibleStore {
  /** IDs of pigeons shot and stunt jumps landed. */
  done: Record<string, true>
  setDone: (id: string, done: boolean) => void
  /** Clear every mark whose ID starts with the prefix (`pigeon-`, `jump-`), or all of them. */
  reset: (prefix?: string) => void
}

export const useCollectibles = create<CollectibleStore>()(
  persist(
    (set) => ({
      done: {},
      setDone: (id, isDone) =>
        set((s) => {
          const done = { ...s.done }
          if (isDone) done[id] = true
          else delete done[id]
          return { done }
        }),
      reset: (prefix) =>
        set((s) => ({
          done: prefix
            ? Object.fromEntries(Object.entries(s.done).filter(([id]) => !id.startsWith(prefix)))
            : {},
        })),
    }),
    { name: 'gtaiv-collectibles' },
  ),
)
