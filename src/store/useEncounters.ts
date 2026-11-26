import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { EncounterState } from '../types'

interface EncounterStore {
  states: Record<string, EncounterState>
  setState: (encounterId: string, next: EncounterState) => void
  reset: () => void
}

export const useEncounters = create<EncounterStore>()(
  persist(
    (set) => ({
      states: {},
      setState: (encounterId, next) =>
        set((s) => {
          const states = { ...s.states }
          if (next === 'todo') delete states[encounterId]
          else states[encounterId] = next
          return { states }
        }),
      reset: () => set({ states: {} }),
    }),
    { name: 'gtaiv-encounters' },
  ),
)

export const useEncounterState = (encounterId: string): EncounterState =>
  useEncounters((s) => s.states[encounterId] ?? 'todo')
