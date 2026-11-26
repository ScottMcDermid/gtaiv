export type Luster = 'yes' | 'no' | 'unknown'

export type Difficulty = 'Easy' | 'Easy–Medium' | 'Medium' | 'Hard' | 'Very Hard'

export type Source =
  | 'Story Mission'
  | 'Stevie'
  | 'Brucie'
  | 'Random Encounter'
  | 'Friend Activity'
  | 'Side Activity'
  | 'World Spawn'

export type Category = 'Car' | 'Bike' | 'Aircraft' | 'Other'

/**
 * Lethal Vaccine's community taxonomy.
 * Unique   — the model itself only exists in missions.
 * EC       — exclusive colour that Pay 'n' Spray and traffic cannot reproduce.
 * EC2      — exclusive *invisible* secondary colour; only visible in a save editor.
 * Lustered — randomly rolled pearlescent overlay; re-rolls on every mission start.
 * Hybrid   — gang/tuner parts mixed with civilian parts.
 * NE       — "No Extra": a normally present part is missing.
 * UJ       — Unjackable; the vehicle must be pushed rather than driven.
 */
export type Tag = 'Unique' | 'EC' | 'EC2' | 'Lustered' | 'Hybrid' | 'NE' | 'UJ'

/** Per-variant ownership state, persisted to localStorage. */
export type OwnState = 'none' | 'want' | 'owned'

export interface VideoLink {
  label: string
  url: string
}

export interface Variant {
  /** Stable key used for persistence — never renumber these. */
  id: string
  color: string
  /**
   * One hex value for a solid colour, two for a split/two-tone swatch.
   * `null` renders the "unknown colour" dashed swatch.
   */
  swatch: string[] | null
  /** Filename under /public/vehicles, or `null` when no photo is available. */
  image: string | null
  luster: Luster
  tags: Tag[]
  /** The mission, activity or encounter that yields this variant. */
  quest: string
  source: Source
  /** Where in Liberty City it spawns, when known. */
  location?: string
  difficulty: Difficulty
  missable: boolean
  /** Required when `missable` is true: exactly how the variant is lost. */
  missableHow?: string
  /** True when the only way to keep it is to deliberately fail the mission. */
  requiresFailure?: boolean
  notes?: string[]
  videos?: VideoLink[]
  /** Set when the community sources have no confirmed details. */
  unverified?: boolean
}

export interface Vehicle {
  id: string
  name: string
  className: string
  category: Category
  variants: Variant[]
}

// ---------------------------------------------------------------------------
// Random characters
// ---------------------------------------------------------------------------

export type Borough = 'Broker' | 'Dukes' | 'Bohan' | 'Algonquin' | 'Alderney'

/** Per-encounter progress, persisted to localStorage. */
export type EncounterState = 'todo' | 'done' | 'missed'

export interface Encounter {
  /** Stable key used for persistence — never renumber these. */
  id: string
  label: 'First Encounter' | 'Second Encounter' | 'Third Encounter' | 'Unique Encounter'
  /** Image basename under /public/characters, without the -StartingPoint/-Thumbnail suffix. */
  image: string
  /** Where the character stands. */
  location: string
  area: string
  borough: Borough
  /** Wiki map coordinates ([x, y] on a 6000 × 3800 grid, origin bottom-left). `null` when phone-triggered. */
  map: [number, number] | null
  /** How it starts when there is no street marker. */
  trigger?: string
  time: string
  requires: string
  /** Money Niko gets. A leading minus is money he gives away. */
  reward: string | null
  summary: string
  tips?: string[]
  /** Set when a choice in this encounter can lock out later ones. */
  locksOut?: string
  /** Set when this encounter can be locked out by an earlier choice. */
  missable?: string
  /** YouTube video ID. */
  video?: string
  wiki: string
}

export interface RandomCharacter {
  id: string
  name: string
  blurb: string
  /** Set when the whole character depends on a story choice. Says how to keep them alive. */
  missable?: string
  encounters: Encounter[]
}
