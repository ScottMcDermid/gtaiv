export interface Safehouse {
  id: string
  name: string
  borough: string
  spaces: number
  unlock: string
  /** Quirk that can eat a parked car — worth knowing before you commit a slot. */
  warning?: string
}

/**
 * The five GTA IV parking spots — two vehicles each, so 10 in total.
 *
 * All five spots work from the very start of the game, before the safehouse
 * itself is unlocked, and keep working after a safehouse is lost.
 */
export const SAFEHOUSES: Safehouse[] = [
  {
    id: 'hove-beach',
    name: "Roman's Apartment, Mohawk Ave.",
    borough: 'Hove Beach, Broker',
    spaces: 2,
    unlock: "Safehouse after 'The Cousins Bellic'; lost after 'Roman's Sorrow' but the spot keeps working.",
    warning:
      "A Chavos can spawn in the spot during 'Ivan the Not So Terrible' if you approach the depot from the north, knocking your cars out. Approach from the south.",
  },
  {
    id: 'south-bohan',
    name: "Mallorie's Apartment, Joliet St.",
    borough: 'South Bohan, Bohan',
    spaces: 2,
    unlock: "Safehouse after 'Roman's Sorrow'.",
    warning:
      'Traffic frequently swerves into this spot and displaces cars — the worst spot for long-term storage.',
  },
  {
    id: 'middle-park-east',
    name: "Roman's New Apartment, Albany Ave.",
    borough: 'Middle Park East, Algonquin',
    spaces: 2,
    unlock: "Safehouse after 'Hostile Negotiation'.",
    warning:
      'Taking a taxi to the safehouse icon parks the cab in the spot and displaces your cars. Never trip-skip here.',
  },
  {
    id: 'northwood',
    name: "Playboy X's Penthouse, Xenotime St.",
    borough: 'Northwood, Algonquin',
    spaces: 2,
    unlock: "Safehouse after 'The Holland Play' — you must kill Playboy X.",
    warning:
      "Playboy's yellow Patriot auto-spawns in the west half during 'Deconstruction for Beginners' and 'Photo Shoot', but only if that half is empty.",
  },
  {
    id: 'alderney',
    name: "Alderney Safehouse (Ray's), Mahesh Ave.",
    borough: 'Alderney City, Alderney',
    spaces: 2,
    unlock: "Safehouse after 'Smackdown'. The island itself opens after 'Three Leaf Clover'.",
  },
]

/** Parking rules that decide whether a car actually survives to your save. */
export const PARKING_RULES: string[] = [
  'Parking spots are switched off during missions. A car parked mid-mission is only held for that session — after the mission ends, pass or fail, you must physically return to the spot before saving. Autosaves do not count.',
  'Spots repair and restore any vehicle, including wrecks and helicopters.',
  'A vehicle with a dead body inside will not save. E-brake the corpse out first.',
  'Three or more cars can sit in a spot temporarily, but on reload only two survive, chosen at random.',
  'Motorcycles creep a little further each load in whichever direction they lean. Always lean bikes towards the curb or they end up in the street.',
  'Boats cannot be stored at all.',
  'Universal fallback: park the car, then get wasted or busted. The mission fails but the car survives.',
]
