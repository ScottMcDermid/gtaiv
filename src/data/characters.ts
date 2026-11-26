import type { RandomCharacter } from '../types'

/**
 * GTA IV (base game) random character encounters.
 *
 * Sourced from GTA Wiki (gta.fandom.com), retrieved 26 Nov 2026:
 *  - "Random Characters in GTA IV" and its 22 encounter sub-pages
 *  - "Map:GTA IV: Random Characters", the interactive map. `map` holds its raw
 *    coordinates: a 6000 × 3800 grid over LibertyCity-GTAIV-Map2008.jpg with the
 *    origin at the bottom-left.
 *
 * Images under /public/characters are the wiki's screenshots, resized:
 *  - `<Name>-<Encounter>-StartingPoint.webp` — where the character stands
 *  - `<Name>-<Encounter>-Thumbnail.webp`     — a frame from the cutscene
 *
 * Video IDs are the wiki's own embedded walkthroughs. Text is CC BY-SA.
 */

const wiki = (page: string) =>
  `https://gta.fandom.com/wiki/Random_Characters_in_GTA_IV/${page.replaceAll(' ', '_')}`

export const CHARACTERS: RandomCharacter[] = [
  // ---------------------------------------------------------------------------
  {
    id: 'brian-meech',
    name: 'Brian Meech',
    blurb: 'A cokehead from Hove Beach who never stops talking.',
    encounters: [
      {
        id: 'brian-meech-1',
        label: 'First Encounter',
        image: 'BrianMeech-FirstEncounter',
        location: "Outside Roman's taxi depot",
        area: 'Hove Beach',
        borough: 'Broker',
        map: [3490, 1000],
        time: 'Anytime',
        requires: "It's Your Call",
        reward: '$100',
        summary:
          'Brian mocks Niko\'s accent and rants about communism, then hands over $100 to prove he is a "rich dick". Cutscene only — the first random character in the game.',
        video: 'bgkucx-_qHg',
        wiki: wiki('Brian Meech - First Encounter'),
      },
      {
        id: 'brian-meech-2',
        label: 'Second Encounter',
        image: 'BrianMeech-SecondEncounter',
        location: 'Smoking on Crockett Avenue',
        area: 'Hove Beach',
        borough: 'Broker',
        map: [3528, 731],
        time: 'Anytime',
        requires: 'Brian Meech — First Encounter',
        reward: '$200',
        summary:
          'Drive Brian to a crack pickup on Masterson Street, then drop him at the Gulag Garden on Wappinger Avenue.',
        tips: ["Don't spook or kill the dealers at the pickup — the mission fails."],
        video: 'bgkucx-_qHg',
        wiki: wiki('Brian Meech - Second Encounter'),
      },
      {
        id: 'brian-meech-3',
        label: 'Third Encounter',
        image: 'BrianMeech-ThirdEncounter',
        location: 'Outside the Eris store',
        area: 'Downtown',
        borough: 'Broker',
        map: [3757, 1435],
        time: 'Anytime',
        requires: 'Brian Meech — Second Encounter',
        reward: '$500',
        summary:
          'Now in rehab, Brian wants to pay off his dealer on Onion Street. The dealers jump him with a bat — kill them or scare them off, then take Brian home to Wappinger Avenue.',
        video: 'bgkucx-_qHg',
        wiki: wiki('Brian Meech - Third Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'real-badman',
    name: 'Real Badman',
    blurb: 'The Jamaican dealer you helped in Bohan, now with a Russian problem.',
    encounters: [
      {
        id: 'real-badman-1',
        label: 'Unique Encounter',
        image: 'RealBadman-FirstEncounter',
        location: 'Outside the Pill-Pharm',
        area: 'East Island City',
        borough: 'Dukes',
        map: [3921, 2041],
        time: 'Anytime',
        requires: 'Shadow',
        reward: '$500',
        summary:
          'Russians are muscling in on Badman\'s turf. Drive him to the alley off Carrollton Street in Willis and wipe out the gang mid-deal; Badman backs you up with a shotgun.',
        video: 's6nxxQprK64',
        wiki: wiki('Real Badman - Unique Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'mel',
    name: 'Mel',
    blurb: 'The drunk from the Comrades Bar, sober and settling debts.',
    encounters: [
      {
        id: 'mel-1',
        label: 'Unique Encounter',
        image: 'Mel-FirstEncounter',
        location: 'Outside Hove Beach Police Station, Mohawk Avenue',
        area: 'Hove Beach',
        borough: 'Broker',
        map: [3572, 912],
        time: 'Anytime',
        requires: 'Escuela of the Streets',
        reward: '$500',
        summary:
          'Escort Mel to the Soldiers Plaza Project lot on Montauk Avenue to repay a loan shark. The shark and two gangsters turn on him — protect Mel, then drive him home.',
        video: 'Agv6mZSejxc',
        wiki: wiki('Mel - Unique Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'hossan-ramzy',
    name: 'Hossan Ramzy',
    blurb: 'Your shipmate from the Platypus, now selling knock-off handbags.',
    encounters: [
      {
        id: 'hossan-ramzy-1',
        label: 'Unique Encounter',
        image: 'HossanRamzy-FirstEncounter',
        location: 'Selling handbags on the street',
        area: 'Suffolk',
        borough: 'Algonquin',
        map: [2251, 1130],
        time: 'Anytime',
        requires: 'The Puerto Rican Connection',
        reward: '$500',
        summary:
          "Hossan's boss on Castle Drive stiffs him and flees in a Banshee. Chase him down, kill him, pick up the dropped wages and take Hossan to the alley between Feldspar and Garnet Street.",
        tips: ["Completing Hossan unlocks Sara's first encounter."],
        video: 'r3emWi-vWUo',
        wiki: wiki('Hossan Ramzy - Unique Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'ilyena-faustin',
    name: 'Ilyena Faustin',
    blurb: "Mikhail Faustin's widow, worried about her daughter Anna.",
    encounters: [
      {
        id: 'ilyena-faustin-1',
        label: 'Unique Encounter',
        image: 'IlyenaFaustin-FirstEncounter',
        location: 'Funland amusement park',
        area: 'Firefly Island',
        borough: 'Broker',
        map: [3637, 612],
        time: 'Anytime',
        requires: 'The Puerto Rican Connection',
        reward: null,
        summary:
          'Anna is seeing a pimp she calls "Slimeball". Find him on Dillon Street in Schottler and teach him a lesson.',
        tips: [
          'For the good ending, beat him up and then catch him when he runs — he agrees to back off and Ilyena calls to thank you.',
          'Killing him or letting him escape still completes it, but Ilyena calls back unhappy.',
        ],
        video: '4XZsFnUKXjI',
        wiki: wiki('Ilyena Faustin - Unique Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'pathos',
    name: 'Pathos',
    blurb: 'An aspiring rapper who takes every heckle personally.',
    encounters: [
      {
        id: 'pathos-1',
        label: 'First Encounter',
        image: 'Pathos-FirstEncounter',
        location: 'Outside Pirate Music, Denver-Exeter Avenue',
        area: 'Star Junction',
        borough: 'Algonquin',
        map: [2452, 1656],
        time: 'Anytime',
        requires: 'The Puerto Rican Connection',
        reward: null,
        summary:
          'Two thugs insult his CD and Pathos chases them into an alley. Follow and kill both hecklers.',
        video: 'SQCKCEIkCkE',
        wiki: wiki('Pathos - First Encounter'),
      },
      {
        id: 'pathos-2',
        label: 'Second Encounter',
        image: 'Pathos-SecondEncounter',
        location: 'Busking by the Star Junction statue, Burlesque',
        area: 'Star Junction',
        borough: 'Algonquin',
        map: [2424, 1761],
        time: 'Anytime',
        requires: 'Pathos — First Encounter',
        reward: null,
        summary:
          'Pathos gets shot by more hecklers. Kill the attackers, then rush him to Easton Medical Center in Lancet.',
        video: 'SQCKCEIkCkE',
        wiki: wiki('Pathos - Second Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'sara',
    name: 'Sara',
    blurb: 'A recent divorcée with something to prove.',
    encounters: [
      {
        id: 'sara-1',
        label: 'First Encounter',
        image: 'Sara-FirstEncounter',
        location: 'Back Passage',
        area: 'Suffolk',
        borough: 'Algonquin',
        map: [2337, 1104],
        time: '22:00–04:00',
        requires: 'The Puerto Rican Connection and Hossan Ramzy',
        reward: null,
        summary:
          'Give Sara a ride home to Varsity Heights. Her ex-husband is waiting outside and comes at you after her taunting.',
        tips: ['Just drawing a weapon is enough to send the ex-husband away and complete it.'],
        video: 'PwR2zbXClf0',
        wiki: wiki('Sara - First Encounter'),
      },
      {
        id: 'sara-2',
        label: 'Second Encounter',
        image: 'Sara-SecondEncounter',
        location: 'In front of the Pier 45 shopping centre',
        area: 'Fishmarket South',
        borough: 'Algonquin',
        map: [3000, 834],
        time: 'Anytime',
        requires: 'Sara — First Encounter',
        reward: '$1,000',
        summary:
          'Collect a box from Marcus at the Perseus store. He wants $500 — pay, scare him into dropping it, or kill him (two stars) — then bring it back to Pier 45.',
        video: 'PwR2zbXClf0',
        wiki: wiki('Sara - Second Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'jeff-harlingford',
    name: 'Jeff Harlingford',
    blurb: 'A paranoid businessman convinced his wife is cheating.',
    encounters: [
      {
        id: 'jeff-harlingford-1',
        label: 'First Encounter',
        image: 'JeffHarlingford-FirstEncounter',
        location: 'Across from an apartment on Bismarck Avenue',
        area: 'East Holland',
        borough: 'Algonquin',
        map: [2677, 2611],
        time: 'Anytime',
        requires: 'Photo Shoot and The Puerto Rican Connection (needs the camera phone)',
        reward: null,
        summary:
          'Tail his wife Shirley and her friend to the Superstar Café, photograph them together and send Jeff the picture.',
        tips: ['A Stallion is parked nearby for the tail.'],
        locksOut:
          "Kill Shirley or her friend and Jeff cuts ties — his second and third encounters never appear. Send the photo and leave them alive.",
        video: 'V0t7I1-v65o',
        wiki: wiki('Jeff Harlingford - First Encounter'),
      },
      {
        id: 'jeff-harlingford-2',
        label: 'Second Encounter',
        image: 'JeffHarlingford-SecondEncounter',
        location: 'Phone call → Lancaster Underground Car Park',
        area: 'Lancaster',
        borough: 'Algonquin',
        map: null,
        trigger: 'Jeff phones about an in-game week after the first encounter.',
        time: 'Anytime',
        requires: 'Jeff Harlingford — First Encounter, with Shirley and her friend spared',
        reward: '$5,000',
        summary:
          'Jeff has killed Shirley and hidden her in a Blista Compact. Drive it up to Walnut Way and dump it in the Humboldt River without the police seeing.',
        tips: ['Being spotted by police in the car gives you a wanted level.'],
        missable: 'Only happens if Shirley and her friend both survived the first encounter.',
        video: 'V0t7I1-v65o',
        wiki: wiki('Jeff Harlingford - Second Encounter'),
      },
      {
        id: 'jeff-harlingford-3',
        label: 'Third Encounter',
        image: 'JeffHarlingford-ThirdEncounter',
        location: "Watching Drusilla's through binoculars, Feldspar Street",
        area: 'Little Italy',
        borough: 'Algonquin',
        map: [2535, 1079],
        time: 'Anytime',
        requires: 'Jeff Harlingford — Second Encounter',
        reward: null,
        summary:
          'Jeff has remarried and suspects his new wife too. Cutscene only — it does not end well for Jeff.',
        missable: 'Only happens if Shirley and her friend both survived the first encounter.',
        video: 'V0t7I1-v65o',
        wiki: wiki('Jeff Harlingford - Third Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'eddie-low',
    name: 'Eddie Low',
    blurb: 'A polite young man with a duffel bag. Only out late at night.',
    encounters: [
      {
        id: 'eddie-low-1',
        label: 'First Encounter',
        image: 'EddieLow-FirstEncounter',
        location: 'Alley across from Auto Eroticar',
        area: 'Alderney City',
        borough: 'Alderney',
        map: [1160, 2439],
        time: '22:00–04:00',
        requires: 'Three Leaf Clover',
        reward: null,
        summary:
          'Drive Eddie to the docks so he can drop off his bag, then take him to the 60 Diner in Westminster.',
        video: 'hUod46fWfjY',
        wiki: wiki('Eddie Low - First Encounter'),
      },
      {
        id: 'eddie-low-2',
        label: 'Second Encounter',
        image: 'EddieLow-SecondEncounter',
        location: 'Dark alley off Cockerell Avenue',
        area: 'Berchem',
        borough: 'Alderney',
        map: [968, 2017],
        time: '22:00–04:00',
        requires: 'Eddie Low — First Encounter',
        reward: null,
        summary: 'Eddie pulls a knife on Niko. Kill him.',
        tips: [
          'Disarming him makes him flee and fails the mission ("Eddie Low is still out there, waiting…"). Shoot him instead, or you have to come back another night.',
        ],
        video: 'hUod46fWfjY',
        wiki: wiki('Eddie Low - Second Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'marnie-allen',
    name: 'Marnie Allen',
    blurb: 'A young addict from the Midwest who wants out. Only around at noon.',
    encounters: [
      {
        id: 'marnie-allen-1',
        label: 'First Encounter',
        image: 'MarnieAllen-FirstEncounter',
        location: 'On a bench in the Civic Citadel park',
        area: 'City Hall',
        borough: 'Algonquin',
        map: [2483, 864],
        time: 'Around noon',
        requires: 'Three Leaf Clover',
        reward: '−$500',
        summary: 'Drive Marnie to her dealer on Koresh Square in Alderney City. Niko gives her $500.',
        video: 'v2OGWodAgGE',
        wiki: wiki('Marnie Allen - First Encounter'),
      },
      {
        id: 'marnie-allen-2',
        label: 'Second Encounter',
        image: 'MarnieAllen-SecondEncounter',
        location: 'Leaning on a lamp post, Ivy Drive South',
        area: 'Varsity Heights',
        borough: 'Algonquin',
        map: [2079, 2244],
        time: 'Around noon',
        requires: 'Marnie Allen — First Encounter',
        reward: '−$500',
        summary:
          'Marnie crossed a john and needs to leave town. Take her to Grand Easton Terminal; Niko gives her another $500. She emails later with good news.',
        video: 'v2OGWodAgGE',
        wiki: wiki('Marnie Allen - Second Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: 'gracie-ancelotti',
    name: 'Gracie Ancelotti',
    blurb: 'The mob daughter you kidnapped. She remembers your face.',
    encounters: [
      {
        id: 'gracie-ancelotti-1',
        label: 'Unique Encounter',
        image: 'GracieAncelotti-FirstEncounter',
        location: 'Outside her house on Babbage Drive',
        area: 'Acter',
        borough: 'Alderney',
        map: [1104, 1575],
        time: 'Anytime',
        requires: "Diamonds Are a Girl's Best Friend and Truck Hustle",
        reward: null,
        summary:
          'Gracie recognises Niko and sets her bodyguards on him. Kill all five Ancelotti guards.',
        video: 'dubDCtuxXxw',
        wiki: wiki('Gracie Ancelotti - Unique Encounter'),
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Missable: these three only exist if you spared them during the story.
  // ---------------------------------------------------------------------------
  {
    id: 'ivan-bytchkov',
    name: 'Ivan Bytchkov',
    blurb: "The loan shark you didn't kill for Vlad.",
    missable: 'Spare Ivan during "Ivan the Not So Terrible".',
    encounters: [
      {
        id: 'ivan-bytchkov-1',
        label: 'Unique Encounter',
        image: 'IvanBytchkov-FirstEncounter',
        location: 'Outside Da Cruz Restaurant & Deli, Farnsworth Road',
        area: 'Acter',
        borough: 'Alderney',
        map: [1210, 1847],
        time: 'Anytime',
        requires: 'Three Leaf Clover, with Ivan spared',
        reward: '$1,000',
        summary:
          'Back Ivan up on a collection on Berners Road. The client and his gang open fire — kill all five (one on the roof, one on the fire escape, three in the alley).',
        tips: ['Showing up in a police car spooks the hustlers and fails the mission.'],
        video: '8vmMNttfBRY',
        wiki: wiki('Ivan Bytchkov - Unique Encounter'),
      },
    ],
  },

  {
    id: 'clarence-little',
    name: 'Clarence Little',
    blurb: 'The dealer who begged "please don\'t kill me, boss!"',
    missable: 'Spare Clarence during "Holland Nights".',
    encounters: [
      {
        id: 'clarence-little-1',
        label: 'Unique Encounter',
        image: 'ClarenceLittle-FirstEncounter',
        location: 'Outside 65 Uranium Street projects',
        area: 'East Holland',
        borough: 'Algonquin',
        map: [2580, 2674],
        time: 'Anytime',
        requires: 'Blood Brothers, with Clarence spared',
        reward: null,
        summary: 'Clarence wants revenge and draws a pistol. Take cover and kill him.',
        video: 'FchyOpmRt0s',
        wiki: wiki('Clarence Little - Unique Encounter'),
      },
    ],
  },

  {
    id: 'cherise-glover',
    name: 'Cherise Glover',
    blurb: "Jayvon's girlfriend from Ruff Rider, with a new abusive boyfriend.",
    missable: 'Spare Cherise during "Ruff Rider".',
    encounters: [
      {
        id: 'cherise-glover-1',
        label: 'Unique Encounter',
        image: 'CheriseGlover-FirstEncounter',
        location: "Outside the closed Cluckin' Bell",
        area: 'Northwood',
        borough: 'Algonquin',
        map: [2372, 2771],
        time: 'Anytime',
        requires: 'The Holland Play, with Cherise spared',
        reward: null,
        summary:
          'Drive Cherise to the apartments at the north end of Frankfort Avenue and beat up her boyfriend in the courtyard.',
        tips: ['Killing the boyfriend still completes it, but Cherise is angry with you.'],
        video: 'YrSIM3QdMmc',
        wiki: wiki('Cherise Glover - Unique Encounter'),
      },
    ],
  },
]

export const ENCOUNTERS = CHARACTERS.flatMap((character) =>
  character.encounters.map((encounter) => ({ character, encounter })),
)

/**
 * Encounters that count toward 100% completion: everything except the three
 * characters you can kill in the story and Jeff's follow-ups.
 */
export const REQUIRED_IDS = new Set(
  ENCOUNTERS.filter(({ character, encounter }) => !character.missable && !encounter.missable).map(
    ({ encounter }) => encounter.id,
  ),
)

/** "No More Strangers": the first encounter of every non-missable character. */
export const ACHIEVEMENT_IDS = new Set(
  CHARACTERS.filter((c) => !c.missable).map((c) => c.encounters[0].id),
)

/** Wiki map grid → fractions of the map image (0–1, from the top-left). */
export const MAP_SIZE = { width: 6000, height: 3800 } as const
export const toMapPoint = ([x, y]: [number, number]) => ({
  x: x / MAP_SIZE.width,
  y: 1 - y / MAP_SIZE.height,
})
