import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'
import type { OwnState } from '../types'

/** 5 safehouses x 2 parking spaces. */
export const GARAGE_CAPACITY = 10

const ORDER: OwnState[] = ['none', 'want', 'owned']

interface GarageState {
  states: Record<string, OwnState>
  setState: (variantId: string, next: OwnState) => void
  cycle: (variantId: string) => void
  reset: () => void
}

export const useGarage = create<GarageState>()(
  persist(
    (set) => ({
      states: {},
      setState: (variantId, next) =>
        set((s) => {
          const states = { ...s.states }
          if (next === 'none') delete states[variantId]
          else states[variantId] = next
          return { states }
        }),
      cycle: (variantId) =>
        set((s) => {
          const current = s.states[variantId] ?? 'none'
          const next = ORDER[(ORDER.indexOf(current) + 1) % ORDER.length]
          const states = { ...s.states }
          if (next === 'none') delete states[variantId]
          else states[variantId] = next
          return { states }
        }),
      reset: () => set({ states: {} }),
    }),
    { name: 'gtaiv-garage' },
  ),
)

export const useVariantState = (variantId: string): OwnState =>
  useGarage((s) => s.states[variantId] ?? 'none')

export const useCounts = () =>
  useGarage(
    useShallow((s) => {
      let owned = 0
      let want = 0
      for (const value of Object.values(s.states)) {
        if (value === 'owned') owned++
        else if (value === 'want') want++
      }
      return { owned, want }
    }),
  )
