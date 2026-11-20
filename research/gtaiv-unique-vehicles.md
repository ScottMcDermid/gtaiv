# GTA IV (base game) — Unique / Special Vehicle Reference

**Research date:** 19 Nov 2026
**Scope:** Grand Theft Auto IV base game only (Niko's story). TLAD and TBoGT excluded.

## Primary sources used

| Source | What it gives | How accessed |
|---|---|---|
| **Lethal Vaccine (a.k.a. Militia) — "GTA IV Special Vehicle Guide", GTAForums topic 862242** | The canonical community list. Uses the EC / EC2 / Lustered / Hybrid / NE / Unique / AP taxonomy. Names exact luster colours to avoid. | gtaforums.com is behind Cloudflare; retrieved via Wayback Machine snapshot `20250512161517` |
| **Lethal Vaccine YouTube playlist `PLSic4LE-vaakbiMWZyT8IB79EhdLZDYT7`** | 100 videos. All URLs below were scraped from the live playlist — **none are invented.** | YouTube InnerTube browse API |
| **LancetJades — "Special Vehicle FAQ" v4.65 (GameFAQs, updated 09 Jul 2025)** | Star difficulty ratings, mission-failure flags, parking-spot mechanics, UJ flags, platform differences. | gamefaqs.gamespot.com |
| **GTA Wiki / Fandom — "Special Vehicles in GTA IV"** | Cross-check only. Significantly less complete and less accurate than the two above. | gta.fandom.com |

### Terminology (Lethal Vaccine's taxonomy — worth adopting in the app)

- **Unique** — the vehicle model itself only exists in missions (Laundromat, Police Stockade, Romero, Roman's Taxi).
- **EC (Exclusive Colour)** — primary + visible secondary colour combination that cannot be reproduced by Pay 'n' Spray or found in traffic.
- **EC2** — exclusive *invisible* secondary colour; only verifiable with a save editor. Essentially worthless visually.
- **Lustered** — a randomly-rolled pearlescent overlay colour. **Re-rolls every time the mission starts/checkpoints.** Best viewed 11:00–15:00 for black bases, dawn/dusk for silver/white bases.
- **Hybrid** — gang/tuner parts mixed with civilian parts on one model.
- **NE (No Extra)** — a part that is normally present is missing.
- **AP (All Proof)** — bullet + fire + explosion + damage proof. **Not naturally present anywhere in GTA IV**; only applied by the girlfriend "AP Conversion" trick.

### Corrections to the brief

Four models named in the request **do not exist in base GTA IV**:

- **Sultan RS** — TBoGT only
- **Bullet GT** — TBoGT only
- **Police Stinger** — TBoGT, and multiplayer-only even there
- **Hakuchou** — TLAD only

The base-game equivalents that *do* have unique variants are the plain **Sultan**, **Comet/Turismo/Infernus/SuperGT**, and **Police Stockade** (the Securicar-based police van). **Faggio**, **Dukes**, **Sabre GT**, **Buccaneer**, **NRG 900**, **Coquette**, **Cognoscenti**, **Banshee**, **Comet**, **Turismo**, **Infernus** all do have unique variants and are covered below.

---

## 1. The five safehouses / parking spots

10 storage slots total — 5 spots × 2 vehicles each. **Parking spots work from the very start of the game, even before the safehouse itself is unlocked, and keep working after a safehouse is lost.** Both sources agree on this.

| # | Spot | Neighbourhood / street | Safehouse unlocked by | Notes |
|---|---|---|---|---|
| 1 | Roman's Apartment | Mohawk Ave., **Hove Beach, Broker** | After *The Cousins Bellic* | Safehouse is **lost** after *Roman's Sorrow*; the parking spot still works. A Chavos can spawn in the spot during *Ivan the Not So Terrible* if you approach the depot from the north — it can knock your cars out. |
| 2 | Mallorie's Apartment | Joliet St., **South Bohan, Bohan** | After *Roman's Sorrow* | Traffic frequently swerves into this spot and displaces cars. Worst spot for long-term storage. |
| 3 | Roman's New Apartment | Albany Ave., **Middle Park East, Algonquin** | After *Hostile Negotiation* | Taking a taxi to the safehouse icon parks the cab **in the spot**, displacing your cars. Never trip-skip here. |
| 4 | Playboy X's Penthouse | Xenotime St., **Northwood, Algonquin** | After *The Holland Play* — **you must kill Playboy X** | Playboy's yellow Patriot auto-spawns in the west half during *Deconstruction for Beginners* and *Photo Shoot*, but only if that half is empty. |
| 5 | Alderney Safehouse (Ray's) | Mahesh Ave., **Alderney City, Alderney** | After *Smackdown* (Lethal Vaccine adds *A Long Way to Fall*) | Island itself unlocks after *Three Leaf Clover*. |

Island access gates: Algonquin + Northwood open after *Blow Your Cover*; Alderney after *Three Leaf Clover*.

**Source conflict:** LancetJades writes "Unlocked after The Holland Play (choose Playboy X)", which is ambiguous/wrong. Lethal Vaccine is explicit and correct: you get the penthouse by **killing** Playboy X.

### Parking-spot mechanics you must encode

- **"Confirming":** parking spots are *switched off* during missions. A car parked mid-mission is only held for that session. After the mission ends (pass **or** fail) you must physically return to the spot before saving, or the car vanishes. **Autosaves are useless for this.**
- Spots repair and restore any vehicle, including wrecks and helicopters.
- A vehicle with a **dead body inside will not save**. E-brake the corpse out first.
- 3+ cars can sit in a spot temporarily, but on save/reload only 2 survive, chosen at random.
- **Motorcycles creep:** each load repositions the bike slightly in whichever direction it leans. Always lean bikes **towards the curb**, or they will eventually spawn in the street and be lost.
- Boats cannot be stored at all.
- Universal fallback strategy: park the car in a spot, then get wasted or busted. The mission fails but the car survives.

---

## 2. Brucie's Exotic Exports vs. Stevie's Car Thefts

Both lists are **randomised per playthrough**, rolled at the moment the side-mission unlocks. Reload to before the first email/text to re-roll the order.

### Brucie's Exotic Exports — 10 cars, emailed

**Yes, you lose the car if you deliver it.** The lockup consumes it.

**Keeping it:** park the car in a safehouse spot, get into any other vehicle, drive away until the mission fails for losing the car. Return and it is still parked. **This failure does not register in the stats.** Then go back to the internet café and do the export properly with a duplicate.

Unlocks after *Logging On* (reply to Brucie's email at an internet café). Best done after Alderney unlocks so all 10 can be collected in one save.

### Stevie's Car Thefts — 30 cars, texted

**No, you do not lose the car.** This is the single most forgiving source of unique vehicles in the game.

**Keeping it:** drive the requested car straight to a parking spot. Unlike Brucie's, the mission does **not** fail for abandoning it — a **fresh duplicate respawns at the original location**. Collect the duplicate, deliver that to the Bohan lockup, and the list advances. Variant features (roof/no roof, supercharger, livery) may differ between duplicates.

Unlocks after *No. 1* + *A Long Way to Fall* + *Smackdown*.

**The 30th (final) car Stevie requests permanently respawns at its spawn point forever on PC and Xbox 360 — even after the side mission is complete.** It is therefore *rare*, not *missable*. **This does not happen on PS3.** If you want a particular car (e.g. the Infernus) to be permanently farmable, re-roll the list until it lands 30th.

All 10 Brucie cars and all 30 Stevie cars are confirmed EC/unique, though several are only marginally so (see per-car notes).

---

## 3. Unique vehicles by model

Difficulty is mapped from LancetJades' 5-star scale: ★=Easy, ★★=Easy–Medium, ★★★=Medium, ★★★★=Hard, ★★★★★=Very Hard.

---

### ANNIHILATOR

- **"NE" Annihilator — no right door, no visible tail rotor**
  - Colour: standard black military. Not a colour variant.
  - Luster: no.
  - Source: *A Revenger's Tragedy* (Deal) **or** *Out of Commission* (Revenge) — the crashed chopper on Happiness Island at the end.
  - Missable: **No** (available in both ending branches), but **requires mission failure** — shoot Little Jacob dead after the crash-landing cutscene. It is UJ until the mission fails.
  - Difficulty: **Medium** (★★)
  - Notes: After entering, **call anyone on your phone** — this restarts the engine and makes the critically-damaged chopper flyable. Fly it to Middle Park East (best heli spot) and land in the spot. Once saved, the right door disappears entirely, making it unique in two ways. It still has an invisible tail rotor functionally. Rare PC-only occurrence: it can appear intact near the Alderney spot during the Revenge Sentinel grab, letting you get both with one failure.
  - YouTube: Deal — https://www.youtube.com/watch?v=yNVGE3dln-4 · Revenge — https://www.youtube.com/watch?v=SKb_n9n9DIk

---

### BANSHEE

- **EC/Lustered Silver & Black Banshee** (black centre stripe)
  - Colour: silver body, black centre stripe. Hardtop or convertible — random.
  - Luster: **yes, random.** All lusters are special because the body colour is EC. Reds look best. Twilight Blue Poly and Torino Red Pearl are the least distinctive.
  - Source: *Meltdown* (Ray Boccino) — Niko auto-jacks it after the first cutscene.
  - Missable: **No failure needed.** Drive it to a spot when told to meet Ray at the bridge, then finish with another car. Must **confirm** afterwards. You cannot realistically get this *and* the Laundromat from the same run.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Luster re-rolls at the mission-start checkpoint.
  - YouTube: https://www.youtube.com/watch?v=qfIc8etm0Xs

- **EC/Lustered Light Silver & Dark Grey Banshee**
  - Colour: light silver body, **dark grey** stripe. Distinct from the Meltdown car (silver + *black*). Hardtop or convertible — random.
  - Luster: **yes, random.** All special (EC body). Lusters are unusually hard to see on this one.
  - Source: **Hossan Ramzy random encounter** (unlocks after *The Puerto Rican Connection*). The target drives it.
  - Missable: **No.** Drive-by the target, grab the money, take the Banshee, finish the encounter, then park it.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Med.Sapphire Blue Firemist / Concord Blue Poly / Race Yellow Solid / Lt.Crystal Blue Poly / Torch Green lusters make it near-identical to traffic Banshees apart from the body colour — still special, but less interesting.
  - YouTube: https://www.youtube.com/watch?v=anQzQszoOws

- **"Hybrid Banshee"**
  - Colour: **unverified.**
  - Luster: unverified.
  - Source: unverified — there is a dedicated video but no corresponding written entry in the archived guide, so this is a discovery added after June 2018.
  - Missable / difficulty / notes: **unverified.**
  - YouTube: https://www.youtube.com/watch?v=fR13cXNzm-s

- **EC Blue & White Banshee** — see §4 (Brucie's Exotic Exports)
- **EC Orange & Yellow Banshee** — see §5 (Stevie's Car Thefts)
- *(Unobtainable: black Banshee with gold stripe, cutscene-only in Search and Delete.)*

---

### BIFF

- **EC/Lustered Bright Red Biff**
  - Colour: solid bright red. All Biff body variants can appear in this colour.
  - Luster: **yes, random**, all special (EC body), but barely visible.
  - Source: *Tunnel of Death* (Derrick McReary). This is **Packie's** Biff at the rear of the convoy, **not** the one Niko drives in to block the road.
  - Missable: **No.** Once in the Stockade, U-turn and exit the tunnel the other way to shed the 3-star level, come back, and the Biff is still there — double-drive it with the Stockade to Alderney and pass the mission.
  - Difficulty: **Medium** (★★★)
  - Notes: Alternative failure route — get in the Biff instead of the Stockade and drive off; the mission fails for abandoning Packie **and clears your wanted level**. Do not fail any other way or you keep the stars. Can be obtained together with the Police Stockade.
  - YouTube: https://www.youtube.com/watch?v=alj5caZYjWo (with Police Stockade 2 of 2)

---

### BLISTA COMPACT

- **EC/Lustered White & Dark Grey Blista Compact (1 of 2)**
  - Colour: **pure white** body (traffic ones are light silver), **dark grey** siding (traffic is black).
  - Luster: **yes, random**, always special (fully EC).
  - Source: *Clean Getaway* (Vlad) — it's the target car.
  - Missable: **No** (a second one exists), but **this one requires mission failure.** Flip it with a Rancher to fail, flip it back, drive away. Or park it and shoot it until the mission fails.
  - Difficulty: **Easy** (★)
  - Notes: Luster re-rolls at the start checkpoint. Get the second one instead.
  - YouTube: https://www.youtube.com/watch?v=ma7U2OaU9_Q

- **EC/Lustered White & Dark Grey Blista Compact (2 of 2)** — identical car
  - Source: *Ivan the Not So Terrible* (Vlad). Vlad parks it outside Comrades Bar for you at mission start.
  - Missable: **No, and no failure needed.** Drive it into the Hove Beach spot across the street, then continue. **Confirm after.**
  - Difficulty: **Easy** (★)
  - Notes: **Warning** — approaching the taxi depot from the *north* during this mission spawns a Chavos in the Hove Beach spot and can knock this car out. Approach from the south.
  - YouTube: https://www.youtube.com/watch?v=Ynn7hnMH9qg (with the Ruiner)

---

### BOBCAT

- **EC/Lustered Black Bobcat**
  - Colour: EC black. Bed covered or uncovered — random.
  - Luster: **yes, random**, always special (EC body). Light blue or light brown look best.
  - Source: *Truck Hustle* (Phil Bell). Two are parked in the shootout alley.
  - Missable: **No**, but **requires mission failure** — your only window to move it fails you for abandoning the heroin truck.
  - Difficulty: **Medium** (★★★). **Vehicle is UJ** — must be pushed.
  - Notes: Park a pushing vehicle on the grass near the mission marker *before* entering the yellow marker. The randomly-coloured Bobcat that drives in mid-fight is **not** UJ and makes an emergency pusher. Push to the Alderney spot. Can be done in one failure together with both Ponies.
  - YouTube: https://www.youtube.com/watch?v=wcGS46v77Xo (with both Ponies)

- **"NE Bobcat"**
  - All fields **unverified** — video exists, no written entry in the archived guide.
  - YouTube: https://www.youtube.com/watch?v=VpZUYIpqJSM

- **EC Light Brown Bobcat** — see §5 (Stevie)

---

### BUCCANEER

- **EC Black Buccaneer** — **Stevie's Car Thefts only.** See §5. Black body with an extremely intense purple/red luster, so strong it reads as the base colour. Found at Lompoc Ave., Industrial, Bohan (the *Hostile Negotiation* warehouse). Misspelled "Bucanneer" in-game.
  - YouTube: covered in https://www.youtube.com/watch?v=5E_v29nWEfo

---

### CAVALCADE

- **Lustered Black Cavalcade with EC Black Rims**
  - Colour: black body (not EC on its own); **black rims, grille and headlights are EC** — traffic Cavalcades only get silver or gold rims.
  - Luster: **yes, random.** Any coloured luster is special.
  - Source: *Deconstruction for Beginners* (Playboy X) — the weapons car parked in the Castle Gardens alley.
  - Missable: **No, no failure needed.** Take the guns, drive it to a spot, continue the mission. **Confirm after.**
  - Difficulty: **Easy** (★)
  - Notes: **Avoid the Black luster and the Silver Stone Poly luster** — black-with-those-lusters Cavalcades exist in traffic (with silver rims), so you'd be reducing it to a rims-only difference. Get something colourful. A second dark-rimmed Cavalcade sits inside the construction site (a sniped guard falls on it).
  - YouTube: https://www.youtube.com/watch?v=75S5lNoPjDE (with the yellow Patriot)

- **"NE Cavalcade FXT"**
  - **Unverified** — video exists, no written entry. Paired with the Payback PMP 600 in the video.
  - YouTube: https://www.youtube.com/watch?v=popGqprWrdE

- **EC Dark Red Cavalcade w/ EC Black Rims** — §4 (Brucie) · **EC Dark Green Cavalcade w/ EC Dark Green Rims** — §5 (Stevie)

---

### COGNOSCENTI

- **Lustered Black Cognoscenti**
  - Colour: fully black (not EC).
  - Luster: **yes, random — and this is the whole point.** **7 out of 9 rolls give Silver Stone Poly, which is NOT special** (identical to a traffic black Cognoscenti). Only **2/9** rolls give a **Blue** or **Petrol Blue Green Poly** luster, which are the special ones. **Reload until you see a visible blue luster.**
  - Source: *Actions Speak Louder Than Words* (Gerald McReary) — the Ancelotti goons' car.
  - Missable: **No**, but **requires mission failure** (the car is destroyed on success) **and** the car is **UJ** — damage it at the start to fail, then push it.
  - Difficulty: **Medium** (★★★)
  - Notes: Push to Middle Park East (closest). Avoid picking up a wanted level en route. Drive a block away and return to repair/confirm.
  - YouTube: https://www.youtube.com/watch?v=wbhUKDp49IM · PS3/PC method with mission pass — https://www.youtube.com/watch?v=pE3g0WXIKO8

- **EC Black & Silver Cognoscenti with White Ribbon**
  - Colour: black & silver two-tone, **two white ribbons draped over the bonnet** — a unique attached object.
  - Luster: no (set colours).
  - Source: *Mr. & Mrs. Bellic* — **DEAL ending only.** Roman's wedding car outside Suffolk Church.
  - Missable: **YES — permanently lost if you choose the Revenge ending.** The ribbon version only exists on the Deal path.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Drive up carefully without triggering the cutscene, **push** it south past the intersection with your own car, then drive it to a spot and return to finish the wedding. **Confirm immediately after** the mission.
  - YouTube: https://www.youtube.com/watch?v=TQNsAY1Xd08

- **EC Black & Silver Cognoscenti (no ribbon) — 1 of 2**
  - Same two-tone, no ribbon.
  - Source: *Mr. & Mrs. Bellic* — **REVENGE ending only.**
  - Missable: **YES — lost if you choose the Deal ending.** Mirror of the above.
  - Difficulty: **Easy–Medium** (★★). Same push-away method.
  - YouTube: https://www.youtube.com/watch?v=oa1nUn1dTTs

- **EC Black & Silver Cognoscenti (no ribbon) — 2 of 2**
  - Source: *A Revenger's Tragedy* (Deal) **or** *Out of Commission* (Revenge) — the car you drive during the opening chase. Available on **both** branches.
  - Missable: **No**, but it **vanishes if you dawdle.** Get back in immediately after the chase ends and make the parking spot your first priority; you can kill a couple of close enemies first but no more.
  - Difficulty: **Easy–Medium** (★★). **Confirm after the mission.**
  - YouTube: Deal — https://www.youtube.com/watch?v=mePakZ4Nxq0 · Revenge — https://www.youtube.com/watch?v=8dtDAdeCerA

- **EC White Cognoscenti**
  - Colour: **solid pure white.** Unobtainable anywhere else including Pay 'n' Spray. (The mission script assigns non-existent colour IDs 156/161/163, so the game falls back to white.)
  - Luster: no.
  - Source: **Gracie Ancelotti random encounter** (unlocks after *Diamonds are a Girl's Best Friend*). Parked in her Acter driveway.
  - Missable: **No.** Kill her bodyguards, finish the encounter, drive it away. You can also shoot Gracie from a distance to cancel the encounter and still take the car.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=tunpEFU0W8Q

- **EC Light Blue & Blue Cognoscenti** ("baby blue") — §5 (Stevie)

---

### COMET

- **EC Bright Yellow Comet**
  - Colour: a much richer, brighter yellow than any traffic Comet, with a **set** (not random) luster that adds a touch of orange.
  - Luster: **yes, but fixed** — not a re-roll.
  - Source: *No. 1* (Brucie) — the race car Brucie gives you.
  - Missable: **No.** You keep it on mission pass. Just drive it to a spot.
  - Difficulty: **Easy** (★)
  - Notes: This Comet never gets dirty. Use it to push the SuperGT and Turismo so you can bag all three in one run.
  - YouTube: https://www.youtube.com/watch?v=NXq5SEG7MdU · with the SuperGT — https://www.youtube.com/watch?v=daFmcndP4iI

- **EC/Lustered Silver Comet**
  - Colour: EC silver — looks like an ordinary grey Comet at a glance.
  - Luster: **yes, random**, all special. **Reds look best.**
  - Source: *Hating the Haters* (Bernie Crane) — parked on the street just left of Bernie's place at mission start.
  - Missable: **No, no failure needed.** Drive it to a spot, then do the mission. **Confirm after.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=_-RQu2V6KzY

- **EC Dark Red Comet** (mauve/bronze/plum depending on light, EC yellow set luster) — §5 (Stevie)

---

### CONTENDER

- **Lustered Black Contender**
  - Colour: matte/flat black with a flat-panel back (smooth or rough — random). Body colour not EC.
  - Luster: **yes, random.** **Avoid the Black luster** — it makes the truck completely non-special. Greens are reliably special and look good.
  - Source: *Smackdown* (Derrick McReary) — Bucky Sligo drives it; it ends up in his driveway.
  - Missable: **No, no failure needed.** Grab it from the front yard and park it before killing everyone, then finish the mission.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Obtainable in the same run as the second Lustered Black Stallion.
  - YouTube: https://www.youtube.com/watch?v=HndqyEm7SGo (with Stallion 2 of 2)

- **EC Dark Grey Contender** — §5 (Stevie). Barely special; see notes there.

---

### COQUETTE

- **Lustered Black Coquette**
  - Colour: black (not EC).
  - Luster: **yes, random.** **Avoid the Torch Green luster — it makes the car completely non-special.** Lethal Vaccine advises avoiding *all* green lusters to be safe. Red, beige, yellow and blue are reliably special.
  - Source: *Payback* (Jimmy Pegorino) — driven by the Pavano goons you tail to Auto Eroticar.
  - Missable: **No, no failure needed.** Kill everyone at the dealership without blowing the car up, then take it.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Easily destroyed in the firefight. Expect a wanted level after. Can be paired with the Payback Mafia PMP 600 in one pass.
  - YouTube: https://www.youtube.com/watch?v=0IEN1OYNAUs (with Mafia PMP 600 2 of 2)

- **EC Silver Coquette** (light yellow / light brown luster) — §5 (Stevie)

---

### DF8-90

- **EC/Lustered Silver & Black DF8-90 — 4 separate chances**
  - Colour: **EC silver body** with a normal black roof.
  - Luster: **yes, random**, **always special** (EC body). Best seen on the roof; faint on the body.
  - Sources — always parked in **Faustin's driveway**, walk left at mission start:
    1. *Crime and Punishment* (Pass)
    2. *Do You Have Protection?* (Pass) — **LancetJades rates this the easiest**, since you can drive it during the mission
    3. *No Love Lost* (Pass)
    4. *Rigged to Blow* (Pass) — **last chance**
  - Missable: **YES, as a set.** After *Rigged to Blow* there are no further chances. No single instance is individually missable, but the window closes with the Faustin strand. No mission failure required for any of them.
  - Difficulty: **Easy** (★)
  - Notes: Luster re-rolls at the start checkpoint, so just restart for a better roll. It's parked in front of the Turismo that always spawns there. **Confirm after the mission.**
  - YouTube: 1 of 4 (+Speedo) — https://www.youtube.com/watch?v=fgRuoWSM04Q · 2 of 4 — https://www.youtube.com/watch?v=H_Za0wiRpU4 · 3 of 4 — https://www.youtube.com/watch?v=po90JgMJFkc · 4 of 4 (+Flatbed) — https://www.youtube.com/watch?v=ipKLQbmbBxQ

- **EC Blue DF8-90 with EC Blue Roof** — §5 (Stevie). Blue roof is notable: traffic DF8-90s *always* have a black roof.

---

### DUKES

- **Lustered Black Dukes**
  - Colour: black body, black bumpers, window sidings, door handles, side exhaust, mirrors. The combination is **not** EC.
  - Luster: **yes, random — the only thing that makes it special.** **Avoid the Black luster at all costs** (invisible = non-special). Garnet Red Poly / Midnight Blue / Lammy Orange are special but close to traffic variants. Any clearly visible colour is fine.
  - Source: *Lure* (Francis McReary) — parked on the street below the target's apartment.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy** (★)
  - Notes: **Critical step** — get in and immediately get back out *before* going upstairs, to mark it as Niko's last-driven vehicle. Skip this and it despawns when the mission ends. Supercharger/extras are randomised.
  - YouTube: https://www.youtube.com/watch?v=Jz8KMaFh42Y

- **EC Red Dukes** (EC yellow set luster) — §5 (Stevie)

---

### EMPEROR

- **Lustered Black Emperor** (normal, not beater)
  - Colour: black body, black roof — neither is EC.
  - Luster: **yes, random.** **Avoid the Pewter Gray Poly luster — that combination is a plain traffic Emperor, completely non-special.** Shadow Silver Poly and Gray Poly are still special. Anything else works.
  - Source: *Dust Off* (U.L. Paper) — after you land the Maverick at the airport, **turn around**; it's parked behind a nearby building.
  - Missable: **No, no failure needed** (it appears post-mission).
  - Difficulty: **Easy** (★)
  - Notes: Can be double-driven with the white/red Maverick from *Paper Trail*.
  - YouTube: https://www.youtube.com/watch?v=axyg9aXKGko

- **EC Black & Green Beater Emperor** (green roof, EC white luster)
  - Source: **Little Jacob's drug-delivery side missions** (any of deliveries 1–9). One of three possible beaters provided.
  - Missable: **No** — repeatable; reload and re-request the job to re-roll which beater spawns.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=erAAzHpMvC0

---

### ESPERANTO

- **EC Flat Black Esperanto**
  - Colour: flat/matte black — not obtainable anywhere else in the game.
  - Luster: no.
  - Source: **Free roam.** Always parked inside Roman's cab depot. Sometimes with a driver.
  - Missable: **YES — hard deadline.** The depot **burns down during *Roman's Sorrow***. Last chance is before you pick Roman up in that mission. After that it is gone forever.
  - Difficulty: **Easy** (★)
  - Notes: You do not need to start any mission; just walk in and take it.
  - YouTube: https://www.youtube.com/watch?v=MmU5nR0m_-w

---

### FAGGIO

- **EC Green & Black Faggio** — **Stevie's Car Thefts only.** The only special Faggio in the entire game. EC green body, black details (not EC alone), **EC light green luster.** Found at Dragon Heart Plaza, Diamond St., Chinatown, Algonquin. See §5.
  - YouTube: covered in https://www.youtube.com/watch?v=5E_v29nWEfo

---

### FELTZER

- **EC/Lustered Pink Feltzer**
  - Colour: **bright pink.** Always spawns as a convertible in GTA IV (the TBoGT version can have a roof).
  - Luster: **yes, random**, always special (EC body). Blue appears to be the most common.
  - Source: *...I'll Take Her* (Gerald McReary) — Gracie's car. (Browse the website, then call the mob daughter between 08:00 and 20:00.)
  - Missable: **No, no failure needed.**
  - Difficulty: **Medium** (★★★)
  - Notes: Once the alley marker appears you may exit the Feltzer without failing. Go fetch a **large truck and block the alley exit**, then finish the mission — the thug who drives off in the Feltzer crashes into your roadblock and you jack it. You can also just shoot him as he pulls away, or shoot Gracie at any point to fail and take it freely.
  - YouTube: https://www.youtube.com/watch?v=x1Agl75z6p4

- **EC White Feltzer** — §4 (Brucie)

---

### FLATBED

- **EC/Lustered Dark Red Flatbed**
  - Colour: EC dark red. **Always the metal-container variant.**
  - Luster: **yes, random** — but effectively invisible against the dark red. Only provable with a save editor.
  - Source: *Rigged to Blow* (Mikhail Faustin) — the bomb truck.
  - Missable: **No**, but **requires mission failure.**
  - Difficulty: **Easy** (★)
  - Notes: Drive it a little way onto the street, park, get into a random car and drive off — **keep the camera on the Flatbed the whole time** or it despawns. The mission fails for abandoning it; come back and take it. **The bomb indicator light disappears on failure — you can never keep that version.** Despite being a big rig it does fit in the Hove Beach and South Bohan spots.
  - YouTube: https://www.youtube.com/watch?v=ipKLQbmbBxQ (with DF8-90 4 of 4) · PS3/PC method with mission pass — https://www.youtube.com/watch?v=olfaOUyvdXs

---

### FREEWAY

- **EC Bronze Freeway** — §5 (Stevie). Bronze body + EC light brown set luster. Saddlebags random. Willis Wash and Lube, Saratoga Ave., Dukes.

---

### FUTO

- **Hybrid Albanian Futo GT**
  - Colour: random traffic colours (usually silver; also light blue, red, orange, dark grey) — **the colour is not the special part.**
  - Luster: no.
  - Source: **Little Jacob's drug delivery — Meadow Hills destination** only.
  - Missable: **No** — repeatable; reload and re-request until you draw the Meadow Hills delivery.
  - Difficulty: **Easy** (★)
  - Notes: **You MUST skip the cutscene** when you reach the drop point. If the cutscene plays out, an ordinary civilian Futo spawns instead. The hybrid has the Albanian Futo GT's black carbon hood, extended bumpers, GT badges and red driver's seat, but **no spoiler**. Two enemies use it as cover, so mind the damage.
  - YouTube: https://www.youtube.com/watch?v=hvwZ6sWanHE

---

### HELLFURY

- **EC/Lustered Bright Red & Black Hellfury**
  - Colour: **bright red** — a plain glossy red, versus the metallic red in traffic. Extremely hard to tell apart even side by side. Black frame.
  - Luster: **yes, random**, all special. **Very visible on the black frame** — this is the easiest way to confirm you've got the right one.
  - Source: *Ruff Rider* (Dwayne Forge) — Jayvon rides it during the chase.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Ram or drive-by Jayvon off the bike, collect the money, then **ride the Hellfury to Cluckin' Bell** to finish the mission. Park it outside, trigger the ending, then take it to a spot. (Sparing Cherise earlier unlocks her random encounter later.)
  - YouTube: https://www.youtube.com/watch?v=tSe9yvjYCHI

---

### HUNTLEY SPORT

- **EC Pitch Black Huntley Sport**
  - Colour: **pitch black** — black roof, black siding, black stripe, **and a set black luster.** The traffic black Huntley has a Lt.Beechwood Poly (light brown) luster, so the difference is very visible in daylight.
  - Luster: **yes, but set/fixed** (black).
  - Source: *Taken Out* (Fixer assassination contract). Two show up with extra goons after you attack the Stretch.
  - Missable: **No** — assassination contracts can be replayed, though they arrive in random order.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Don't blow it up in the fight.
  - YouTube: https://www.youtube.com/watch?v=GjlkRvme55Q

- **Lustered Black Huntley Sport with EC Random Stripe**
  - Colour: black with a **randomly coloured side stripe** — luster and stripe colour are rolled as a paired combination.
  - Luster: **yes, random.** **Two combinations are NOT special:** (a) Lt.Beechwood Poly luster + black stripe — looks all-black with a silvery sheen; (b) Astra Silver Poly luster + Garnet Red Poly stripe — red stripe, no visible luster. **Reload if you see either.**
  - Source: *A Revenger's Tragedy* (Deal) **or** *Out of Commission* (Revenge) — the target you chase at the start. Available on **both** branches.
  - Missable: **No, no failure needed.**
  - Difficulty: **Medium** (★★★). **Vehicle is UJ** — must be pushed.
  - Notes: Check the stripe/luster **during the chase** before committing. After the chase, kill the casino goons, then push it with another vehicle to the Alderney spot. Faster alternative (requires failure): shoot Jacob dead at the very start and push it from its original location — much shorter distance. LancetJades also recommends the cop-transport trick here.
  - YouTube: Deal — https://www.youtube.com/watch?v=mePakZ4Nxq0 · Revenge — https://www.youtube.com/watch?v=8dtDAdeCerA

- **EC Black & Green Huntley Sport with EC Gold Stripe** ("Rasta" Huntley on a civilian body)
  - Colour: Rasta scheme — black top, green bottom, gold divider stripe — **on a civilian Huntley Sport body**. Has the civilian **rear-mounted** exhausts and civilian grille; real gang Huntleys have side-mounted exhausts and gang grilles.
  - Luster: no.
  - Source: **Little Jacob's 10th and final drug delivery.** Provided for you.
  - Missable: **No** — the 10th delivery can be re-run.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=WKDmIABsarY (with Hybrid Triad Intruder)

- **EC Black & Gold Huntley Sport**
  - Colour: black top, gold bottom, black side stripe, **set yellow luster.**
  - Luster: yes, set.
  - Source: **Brucie's boating activity** (friend activity; unlocked after *No. 1*, needs Algonquin). You drive it to the dock; it waits for you at the end.
  - Missable: **No** — repeatable, and still available after 100%. Classed as **rare**, not special.
  - Difficulty: **Easy** (★)
  - Notes: The Squalo used in this activity is an EC black/green one but boats cannot be stored.
  - YouTube: https://www.youtube.com/watch?v=1-y5SZIUvWQ

- **EC Light Blue & Black Huntley Sport** — §5 (Stevie)

---

### INFERNUS

- **EC Orange & Black Infernus** (Bryce Dawkins' car)
  - Colour: bright orange-gold body, black side stripe. **Green luster visible under the door stripes.**
  - Luster: yes, set.
  - Source: Given to you **AFTER** *Buoys Ahoy* (Bernie Crane). Bernie phones you and a mission icon appears.
  - Missable: **No** — the icon and the car persist indefinitely until you collect it.
  - Difficulty: **Easy** (★)
  - Notes: **You cannot farm duplicates.** Pushing it too far from the map marker makes it vanish on screen, and even a short push triggers the "mission over" dialogue and removes the icon. Because of this, many collectors **deliberately leave it where it spawns** — that effectively gives you an 11th special vehicle on top of the 10 parking slots.
  - YouTube: https://www.youtube.com/watch?v=gNrQi9VNTL0

- **EC Yellow & Black Infernus**
  - Colour: a distinctly **yellow**-gold (not orange) body with the same black side stripe.
  - Luster: yes, set.
  - Source: Same as above — the Bernie reward Infernus **randomly rolls orange-gold or yellow-gold.** Reload to get the one you want.
  - Missable: **No.** Lethal Vaccine reports this variant as seemingly **PC-only**; LancetJades says he has only encountered the yellow-gold in recent testing. **Treat the platform split as unverified.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=kMtoRFo9Is0

- **EC Gold Infernus** — §5 (Stevie). Solid gold, no black stripe, EC yellow set luster. **If the Infernus lands as Stevie's 30th car it respawns forever on PC/360** — this is the standard way to farm the otherwise un-spawning Infernus.

---

### INTRUDER

- **Hybrid Triad Intruder**
  - Colour: random traffic colours (usually greyscale) — **not** the special part.
  - Luster: no.
  - Source: **Little Jacob's drug delivery — Cerveza Heights Car Stack destination** only.
  - Missable: **No** — repeatable.
  - Difficulty: **Easy** (★)
  - Notes: **You MUST skip the cutscene** at the drop point or a plain civilian Intruder spawns instead. The hybrid has the Triad tuner's extended bumpers and side skirts but **no spoiler**, plus civilian rear badges instead of VX badges. Two enemies use it for cover.
  - YouTube: https://www.youtube.com/watch?v=WKDmIABsarY

- **EC Grey Intruder** — §4 (Brucie) · **EC Blue Intruder** — §5 (Stevie)

---

### LAUNDROMAT (Unique model)

- **Unique Laundromat (1 of 2)**
  - Colour: standard — always carries the "Monthly Cycle" livery.
  - Luster: no.
  - Source: *Hung Out to Dry* (Vlad) — go **around the back** of the laundry instead of the front.
  - Missable: **No** (a second chance exists), but **requires mission failure** — breaking in spooks the dry cleaner and fails the mission.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=skuba9SeRgU

- **Unique Laundromat (2 of 2)** — **last chance in the game**
  - Source: *Meltdown* (Ray Boccino). During the chase, when you reach **Hematite St.**, there is a line of scripted traffic at the lights — a Laundromat is in it.
  - Missable: **YES, as a model.** After *Meltdown* the Laundromat can never be obtained again.
  - Difficulty: **Easy–Medium** (★★). **No failure needed** if you jack it fast and continue the chase in it.
  - Notes: You must be quick or the mission fails for losing the target. Easier alternative: jack it and drive straight to a spot, accepting the failure. **You cannot realistically get both the Laundromat and the Banshee from this mission.** Can be paired with the Lokus.
  - YouTube: https://www.youtube.com/watch?v=cbCzqUySdpg (with Lustered Lokus)

  > **Quirk:** once a Laundromat (or Romero) has been in memory, it can start appearing in traffic — **but only while you are driving one.** It is still a unique vehicle.

---

### LOKUS

- **Lustered Silver Lokus**
  - Colour: silver (not EC).
  - Luster: **yes, random.** **Avoid the Striking Blue luster — that exact combination exists as a traffic palette, making the car completely non-special.** Everything else is fine.
  - Source: *Meltdown* (Ray Boccino) — Luca's crew crashes it in Middle Park.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy** (★)
  - Notes: It will be **heavily damaged** and the engine won't start — **call anyone in your phonebook and the engine fires up.** Get in and back out at the park to mark it as yours. When you deliver the diamonds, **get out of the Lokus first** — vehicles tend to vanish in the final cutscene. Can be paired with either the Banshee or the Laundromat.
  - YouTube: https://www.youtube.com/watch?v=cbCzqUySdpg

- **Lustered Black Lokus**
  - Colour: black (not EC).
  - Luster: **yes, random.** **Avoid the Silver Stone Poly luster** — non-special. Red, green, blue and brown are all good.
  - Source: *Entourage* (Jon Gravelli) — three of them form Bobby Jefferson's convoy.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **The front car of the convoy is always destroyed in the pre-battle cutscene** — make sure the luster you want is on the middle or rear car. They're also fragile in the firefight. Finish the mission driving it.
  - YouTube: https://www.youtube.com/watch?v=rSm-SCzSD7E

---

### MANANA

- **EC Dark Grey & White Manana** — §5 (Stevie). Dark grey body (traffic colour) + **EC white roof**; silver set luster. The roof is a **random variant — get the one with the roof**, otherwise the car is visually unremarkable.

---

### MARBELLE

- **EC Light Blue Marbelle**
  - Colour: light blue. The body colour itself exists in traffic, but the **set luster differs**, making the shade subtly but genuinely different.
  - Luster: yes, set.
  - Source: *Uncle Vlad* (Roman) — Vlad's car during the chase.
  - Missable: **No, no failure needed, all platforms.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: After Vlad crashes, **get into the Marbelle and drive-by him from inside it.** This skips the execution cutscene; skip the ending cutscene too and Niko is left sitting in the car.
  - YouTube: https://www.youtube.com/watch?v=4KK1mqDC-yg
  - *(A separate, slightly lighter blue Marbelle exists in the Clean Getaway cutscene — unobtainable.)*

---

### MAVERICK

- **EC White & Red Maverick (1 of 2)**
  - Colour: white body with **red** bottom stripes. (Mavericks are normally coloured bodies with white stripes.) The mission script assigns the non-existent colour ID 195, so white is substituted.
  - Luster: no.
  - Source: *Dust Off* (U.L. Paper) — the chopper you follow; let it land at the Westminster helipad.
  - Missable: **No** (a second one exists), but **requires mission failure** — land it in a spot, then drive far enough away.
  - Difficulty: **Easy** (★). **Skip this one — get the Paper Trail version.**
  - YouTube: https://www.youtube.com/watch?v=oxYVXreO4mE

- **EC White & Red Maverick (2 of 2)** — identical car
  - Source: *Paper Trail* (U.L. Paper) — Niko flies it for the whole mission.
  - Missable: **No, no failure needed, nothing extra required.** Just fly it to a spot afterwards. **This is the one to get.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=jCXE3ZSMDKc

- **EC White & Black Maverick**
  - Colour: white body with **black** bottom stripes.
  - Luster: no.
  - Source: *Paper Trail* — the chopper Jacob is supposed to RPG.
  - Missable: **No**, but **requires mission failure + a phone replay**, an Annihilator, and Kiki's (or Francis') wanted-level perk.
  - Difficulty: **VERY HARD** (★★★★★). Widely considered one of the two hardest vehicles in the game.
  - Notes: **Completely unobtainable on PS3** — the Annihilator always despawns the moment you enter Jacob's Maverick. Procedure: kill all 200 pigeons → collect the Annihilator from the MeTV helipad **before answering the phone call** → start the mission, skip the cutscene, switch to the Annihilator → shoot the target chopper until the pilot bails and it crashes on land → call Kiki to clear the 2-star level → call 911 for a Fire Truck → push the **wreck** to Middle Park East **without ever taking the camera off it**, and fast, because traffic buildup deletes it → line it up near (not in) the spot → push it in and **immediately accept the phone-replay text to teleport out**, or the wreck vanishes. Then complete Paper Trail normally and keep the white/red Maverick too.
  - YouTube: https://www.youtube.com/watch?v=kmWRjLvwbsw (Lethal Vaccine's version; LancetJades credits the technique to Gustavo/Darksunnyday, and the written guide credits a video by zazaza691)

- **EC Red & White Maverick**
  - Colour: EC red body with EC white/silver stripes. A red/white Maverick exists in traffic but the shades differ.
  - Luster: no.
  - Source: *Buoys Ahoy* (Bernie Crane) — a Maverick that appears in the sky during the boat chase.
  - Missable: **No**, but **requires mission failure** and is luck-heavy.
  - Difficulty: **VERY HARD** (★★★★★) — Lethal Vaccine calls this **the hardest special vehicle in IV**, on par with the white/black Maverick.
  - Notes: Needs a rocket launcher (one spawns on the small rock island north of Algonquin) plus an SMG/carbine, and ideally a heavy pusher pre-parked at Hove Beach. You must RPG the chopper at the exact moment the mission fails, then kill Bernie, then recover it (often as a wreck requiring a phone replay). Expect a wanted level — use Kiki or Francis.
  - YouTube: https://www.youtube.com/watch?v=c_5Ytn1Swa0 (written guide credits zazaza691)

- **EC White & Gold Maverick** (Dimitri's)
  - Colour: white with gold stripes; **Desert Red luster**, hard to see against the white.
  - Luster: yes, set.
  - Source: *A Revenger's Tragedy* — **DEAL ending only.** Dimitri's chase helicopter, after the Happiness Island crash.
  - Missable: **YES — permanently lost if you take the Revenge ending.** Also **requires mission failure** (losing Dimitri).
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Kill the nearby Russian, get in, **call someone on the phone to start the engine.** It is critically damaged — clip nothing. Bohan is the suggested target spot. The health cheat fully repairs it if you don't mind the cheat counter.
  - YouTube: https://www.youtube.com/watch?v=W3HrxDGk7nw

- **EC Solid Black Maverick**
  - Colour: solid black with no white base lines (the word MAVERICK remains).
  - Luster: no.
  - Source: *Babysitting* (Derrick McReary) — the enemy chopper you're told to shoot down.
  - Missable: **No**, but **requires cheats, mission failure and a long push.**
  - Difficulty: **VERY HARD** (★★★★★)
  - Notes: Swim to Charge Island, spawn an Annihilator (359-555-0100), then **capsize Derrick's boat with it** — you must fail *that specific way* or you respawn in Alderney. Afterwards knock the fleeing Maverick down over streets near Grand Easton Terminal and push the wreck to the Middle Park East spot.
  - YouTube: https://www.youtube.com/watch?v=50leFQRD_Fk

---

### MERIT

- **Lustered/EC2 Silver Merit** (Michelle's car)
  - Colour: silver — **the body colour is NOT special.** It has an invisible EC2 black secondary colour only visible in a save editor.
  - Luster: **yes, random — this is the only visible special property.** **Avoid the Striking Blue luster** — that makes it identical to a traffic silver Merit and reduces it to a worthless EC2-only car. **Reds look best and are definitely special.**
  - Source: *First Date* (Michelle/Karen). You're given it at mission start.
  - Missable: **No, no failure needed.** Bowl, drop her at Rotterdam Hill, drive it to a spot.
  - Difficulty: **Easy** (★)
  - Notes: Luster re-rolls at the mission-start checkpoint.
  - YouTube: https://www.youtube.com/watch?v=e2sW8E8qJTU — **note: the video title says "Black Merit" while both written guides say "Silver Merit". Treat the title as a likely typo; colour per the written guides is silver.**

---

### MOONBEAM

- **EC Dark Red & Black Moonbeam** — §5 (Stevie). EC dark red body, EC black roof and stripe, striking **EC red/purple luster.** Charge Island parking lot near a spherical storage tank.

---

### NRG 900

- **Lustered Black NRG 900**
  - Colour: black — **not** EC.
  - Luster: **yes, random — the only special property, and it is a trap.** **Avoid Formula Red (red) and Vermillion Solid (purple/pink)** — both occur on traffic black NRG 900s. **Go for green, blue or yellow**, which are guaranteed special. Lethal Vaccine notes the first video for these cars actually shows a *non*-special Vermillion Solid bike being taken.
  - Source: *Easy As Can Be* (Brucie). Spawns when you exit the alley to the **north-west** after getting into the target Oracle.
  - Missable: **No, no failure needed.**
  - Difficulty: **Medium** (★★★)
  - Notes: Knock the rider off. F or RR variant is random. Part of the famous four-vehicle *Easy As Can Be* run (see Oracle below).
  - YouTube: https://www.youtube.com/watch?v=Ez4NwRWDIno (written guide also credits a Viv1d Shadows video)

- **EC Red & Dark Grey NRG 900** — §4 (Brucie) · **EC Dark Grey NRG 900** — §5 (Stevie)

---

### ORACLE

- **EC/Lustered Silver Oracle**
  - Colour: EC silver.
  - Luster: **yes, random**, all special (EC body), and clearly visible against silver.
  - Source: *Easy As Can Be* (Brucie) — it's the car Brucie wants.
  - Missable: **No**, but **requires mission failure** (delivering it loses it). Park it, jack any car, drive away — fails for abandonment, car stays.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=7i1U9B09fFM (with the Schafter and Sultan)

- **NE Oracle** (no bonnet medallion)
  - Colour: **random traffic colour** — the colour is irrelevant.
  - Luster: no.
  - Source: *Luck of the Irish* (Elizabeta) — Packie's car.
  - Missable: **No**, but **requires mission failure** — snipe Packie **dead** (not just wounded, or he drives off).
  - Difficulty: **Easy–Medium** (★★). **Vehicle is UJ** — must be pushed one block south to the Bohan spot.
  - Notes: **Descend via the outside fire-escape stairs.** Using the interior stairs makes the car disappear. The missing Übermacht medallion is normally exclusive to the Irish tuner Oracle, but this one also lacks the tuner body kit.
  - YouTube: https://www.youtube.com/watch?v=jPFuRfRMSK0

- **EC "Random" Irish Oracle**
  - Colour: **randomised from the civilian Oracle palette** — and that is exactly what makes it special. Irish/tuner Oracles (common in Steinway) are *always* black with a Dark Green Poly luster.
  - Luster: varies with the rolled colour.
  - Source: *Taking in the Trash* (Ray Boccino) — assailants arrive in it after you've collected both diamond bags.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **AVOID any black body colour** — a Pay 'n' Spray'd Irish Oracle also comes out black (with a Pastel Alabaster Solid luster), so black ones are not clearly special. Lethal Vaccine recommends the red one. Colour re-rolls at the start checkpoint. Easiest method: kill the passenger, drive the Trashmaster to a safehouse, then kill the driver there and park the Oracle. **Bodies must be out of the car.**
  - YouTube: https://www.youtube.com/watch?v=_pyi5yzyzSk

- **EC/Lustered White Oracle** (Ray's car)
  - Colour: EC cream-white.
  - Luster: **yes, random**, all special (EC body).
  - Source: *...Pest Control* (Jimmy Pegorino) — one of the two cars you tail.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: This is the same Oracle Ray drives (in AP form) at the start of *Truck Hustle*, where it is unobtainable — you can recreate the AP version here using the girlfriend conversion. Can be double-driven to Middle Park East together with the hybrid-grille PMP 600 from the same mission. **Get the bodies out.**
  - YouTube: https://www.youtube.com/watch?v=xKTYnXE9tb4

---

### PATRIOT

- **EC/Lustered Yellow Patriot — 3 separate chances** (Playboy X's)
  - Colour: **EC bright yellow.** Never has roof lights; **never has the American flag door decal** (this is how you distinguish it from Stevie's yellow Patriot).
  - Luster: **yes, random**, all special (EC body) — but essentially invisible against the yellow, so any roll is fine.
  - Sources:
    1. *Blow Your Cover* (Elizabeta) — parked in the nearby lot at mission start
    2. *Deconstruction for Beginners* (Playboy X) — **already sitting in Playboy X's parking spot**
    3. *Photo Shoot* (Playboy X) — same, **last chance**
  - Missable: **YES, as a set** — after *Photo Shoot* there are no more. No mission failure required for any of them.
  - Difficulty: **Easy** (★). Instances 2 and 3 are, in Lethal Vaccine's words, **"the easiest special vehicle in the whole GTA series"** — it spawns pre-parked in your own spot and you simply don't touch it.
  - Notes: **It only appears if the WEST half of the Northwood parking spot is clear — and sometimes not even then.** Keep that half empty.
  - YouTube: 1 — https://www.youtube.com/watch?v=XtIqYCzG4Fs · 2 — https://www.youtube.com/watch?v=75S5lNoPjDE · 3 — https://www.youtube.com/watch?v=q3yVKlJ5VD4

- **EC/Lustered Light Silver Patriot**
  - Colour: EC light silver. Flag decal randomised.
  - Luster: **yes, random**, always special.
  - Source: *Photo Shoot* (Playboy X) — parked **south** of the basketball court.
  - Missable: **YES — single appearance.** No failure needed.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=q3yVKlJ5VD4

- **EC/Lustered Dark Silver Patriot**
  - Colour: EC dark silver (a subtly different shade from the light silver one). Flag decal randomised.
  - Luster: **yes, random**, always special.
  - Source: *Photo Shoot* — parked **east** of the basketball court (behind it from where you arrive).
  - Missable: **YES — single appearance.** No failure needed.
  - Difficulty: **Easy** (★)
  - Notes: All four *Photo Shoot* vehicles (yellow Patriot, Sabre GT, both silver Patriots) can be banked in one pass by shuttling them to spots before entering the yellow marker.
  - YouTube: https://www.youtube.com/watch?v=q3yVKlJ5VD4

- **EC/Lustered Deep Red Patriot**
  - Colour: EC deep red, unlike anything in traffic. Flag decal randomised.
  - Luster: **yes, random**, all special (EC body).
  - Source: **Dwayne Forge's "Backup" perk.** Needs ~80% Like / 60% Respect with Dwayne. His goons arrive in this, the deep red PMP 600, or the deep red Presidente (random).
  - Missable: **Conditionally.** Classed as **rare** because it's repeatable after 100% — **but you must have killed Playboy X and spared Dwayne**, and if your Like with Dwayne drops too far he dumps you and the Backup option disappears permanently.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=tgntSqQXfxw

- **EC Light Silver Patriot** — §4 (Brucie). Same light silver as the *Photo Shoot* car but with a different invisible secondary colour.
- **EC Yellow Patriot** — §5 (Stevie). Same yellow as Playboy X's, **but with the flag decal and a luster that can never appear on Playboy's** — genuinely a different special vehicle.
- *(Unobtainable: the lowrider Patriot in Dead End — it loses the lowered suspension as soon as the occupants exit.)*

---

### PCJ 600

- **Hybrid PCJ 600**
  - Colour: the standard red/gold-rim traffic palette — **the colour is not special** (reproducible via Pay 'n' Spray).
  - Luster: no.
  - Source: *I Need Your Clothes, Your Boots, and Your Motorcycle* (Gerald McReary). You're required to ride it.
  - Missable: **No, no failure needed** — but **it is only special when it rolls the hybrid form.**
  - Difficulty: **Easy** (★) once it rolls correctly.
  - Notes: **Keep reloading until the bike spawns with BOTH the gold pipe frame and the steel-coloured pipe frame at once.** If it has only one, it is an ordinary PCJ 600. Multi-gauge consoles are another hybrid tell. This can take several attempts.
  - YouTube: https://www.youtube.com/watch?v=3lyYub7s0-Y

- **EC Silver & Black PCJ 600** — §4 (Brucie)

---

### PMP 600

- **Lustered Black "Mafia" PMP 600 (1 of 2)** — spoiler, standard Mafia grille
  - Colour: black (a flatter black than the gloss black of real Mafia PMP 600s).
  - Luster: **yes, random. THREE lusters make it completely non-special: Currant Red Solid, Black, and Nassau Blue Poly. Aim for a GREEN luster** — guaranteed special.
  - Source: *She's a Keeper* (Gerald McReary) — two of the four chase cars.
  - Missable: **No** (a better second chance exists), but **requires mission failure.**
  - Difficulty: **Easy** (★)
  - Notes: **Completing the mission deletes all four chase cars — even ones already sitting in a parking spot.** The Vincent entering the destination lot triggers the wipe. You must fail (kill Gracie / blow up the Vincent). Can be taken together with the Mafia Sentinel in one failure. **Get the bodies out — e-brake them loose.** Prefer the *Payback* version instead.
  - YouTube: https://www.youtube.com/watch?v=c4AZAiU-Ubs (with Mafia Sentinel 1 of 2)

- **Lustered Black "Mafia" PMP 600 (2 of 2)** — same car, better source
  - Source: *Payback* (Jimmy Pegorino) — waiting in Pegorino's driveway at mission start.
  - Missable: **No, no failure needed.** Park it, then do the mission.
  - Difficulty: **Easy** (★). Same luster warnings. Pairs with the Lustered Black Coquette.
  - YouTube: https://www.youtube.com/watch?v=0IEN1OYNAUs

- **Hybrid/Lustered Black "Mafia" PMP 600 (1 of 2)** — spoiler **+ hybrid grille**
  - Colour: black. The **hybrid grille (civilian + Mafia grilles rendered together) makes it special regardless of luster.**
  - Luster: **yes, random.** Same three non-special lusters to avoid (Currant Red Solid / Black / Nassau Blue Poly) if you want it luster-special too.
  - Source: *...Pest Control* (Jimmy Pegorino) — one of the two tailed cars.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★). Double-drive to Middle Park East with the white Oracle. **Bodies out.**
  - YouTube: https://www.youtube.com/watch?v=xKTYnXE9tb4

- **Hybrid/Lustered Black "Mafia" PMP 600 (2 of 2)**
  - Source: *Out of Commission* — **REVENGE ending only.** Parked at the abandoned casino.
  - Missable: **YES on this branch**, but not overall — the identical car is on the Deal-neutral *Pest Control*, so **get it from Pest Control.**
  - Difficulty: **Easy–Medium** (★★). No failure needed.
  - YouTube: https://www.youtube.com/watch?v=8dtDAdeCerA

- **Hybrid/EC White "Mafia" PMP 600**
  - Colour: **EC white.** White PMP 600s exist in traffic but carry a Flax luster; this one has a **set black luster**, changing the apparent shade. Plus the hybrid grille and Mafia spoiler.
  - Luster: yes, set (black).
  - Source: *Museum Piece* (Ray Boccino) — four PMP 600s are scattered around the Libertonian; the white ones are mostly at the sides and rear.
  - Missable: **No, no failure needed.** Easiest route: **grab it from behind the museum BEFORE going to Johnny**, park it, then do the mission. **Confirm after.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=anCALU8_0zc

- **Hybrid Black "Mafia" PMP 600**
  - Colour: gloss black — **NOT EC.** You can recreate this exact car by repeatedly Pay 'n' Spraying the white one.
  - Luster: no.
  - Source: *Museum Piece.* Special only for the hybrid grille.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=anCALU8_0zc

- **EC/Lustered Deep Red PMP 600**
  - Colour: EC deep red — darker than traffic red, **lighter than Brucie's deep crimson export PMP 600.**
  - Luster: **yes, random**, all special (EC body).
  - Source: **Dwayne's "Backup" perk** (see Patriot above for conditions).
  - Missable: Conditionally — same Dwayne caveats.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=0jbpdF5eTFs

- **EC Deep Crimson PMP 600** — §4 (Brucie) · **EC Light Green PMP 600** / **silver w/ blue luster** — §5 (Stevie)

---

### POLICE STOCKADE (Unique model — Securicar-based)

> Both guides call this the single greatest prize in GTA IV. It randomly spawns **with or without a bulletproof mesh over the windscreen** — the mesh genuinely is bulletproof. Reload until you get the mesh.

- **Unique Police Stockade (1 of 2)**
  - Colour: standard police livery.
  - Luster: no.
  - Source: *Three Leaf Clover* (Patrick McReary) — two block the street in Chinatown after the bank escape.
  - Missable: **No** (a far better second chance exists), but **requires mission failure**, and **the vehicle is UJ and must be pushed while you still have 5 stars.**
  - Difficulty: **HARD** (★★★★)
  - Notes: **You must NOT have completed *A Long Way to Fall* before attempting this.** The trick: call 911 for a Fire Truck, push the Stockade west until the mission fails for abandoning Packie/Derrick, then **push it into Ray Boccino's Little Italy mission marker** — starting that mission wipes the 5-star level while (usually) leaving the Stockade intact. Then push at leisure to Middle Park East and finish Ray's mission. Alternatives: the remove-wanted-level cheat (267-555-0100), or the cop-transport trick. **Escaping the wanted level first does not work — the trucks despawn.**
  - YouTube: https://www.youtube.com/watch?v=_2ZdokIWHqQ

- **Unique Police Stockade (2 of 2)** — **the one to get**
  - Source: *Tunnel of Death* (Derrick McReary) — the convoy van.
  - Missable: **YES, as a model.** *Tunnel of Death* is the last appearance in the game. **No mission failure needed.**
  - Difficulty: **VERY HARD** (★★★★★) for the no-failure version. **Vehicle is UJ after you ditch it for the Presidente.**
  - Notes: Pre-park a **Fire Truck** at the Alderney spot. Get into the Stockade, U-turn and exit the tunnel towards Algonquin to shed the 3-star level, then double-drive the Fire Truck and the Stockade all the way to Alderney, pushing the Stockade — **back into it** rather than nose-first, to spare both engines. Never get far from the Stockade. Call Kiki for any wanted level. Then return for the Presidente and finish the mission. **Confirm after.** Much easier failure routes exist: shoot Packie dead behind the patrol car (only ~1 star remains), or melee Packie down after luring him east and drive off in the Biff. Can be obtained together with the red Biff.
  - YouTube: https://www.youtube.com/watch?v=alj5caZYjWo (with the red Biff)

---

### PONY

- **EC/Lustered Light Silver Pony**
  - Colour: EC light silver. Variant and livery randomised.
  - Luster: **yes, random**, all special (EC body) — but **8/11 rolls give Astra Silver Poly**, which is barely visible. The 3/11 good rolls are **Wild Strawberry Poly, Alabaster Solid and Saxony Blue Poly.**
  - Source: *Truck Hustle* (Phil Bell) — the Pony on your **LEFT** once you're in cover.
  - Missable: **No**, but **requires mission failure.** **Vehicle is UJ** — must be pushed to Alderney.
  - Difficulty: **Medium** (★★★)
  - YouTube: https://www.youtube.com/watch?v=wcGS46v77Xo

- **Lustered Dark Silver Pony**
  - Colour: dark silver — **NOT EC.**
  - Luster: **yes, random, and this one is genuinely dangerous.** **8/11 rolls give Astra Silver Poly, which makes the van IDENTICAL to a traffic Pony — completely non-special.** Only Wild Strawberry Poly, Alabaster Solid or Saxony Blue Poly make it special.
  - Source: *Truck Hustle* — the Pony on your **RIGHT**.
  - Missable: **No**, but **requires mission failure.** UJ, must be pushed.
  - Difficulty: **Medium** (★★★)
  - Notes: All three *Truck Hustle* vehicles (black Bobcat + both Ponies) can be taken with a single failure, but Lethal Vaccine advises one per save file.
  - YouTube: https://www.youtube.com/watch?v=wcGS46v77Xo

- **EC/Lustered Dark Grey Pony**
  - Colour: **EC dark grey.** Variant and livery randomised.
  - Luster: **yes, random**, all special (EC body). Same 8/11 Astra Silver Poly problem; **Wild Strawberry Poly or Saxony Blue Poly look best.**
  - Source: *Liquidize the Assets* (Jon Gravelli) — the vans at the Alderney location.
  - Missable: **No**, but **requires mission failure** — the mission objective is to destroy all the vans, so passing is impossible with one in hand.
  - Difficulty: unrated by LancetJades (a late discovery); Lethal Vaccine describes the method as simple. **Estimate: Easy–Medium.**
  - Notes: Jump the gate, kill nearby enemies, drive one away — the mission fails as you leave.
  - YouTube: https://www.youtube.com/watch?v=RWPdcUmdLEs · PS3/PC method with pass — https://www.youtube.com/watch?v=tAu1BkObecw

---

### PRESIDENTE

- **EC/Lustered Deep Red Presidente with EC Black Rims**
  - Colour: EC deep red with **EC black rims** (black rims are not unheard of on Presidentes, but this body colour is).
  - Luster: **yes, random**, all special (EC body).
  - Source: **Dwayne's "Backup" perk** (see Patriot for conditions).
  - Missable: Conditionally — same Dwayne caveats.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=FbgdXn9lU_c

---

### PRIMO

- **EC/Lustered Red Primo (with EC Gold Details)**
  - Colour: a darker red than the standard Primo red — **EC.**
  - Luster: **yes, random**, all special. Blaze Red is the least distinctive.
  - Source: *Undertaker* (Francis McReary) — parked across from Suffolk Church when the shootout begins.
  - Missable: **No, no failure needed** (though failure is far easier).
  - Difficulty: **Medium** (★★★)
  - Notes: **Because it's lustered it also rolls a random Colour 4** — **Taxi Yellow gives EC GOLD details** (rims, window sidings, grille, door handles, exhausts); **Very White gives non-EC white details.** Chase the gold version — it takes many reloads. No-failure method: kill all Albanian waves including the final extra carload, then double-drive the Primo and the Romero to Middle Park East. Failure method: just drive it away and fail for abandoning the Romero.
  - YouTube: https://www.youtube.com/watch?v=-SQpAk4wNp4 (with the Schafter and both Primos)

- **Lustered Blue Primo (with EC Gold Details)**
  - Colour: blue — **NOT EC**, this blue is in traffic.
  - Luster: **yes, random. AVOID the Jasper Green Poly luster — that exact combo is the traffic Primo, so the car would be completely non-special.** Striking Blue is special but marginal.
  - Source: *Undertaker* — same location as the red Primo.
  - Missable: **No, no failure needed.**
  - Difficulty: **Medium** (★★★)
  - Notes: Same Colour-4 gold/white roll. **Lethal Vaccine specifically recommends holding out for the EC gold details on this one**, because the gold guarantees the car is special even if you misjudge the luster.
  - YouTube: https://www.youtube.com/watch?v=-SQpAk4wNp4

- **Hybrid "Spanish" Primo with EC Yellow Details**
  - Colour: metallic red with yellow rims/grille and a spoiler — looks like a standard Spanish tuner Primo.
  - Luster: no.
  - Source: *Street Sweeper* (Manny Escuela) — parked at the garage where the targets are; kill the driver before he drives off.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Two hybrid tells — it has the **horizontal civilian grille** instead of the tuner diamond-hatch, and a **solid front bumper** without the tuner's lower holes. The yellow details (rims, grille, door handles, window sidings, exhausts) are a slightly different yellow from a real Spanish Primo's, so they count as EC.
  - YouTube: https://www.youtube.com/watch?v=7MMuAGGpNic

- **"EC Black Primo with EC Black Rims"**
  - All fields **unverified** — video exists, no written entry in the archived guide.
  - YouTube: https://www.youtube.com/watch?v=dLabVbvRFoI

---

### RANCHER

- **EC/Lustered Green & Blue Rancher**
  - Colour: **green top, blue middle, black lower panels** — pickup variety. Also has **both** extra roof lights **and** a grille guard; traffic Ranchers only ever get one or the other.
  - Luster: **yes, random**, always special, but hard to see against these colours.
  - Source: *Babysitting* (Derrick McReary) — appears in the ending cutscene; it's waiting on the Bohan docks afterwards, down the stairs.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy** (★)
  - Notes: **SOURCE CONFLICT.** LancetJades states it is **"UNAVAILABLE ON PS3"** (always despawns after the cutscene, "confirmed by multiple people"). **Lethal Vaccine explicitly says this was later disproven and it IS obtainable on PS3.** Lethal Vaccine's guide is the newer claim. Flag as disputed in the app. Both agree: turn off autosave, **don't skip the cutscene instantly** (wait a few seconds), and handle it gently — it has an unusually low damage tolerance.
  - YouTube: https://www.youtube.com/watch?v=k-eMzD1Kfwc

- **EC/Lustered Black & Silver Rancher**
  - Colour: black body with an **EC silver side stripe.** Always the pickup variety; boxes in the bed are random.
  - Luster: **yes, random**, all special (EC combination). Concord Blue Poly / Silver Stone Poly / Pewter Gray Poly are the least distinctive.
  - Source: *If the Price is Right* (Roman) — **DEAL path only.** Outside the Port Tudor warehouse, used for the truck chase.
  - Missable: **YES if you take the Revenge ending — unless you deliberately fail.** If you want Revenge, grab the Rancher and then let the Mule escape or kill Phil Bell to fail *If the Price is Right*, then continue to Revenge.
  - Difficulty: **Medium** (★★★)
  - Notes: You can get **both** this and the red Sanchez in one run: chase the truck with either, park it, return to the warehouse (**do not finish the mission**), take the other, finish, park, then **confirm both.**
  - YouTube: https://www.youtube.com/watch?v=QM8vogdiJqc (with the Sanchez)

- **"NE Rancher"**
  - All fields **unverified** — video exists, no written entry.
  - YouTube: https://www.youtube.com/watch?v=TKVjwmJUg1o

- **EC Dark Red & Grey Rancher** — §5 (Stevie)

---

### REBLA

- **Lustered Black "Russian" Rebla**
  - Colour: black with Russian bumpers.
  - Luster: **yes, random. AVOID Pewter Gray Poly, Lt.Beechwood Poly and Black.** Lt.Beechwood Poly is what you get from Pay 'n' Spraying a traffic Russian Rebla, so it is definitely not special. The other two are flagged as probably-not-special/unknown. **Anything colourful is safe.**
  - Source: *A Revenger's Tragedy* — **DEAL ending only.** A few sit in the abandoned-casino compound you assault.
  - Missable: **YES — permanently lost if you take the Revenge ending.** No mission failure needed.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Don't destroy it in the firefight. **Confirm after.** Part of the four-vehicles-at-once Deal run.
  - YouTube: https://www.youtube.com/watch?v=mePakZ4Nxq0

- **EC Dark Brown Rebla** — §5 (Stevie)

---

### ROMAN'S TAXI (Unique model)

- **Unique/EC Solid Black Roman's Taxi**
  - Colour: **completely solid black** — including the front-left fender, which on every other Roman's Taxi is a different, lighter shade. Pay 'n' Spray black always gives a brown/discoloured fender, so this exact look is unreproducible.
  - Luster: no.
  - Source: *The Cousins Bellic* — the very first vehicle in the game.
  - Missable: **YES — single appearance, and the method is destructive.** Passing the mission removes it. Abandoning it despawns it. Wrecking it doesn't save. **The ONLY way is to park it in the Hove Beach spot and then get WASTED or BUSTED.** That means **+1 Wasted (or Busted) on your stats permanently.**
  - Difficulty: **Easy** (★) mechanically.
  - Notes: On **PS3**, a pedestrian may be found trying to drive it out of the spot after you respawn — ram it, pull them out, re-park. This does not happen on PC. If you refuse to take the stats hit, take the black/dark-grey version instead.
  - YouTube: https://www.youtube.com/watch?v=_Jeuq5R3WhA

- **Unique/EC Black & Dark Grey Roman's Taxi** (discoloured front-left fender)
  - Colour: black body with a lighter **dark grey front-left fender.**
  - Luster: no.
  - Source: Many — *It's Your Call*, *Three's a Crowd*, *Bleed Out*, *Easy Fare*, *Jamaican Heat*, *Uncle Vlad*, *Roman's Sorrow*, Roman's taxi-service perk, and the taxi-driver side job.
  - Missable: **YES — hard deadline. Roman's cab depot burns down during *Roman's Sorrow*.** Additionally the taxi-service perk switches to a Cavalcade after *Hostile Negotiation*, and taxi side missions end after 10 fares or after *Russian Revolution*.
  - Difficulty: **Easy** (★). **No failure needed** — just pass *It's Your Call* and park it.
  - Notes: The simplest route is *It's Your Call*. You can grab this and the beige Willard together from *Bleed Out*.
  - YouTube: https://www.youtube.com/watch?v=doreITdECoA
  - *(Unobtainable: a genuinely BP/FP Roman's Taxi exists in Roman's Sorrow but loses its proofing when the mission ends either way.)*

---

### ROMERO (Unique model — hearse)

- **Unique Romero**
  - Colour: standard hearse black.
  - Luster: no.
  - Source: *Undertaker* (Francis McReary). At mission start it's parked outside the church but **UJ**. After the mission it drives off.
  - Missable: **YES — single appearance in the game.** **No failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Easiest method — after passing, **run ahead on foot and stand in front of it** to make it stop, then jack it. If you killed Francis it turns left into a dead end and u-turns (block it with a car from the cemetery lot); if you killed Derrick it's right next to you after the cutscene. Shooting at it usually makes the driver flee. Failure method: drive it to a spot at mission start, then shoot Packie. Like the Laundromat, Romeros can appear in traffic **only while you're driving one.**
  - YouTube: https://www.youtube.com/watch?v=_j6xm7YknSU (with the black Washington)

---

### RUINER

- **EC/Lustered Black & Yellow Ruiner with EC White or Gold Rims**
  - Colour: black body (in traffic) with an **EC yellow side stripe** — the stripe is always special, so this car can never be entirely worthless.
  - Luster: **yes, random**, and it is **paired with a random Colour 4 (the rims).** Rims are either **Very White** or **Race Yellow Solid (gold).**
    - **White rims → fully EC, nothing to worry about.**
    - **Gold rims + Med.Flax luster (light brownish) → the luster and rims are NOT special**; this matches a traffic black Ruiner and leaves only the stripe as special.
    - **Gold rims + Taxi Yellow (yellow) luster → fully special, and the best-looking combination.**
  - Source: *Ivan the Not So Terrible* (Vlad) — Ivan's bike... no, Ivan's **car** during the chase.
  - Missable: **YES — single appearance.** **No failure needed.**
  - Difficulty: **Easy** (★)
  - Notes: When Ivan abandons it at the construction site, **get in and move it slightly** before chasing him on the rooftops, or it despawns when the mission ends. Sunroof open or closed is fixed at spawn. You can spare or kill Ivan (sparing unlocks him as a random character later).
  - YouTube: https://www.youtube.com/watch?v=Ynn7hnMH9qg (with the Blista Compact)

---

### SABRE / SABRE GT

- **EC/Lustered Dark Grey & Black Sabre GT**
  - Colour: **EC dark grey** body with a black stripe (the stripe colour itself is in traffic; the grey body is not).
  - Luster: **yes, random**, **all special** because the body is EC. Twilight Blue Poly / Securicor Dark Green / Astra Silver Poly / Silver Stone Poly are special but look close to traffic Sabre GTs.
  - Source: *Photo Shoot* (Playboy X) — parked near the basketball court.
  - Missable: **YES — single appearance.** **No failure needed** — take it before (or as you leave) the target area. **Confirm after.**
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=q3yVKlJ5VD4

- **EC Black & Green Beater Sabre** (green stripe along the lower body, EC white luster)
  - Source: **Little Jacob's drug deliveries 1–9.** One of three possible beaters.
  - Missable: **No** — repeatable; reload and re-request to re-roll the beater.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=mdPySrOBcZc

- **EC Red & White Sabre GT** — §4 (Brucie) · **EC Green & Dark Green Sabre GT** — §5 (Stevie)

---

### SANCHEZ

- **EC/Lustered Bright Red Sanchez**
  - Colour: **solid bright red** including the normally-silver fuel tank, light guard and front shocks.
  - Luster: **yes, random**, all special. **Yellow looks best.**
  - Source: *If the Price is Right* (Roman) — **DEAL path only.** Outside the Port Tudor warehouse alongside the Rancher.
  - Missable: **YES if you take Revenge — unless you deliberately fail** (let the Mule escape or kill Phil Bell).
  - Difficulty: **Easy** (★)
  - Notes: Can be taken together with the black/silver Rancher in one run — see Rancher. **Not** the same red as Brucie's export Sanchez.
  - YouTube: https://www.youtube.com/watch?v=QM8vogdiJqc

- **Lustered Red Sanchez** (red with a **silver** rear section)
  - Colour: red with a silver back section — this combination **does** occur on the street.
  - Luster: **yes, random, on the silver section, and usually very visible** — the luster is the only special property, and it is **not guaranteed to appear** (LancetJades notes it can be rare).
  - Source: *Truck Hustle* (Phil Bell) — sitting at the abandoned house at the very end of the mission.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Rated ★★ purely because the luster is unreliable and the mission is long and tedious. **Lethal Vaccine's written guide does not list this one** — it appears only in LancetJades. **Treat as LancetJades-only / lower confidence.**
  - YouTube: none found.

- **EC Solid Red Sanchez** — §4 (Brucie). A different red from the Deal-mission Sanchez.

---

### SCHAFTER

- **EC Black Schafter** (civilian body, Mikhail's)
  - Colour: **EC black** — black is only a Russian-Schafter colour, so it's exclusive on a civilian body. Also carries an **EC silver luster** not found in traffic, and an unusual fourth colour (effectively "EC4").
  - Luster: yes, set (silver).
  - Source: *The Master and the Molotov* (Mikhail Faustin) — Mikhail arrives in it at Perestroika.
  - Missable: **YES — single appearance.** **No failure needed.**
  - Difficulty: **Easy** (★). Take it after the cutscene, park it, return and kill Faustin. **Confirm after.**
  - Notes: Long mis-identified by the community as a "Russian Schafter with a silver grille"; it's actually a **civilian** Schafter with Russian colours and no Russian body kit.
  - YouTube: https://www.youtube.com/watch?v=DIA92NfDNbY

- **EC/Lustered Black Schafter with EC Black Rims (1 of 2)**
  - Colour: EC black civilian Schafter with **EC black rims.**
  - Luster: **yes, random**, all special (EC vehicle). Black Poly is the only dull roll.
  - Source: *Easy As Can Be* (Brucie) — spawns behind you once you get into the target Oracle.
  - Missable: **No, no failure needed.** **Get this one, not the Pegorino's Pride version.**
  - Difficulty: **Medium** (★★★)
  - Notes: Part of the legendary **four-at-once *Easy As Can Be* run** (Oracle + Schafter + Sultan + NRG 900). Kill the Schafter driver, kill both Sultans' occupants, drive north-west to spawn the NRG 900, then quadruple-drive everything to South Bohan (and the fourth to Hove Beach) — all while never straying far enough from the Oracle to fail. **Lethal Vaccine calls this one of the hardest tasks in GTA IV** and recommends doing one vehicle per save file. **Bodies must be out of every car.**
  - YouTube: https://www.youtube.com/watch?v=7i1U9B09fFM (also credits Viv1d Shadows)

- **EC/Lustered Black Schafter with EC Black Rims (2 of 2)**
  - Source: *Pegorino's Pride* (Jimmy Pegorino) — you drive it during the mission.
  - Missable: **No**, but **requires mission failure** — it vanishes with Pegorino at the end **even if parked in a spot.** Drive-by Pegorino to fail, then take it.
  - Difficulty: **Easy** (★). Identical car to the *Easy As Can Be* one — **prefer that one** since it needs no failure.
  - YouTube: https://www.youtube.com/watch?v=Vw6T7IDYhDw

- **EC Black Schafter with EC Black Rims** (non-lustered, set Silver Stone Poly)
  - Colour: as above but with a **fixed** Silver Stone Poly luster rather than a random one.
  - Source: *Undertaker* (Francis McReary) — the first Albanian wave arrives in it.
  - Missable: **No, no failure needed** (failure route also works — drive it off and fail for abandoning Packie).
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Duplicable from the *Easy As Can Be* Schafter by rerolling until you get Silver Stone Poly — so it's arguably redundant. Getting all five *Undertaker* vehicles in one pass (Schafter, both Primos, Washington, Romero) requires quadruple-driving and is described as "painfully difficult".
  - YouTube: https://www.youtube.com/watch?v=-SQpAk4wNp4

- **Hybrid/Lustered Black "Russian" Schafter with EC Black Rims**
  - Colour: black with **Russian bumpers** but a **silver/hybrid grille** instead of the normal Russian black grille, plus **EC black rims.** Lethal Vaccine calls it "a huge prize".
  - Luster: **yes, random**, all special thanks to the EC features. **Avoid Black Poly** (unclear whether it can even roll).
  - Source: *A Revenger's Tragedy* — **DEAL ending only.** Several in the abandoned-casino compound.
  - Missable: **YES — permanently lost if you take the Revenge ending.** **No failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: Part of the four-at-once Deal run. Don't destroy it in the firefight. **Confirm after.**
  - YouTube: https://www.youtube.com/watch?v=mePakZ4Nxq0
  - *(LancetJades also lists a lustered "Russian Schafter w/ silver grill" from Pegorino's Pride requiring failure. Lethal Vaccine classifies the Pegorino's Pride car as the civilian EC Black Schafter instead. **Classification disputed; the two guides disagree on which model this is.**)*
  - *(Unobtainable: a black Schafter with silver grille appears in The Cousins Bellic opening cutscene only.)*

---

### SENTINEL

- **Lustered Black Sentinel with EC Black Rims (1 of 2)**
  - Colour: black body (in traffic) with **EC black rims** — traffic Sentinels get silver, dark grey or light brown rims.
  - Luster: **yes, random**, all special thanks to the EC rims — but **avoid Black Poly and Torch Green**, which reduce the difference to rims only.
  - Source: *Wrong is Right* (U.L. Paper) — Oleg drives it.
  - Missable: **No, no failure needed. GET THIS ONE** rather than the Revenge-ending version.
  - Difficulty: **HARD** (★★★★). **Vehicle is UJ after the mission.**
  - Notes: Drive-by Oleg in the head **immediately** as he pulls away — if you're fast his body falls out and the door stays open, letting you simply drive it away. **If his body stays inside, the parking spot will NOT save the car** — call 911 for a Fire Truck and roll the Sentinel repeatedly until the corpse falls out, then push it to Northwood or Middle Park East. LancetJades also suggests the cop-transport trick.
  - YouTube: https://www.youtube.com/watch?v=xWxUpU5TiNM

- **Lustered Black Sentinel with EC Black Rims (2 of 2)**
  - Source: *Out of Commission* — **REVENGE ending only.** Three block a road off the beach.
  - Missable: **YES on this branch**, and **requires mission failure.** Not missable overall — take the *Wrong is Right* version.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: When prompted to ramp the Sanchez to the helicopter, **don't** — turn right instead, up the hill road. Kill the four Mafia goons, check the luster, take one, fail the mission for losing Pegorino. Same luster warnings (avoid Torch Green / Black Poly).
  - YouTube: https://www.youtube.com/watch?v=jhCorqfs-kg

- **Lustered Black "Mafia" Sentinel with EC Black Rims (1 of 2)** — spoiler + Mafia body kit
  - Colour: black Mafia tuner Sentinel with **EC black rims** (traffic Mafia Sentinels have dark grey rims).
  - Luster: **yes, random**, all special via the rims. **Avoid Torch Green** (it's the traffic Mafia Sentinel luster) **and Black Poly** (Pay 'n' Spray result). Reds and blues are safe.
  - Source: *She's a Keeper* (Gerald McReary) — chase cars.
  - Missable: **No** (a better chance exists), but **requires mission failure** — the chase cars are deleted on success **even from parking spots.**
  - Difficulty: **Easy** (★). Can be banked with the Mafia PMP 600 in one failure. **Bodies out.**
  - YouTube: https://www.youtube.com/watch?v=c4AZAiU-Ubs

- **Lustered Black "Mafia" Sentinel with EC Black Rims (2 of 2)**
  - Source: *Out of Commission* — **REVENGE ending only.** At the abandoned casino.
  - Missable: **YES on this branch.** **No failure needed — this is the better of the two**, since *She's a Keeper* demands failure. But it is Revenge-exclusive, so Deal players must use the *She's a Keeper* version.
  - Difficulty: **Easy–Medium** (★★). Same luster warnings.
  - YouTube: https://www.youtube.com/watch?v=8dtDAdeCerA

- **EC Dark Blue Sentinel with EC Dark Blue Rims** — §5 (Stevie)

---

### SPEEDO

- **Lustered Black Speedo**
  - Colour: solid black — **not** EC. Livery randomised.
  - Luster: **yes, random.** **Only the Black Poly luster is non-special** (and invisible anyway). Any visible colour is special.
  - Source: *Crime and Punishment* (Mikhail Faustin) — three target vans.
  - Missable: **YES — single mission appearance.** **No failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **The first van you pull over will never have the flat-screens.** Inspect all three visually first, then pull over the one with the luster you want. Once one is pulled over, one of the remaining two is assigned the flat-screens. **Always kill the driver** — otherwise you can be teleported out, lose health, and the van drives off. **The flat-screen Speedo is unobtainable** — the TVs vanish the moment it's stored. Can be banked alongside the DF8-90 from the same mission.
  - YouTube: https://www.youtube.com/watch?v=fgRuoWSM04Q (with DF8-90 1 of 4)

---

### STALLION

- **Lustered Black Stallion (1 of 2)**
  - Colour: black — **not** EC. Roof or roofless, random.
  - Luster: **yes, random.** **Avoid Temple Curtain Purple (reads as red/purple) and Black Poly (no visible luster)** — both exist on traffic black Stallions.
  - Source: *Escuela of the Streets* (Manny Escuela) — the dealers' car.
  - Missable: **No** (a second chance exists), but **requires mission failure** — it always vanishes on success. Get in, shoot the warehouse door, drive off; the mission fails for leaving the deal area.
  - Difficulty: **Easy** (★). **Get the Smackdown one instead.**
  - YouTube: https://www.youtube.com/watch?v=e-Ti6kGU1tk

- **Lustered Black Stallion (2 of 2)** — identical car
  - Source: *Smackdown* (Derrick McReary) — in Bucky Sligo's front yard.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **Take it before all the targets are dead** — LancetJades reports it vanishes if you wait until the fight is over. Same luster warnings. Pairs with the Lustered Black Contender.
  - YouTube: https://www.youtube.com/watch?v=HndqyEm7SGo

---

### SULTAN

- **Lustered/EC2 Black Sultan**
  - Colour: black — **NOT special.** The EC2 (invisible black secondary) is the only colour-level exclusivity, and it's worthless on its own.
  - Luster: **yes, random — this is the only thing that matters.** **The Black Poly luster makes it effectively useless** (EC2-only), and Lethal Vaccine warns that **Black Poly comes up more often than not**, so expect many reloads. **Any clearly coloured luster is special.**
  - Source: *Easy As Can Be* (Brucie) — up to three Sultans spawn (east alley exit ×2, plus one near the NRG 900).
  - Missable: **No, no failure needed.**
  - Difficulty: **Medium** (★★★)
  - Notes: Hood scoop present or absent is random. Part of the four-at-once run. **Bodies out of the car** or the spot won't save it.
  - YouTube: https://www.youtube.com/watch?v=7i1U9B09fFM

- **EC/Lustered Silver Sultan**
  - Colour: **EC light silver**, almost white.
  - Luster: **yes, random**, all special (EC body), though faint on silver. **Red lusters look best.**
  - Source: *Pegorino's Pride* (Jimmy Pegorino) — the Pavano goons' car in the late-mission chase.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **Trick** — after killing the Pavanos and taking the money, **get into Pegorino's Schafter first, wait a second, then switch to the Sultan**; Pegorino will only follow you into another car if you do this. Then drive to Westdyke, **park the Sultan nearby and walk into the marker on foot** — entering the marker in the Sultan makes it vanish.
  - YouTube: https://www.youtube.com/watch?v=LHJmt8dm49o

- **EC Blue Sultan with EC Black Rims** — §5 (Stevie)

---

### SUPERGT

- **EC/Lustered Light Blue SuperGT**
  - Colour: **EC light blue** — considerably lighter than any traffic blue SuperGT.
  - Luster: **yes, random**, all special (EC body).
  - Source: *No. 1* (Brucie) — one of the street-race opponents.
  - Missable: **No, but platform-dependent.**
    - **PC / Xbox 360:** obtainable **with a mission pass.** Finish the race in 1st with a rival car right behind you, don't drive too fast through Huntington St./Cerveza Heights, then go back and find the SuperGT stopped — push it to Hove Beach with the Comet.
    - **PS3: pass does NOT work — the race cars always despawn. Mission failure is mandatory.** Don't enter the race marker; park next to the SuperGT, kill Brucie (get 1 star *first*, so the shots count before the level is wiped), flip the SuperGT with a big vehicle to force the driver out, flip it back, push it to the spot.
  - Difficulty: **Medium** (★★★). **Vehicle is UJ** — pushing required either way.
  - Notes: **Kill Brucie specifically** — failing any other way makes him drive you home. The driver must be out, or the spot won't save it. Can be banked with the yellow Comet and the Turismo in one run.
  - YouTube: PS3 method — https://www.youtube.com/watch?v=4CWyUqGpEWM · with the yellow Comet (pass) — https://www.youtube.com/watch?v=daFmcndP4iI

- **Lustered Black SuperGT**
  - Colour: black — **not** EC.
  - Luster: **yes, random. Avoid Light Ivory (light brown) and Torch Green (green)** — both make it identical to traffic SuperGTs. Reds and blues are safe.
  - Source: *Union Drive* (Bernie Crane) — the blackmailers' car; the chase is scripted, so just follow until they crash.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy** (★)
  - Notes: After killing them, **get back into Bernie's car and immediately out again** so he follows you, then get into the SuperGT and finish the mission.
  - YouTube: https://www.youtube.com/watch?v=x9N743wWN78

- **EC Dark Grey SuperGT** (EC blue set luster) — §5 (Stevie) · **flat black w/ slight blue luster** is how LancetJades describes the same car

---

### TURISMO

- **Lustered/EC2 Yellow Turismo**
  - Colour: bright yellow — **NOT special**, this is a traffic colour. The invisible EC2 secondary is black.
  - Luster: **yes, random — but you cannot see it.** The bright yellow base swallows all lusters, so **you cannot tell a special luster from the non-special Taxi Yellow one without a save editor.** Lethal Vaccine's blunt verdict: *"it's barely even a Special Vehicle at all."*
  - Source: *No. 1* (Brucie) — a street-race opponent.
  - Missable: **No.** Same platform split as the SuperGT: **pass works on PC/360, PS3 requires failure.**
  - Difficulty: **Medium** (★★★). **UJ** — must be pushed.
  - Notes: Same method as the SuperGT; both can be pushed to Hove Beach with the Comet. Low priority for a collection.
  - YouTube: https://www.youtube.com/watch?v=VdIqDwhj4mc — **note: the video title reads "Lustered/EC2 Black Turismo" while the written guide says Yellow Turismo. Discrepancy unresolved; treat the video title as possibly erroneous, or as a separate undocumented variant.**

- **EC Bronze Turismo** — §5 (Stevie)

---

### VIGERO

- **EC Black Beater Vigero**
  - Colour: EC black, with white/rusty-brown beater livery. **Several variants** — on some the black body is clearly visible; on others the rust livery completely masks it. **Get the one where black is visible.**
  - Luster: unspecified in the guide (**unverified**).
  - Source: **Little Jacob's drug deliveries 1–9.** One of three possible beaters.
  - Missable: **No** — repeatable; reload and re-request to re-roll.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=N03Uqb4O5aQ

---

### VINCENT

- **Lustered Dark Green Vincent with EC Dark Green Rims (1 of 2)**
  - Colour: dark green body (a traffic colour) with **EC dark green rims.**
  - Luster: **yes, random**, all special via the rims. Bright Blue Poly reduces the difference to rims only but is still special. **Any roll is acceptable.** The luster appears to roll rarely.
  - Source: *She's a Keeper* (Gerald McReary) — the car you drive Gracie in.
  - Missable: **No, and no failure needed** (per Lethal Vaccine).
  - Difficulty: **Easy** (★)
  - Notes: **SOURCE CONFLICT.** LancetJades claims this requires failure (flip or burn it, because finishing makes it vanish). **Lethal Vaccine says you can simply pass:** drive to the North Algonquin marker **without damaging it** (damage kills Gracie in the boot and fails the mission), then turn around after the pass and take it. Lethal Vaccine's method is the newer and more specific one.
  - YouTube: https://www.youtube.com/watch?v=qrtZ2MmrDjc

- **Lustered Dark Green Vincent with EC Dark Green Rims (2 of 2)** — identical car
  - Source: *Diamonds are a Girl's Best Friend* (Gerald McReary).
  - Missable: **No, no failure needed.** After the Charge Island shootout, **walk back** to where it's parked and drive Packie home in it.
  - Difficulty: **Easy–Medium** (★★)
  - Notes: LancetJades adds: before following Packie up onto the structure, **move the Vincent north, closer to where the mission ends**, or it may despawn.
  - YouTube: https://www.youtube.com/watch?v=VBLyq8FE38c

- **Lustered Black Vincent with EC Black Rims**
  - Colour: black body (not EC) with **EC black rims.**
  - Luster: **yes, random**, all special via the rims. Black Poly and Cabernet Red Poly reduce it to a rims-only difference.
  - Source: *Diamonds are a Girl's Best Friend* — the **post-failure cutscene** car.
  - Missable: **No**, but **requires mission failure** — kill **either** Gracie **or** Packie, **not both.** Killing Gracie drops you in Dukes; killing Packie drops you in Alderney. Niko is left sitting in the car.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=k_KntRlc788

---

### VIRGO

- **EC Red & Black Virgo** (Little Jacob's personal car)
  - Colour: EC red body with a black lower section (traffic Virgos get a black *stripe* or a brown bottom).
  - Luster: no.
  - Source: **Little Jacob's "Guns" perk.** Needs >80% Like and >75% Respect with Jacob. Also appears in *Concrete Jungle*, *Russian Revolution* and *Mr. & Mrs. Bellic* (both endings).
  - Missable: **No** — classed as **rare**, available indefinitely after 100%.
  - Difficulty: **Easy** (★). **Vehicle is UJ** — call Jacob for guns, shoot him (small Like hit, no Respect hit), then push it to a spot and save. Drive round the block and it unlocks.
  - YouTube: https://www.youtube.com/watch?v=mqpTwaMazu8

---

### VOODOO

- **EC White & Pink Voodoo with EC Light Grey Details**
  - Colour: **EC white/beige body, EC pink/fuchsia stripe, EC light grey details** (rims, both bumpers, door handles, window sidings, mirrors, side pinstripes). Fully EC with an EC set luster.
  - Luster: yes, set (faint).
  - Source: *Have a Heart* (Elizabeta Torres) — the car with Manny and the cameraman in the boot.
  - Missable: **No, no failure needed.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: **Don't drive to the doctor.** Knock the car around until the boot pops, then jump the Charge Island highway or hit a wall to shake the bodies out. **The mission passes the moment the bodies fall out — you just forfeit the cash reward** and you're left sitting in the Voodoo.
  - YouTube: https://www.youtube.com/watch?v=nmkT2q_hkrE

- **EC Green Voodoo with EC Black Details** — §5 (Stevie)

---

### WASHINGTON

- **EC Black Washington (1 of 3)**
  - Colour: black — **not EC on its own.** The only distinction is a **set Silver Stone Poly luster**, versus the Astra Silver Poly on traffic black Washingtons. **Both guides agree the difference is essentially invisible to the naked eye.** Very low-value collectible.
  - Luster: yes, set.
  - Source: *Undertaker* (Francis McReary) — two drive off after the mission passes.
  - Missable: **No** (three chances). **No failure needed** — stand in front of one to stop it, or shoot the driver.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=_j6xm7YknSU (with the Romero)

- **EC Black Washington (2 of 3)** — identical car
  - Source: *To Live and Die in Alderney* (Phil Bell).
  - Missable: **No**, but **requires mission failure** — drive the opposite way from Phil at the abandoned house so he gets busted; the fail cutscene leaves Niko in the Washington.
  - Difficulty: **Easy** (★). **Pointless — use source 1 or 3.**
  - YouTube: https://www.youtube.com/watch?v=WzzGpO4ZfaU

- **EC Black Washington (3 of 3)** — §5 (Stevie). **The easiest source — no mission failure, no story mission at all.** Lethal Vaccine ranks it the least special of Stevie's 30.

---

### WILLARD

- **EC Beige Willard with EC Beige Door Interior (1 of 2)**
  - Colour: beige body plus **EC beige door-interior panels** (two rectangles visible from inside).
  - Luster: no.
  - Source: *It's Your Call* (Roman) — the Albanian loan sharks' car.
  - Missable: **No** (a second chance exists), but **requires mission failure** — the car is UJ until you attack the loan sharks, which fails the mission. Then it becomes jackable.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=5d77GNKzEq0

- **EC Beige Willard with EC Beige Door Interior (2 of 2)** — identical car
  - Source: *Bleed Out* (Roman) — Dardan drives it; claim it after he's killed.
  - Missable: **No, no failure needed. Get this one.**
  - Difficulty: **Easy–Medium** (★★)
  - Notes: It's **UJ before the chase.** After killing Dardan you must **double-drive** the Willard and Roman's Taxi back to the cab depot (straying from the taxi fails for abandoning Roman). Park the Willard near — **but not too near** — the yellow marker, then finish in the taxi. **You can bank both the Willard and Roman's Taxi from this mission in one pass.**
  - YouTube: https://www.youtube.com/watch?v=OlINmYmIJ3w

- **EC Dark Green Willard with EC Black Door Interior**
  - Colour: EC dark green body, **EC black door-interior panels.**
  - Luster: no.
  - Source: *Babysitting* (Derrick McReary) — the **post-failure cutscene** car.
  - Missable: **No**, but **requires mission failure with Derrick alive** — sail to Kim's Reefer, then after the cutscene drive away and lose him. Niko and Derrick end up in the Willard.
  - Difficulty: **Easy** (★)
  - YouTube: https://www.youtube.com/watch?v=H07wa_jRJw8

---

## 4. Brucie's Exotic Exports — the 10 EC cars

All 10 are confirmed EC. All carry a **black luster** unless noted, which is special but practically invisible. Mission failure is required for all of them but **does not affect the stats**.

| Vehicle | Colour | Luster | Notes |
|---|---|---|---|
| **Banshee** | EC light/grey-blue (near periwinkle) with a white stripe | Black (set) | Roof or convertible — random |
| **Cavalcade** | EC dark/matte red with **EC black rims, headlights, grilles** | Black (set) | The dark red exists on Spanish tuner Cavalcades, so the EC part is it being on a civilian body |
| **Feltzer** | EC cream/white | Black (set) | Close to some light grey traffic Feltzers but distinguishable side by side. Roof/convertible random |
| **Intruder** | EC rich grey with a very dark grey lower stripe | Black (set) | No traffic grey matches this |
| **NRG 900** | EC bright red with a large black mid-section | Black (set) | Much brighter than traffic red NRG 900s. F or RR variant random |
| **Patriot** | EC light silver | Black (set) | **Same light silver as the Photo Shoot Patriot** — differs only by an invisible secondary colour. Marginal. Flag decal random |
| **PCJ 600** | EC silver with black rims/pipes | Black (set) | **Get the variant WITH the metal pipes** — the pipes take the black secondary colour and make it visually distinct |
| **PMP 600** | EC deep crimson | Black (set) | **Darker than both** the traffic red PMP 600 **and** Dwayne's deep red one |
| **Sabre GT** | EC bright red with a wide white centre stripe, no hood scoop | Black (set) | Resembles the Vice City Sabre Turbo. Flat hood or raised pentagon section; never air intakes |
| **Sanchez** | EC solid red — **red fuel tank, red light guard, red front shocks** (normally silver/grey) | Black (set) | **Not the same red** as the Deal-mission bright red Sanchez |

**YouTube (all 10 in one video):** https://www.youtube.com/watch?v=lLM-mcW4Ohw

---

## 5. Stevie's Car Thefts — the 30 EC cars

All 30 are EC. Spawn locations are **fixed**; only the request order is randomised. Remember: **take it to a parking spot, a duplicate respawns, deliver the duplicate.** The 30th car requested stays forever on PC/360.

| Vehicle | Colour | Luster | Spawn location |
|---|---|---|---|
| **Banshee** | EC orange with a yellow stripe | EC yellow | Randolf Art Center, Galveston Ave., Middle Park West, Algonquin |
| **Bobcat** | EC light brown | EC brown | Top floor, Francis International Airport car park, Dukes |
| **Buccaneer** | EC black | **EC intense purple/red** — almost reads as the base colour | Lompoc Ave., Industrial, Bohan (the *Hostile Negotiation* warehouse) |
| **Cavalcade** | EC dark forest green **+ EC dark green rims/headlights/grilles** | EC green | Near Westdyke Memorial Hospital, Manzano Rd., Leftwood, Alderney |
| **Cognoscenti** | EC light blue roof ("baby blue") + EC blue body | EC blue (set) | Lyndon Ave., Alderney City |
| **Comet** | EC dark red — reads bronze to plum depending on light | EC yellow (set) | Burger Shot car park near Swingers Golf Club, Westminster, Algonquin |
| **Contender** | Dark grey (Black Poly) — body colour exists in traffic | **EC Winning Silver Poly** vs traffic's Silver Stone Poly | Twitchin's Sugar Factory, Creek St., BOABO, Broker. **Barely special — visually identical to traffic. Low priority** |
| **Coquette** | **EC silver** | Light brown/yellow — not EC alone | Suffolk Church, Liberty Lane, Suffolk, Algonquin |
| **DF8-90** | EC blue body **+ EC blue roof** (traffic DF8-90s always have black roofs) | EC green | Under the train station near the amusement park, Crockett Ave., Hove Beach, Broker |
| **Dilettante** | EC brown (LancetJades calls it "solid gold") | EC gold/brown (set) | Between Carrollton St. and Saratoga Ave., Willis, Dukes |
| **Dukes** | EC red (LancetJades: bright orange) | EC yellow/reddish (set) | Across from Modo, Vauxite St., East Holland, Algonquin. Supercharger random |
| **Faggio** | EC green with black details | EC light green | Dragon Heart Plaza, Diamond St., Chinatown, Algonquin. **The only special Faggio in the game** |
| **Freeway** | EC bronze | EC light brown (set) | Willis Wash and Lube, Saratoga Ave., Dukes. Saddlebags random |
| **Huntley Sport** | **EC light blue roof** + black bottom and stripe | Blue — not EC alone | Police station car park, Leavenworth Ave., Northern Gardens, Bohan |
| **Infernus** | **EC gold** — no black stripe (unlike Bernie's) | EC yellow (set) | Soldiers Plaza arch near Outlook Park, between Montauk Ave. and Earp St., Downtown Broker. **Re-roll the list so this is #30 and it respawns forever** |
| **Intruder** | EC deep blue (civilian variant, not the Mafia one) | EC blue (set) | Liberty Transport Authority building, Asparagus Ave., Rotterdam Hill, Broker |
| **Manana** | Dark grey body + **EC white roof** | Silver (set, EC) | Behind the old Burger Shot, Thornton St., Cerveza Heights, Dukes. **Roof is a random variant — get the one WITH the roof** |
| **Moonbeam** | EC dark red + **EC black roof and stripe** | **EC red/purple** | Charge Island, car park near a spherical storage tank |
| **NRG 900** | EC dark grey / black-and-silver | EC light silver (set) | Between Bismarck Ave. and Topaz St., Lancaster, Algonquin. F or RR variant random |
| **Patriot** | EC rich yellow — **same yellow as Playboy X's, but WITH the American flag decal** | **EC yellow luster that can never appear on Playboy's** | Joined towers, South Parkway, Castle Gardens, Algonquin. **A genuinely distinct vehicle from Playboy X's Patriot** |
| **PMP 600** | EC silverish light green (in-game colour name "Hoods") | EC light green (set). LancetJades describes it as silver with a blue luster | Down a lane in The Exchange, Algonquin, behind the Stock Exchange |
| **Rancher** | EC dark red with an EC grey side stripe. Pickup | Silver — not EC alone | Behind a trailer near Strower Ave., Port Tudor docks, Alderney |
| **Rebla** | EC dark brown / golden brown | EC brown | Fanny Crab's near Grand Easton Station, Columbus Ave., Easton, Algonquin |
| **Sabre GT** | EC green with an EC dark green stripe | EC yellow/orange | Meadows Park Towers, Tudor St., Meadow Hills, Dukes. Flat hood or air inlet; never the pentagon |
| **Sentinel** | EC dark blue (grey-blue) **+ EC dark blue/black rims** | Green — not EC alone, but looks great | Behind a car park by the docks, Roebuck Rd., Normandy, Alderney |
| **Sultan** | EC deep blue **+ EC black rims** | Blue — EC only on civilian Sultans | Driveway of a large green house, Aspdin Dr., Berchem, Alderney |
| **SuperGT** | EC dark grey / flat black | EC blue (set) — only visible in direct sun | 69 Exchange near the Bank of Liberty, Calcium St., Chinatown, Algonquin |
| **Turismo** | EC bronze/gold | EC brownish | Near a large mansion, Owl Creek Ave., Westdyke, Alderney |
| **Voodoo** | EC green with **EC black details** (rims, both bumpers, door handles, window sidings, mirrors, side pinstripe) | — | LC24 Tower, Bunker Hill Ave., East Island City, Dukes |
| **Washington** | Black — **not EC**; only the set Silver Stone Poly luster differs from traffic's Astra Silver Poly | Set, EC, but invisible to the eye | Outdoor pool, Franklin St., Steinway, Dukes. **Ranked the least special of the 30** — but it's the easiest of the three black Washington sources |

**YouTube (all 30 in one video):** https://www.youtube.com/watch?v=5E_v29nWEfo

---

## 6. Rare (not missable) vehicles worth tracking

| Vehicle | Unlock | Notes |
|---|---|---|
| **Annihilator** | Shoot all 200 pigeons (MeTV helipad), or finish the story (airport/police helipads), or steal one at 5–6 stars, or cheat 359-555-0100 | No good parking spot exists; Middle Park East or Bohan are least bad |
| **Police Maverick** | Available from the start — appears as air support at 3–4 stars | Snipe the pilot so it drops intact, then push it into a spot. Has no radio |
| **Infernus** | Stevie's car thefts, Brucie's street races, or Bernie's reward | **Does not spawn in traffic and has no known spawn point** |
| **Deep Red PMP 600 / Patriot / Presidente** | Dwayne's Backup perk | Listed in §3; conditional on killing Playboy X and keeping Dwayne as a friend |
| **EC Red & Black Virgo** | Little Jacob's Guns perk | §3 |
| **EC Black & Gold Huntley Sport** | Brucie's boating activity | §3 |

---

## 7. Unobtainable special vehicles (for completeness / "do not chase these")

| Vehicle | Mission | Why it can't be kept |
|---|---|---|
| Black Schafter w/ silver grille | *The Cousins Bellic* | Opening cutscene only |
| Light Blue Marbelle | *Clean Getaway* | Cutscene only |
| Lustered Black Speedo **with flat-screen TVs** | *Crime and Punishment* | TVs vanish the moment it's stored |
| Flatbed **with bomb + indicator light** | *Rigged to Blow* | Indicator is removed on mission failure |
| **BP/FP** Roman's Taxi | *Roman's Sorrow* | Loses its proofing when the mission ends, pass or fail |
| Black Banshee w/ gold stripe | *Search and Delete* | Cutscene only |
| Dark Green Squalo | *Babysitting* | Boats can't be stored |
| **AP/CP** Lustered Silver Oracle | *Truck Hustle* | Ray drives off with super-stats and despawns. (The same Oracle **is** obtainable from *Pest Control*, and you can re-apply AP yourself) |
| Blue/Beige Tropic | *Buoys Ahoy* | Boats can't be stored |
| Red/White Squalo | *Buoys Ahoy* | Boats can't be stored |
| Lowrider Patriot | *Dead End* (assassination) | Loses the lowered suspension when occupants exit |
| Blista Compact with a body in the back | Jeff random encounter #2 | The body disappears on mission failure |
| Black/Green Squalo | Brucie's boating activity | Boats can't be stored |
| **All-proof Bobcat** | *Hostile Negotiation* | Proofing is stripped the instant Roman enters or the mission ends (GTA Wiki) |

---

## 8. The AP (All Proof) conversion — worth a feature in the app

GTA IV has **no naturally proofed vehicles**. Every "AP" car in a collector's garage was made with the girlfriend trick:

1. Unlock a girlfriend. Internet girlfriends (**Carmen Ortiz / SoBoHoe**, **Kiki Jenkins / LawChick** on Love-Meet, **Alex Chilton / Liberated Woman** on Craplist) are preferred because Michelle and Kate are limited and you'd lose 100% fondness.
2. Arrange a date. Drive the target vehicle into her yellow marker so she gets in.
3. Break the window and fire a weapon out of it. She bails, the date fails, and **after the cutscene the vehicle is AP** (BP + FP + EP + DP).
4. Drive it to a parking spot.

**Helicopters:** you can't take a heli into the date marker. Instead, park the heli in a spot, pick the girl up in a car, drive to the heli, get in the heli *with* her, fly to a roof (the Middle Park museum is recommended), get out, push her off the ledge to the lower roof, get back in, and nudge her with the heli to scare her.

**Caveats:** AP vehicles sometimes vanish from spots or silently lose their proofing — just re-apply. Running police side-missions in an AP police vehicle strips the proofing. **Taking a girl on a date in an AP car strips the proofing.** Failing dates does not affect the pause-menu mission stats. Boats can be made AP but can't be stored.

**YouTube:** https://www.youtube.com/watch?v=PDVDTZ4mXCA

---

## 9. Complete YouTube index — all 100 videos in the playlist

Playlist: https://www.youtube.com/playlist?list=PLSic4LE-vaakbiMWZyT8IB79EhdLZDYT7
Scraped live; every URL below is real.

| # | Title | URL |
|---|---|---|
| 1 | Unique/EC Black Roman's Taxi | https://www.youtube.com/watch?v=_Jeuq5R3WhA |
| 2 | EC Black Esperanto | https://www.youtube.com/watch?v=MmU5nR0m_-w |
| 3 | EC Beige Willard (1 of 2) | https://www.youtube.com/watch?v=5d77GNKzEq0 |
| 4 | Unique/EC Black and Dark Grey Roman's Taxi | https://www.youtube.com/watch?v=doreITdECoA |
| 5 | Lustered/EC2 Black Merit | https://www.youtube.com/watch?v=e2sW8E8qJTU |
| 6 | EC Beige Willard (2 of 2) | https://www.youtube.com/watch?v=OlINmYmIJ3w |
| 7 | Unique Laundromat (1 of 2) | https://www.youtube.com/watch?v=skuba9SeRgU |
| 8 | Lustered/EC White and Dark Grey Blista Compact (1 of 2) | https://www.youtube.com/watch?v=ma7U2OaU9_Q |
| 9 | Lustered/EC Blista Compact (2 of 2) and Lustered/EC Ruiner | https://www.youtube.com/watch?v=Ynn7hnMH9qg |
| 10 | EC Light Blue Marbelle | https://www.youtube.com/watch?v=4KK1mqDC-yg |
| 11 | Lustered/EC Silver and Black DF8-90 (1 of 4) and Lustered Speedo | https://www.youtube.com/watch?v=fgRuoWSM04Q |
| 12 | Lustered/EC Silver and Black DF8-90 (2 of 4) | https://www.youtube.com/watch?v=H_Za0wiRpU4 |
| 13 | Hybrid Banshee | https://www.youtube.com/watch?v=fR13cXNzm-s |
| 14 | Lustered/EC Silver and Black DF8-90 (3 of 4) | https://www.youtube.com/watch?v=po90JgMJFkc |
| 15 | Lustered/EC DF8-90 (4 of 4) and Lustered/EC Dark Red Flatbed | https://www.youtube.com/watch?v=ipKLQbmbBxQ |
| 16 | Lustered/EC Dark Red Flatbed (PS3/PC with Mission Pass) | https://www.youtube.com/watch?v=olfaOUyvdXs |
| 17 | EC Black Schafter | https://www.youtube.com/watch?v=DIA92NfDNbY |
| 18 | EC Black Primo with EC Black Rims | https://www.youtube.com/watch?v=dLabVbvRFoI |
| 19 | Lustered/EC Oracle, Schafter 1, Lustered/EC2 Sultan | https://www.youtube.com/watch?v=7i1U9B09fFM |
| 20 | Lustered NRG 900 | https://www.youtube.com/watch?v=Ez4NwRWDIno |
| 21 | Lustered/EC Light Blue SuperGT (PS3 Method) | https://www.youtube.com/watch?v=4CWyUqGpEWM |
| 22 | Lustered/EC2 Black Turismo | https://www.youtube.com/watch?v=VdIqDwhj4mc |
| 23 | Lustered/EC Light Blue SuperGT and EC Yellow Comet (Pass) | https://www.youtube.com/watch?v=daFmcndP4iI |
| 24 | EC Yellow Comet | https://www.youtube.com/watch?v=NXq5SEG7MdU |
| 25 | Lustered Stallion (1 of 2) | https://www.youtube.com/watch?v=e-Ti6kGU1tk |
| 26 | Hybrid Spanish Primo with EC Yellow Details | https://www.youtube.com/watch?v=7MMuAGGpNic |
| 27 | NE Oracle | https://www.youtube.com/watch?v=jPFuRfRMSK0 |
| 28 | Lustered/EC Yellow Patriot (1 of 2) | https://www.youtube.com/watch?v=XtIqYCzG4Fs |
| 29 | EC White and Pink Voodoo with EC Light Grey Details | https://www.youtube.com/watch?v=nmkT2q_hkrE |
| 30 | Lustered/EC/NE Yellow Patriot and Lustered Cavalcade with EC Rims | https://www.youtube.com/watch?v=75S5lNoPjDE |
| 31 | 3X Lustered/EC Patriots and Lustered/EC Sabre GT | https://www.youtube.com/watch?v=q3yVKlJ5VD4 |
| 32 | Lustered/EC Red Hellfury | https://www.youtube.com/watch?v=tSe9yvjYCHI |
| 33 | Lustered Dukes | https://www.youtube.com/watch?v=Jz8KMaFh42Y |
| 34 | Lustered Sentinel with EC Black Rims (1 of 2) | https://www.youtube.com/watch?v=xWxUpU5TiNM |
| 35 | EC White and Red Maverick (1 of 2) | https://www.youtube.com/watch?v=oxYVXreO4mE |
| 36 | Lustered Emperor | https://www.youtube.com/watch?v=axyg9aXKGko |
| 37 | EC White and Black Maverick | https://www.youtube.com/watch?v=kmWRjLvwbsw |
| 38 | EC White and Red Maverick (2 of 2) | https://www.youtube.com/watch?v=jCXE3ZSMDKc |
| 39 | Unique Police Stockade (1 of 2) | https://www.youtube.com/watch?v=_2ZdokIWHqQ |
| 40 | EC "Random" Irish Oracle | https://www.youtube.com/watch?v=_pyi5yzyzSk |
| 41 | Lustered/EC Silver and Black Banshee | https://www.youtube.com/watch?v=qfIc8etm0Xs |
| 42 | Unique Laundromat (2 of 2) and Lustered Lokus | https://www.youtube.com/watch?v=cbCzqUySdpg |
| 43 | Hybrid/EC White Mafia PMP 600 and Hybrid Mafia PMP 600 | https://www.youtube.com/watch?v=anCALU8_0zc |
| 44 | Lustered Cognoscenti | https://www.youtube.com/watch?v=wbhUKDp49IM |
| 45 | Lustered Cognoscenti (PS3/PC with Mission Pass) | https://www.youtube.com/watch?v=pE3g0WXIKO8 |
| 46 | Hybrid PCJ 600 | https://www.youtube.com/watch?v=3lyYub7s0-Y |
| 47 | Lustered Contender and Lustered Stallion (2 of 2) | https://www.youtube.com/watch?v=HndqyEm7SGo |
| 48 | EC Black Maverick | https://www.youtube.com/watch?v=50leFQRD_Fk |
| 49 | EC Green Willard | https://www.youtube.com/watch?v=H07wa_jRJw8 |
| 50 | Hybrid/Lustered/EC Green and Blue Rancher | https://www.youtube.com/watch?v=k-eMzD1Kfwc |
| 51 | Unique Police Stockade (2 of 2) and Lustered/EC Red Biff | https://www.youtube.com/watch?v=alj5caZYjWo |
| 52 | EC Black Schafter and 2X Primos | https://www.youtube.com/watch?v=-SQpAk4wNp4 |
| 53 | Unique Romero and EC Black Washington (1 of 3) | https://www.youtube.com/watch?v=_j6xm7YknSU |
| 54 | Lustered/EC Silver Comet | https://www.youtube.com/watch?v=_-RQu2V6KzY |
| 55 | NE Rancher | https://www.youtube.com/watch?v=TKVjwmJUg1o |
| 56 | NE Bobcat | https://www.youtube.com/watch?v=VpZUYIpqJSM |
| 57 | Lustered SuperGT | https://www.youtube.com/watch?v=x9N743wWN78 |
| 58 | EC Red and White Maverick | https://www.youtube.com/watch?v=c_5Ytn1Swa0 |
| 59 | EC Orange and Black Infernus | https://www.youtube.com/watch?v=gNrQi9VNTL0 |
| 60 | EC Yellow and Black Infernus | https://www.youtube.com/watch?v=kMtoRFo9Is0 |
| 61 | Lustered/EC Pink Feltzer | https://www.youtube.com/watch?v=x1Agl75z6p4 |
| 62 | Lustered Mafia Sentinel and Lustered Mafia PMP 600 (1 of 2) | https://www.youtube.com/watch?v=c4AZAiU-Ubs |
| 63 | Lustered Vincent with EC Green Rims (1 of 2) | https://www.youtube.com/watch?v=qrtZ2MmrDjc |
| 64 | Lustered Vincent with EC Black Rims | https://www.youtube.com/watch?v=k_KntRlc788 |
| 65 | Lustered Vincent with EC Green Rims (2 of 2) | https://www.youtube.com/watch?v=VBLyq8FE38c |
| 66 | Lustered/EC Bobcat and 2X Ponys | https://www.youtube.com/watch?v=wcGS46v77Xo |
| 67 | Lustered/EC Black Schafter with EC Black Rims (2 of 2) | https://www.youtube.com/watch?v=Vw6T7IDYhDw |
| 68 | Lustered/EC Silver Sultan | https://www.youtube.com/watch?v=LHJmt8dm49o |
| 69 | Lustered Mafia PMP 600 (2 of 2) and Lustered Coquette | https://www.youtube.com/watch?v=0IEN1OYNAUs |
| 70 | Lustered Mafia PMP 600 (2 of 2) and NE Cavalcade FXT | https://www.youtube.com/watch?v=popGqprWrdE |
| 71 | EC Black Washington (2 of 3) | https://www.youtube.com/watch?v=WzzGpO4ZfaU |
| 72 | Lustered/EC White Oracle and Hybrid/Lustered Mafia PMP 600 (1 of 2) | https://www.youtube.com/watch?v=xKTYnXE9tb4 |
| 73 | Lustered Lokus | https://www.youtube.com/watch?v=rSm-SCzSD7E |
| 74 | Lustered/EC Dark Grey Pony | https://www.youtube.com/watch?v=RWPdcUmdLEs |
| 75 | Lustered/EC Dark Grey Pony (PS3/PC with Mission Pass) | https://www.youtube.com/watch?v=tAu1BkObecw |
| 76 | Lustered/EC/NE Rancher and Lustered/EC Sanchez (Deal) | https://www.youtube.com/watch?v=QM8vogdiJqc |
| 77 | EC Black and Silver Cognoscenti with White Ribbon (Deal) | https://www.youtube.com/watch?v=TQNsAY1Xd08 |
| 78 | NE Annihilator (Deal) | https://www.youtube.com/watch?v=yNVGE3dln-4 |
| 79 | EC White and Gold Maverick (Deal) | https://www.youtube.com/watch?v=W3HrxDGk7nw |
| 80 | A Revenger's Tragedy — 4 Special Vehicles at once (Deal) | https://www.youtube.com/watch?v=mePakZ4Nxq0 |
| 81 | EC Black and Silver Cognoscenti (Revenge) | https://www.youtube.com/watch?v=oa1nUn1dTTs |
| 82 | Lustered Sentinel with EC Black Rims (2 of 2) (Revenge) | https://www.youtube.com/watch?v=jhCorqfs-kg |
| 83 | NE Annihilator (Revenge) | https://www.youtube.com/watch?v=SKb_n9n9DIk |
| 84 | Out of Commission — 4 Special Vehicles at once (Revenge) | https://www.youtube.com/watch?v=8dtDAdeCerA |
| 85 | Lustered/EC/NE Light Silver and Dark Grey Banshee | https://www.youtube.com/watch?v=anQzQszoOws |
| 86 | EC White Cognoscenti | https://www.youtube.com/watch?v=tunpEFU0W8Q |
| 87 | EC Black Huntley Sport | https://www.youtube.com/watch?v=GjlkRvme55Q |
| 88 | EC Black Vigero2 (beater) | https://www.youtube.com/watch?v=N03Uqb4O5aQ |
| 89 | EC Black and Green Sabre2 (beater) | https://www.youtube.com/watch?v=mdPySrOBcZc |
| 90 | EC Black and Green Emperor2 (beater) | https://www.youtube.com/watch?v=erAAzHpMvC0 |
| 91 | Hybrid Albanian Futo GT | https://www.youtube.com/watch?v=hvwZ6sWanHE |
| 92 | Hybrid Triad Intruder and EC Black/Green Huntley Sport with EC Stripe | https://www.youtube.com/watch?v=WKDmIABsarY |
| 93 | 10 EC Vehicles from Brucie's Exotic Exports | https://www.youtube.com/watch?v=lLM-mcW4Ohw |
| 94 | 30 EC Vehicles from Stevie's Car Thefts | https://www.youtube.com/watch?v=5E_v29nWEfo |
| 95 | EC Red and Black Virgo | https://www.youtube.com/watch?v=mqpTwaMazu8 |
| 96 | EC Black and Gold Huntley Sport | https://www.youtube.com/watch?v=1-y5SZIUvWQ |
| 97 | Lustered/EC Red PMP 600 | https://www.youtube.com/watch?v=0jbpdF5eTFs |
| 98 | Lustered/EC Red Patriot | https://www.youtube.com/watch?v=tgntSqQXfxw |
| 99 | Lustered/EC Red Presidente with EC Black Rims | https://www.youtube.com/watch?v=FbgdXn9lU_c |
| 100 | AP Conversion | https://www.youtube.com/watch?v=PDVDTZ4mXCA |

**Other videos referenced inside the written guides (not in this playlist):**
- No. 1 SuperGT/Turismo no-fail method (EKGene, via LancetJades): https://www.youtube.com/watch?v=T4cBDrJRHxk
- Pre-Alderney Annihilator theft (EKGene, via LancetJades): https://www.youtube.com/watch?v=jHHumUqbfWg
- Annihilator rooftop theft (Ranjaya Mendis, via LancetJades): https://www.youtube.com/watch?v=ulyBj2BAgls and https://www.youtube.com/watch?v=qCskLx0HrEw

Lethal Vaccine's text also credits videos by **zazaza691** (EC White and Black Maverick; EC Red and White Maverick) and **Viv1d Shadows** (Easy As Can Be vehicles, No. 1 PC/360 method) that are **not in this playlist** — I did not locate their URLs, so none are listed.

---

## 10. Known conflicts and gaps — flag these in the app

1. **Green & Blue Rancher on PS3.** LancetJades: *unobtainable on PS3, confirmed by multiple people.* Lethal Vaccine: *previously believed unobtainable, but turns out to be false — it IS obtainable on PS3.* **Unresolved.**
2. **Dark Green Vincent (She's a Keeper).** LancetJades says mission failure is required; Lethal Vaccine gives a mission-pass method. **Lethal Vaccine's is more specific and likely correct.**
3. **Pegorino's Pride Schafter.** LancetJades calls it a "Russian Schafter with silver grill"; Lethal Vaccine calls it a civilian EC Black Schafter with EC black rims. **Model classification disputed.**
4. **Playboy X safehouse unlock.** LancetJades' "choose Playboy X" is wrong/ambiguous; **you must kill him.**
5. **Lustered Red Sanchez (Truck Hustle).** Appears only in LancetJades, not in Lethal Vaccine's list. **Lower confidence; no video.**
6. **Six playlist videos with no written entry** (post-June-2018 discoveries): Hybrid Banshee (#13), EC Black Primo with EC Black Rims (#18), Lustered/EC2 Black Turismo (#22), NE Rancher (#55), NE Bobcat (#56), NE Cavalcade FXT (#70). **Colour, luster, mission, missability and difficulty are all UNVERIFIED for these.**
7. **Two video-title vs. text mismatches:** #5 "Black Merit" vs. text "Silver Merit"; #22 "Black Turismo" vs. text "Yellow Turismo".
8. **Yellow & Black Infernus platform exclusivity** (PC-only?) is claimed by Lethal Vaccine but not corroborated. **Unverified.**
9. **Luster probability figures** (7/9 Cognoscenti, 8/11 Pony, 2/9 blue Cognoscenti) come from Lethal Vaccine's save-editor work only. They are the best data available but are single-sourced.
10. The **GTA Wiki / Fandom** page is noticeably less accurate than either guide — it omits the luster system almost entirely and gets several colours wrong (e.g. it calls the Hossan Banshee "black-and-white"). **Do not use it as a primary source.**
