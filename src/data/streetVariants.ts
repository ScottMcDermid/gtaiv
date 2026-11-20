import type { Category, Variant } from '../types'

/**
 * Gang, emergency and street-spawn variants from Grand Theft Wiki's
 * "Special Vehicles in GTA IV".
 *
 * These are kept separate from `vehicles.ts` because they are a different class
 * of thing: freely respawning in traffic rather than one-shot collectibles. None
 * are missable, so they are the safe picks to leave until last.
 */
export interface StreetGroup {
  /** Matches a `Vehicle.id` in vehicles.ts, or introduces a new model. */
  vehicleId: string
  /** Only needed when the model does not already exist in vehicles.ts. */
  name?: string
  className?: string
  category?: Category
  variants: Variant[]
}

const street = (
  v: Omit<Variant, 'source' | 'difficulty' | 'missable'> &
    Partial<Pick<Variant, 'source' | 'difficulty' | 'missable'>>,
): Variant => ({
  source: 'World Spawn',
  difficulty: 'Easy',
  missable: false,
  ...v,
})

export const STREET_VARIANTS: StreetGroup[] = [
  {
    vehicleId: 'cavalcade',
    variants: [
      street({
        id: 'cavalcade-romans-taxi-grey',
        color: 'Dark Grey',
        swatch: ['#52565c'],
        image: 'Cavalcade-GTAIV-front.webp',
        luster: 'no',
        tags: [],
        quest: "Roman's Taxi Service",
        source: 'Side Activity',
        location: 'Called from your phone after the depot burns down',
        notes: [
          "Replaces the Esperanto taxi fleet once the Algonquin safehouse is unlocked, with Mohammed still driving and still insulting Niko.",
          "Unlike Roman's Taxi, this one has no performance boost.",
        ],
      }),
      street({
        id: 'cavalcade-spanish-lords-dark-red',
        color: 'Dark Red (Spanish Lords)',
        swatch: ['#6e1b1f'],
        image: 'Cavalcade-GTAIV-modified-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — Spanish Lords',
        location: 'South Bohan and Alderney City',
        notes: [
          'Gold rims, a roofrack and rear subwoofers that give it a noticeably heavier bass.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'contender',
    variants: [
      street({
        id: 'contender-irish-supercharge-green',
        color: 'Green "Supercharge"',
        swatch: ['#2f6b3a'],
        image: 'Contender-GTAIV-Supercharge-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — Irish Mob',
        location: 'Steinway, Dukes',
        notes: [
          'Chrome bull bars, four roof lights on chrome anti-roll bars and a special green paint.',
          'Marginally faster than a stock Contender thanks to the supercharger.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'coquette',
    variants: [
      street({
        id: 'coquette-street-white-red-stripe',
        color: 'White & Red Stripe',
        swatch: ['#f4f4f4', '#cc2b2b'],
        image: 'Coquette-GTAIV-striped-front.webp',
        luster: 'no',
        tags: [],
        quest: 'Street spawn',
        notes: [
          'Modelled on the C4 Corvette from The A-Team.',
          "Unusually, this paint job can be sprayed onto any Coquette at a Pay 'n' Spray.",
        ],
      }),
      street({
        id: 'coquette-street-green-black',
        color: 'Green & Black Shift',
        swatch: ['#1e3b22', '#111111'],
        image: null,
        luster: 'yes',
        tags: [],
        quest: 'Street spawn',
        notes: [
          'Reads black at some angles and green at others. Also sprayable onto any Coquette.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'feroci',
    name: 'Feroci',
    className: 'Sedan',
    category: 'Car',
    variants: [
      street({
        id: 'feroci-triad-jdm-vip',
        color: 'Cobalt Blue (JDM VIP)',
        swatch: ['#1f4fa8'],
        image: 'Feroci-GTAIV-JDMVIP-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — Algonquin Triads',
        location: 'The Exchange and Chinatown, Algonquin',
        notes: [
          'Gold rims, chin spoiler and body kit, with Chinese knotting on the rear-view mirror.',
          'Can be resprayed any colour and is still called "Feroci" when entered.',
        ],
      }),
      street({
        id: 'feroci-flyus',
        color: 'FlyUS Livery',
        swatch: ['#f4f4f4', '#1f5fa8'],
        image: 'Feroci-GTAIV-FlyUS-front.webp',
        luster: 'no',
        tags: [],
        quest: 'Street spawn — FlyUS company car',
        location: 'Francis International Airport, Dukes',
        notes: [
          'Roof-mounted light and black stock rims; cosmetic only, performance is identical.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'intruder',
    variants: [
      street({
        id: 'intruder-triad-vx-candy-red',
        color: 'Candy Red (Intruder VX)',
        swatch: ['#b01521'],
        image: 'Intruder-GTAIV-VX-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — Algonquin Triads',
        notes: [
          'Body kit with side skirts and chin spoiler, plus yellow Chinese knotting on the mirror.',
          'Based on the Junction Produce Infiniti Q45 kit.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'patriot',
    variants: [
      street({
        id: 'patriot-noose',
        color: 'NOOSE Livery',
        swatch: ['#2b3138', '#d9d9d9'],
        image: 'NOOSEPatriot-GTAIV-front.webp',
        luster: 'no',
        tags: [],
        quest: 'Three-star wanted level or higher',
        difficulty: 'Medium',
        notes: ['The custom NOOSE Patriot used to chase the player.'],
      }),
      street({
        id: 'patriot-gang-black',
        color: 'Black (Hustlers / M.O.B.)',
        swatch: ['#15171a'],
        image: null,
        luster: 'no',
        tags: ['Hybrid'],
        quest: 'Street spawn — North Holland Hustlers and M.O.B.',
        notes: [
          'Roof lights, chromed exhausts and a front bull bar. Some carry flag vinyls.',
        ],
      }),
      street({
        id: 'patriot-street-modified',
        color: 'Modified with Accessories',
        swatch: ['#4a5056'],
        image: 'Patriot-GTAIV-modified-front.webp',
        luster: 'unknown',
        tags: [],
        quest: 'Street spawn',
        notes: ['Extra accessories alongside the optional patriotic paintwork.'],
      }),
    ],
  },

  {
    vehicleId: 'pmp-600',
    variants: [
      street({
        id: 'pmp-600-street-sport',
        color: 'Sport Edition (black / plum / blue)',
        swatch: ['#1b1d24', '#4a2d4a'],
        image: 'PMP600-GTAIV-modified-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — often driven by the Mafia',
        notes: ['Sport mesh grille and a small boot spoiler.'],
      }),
    ],
  },

  {
    vehicleId: 'presidente',
    variants: [
      street({
        id: 'presidente-korean-supercharge',
        color: 'Dark Blue Metallic "SPORT"',
        swatch: ['#1b2c52'],
        image: 'Presidente-GTAIV-Supercharge-front.webp',
        luster: 'yes',
        tags: ['Hybrid'],
        quest: 'Street spawn — Korean Mob',
        notes: [
          'Supercharged V-10 based on the Cadillac CTS-V: unique grille with a "supercharged" badge, black rims and a rear spoiler.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'rebla',
    variants: [
      street({
        id: 'rebla-russian-sports-black',
        color: 'Black (Sports)',
        swatch: ['#15171a'],
        image: 'Rebla-GTAIV-sports-front.webp',
        luster: 'no',
        tags: ['Hybrid'],
        quest: 'Street spawn — Russian Mafia',
        location: 'Hove Beach, Broker',
        notes: [
          'Only available in black. Dual-sport exhaust, slightly lowered suspension and a light body kit.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'sultan',
    variants: [
      street({
        id: 'sultan-korean-tuned-blue',
        color: 'Blue (Korean Mob tuned)',
        swatch: ['#1b3f8c'],
        image: 'Sultan-GTAIV-modified-front.webp',
        luster: 'unknown',
        tags: ['Hybrid'],
        quest: 'Street spawn — Korean Mob',
        notes: [
          'Large rear spoiler and bigger hood scoops, resembling a Subaru Impreza WRX STi.',
        ],
      }),
    ],
  },

  {
    vehicleId: 'voodoo',
    variants: [
      street({
        id: 'voodoo-jamaican-flag',
        color: 'Jamaican Flag (Black, Green & Gold)',
        swatch: ['#111111', '#1f7a3a'],
        image: 'Voodoo-GTAIV-Jamaican-front.webp',
        luster: 'no',
        tags: ['Hybrid'],
        quest: "Street spawn — Little Jacob's posse",
        notes: [
          'Side twin exhausts alongside the normal chrome rear exhaust, plus rear fender skirts.',
          'Performance is identical to a stock Voodoo.',
        ],
      }),
      street({
        id: 'voodoo-street-chrome-schemes',
        color: 'Black & Red / Candy Red with Chrome',
        swatch: ['#111111', '#8e1b28'],
        image: 'Voodoo-GTAIV-specialcolorschemes.webp',
        luster: 'unknown',
        tags: [],
        quest: 'Street spawn',
        notes: [
          'The black and red scheme carries gold chrome; the dark candy red one has duller bronze chrome.',
          'Resembles the Spanish Lords gang cars but has no gang affiliation.',
        ],
      }),
    ],
  },
]
