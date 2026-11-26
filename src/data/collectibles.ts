import type { Borough } from '../types'
import { toMapPoint } from './characters'
import { PIGEONS } from './pigeons'
import { STUNT_JUMPS } from './stuntJumps'

export type CollectibleKind = 'pigeon' | 'jump'

/** One pigeon or stunt jump, flattened for the map page. */
export interface Collectible {
  id: string
  kind: CollectibleKind
  n: number
  area: string
  borough: Borough
  /** 0–1 from the top-left of the map image. */
  x: number
  y: number
  /** Stunt jumps only. */
  direction?: string
  approach?: string
  landing?: string
}

export const KINDS: Record<
  CollectibleKind,
  { label: string; plural: string; total: number; achievement: string; reward: string }
> = {
  pigeon: {
    label: 'Pigeon',
    plural: 'Pigeons',
    total: PIGEONS.length,
    achievement: 'Endangered Species',
    reward: 'Annihilator on the MeTV Building helipad, Star Junction · +2.5% completion',
  },
  jump: {
    label: 'Stunt Jump',
    plural: 'Stunt Jumps',
    total: STUNT_JUMPS.length,
    achievement: 'Dare Devil',
    reward: 'Required for 100% · +2.5% completion',
  },
}

export const COLLECTIBLES: Collectible[] = [
  ...PIGEONS.map((p) => ({ ...p, kind: 'pigeon' as const, ...toMapPoint(p.map) })),
  ...STUNT_JUMPS.map((j) => ({ ...j, kind: 'jump' as const, ...toMapPoint(j.map) })),
]

const HEADINGS: Record<string, number> = {
  North: 0,
  Northeast: 45,
  East: 90,
  Southeast: 135,
  South: 180,
  Southwest: 225,
  West: 270,
  Northwest: 315,
}

export const headingOf = (direction?: string) =>
  direction === undefined ? undefined : HEADINGS[direction]

export const imagesFor = (c: Collectible) =>
  c.kind === 'pigeon'
    ? [{ src: `/pigeons/pigeon-${c.n}.webp`, alt: `Pigeon ${c.n}` }]
    : [
        { src: `/jumps/jump-${c.n}-ramp.webp`, alt: `Stunt jump ${c.n}: the ramp` },
        { src: `/jumps/jump-${c.n}-air.webp`, alt: `Stunt jump ${c.n}: mid-air` },
      ]
