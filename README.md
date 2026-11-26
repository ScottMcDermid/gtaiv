# GTA IV Trackers

Reference and progress trackers for **Grand Theft Auto IV**. Switch between them with
the small nav above each page title (`#/vehicles`, `#/characters`, `#/map`).

- **Unique Vehicles**: every unique vehicle and how to keep it.
- **Random Characters**: all 22 random character encounters with screenshots and map locations.
- **Pigeons & Jumps**: a city map of all 200 Flying Rats and 50 Unique Stunt Jumps.

## Unique Vehicles

Built from the original `cars.html` reference sheet and expanded with the full vehicle
listing, mission sources, missability warnings, difficulty ratings and video guides.

## Features

- **Complete listing** of GTA IV's unique vehicles and the colour variants of each.
- **Quest / source** for every variant — story mission, Stevie's Car Thefts,
  Brucie's Exotic Exports, random encounters and friend activities.
- **Missable flags** that spell out exactly how each car can be lost for good.
- **Difficulty rating** per variant (Easy → Very Hard).
- **Video guides** linked to Lethal Vaccine's unique-vehicle YouTube playlist where one exists.
- **Not owned / Want / Owned** toggle per variant, persisted to `localStorage` via Zustand.
- **Garage meter** showing how many of your 10 parking spaces (5 safehouses × 2) are taken.
  Marking an 11th car as *Owned* is blocked.
- Search and filter by status, missable and luster.

## Random Characters

- All **14 characters / 22 encounters**, including the three you can kill in the story
  (Ivan, Clarence, Cherise) and Jeff's follow-ups that one wrong move locks out.
- A **screenshot of each start point** (click it for the cutscene still) and a **zoomed map crop**.
- **City map** with a pin per encounter. Drag to pan, scroll or use the buttons to zoom. Click a
  pin to jump to its card, or a card's map crop to fly the map there.
- Time windows (22:00–04:00, noon), unlock requirements, rewards and choices that change the outcome.
- **To do / Done / Missed** per encounter, persisted to `localStorage`, with progress toward
  100% completion (17 required encounters) and the *No More Strangers* achievement (11 first encounters).

## Pigeons & Stunt Jumps

- **One map** with all 200 pigeons (round pins) and 50 stunt jumps (square pins, with an arrow
  for the take-off direction). Numbers show once you zoom in.
- Pick a pin or a number in the borough list to see the **wiki screenshot** of the spot. Jumps
  show the ramp and the jump mid-air, with notes on the approach and what counts as a landing.
- **Done & next** marks the current one and flies to the closest one you still need, so you
  can sweep a neighbourhood.
- Layer, status and borough filters, progress bars and the *Endangered Species* / *Dare Devil*
  achievements. Progress is persisted to `localStorage`.

## Quick start

With Docker:

```sh
make prod       # build + serve at http://localhost:8080
make stop
```

Without Docker:

```sh
make install
make serve      # Vite dev server at http://localhost:5173
```

Run `make help` for the full list of targets.

| Target | Description |
| --- | --- |
| `make prod` | Build the production image and run it detached (nginx) at `http://localhost:$PORT` |
| `make start` | Alias for `make prod` |
| `make stop` | Stop and remove the containers |
| `make restart` | `stop` then `prod` |
| `make dev` | Vite dev server with hot reload in Docker at `http://localhost:$DEV_PORT` |
| `make env` | Create `.env` from `.env.dist` if it is missing |
| `make logs` | Tail the production container logs |
| `make ps` | Container status |
| `make clean` | Tear down, remove local images/volumes and `dist` |
| `make install` | `npm ci` on the host |
| `make serve` | Vite dev server on the host |
| `make build` | Production build to `./dist` |
| `make preview` | Build and preview the production bundle on the host |
| `make lint` | Lint the source |

### Configuration

Ports and build mode come from `.env`. `.env.dist` is the committed template;
`.env` is local and gitignored. `make prod` and `make dev` create `.env` for you
on first run, or run `make env` yourself.

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `8080` | Host port for the production app |
| `DEV_PORT` | `5173` | Host port for the Vite dev server |
| `NODE_ENV` | `production` | Build mode for the production image |

Precedence is **command line > shell environment > `.env` > built-in default**:

```sh
make prod                 # uses PORT from .env
make prod PORT=9000       # one-off override, .env untouched
make dev  DEV_PORT=3000
```

## Project layout

```
src/
  data/
    vehicles.ts     # the full unique-vehicle dataset
    safehouses.ts   # the 5 safehouses and their parking spaces
    characters.ts   # random characters, encounters and map coordinates
  pages/            # one component per tracker
  store/
    useGarage.ts    # vehicle picks, persisted to localStorage
    useEncounters.ts # encounter progress, persisted to localStorage
  components/
  routes.ts         # tracker list + hash routing; add a tracker here
public/
  vehicles/         # vehicle photos
  characters/       # encounter start-point and cutscene screenshots
  maps/             # Liberty City map
  types.ts
docker/
  nginx.conf        # SPA fallback + asset caching for the production image
.env.dist           # template — copy to .env to override ports
```

## Data notes

- **Luster** is GTA IV's metallic/pearlescent finish. Once a car loses it (for example
  through a respray) you cannot get it back, so luster variants are the ones worth parking.
- Cars delivered to **Stevie** or shipped for **Brucie** are gone — park and save them first
  if you want to keep them.
- You can only keep **10 cars** across all safehouses, so the list is deliberately larger
  than what any single playthrough can hold. Use *Want* to plan your final ten.
- Variants are keyed by stable IDs, so the dataset can grow without resetting your saved picks.
