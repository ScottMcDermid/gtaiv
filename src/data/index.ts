import type { Vehicle } from '../types'
import { VEHICLES as COLLECTIBLES } from './vehicles'
import { STREET_VARIANTS } from './streetVariants'

/**
 * The collectible dataset (Lethal Vaccine / LancetJades) merged with the
 * freely-respawning gang and street variants from Grand Theft Wiki.
 */
function merge(): Vehicle[] {
  const byId = new Map(COLLECTIBLES.map((v) => [v.id, { ...v, variants: [...v.variants] }]))

  for (const group of STREET_VARIANTS) {
    const existing = byId.get(group.vehicleId)
    if (existing) {
      existing.variants.push(...group.variants)
      continue
    }
    if (!group.name || !group.className || !group.category) {
      throw new Error(
        `Street group "${group.vehicleId}" introduces a new model and must set name, className and category`,
      )
    }
    byId.set(group.vehicleId, {
      id: group.vehicleId,
      name: group.name,
      className: group.className,
      category: group.category,
      variants: [...group.variants],
    })
  }

  return [...byId.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export const VEHICLES = merge()

export const TOTAL_VARIANTS = VEHICLES.reduce((n, v) => n + v.variants.length, 0)

/** Variants you can realistically lose — the ones worth prioritising. */
export const MISSABLE_COUNT = VEHICLES.reduce(
  (n, v) => n + v.variants.filter((x) => x.missable).length,
  0,
)

