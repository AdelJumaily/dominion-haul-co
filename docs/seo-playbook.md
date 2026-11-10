# Dominion Haul: Local SEO Playbook

Business facts used everywhere in this document (and nothing else):

| Field | Value |
|---|---|
| Name | **Dominion Haul** (exactly this, everywhere) |
| Website | https://dominionhaul.com |
| Phone | (571) 477-7222 |
| Email | adel@dominionhaul.com |
| Base | Chantilly, VA (warehouse, no storefront: service-area business) |
| Service area | Fairfax, Loudoun, Prince William and Arlington counties |

---

## 0. Fix these first: problems on the current site

I read the code for your live site. These issues matter more than anything else in this playbook. Several of them break your own rules.

| # | Problem | Where | Why it matters | Fix |
|---|---|---|---|---|
| 1 | ✅ **Fixed** (not yet deployed). **The site thought its domain was `dominionhaulco.com`**, not `dominionhaul.com` | `astro.config.mjs` (line with `const SITE`), `public/robots.txt`, fallback in `src/components/Schema.astro` | Every "canonical" tag tells Google that the *real* page lives on a different domain. The sitemap and schema point to the wrong site too. **This alone can stop you from ranking.** | Change all three to `https://dominionhaul.com` |
| 2 | ✅ **Fixed** (not yet deployed). **Six made-up customer reviews** (Marissa T., Devon, Priya, Grant, Linda, Tom), shown on the homepage, About, Reviews and location pages. The Reviews page even says "Every review here is from a real job." | `src/content/testimonials/*`, `Testimonials` component | Breaks your rule. Also illegal: the FTC's 2024 rule bans fake reviews, with fines per violation. Google can penalize it too. | Delete all six. Hide the testimonials section until you have real Google reviews you can quote with permission |
| 3 | ~~Insurance claims~~ **Resolved:** Dominion Haul *is* insured, so the certificate-of-insurance lines can stay. Still never say "licensed" or "bonded." | `commercial-cleanouts.md`, `arlington-county.md`, `chantilly.md`, `herndon.md` | The pages promise to send a certificate of insurance (COI) to building managers, so have one ready from your insurer | Keep the lines. Ask your insurance agent how to issue a COI quickly. |
| 4 | **Business name is "Dominion Haul Co"** on the site (15 files) but your Google profile is "Dominion Haul" | `src/config/site.ts` → `name` | Google matches your website to your Business Profile partly by name. Mismatches weaken that link. | Set `name: 'Dominion Haul'`. Keep "Dominion Haul Co LLC" only as a legal name in the footer, *if* that's your real LLC name |
| 5 | **Your street address (14600 Flint Lee Rd) is on every page and in the schema** | `site.ts` → `address`, footer | You're a service-area business. On Google you should hide the address. Showing it everywhere else sends mixed signals and invites customers to drive to a warehouse. | Show "Based in Chantilly, VA" only. Remove the street from the footer and schema |
| 6 | **About 96 near-identical "city × service" pages** (e.g. `/locations/reston/furniture-removal`), generated from one template with the city name swapped | `src/pages/locations/[city]/[service].astro` | This is exactly what Google calls "doorway pages." It breaks your "no copied city content" rule and can drag down the whole site. | Delete that file (or add `noindex`). Real city pages + real service pages are enough |
| 7 | **Business hours, prices, "Reston by 2pm," "15-minute quote reply," "donation partners"** are placeholder numbers and promises I didn't get from you | `site.ts` hours, `pricing.ts` (its own comment says "CONFIRM EVERY NUMBER"), homepage stats | If any of it isn't true, it's a broken promise. Hours also feed the schema. | Confirm or delete each one. Set your real hours to match Google |
| 8 | **A stock photo (Pexels) is labeled "Dominion Haul Co box truck"** in the hero alt text | `site.ts` → `heroTruck` | It's describing a truck that isn't yours | Replace with a real photo of your truck (see Section 6) |
| 9 | **Homepage names competitors** ("1-800-GOT-JUNK and the other franchises…") and shows a "review platforms" strip (Google, Yelp, Angi, Thumbtack…) | `src/pages/index.astro` | The strip implies you have reviews on those sites. Naming a competitor's trademark is unnecessary risk. | Remove both |
| 10 | Missing service pages: **treadmill/exercise equipment, garage/basement/attic cleanouts, pre-listing cleanouts for realtors, remodeler/property-manager hauling**. Missing city pages: **Fairfax** (city) and **Arlington** as a town page | `src/content/services`, `src/content/locations` | You can't rank for a page that doesn't exist | See Section 2 |

> **I can make fixes 1–9 in the code for you** (about an hour of changes, all reversible with git). Just say the word. Fix #1 is the urgent one.

---

## 1. Homepage and key pages: what they should say

### Plain-English principles

- **Each page has one job.** The homepage targets "junk removal Northern Virginia" plus your brand. The Fairfax page targets "junk removal Fairfax VA." The furniture page targets "furniture removal." If two pages chase the same phrase, Google gets confused about which one to show.
- **Say who, what, where in the first two sentences.** "Dominion Haul is a junk removal company based in Chantilly, VA, serving Fairfax, Loudoun, Prince William and Arlington." That one sentence covers your brand, the service and the area.
- **Write for a stressed customer, not for Google.** They want to know: Do you take my stuff? Roughly what does it cost? When can you come? How do I book? Answer those four questions on every important page and the SEO mostly takes care of itself.
- **Being new is fine, so be honest about it.** "We're a new local company; you'll talk to the person who shows up" is a real selling point. Fake reviews and borrowed credibility aren't.
- **Phone number visible and clickable on every page** (the site already does this well).

### Homepage tags (exact)

| Tag | Text | Length |
|---|---|---|
| **Title tag** | `Junk Removal Northern Virginia \| Dominion Haul` | 46 chars |
| **Meta description** | `Dominion Haul removes furniture, appliances, and household junk across Fairfax, Loudoun, Prince William & Arlington. Call or text 571-477-7222.` | 143 chars |
| **H1** | `Junk Removal and Hauling in Northern Virginia` | n/a |

Why this works: the brand name is in the title (so "Dominion Haul" searches find you), "Northern Virginia" is the main phrase, and the meta description reads like an ad with your phone number in it. The title tag doesn't need "NOVA". Google treats NoVA and Northern Virginia as the same thing. Use "NoVA" once in the body text, naturally.

### Key pages

| Page | What it must say |
|---|---|
| **Home** | Who you are, what you haul, where, how booking works, why a new local company is a good choice, phone number, links to every service and area page |
| **Services hub** `/services` | A short card for each service with one sentence and a link |
| **Service area hub** `/locations` | The four counties, the city list with links, and an honest sentence about travel time from Chantilly |
| **Pricing** `/pricing` | *Only if you publish real numbers.* How pricing works (by truck space), what changes the price, what's included. If you'd rather not publish numbers, explain *how* you price instead. That still helps. |
| **About** `/about` | Your real story: who you are, why you started Dominion Haul, a photo of you and the truck. No invented history. |
| **Contact** `/contact` | Phone, text, email, quote form, service area. No street address. |
| **Reviews** `/reviews` | Hide from navigation until you have real Google reviews. Then link to your Google profile and quote a few real ones, with permission. |

---

## 2. Every page the site should have

URL style matches what's already on the site (`/services/...`, `/locations/...`).

### 2a. Core pages

| URL | Title tag | Meta description | H1 |
|---|---|---|---|
| `/` | Junk Removal Northern Virginia \| Dominion Haul | (see Section 1) | Junk Removal and Hauling in Northern Virginia |
| `/services` | Junk Removal & Hauling Services \| Dominion Haul | Furniture, appliances, treadmills, yard waste, cleanouts, and hauling for realtors and remodelers in Northern Virginia. See what we take. | Junk Removal and Hauling Services |
| `/locations` | Service Area: Northern Virginia \| Dominion Haul | Dominion Haul is based in Chantilly and serves Fairfax, Loudoun, Prince William, and Arlington counties. Find your town and book a pickup. | Where We Haul in Northern Virginia |
| `/pricing` | Junk Removal Pricing in Northern Virginia \| Dominion Haul | How Dominion Haul prices junk removal: by how much space your items take in the truck. See what affects the cost and get a quote. | How Our Junk Removal Pricing Works |
| `/about` | About Dominion Haul \| Junk Removal in Chantilly, VA | Dominion Haul is a local junk removal and hauling company based in Chantilly, VA. Meet the person behind the truck. | About Dominion Haul |
| `/contact` | Contact Dominion Haul \| Call or Text 571-477-7222 | Call, text, or email Dominion Haul for a junk removal quote anywhere in Fairfax, Loudoun, Prince William, or Arlington. | Get a Junk Removal Quote |

### 2b. Service pages (9)

**Mapping from what's on the site now:**

| Current page | Action |
|---|---|
| `junk-removal`, `furniture-removal`, `appliance-removal`, `yard-waste-removal`, `estate-cleanouts` | **Keep URL**, rewrite with the copy/outlines below |
| `construction-debris-removal` | Rewrite as the remodeler/property-manager page and 301-redirect to the new URL |
| `commercial-cleanouts` | Remove (insurance claims; not on your service list). 301 → remodeler/PM page |
| `shed-removal` | Remove unless you actually do shed demolition. 301 → `/services/yard-waste-removal` |
| *(new)* `treadmill-removal`, `garage-cleanouts`, `pre-listing-cleanouts`, `remodeler-property-manager-hauling` | **Create** |

Every service page follows the same *structure* (with different words):
1. H1 + two-sentence intro (what, where, how to book)
2. What we take (specific bulleted list)
3. How it works for *this* service
4. What affects the price
5. What we can't take / limits for this service
6. 3–4 FAQs specific to this service
7. Areas we serve (links to city pages)
8. Call/text button

| URL | Title tag | Meta description | H1 | Unique outline points |
|---|---|---|---|---|
| `/services/junk-removal` | Household Junk Removal in Northern VA \| Dominion Haul | Old furniture, boxes, mattresses, electronics, and clutter: Dominion Haul hauls household junk across Northern Virginia. Text a photo for a quote. | Household Junk Removal in Northern Virginia | **Full copy in Section 3.** |
| `/services/furniture-removal` | Furniture Removal in Northern Virginia \| Dominion Haul | Couches, sectionals, mattresses, dressers, and desks hauled out of your home, from any floor. Furniture removal across Northern Virginia. | Furniture Removal in Northern Virginia | **Full copy in Section 3.** |
| `/services/appliance-removal` | Appliance Removal in Northern Virginia \| Dominion Haul | Old refrigerators, washers, dryers, stoves, and freezers hauled away from your home in Northern Virginia. Call or text 571-477-7222. | Appliance Removal and Haul-Away | Which appliances; fridges/freezers need refrigerant handled properly (explain simply); you disconnect gas, we don't (say plainly); basement washer/dryer carry-outs; what to do before we arrive (empty and defrost fridge, shut water valves) |
| `/services/treadmill-removal` | Treadmill & Exercise Equipment Removal \| Dominion Haul | Treadmills, ellipticals, weight benches, and home gym equipment removed from basements and upstairs rooms across Northern Virginia. | Treadmill and Exercise Equipment Removal | Why treadmills are hard (weight, awkward shape, basement stairs); we disassemble when needed; list: treadmills, ellipticals, exercise bikes, rowers, weight benches, free weights, home gyms; unplug and fold if possible; single-item pricing explained |
| `/services/yard-waste-removal` | Yard Waste Removal in Northern Virginia \| Dominion Haul | Branches, brush, leaves, old landscaping, and storm debris hauled away. Yard waste removal in Fairfax, Loudoun, Prince William & Arlington. | Yard Waste and Brush Removal | What counts (branches, bagged leaves, brush, sod, old mulch, broken planters, fencing, playsets); what we don't do (cut down standing trees, stump grinding); after-storm cleanup; why curbside pickup often won't take big piles |
| `/services/garage-cleanouts` | Garage, Basement & Attic Cleanouts \| Dominion Haul | Clear out a packed garage, basement, or attic in one visit. We sort, load, and haul everything you don't want. Serving Northern Virginia. | Garage, Basement, and Attic Cleanouts | **Full copy in Section 3.** |
| `/services/estate-cleanouts` | Estate Cleanouts in Northern Virginia \| Dominion Haul | Clearing a loved one's home? We work at your pace, set aside papers and photos, and haul the rest. Estate cleanouts across Northern Virginia. | Estate Cleanouts, Handled with Care | Who calls (families, executors, estate attorneys, realtors); walk-through before starting; we set aside papers, photos and valuables we find; working with family not in the area (photos/updates by text); whole house in one or more visits; what to remove first (valuables, firearms, medications) |
| `/services/pre-listing-cleanouts` | Pre-Listing Cleanouts for Realtors \| Dominion Haul | Get a listing photo-ready fast. Dominion Haul clears homes before listing, after closing, and for estate sales across Northern Virginia. | Pre-Listing Cleanouts for Realtors and Sellers | Realtor's timeline (photos/open house date); you can let us in with a lockbox code (if you allow that) and we send before/after photos; vacant-home cleanouts after closing; billing the agent, seller, or at closing (state your real policy); one contact for repeat agents |
| `/services/remodeler-property-manager-hauling` | Hauling for Remodelers & Property Managers \| Dominion Haul | Debris haul-off for remodelers and tenant move-out cleanouts for property managers in Northern Virginia. Fast scheduling, one contact. | Hauling for Remodelers and Property Managers | Two halves: (1) remodelers: drywall, cabinets, flooring, fixtures, packaging; truck vs. dumpster (no dumpster sitting in the driveway, no permit); (2) property managers: tenant move-out cleanouts, abandoned furniture, turnover deadlines; photos for your records; we can't take hazardous materials (paint, chemicals, asbestos) |

> Titles must stay under 60 characters. All titles in this document were checked (Section 11).

### 2c. City and area pages (13)

**Structure for every city page (the words must be different on each):**
1. H1 + intro naming the town and how far it is from your Chantilly base
2. "What we haul in [Town]": the services *most relevant to that town*, with links
3. **A local section that only makes sense for that town** (housing types, HOAs, building rules, town trash service, typical jobs)
4. How booking/scheduling works from Chantilly to that town (honest travel time)
5. Neighborhoods and ZIP codes served (a short list, not a keyword dump)
6. 3 FAQs specific to that town
7. A real job photo from that town (once you have one)
8. Links: county page, 2–3 nearby towns, 3 relevant services

**About Fairfax vs. Fairfax County:** don't make two pages that both chase "junk removal Fairfax." Make **one** Fairfax page (`/locations/fairfax`) that covers the City of Fairfax *and* Fairfax County addresses, then 301-redirect `/locations/fairfax-county` to it. Same idea for Arlington: one page at `/locations/arlington`, redirect `/locations/arlington-county`.

| URL | Title tag | Meta description | H1 | Local angle (what makes this page unique) |
|---|---|---|---|---|
| `/locations/fairfax` | Junk Removal in Fairfax, VA \| Dominion Haul | Junk removal in Fairfax, VA: furniture, appliances, garage cleanouts, and more. Local crew based in nearby Chantilly. Call 571-477-7222. | Junk Removal in Fairfax, VA | **Full copy in Section 3.** |
| `/locations/chantilly` | Junk Removal in Chantilly, VA \| Dominion Haul | Dominion Haul is based right here in Chantilly. Furniture, appliance, and garage junk removal with the shortest drive in our service area. | Junk Removal in Chantilly, VA | Your home base, so the quickest response. Neighborhoods: Brookfield, Greenbriar, Pleasant Valley, Franklin Farm, Sully Station, South Riding (Chantilly mailing addresses). Townhouse garages. Small-business and office cleanouts along Route 28 / Route 50 corridors (only if you do them). |
| `/locations/centreville` | Junk Removal in Centreville, VA \| Dominion Haul | Junk removal in Centreville, VA: townhouse garages, basements, furniture, and appliances. Local crew from next-door Chantilly. | Junk Removal in Centreville, VA | Lots of townhouse communities (Little Rocky Run, Virginia Run, Centre Ridge, Country Creek). Tight parking and HOA rules against leaving piles at the curb. One-car garages packed full. Close to Chantilly, so quick scheduling. |
| `/locations/herndon` | Junk Removal in Herndon, VA \| Dominion Haul | Junk removal in Herndon, VA for homes, townhouses, and apartments. Furniture, appliances, and cleanouts hauled the same week, often sooner. | Junk Removal in Herndon, VA | Town of Herndon runs its own trash service, so explain how its bulk pickup limits differ from a hauler. Older homes near downtown with small basements. Apartment and condo move-outs near the Metro stations (elevator reservations, loading zones). |
| `/locations/reston` | Junk Removal in Reston, VA \| Dominion Haul | Junk removal in Reston, VA: cluster homes, condos, and single-family houses. We carry everything out, even from the far end of the lot. | Junk Removal in Reston, VA | Reston's planned layout: cluster homes where parking is a walk from the front door (long carries are on us). Reston Association / cluster rules about outdoor storage. Condos near Reston Town Center and Lake Anne with elevator rules. |
| `/locations/vienna` | Junk Removal in Vienna, VA \| Dominion Haul | Clearing a Vienna, VA home before a sale or rebuild? We haul furniture, appliances, and whole-house contents. Call or text 571-477-7222. | Junk Removal in Vienna, VA | Lots of older homes being sold or torn down and rebuilt, so **whole-house clear-outs before sale or demolition**. Town of Vienna has its own trash service. Older homes with narrow, steep basement stairs. Dunn Loring, Wolf Trap, Cedar Lane areas. |
| `/locations/ashburn` | Junk Removal in Ashburn, VA \| Dominion Haul | Junk removal in Ashburn, VA: treadmills, playsets, basement furniture, and garage cleanouts in HOA communities. Text a photo for a quote. | Junk Removal in Ashburn, VA | Big HOA communities (Ashburn Farm, Ashburn Village, Broadlands, Brambleton, One Loudoun) where piles can't sit at the curb for a week. Finished basements with **home gyms and treadmills**. Outgrown playsets and trampolines. Loudoun County angle. |
| `/locations/leesburg` | Junk Removal in Leesburg, VA \| Dominion Haul | Junk removal in Leesburg, VA: attic and basement cleanouts, furniture, appliances, and yard debris on larger lots. Local Northern Virginia crew. | Junk Removal in Leesburg, VA | Mix of historic downtown homes (tight stairs, old attics) and newer subdivisions. Larger lots, so more **yard debris and outbuilding cleanouts**. Town of Leesburg trash service vs. calling a hauler. Further from Chantilly, so scheduling tip: book a day ahead. |
| `/locations/manassas` | Junk Removal in Manassas, VA \| Dominion Haul | Junk removal in Manassas and Manassas Park: furniture, appliances, garage cleanouts, and rental turnovers. Call or text 571-477-7222. | Junk Removal in Manassas, VA | City of Manassas and Manassas Park are independent cities with their own trash services, plus "Manassas" mailing addresses in Prince William County. We serve all three. Old Town Manassas homes. **Rental property turnovers.** Garage and shed contents. |
| `/locations/woodbridge` | Junk Removal in Woodbridge, VA \| Dominion Haul | Moving out of Woodbridge on a deadline? Dominion Haul removes furniture, appliances, and move-out junk across eastern Prince William County. | Junk Removal in Woodbridge, VA | **Move-outs on tight timelines** (including military families on PCS orders near Quantico and Fort Belvoir). Lake Ridge, Dale City and Occoquan nearby. Townhouse and rental turnovers. Honest note: it's the longest drive from Chantilly, so book ahead. |
| `/locations/arlington` | Junk Removal in Arlington, VA \| Dominion Haul | Junk removal in Arlington, VA apartments, condos, and houses. We handle elevators, stairs, and tight parking. Call or text 571-477-7222. | Junk Removal in Arlington, VA | Apartments and condos: **building rules** (elevator reservations, move hours, loading docks), street parking. Rowhouses and older bungalows with tight stairs. Honest line about building paperwork (see below). Single-item pickups common. |
| `/locations/loudoun-county` | Junk Removal in Loudoun County, VA \| Dominion Haul | Junk removal across Loudoun County: Ashburn, Leesburg, Sterling, and South Riding. Furniture, appliances, cleanouts, and yard waste. | Junk Removal in Loudoun County | **Hub page:** short county intro, links to every Loudoun town page, what's different about Loudoun (newer HOA communities in the east, larger lots in the west), county landfill/recycling note for DIYers. |
| `/locations/prince-william-county` | Junk Removal in Prince William County \| Dominion Haul | Junk removal across Prince William County: Manassas, Woodbridge, Gainesville, and Dale City. Furniture, appliances, and cleanouts. | Junk Removal in Prince William County | **Hub page:** links to Manassas, Woodbridge, Gainesville; the independent-city vs. county trash difference; typical jobs. |

**Arlington line about building paperwork** (Dominion Haul is insured):

> Many Arlington apartment and condo buildings require a certificate of insurance from any vendor before they can use the elevator or loading dock. Dominion Haul is insured, and we can send a certificate to your building manager. Let us know when you book, and give us a day or two for buildings that need the elevator reserved.

**Existing extra pages** (Burke, Gainesville, Sterling): keep them if their content is genuinely about that town. They're lower priority. Don't create more towns until the 13 above are done well.

---

## 3. Paste-ready copy

### Before you paste: confirm these 7 things are true

The copy below assumes the following. If any of them isn't true, delete or change that sentence everywhere it appears.

1. You price by **how much space items take in the truck** (not by the hour).
2. Customers can **text a photo** to get a price range.
3. You **confirm the final price on site before loading**, and the customer can decline without paying.
4. You carry items **from anywhere on the property** (upstairs, basements, backyards).
5. You offer **same-day or next-day pickup when the schedule allows** (no guarantee).
6. You **donate or recycle** usable items and metal when you can.
7. You **sweep up** the area after loading.

---

### 3a. Homepage

**Title tag:** `Junk Removal Northern Virginia | Dominion Haul`
**Meta description:** `Dominion Haul removes furniture, appliances, and household junk across Fairfax, Loudoun, Prince William & Arlington. Call or text 571-477-7222.`

---

# Junk Removal and Hauling in Northern Virginia

Dominion Haul is a local junk removal company based in Chantilly, VA. We pick up old furniture, appliances, treadmills, yard waste, and whole garages full of stuff across Fairfax, Loudoun, Prince William, and Arlington counties. You point to what's going. We lift it, load it, and haul it away.

**[Call (571) 477-7222]** **[Text us a photo for a quote]**

## What we haul

- **[Household junk](/services/junk-removal):** boxes, clutter, mattresses, old electronics, toys, and everything else that's piled up
- **[Furniture](/services/furniture-removal):** couches, sectionals, recliners, dressers, beds, desks, and tables
- **[Appliances](/services/appliance-removal):** refrigerators, freezers, washers, dryers, stoves, and dishwashers
- **[Treadmills and exercise equipment](/services/treadmill-removal):** treadmills, ellipticals, bikes, and weight benches, even from the basement
- **[Yard waste](/services/yard-waste-removal):** branches, brush, bagged leaves, old fencing, and storm debris
- **[Garage, basement, and attic cleanouts](/services/garage-cleanouts):** one visit to clear the whole space
- **[Estate cleanouts](/services/estate-cleanouts):** clearing a loved one's home at a pace that works for your family
- **[Pre-listing cleanouts for realtors](/services/pre-listing-cleanouts):** empty, photo-ready homes on your timeline
- **[Hauling for remodelers and property managers](/services/remodeler-property-manager-hauling):** debris haul-off and tenant move-out cleanouts

## How it works

**1. Send a photo or give us a call.**
Text a picture of what's going to (571) 477-7222, or call and describe it. We'll give you a price range based on how much room it will take in our truck.

**2. We confirm the price before we lift anything.**
When we arrive, we look at everything in person and give you a final price. If you're happy with it, we get to work. If not, you owe nothing.

**3. We load it, haul it, and sweep up.**
We carry everything out, from upstairs bedrooms, basements, attics, and backyards. You don't need to move anything to the curb. When we're done, we sweep the area we cleared.

## Who we work with

- **Homeowners and renters** clearing out a room, a garage, or a single item that won't fit in the trash
- **Families** handling a parent's or relative's home
- **Realtors and sellers** getting a house ready to list or emptying it after closing
- **Remodelers** who need debris gone without a dumpster sitting in the driveway
- **Property managers** turning over a unit after a tenant moves out

## Where we work

Our truck is based in Chantilly, which puts most of Northern Virginia (NoVA) within easy reach. We serve:

- **Fairfax County:** [Fairfax](/locations/fairfax), [Chantilly](/locations/chantilly), [Centreville](/locations/centreville), [Herndon](/locations/herndon), [Reston](/locations/reston), [Vienna](/locations/vienna)
- **Loudoun County:** [Ashburn](/locations/ashburn), [Leesburg](/locations/leesburg)
- **Prince William County:** [Manassas](/locations/manassas), [Woodbridge](/locations/woodbridge)
- **Arlington County:** [Arlington](/locations/arlington)

Don't see your town? If you're in one of these four counties, call us. The answer is almost always yes.

## Why call Dominion Haul

**You talk to the person who shows up.** We're a new, local company, not a national call center. The person who answers your call is the person who will be in your driveway.

**The price is settled before loading.** You'll know exactly what you're paying before anything goes on the truck.

**We do all the heavy lifting.** Stairs, tight hallways, and the far corner of the basement are part of the job.

**Straight answers.** If we can't take something, like paint or chemicals, we'll tell you up front and point you to where it can go.

**We'd rather earn your review than ask for your trust.** We're building this business one job at a time. If we do good work, we'll ask you to say so on Google. If we don't, we want to hear it from you first.

## Common questions

*(Use the FAQ from Section 4 here, or the first 4–5 questions with a link to the full FAQ.)*

## Ready to clear it out?

Call or text **(571) 477-7222**, or email **adel@dominionhaul.com**. Send a photo and we'll get back to you with a price range.

**[Call (571) 477-7222]** **[Text a photo]**

---

### 3b. Service page: Household Junk Removal

**URL:** `/services/junk-removal`
**Title tag:** `Household Junk Removal in Northern VA | Dominion Haul`
**Meta description:** `Old furniture, boxes, mattresses, electronics, and clutter: Dominion Haul hauls household junk across Northern Virginia. Text a photo for a quote.`

---

# Household Junk Removal in Northern Virginia

If it's taking up space in your home and you want it gone, Dominion Haul can haul it away. We're based in Chantilly and pick up household junk across Fairfax, Loudoun, Prince William, and Arlington counties. Text a photo to (571) 477-7222 for a quick price range.

## What we take

Most things you'd find in a normal home:

- Old furniture: couches, chairs, tables, dressers, bed frames
- Mattresses and box springs
- Boxes, bags, and general clutter
- TVs, computers, printers, and other electronics
- Toys, bikes, strollers, and kids' gear
- Rugs, carpet, and pads
- Exercise equipment
- Holiday decorations, luggage, and storage bins
- Small appliances and large ones like refrigerators and washers

Not sure about something? Send us a photo and ask.

## How household junk removal works

**Tell us what's going.** Text a photo or call. One item or a whole room, it helps us give you an accurate price range.

**Pick a time.** We'll find a time that works for you. Same-day or next-day pickup is often possible when our schedule allows.

**We confirm the price on site.** Before we load anything, we look at what's going and give you a final price.

**We do the lifting.** We carry everything out from wherever it is in your home. You don't need to drag anything to the curb or the driveway.

**We clean up.** Once the space is clear, we sweep up. Items in good shape get donated or recycled when possible.

## What affects the price

We price by **how much space your items take up in our truck**, not by the hour. A single armchair costs less than a full garage. Things that can change the price:

- **Volume:** the main factor
- **Very heavy items:** like a piano or a large amount of concrete or dirt
- **Items that need special handling:** like refrigerators or mattresses, which have their own disposal fees at local facilities

The fastest way to get a real number is to send a photo.

## What we can't take

For safety and legal reasons, we can't haul:

- Paint, solvents, gasoline, oil, and other chemicals
- Propane tanks and other pressurized tanks
- Asbestos or anything that might contain it
- Medical waste
- Firearms and ammunition

Fairfax, Loudoun, Prince William, and Arlington counties each run household hazardous waste drop-offs for residents. We're happy to point you to the right one.

## Common questions

**Do I need to be home?**
For most jobs, yes, at least at the start so we can confirm what's going and agree on the price. If you can't be there, we can often work it out ahead of time with photos. Just ask.

**Can you take just one item?**
Yes. Single-item pickups, like one couch or one mattress, are some of our most common jobs.

**Do you take things from inside the house?**
Yes. Upstairs, basements, attics, garages, and backyards. We'll do the carrying.

## Areas we serve

We pick up household junk in [Fairfax](/locations/fairfax), [Chantilly](/locations/chantilly), [Centreville](/locations/centreville), [Herndon](/locations/herndon), [Reston](/locations/reston), [Vienna](/locations/vienna), [Ashburn](/locations/ashburn), [Leesburg](/locations/leesburg), [Manassas](/locations/manassas), [Woodbridge](/locations/woodbridge), and [Arlington](/locations/arlington), plus the rest of Northern Virginia.

**Related services:** [Furniture removal](/services/furniture-removal) · [Appliance removal](/services/appliance-removal) · [Garage, basement & attic cleanouts](/services/garage-cleanouts)

**Call or text (571) 477-7222** for a quote.

---

### 3c. Service page: Furniture Removal

**URL:** `/services/furniture-removal`
**Title tag:** `Furniture Removal in Northern Virginia | Dominion Haul`
**Meta description:** `Couches, sectionals, mattresses, dressers, and desks hauled out of your home, from any floor. Furniture removal across Northern Virginia.`

---

# Furniture Removal in Northern Virginia

Getting rid of a couch is harder than it sounds. It's heavy, it doesn't fit in your car, and your trash service may not take it. Dominion Haul removes old furniture from homes and apartments across Northern Virginia, and we carry it out ourselves, from any room or floor.

**Call or text (571) 477-7222** with a photo for a price range.

## Furniture we remove

- Sofas, sectionals, loveseats, and sleeper sofas
- Recliners and armchairs
- Mattresses, box springs, and bed frames
- Dressers, nightstands, and armoires
- Dining tables and chairs
- Desks, office chairs, and bookcases
- Entertainment centers and TV stands
- Patio and outdoor furniture
- Cribs and kids' furniture
- Futons and daybeds

## Why people call us for furniture

**It's on the wrong floor.** A sectional in a basement or a dresser in an upstairs bedroom takes two people who know how to carry heavy furniture around tight corners. That's our job.

**It doesn't fit through the door anymore.** Furniture that came in assembled sometimes has to leave in pieces. When it's needed, we take it apart on site so it gets out without damaging your walls or door frames.

**Bulk pickup won't take it, or not soon enough.** Depending on where you live and who picks up your trash, bulk items may need to be scheduled weeks out, or may not be accepted at all. We can usually come much sooner.

**You're moving or replacing it.** New couch arriving Saturday? We can pick up the old one before it gets there.

## How it works

1. **Send a photo** of the furniture to (571) 477-7222, or call and describe it.
2. **We give you a price range** and set a pickup time.
3. **We confirm the final price** when we arrive, before lifting anything.
4. **We carry it out**, load it, and sweep up where it was.

Furniture in good condition gets donated when possible. The rest is recycled or disposed of properly.

## What affects the price

Furniture removal is priced by how much space it takes in our truck. One recliner costs less than a full living room set. Mattresses can add a little because local disposal facilities charge extra for them. Send a photo for a quick, accurate range.

## Common questions

**Can you take furniture from an apartment or condo?**
Yes. If your building requires an elevator reservation or has set move hours, let us know when you book so we can plan around them.

**Will you take a sleeper sofa?**
Yes. They're one of the heaviest pieces in most homes, and that's exactly why people call us.

**Do I need to empty the furniture first?**
Please empty drawers and remove anything you want to keep. We'll take care of the rest.

## Areas we serve

Furniture removal in [Fairfax](/locations/fairfax), [Reston](/locations/reston), [Vienna](/locations/vienna), [Herndon](/locations/herndon), [Chantilly](/locations/chantilly), [Centreville](/locations/centreville), [Ashburn](/locations/ashburn), [Leesburg](/locations/leesburg), [Manassas](/locations/manassas), [Woodbridge](/locations/woodbridge), and [Arlington](/locations/arlington).

**Related services:** [Household junk removal](/services/junk-removal) · [Estate cleanouts](/services/estate-cleanouts) · [Appliance removal](/services/appliance-removal)

---

### 3d. Service page: Garage, Basement & Attic Cleanouts

**URL:** `/services/garage-cleanouts`
**Title tag:** `Garage, Basement & Attic Cleanouts | Dominion Haul`
**Meta description:** `Clear out a packed garage, basement, or attic in one visit. We sort, load, and haul everything you don't want. Serving Northern Virginia.`

---

# Garage, Basement, and Attic Cleanouts

The garage that hasn't held a car in years. The basement storage room nobody wants to open. The attic full of boxes from two moves ago. Dominion Haul clears these spaces out in one visit across Fairfax, Loudoun, Prince William, and Arlington counties. You decide what stays, and we haul away the rest.

**Call or text (571) 477-7222** with a few photos for a price range.

## What a cleanout usually includes

- Old furniture and mattresses
- Boxes, bins, and bags of stuff nobody has opened in years
- Broken or unused tools, bikes, and lawn equipment (drain the gas first)
- Old exercise equipment
- Holiday decorations
- Kids' toys, cribs, and gear they've outgrown
- Shelving units and workbenches
- Carpet, rugs, and leftover building materials
- Old electronics and small appliances
- Spare refrigerators and freezers

## How a cleanout works

**1. Send photos of the space.** A few wide shots help us estimate how much of the truck it will fill.

**2. Mark what's staying.** Before we start, walk us through what you're keeping. Tape, sticky notes, or simply pointing all work. If you're unsure about something, set it aside and decide later.

**3. We confirm the price, then get to work.** We give you a final price before loading anything.

**4. We load, haul, and sweep.** We carry everything out, including from attics with pull-down ladders and basements with narrow stairs, and sweep up when we're done.

## Tips before we arrive

- **Pull out anything valuable or personal first**: documents, photos, jewelry, and keepsakes.
- **Set aside paint, chemicals, gas cans, and propane tanks.** We can't take these, but we can tell you where to drop them off.
- **Clear a path** if you can, but don't worry about moving heavy things. That's our job.
- **Think about what you'll do with the empty space.** It makes deciding what to keep much easier.

## What affects the price

Cleanouts are priced by how much of the truck your items fill. A corner of a basement costs much less than a two-car garage packed to the ceiling. Very heavy materials like dirt, concrete, or tile can change the price, so mention them when you send photos.

## Common questions

**Can you do the garage and the basement on the same visit?**
Yes, and it's often more efficient. Tell us about both spaces when you book.

**Do I need to sort everything first?**
No. You just need to tell us what stays. We handle everything else.

**What if it doesn't all fit in one truckload?**
We'll tell you up front if your job looks like more than one load and price it accordingly before we start.

## Areas we serve

Garage, basement, and attic cleanouts in [Fairfax](/locations/fairfax), [Centreville](/locations/centreville), [Chantilly](/locations/chantilly), [Ashburn](/locations/ashburn), [Leesburg](/locations/leesburg), [Reston](/locations/reston), [Herndon](/locations/herndon), [Vienna](/locations/vienna), [Manassas](/locations/manassas), [Woodbridge](/locations/woodbridge), and [Arlington](/locations/arlington).

**Related services:** [Estate cleanouts](/services/estate-cleanouts) · [Treadmill removal](/services/treadmill-removal) · [Household junk removal](/services/junk-removal)

---

### 3e. City page: Fairfax (your template)

**URL:** `/locations/fairfax`
**Title tag:** `Junk Removal in Fairfax, VA | Dominion Haul`
**Meta description:** `Junk removal in Fairfax, VA: furniture, appliances, garage cleanouts, and more. Local crew based in nearby Chantilly. Call 571-477-7222.`

---

# Junk Removal in Fairfax, VA

Dominion Haul removes furniture, appliances, and household junk for homes and businesses in Fairfax. We're based just down the road in Chantilly, so Fairfax is one of the easiest places for us to get to. Text a photo to (571) 477-7222 and we'll send you a price range.

## What we haul in Fairfax

- [Furniture removal](/services/furniture-removal): couches, mattresses, dressers, and dining sets
- [Appliance removal](/services/appliance-removal): old refrigerators, washers, dryers, and freezers
- [Garage, basement, and attic cleanouts](/services/garage-cleanouts)
- [Treadmill and exercise equipment removal](/services/treadmill-removal)
- [Yard waste removal](/services/yard-waste-removal): branches, brush, and old landscaping
- [Estate cleanouts](/services/estate-cleanouts) and [pre-listing cleanouts](/services/pre-listing-cleanouts)

## City of Fairfax or Fairfax County: we cover both

"Fairfax" can mean two different places. The **City of Fairfax** is its own independent city with its own trash service, and **Fairfax County** surrounds it. Many homes with a Fairfax mailing address are actually in the county. It doesn't matter to us. We pick up anywhere with a Fairfax address and throughout the rest of Fairfax County.

What *does* differ is your regular trash service. Depending on where you live and who collects your trash, bulk items may have size limits, need to be scheduled ahead, or not be picked up at all. If you need something gone this week, or it's too big or heavy for the curb, that's where we come in.

## Typical Fairfax jobs

Fairfax has a mix of homes from just about every decade, and each brings its own kind of job:

- **Older split-levels and colonials** in established neighborhoods, where basements and garages have collected decades of belongings
- **Townhouses** around Fair Lakes and Fair Oaks, with one-car garages and not much room to stage a pile outside
- **Move-outs near George Mason University**, where students and renters need furniture gone before the lease ends
- **Homes being sold**, where a family or realtor needs the house emptied before listing photos

## How scheduling works

1. **Text a photo or call** (571) 477-7222.
2. **Get a price range** based on how much space your items will take in the truck.
3. **Pick a time.** Because we're nearby in Chantilly, same-day or next-day pickup in Fairfax is often possible when our schedule allows.
4. **We confirm the price on site**, then carry everything out and sweep up.

## Neighborhoods and ZIP codes

We pick up across Fairfax, including the City of Fairfax, Fair Oaks, Fair Lakes, Mantua, Oakton, Fairfax Station, and the George Mason area. ZIP codes 22030, 22031, 22032, and 22033.

## Fairfax junk removal questions

**Do you pick up in the City of Fairfax and Fairfax County?**
Yes, both. If you have a Fairfax address, or anywhere else in Fairfax County, we can come to you.

**How fast can you get to Fairfax?**
We're based in Chantilly, a short drive away, so Fairfax is one of our quickest areas to reach. Same-day pickup is often possible when the schedule allows. Call or text early in the day for the best chance.

**Can you take things my trash service won't?**
In most cases, yes, including large furniture, appliances, and big piles. We can't take hazardous materials like paint, chemicals, or propane tanks. Fairfax County runs drop-off sites for those, and we're happy to point you in the right direction.

## Nearby areas we serve

[Chantilly](/locations/chantilly) · [Centreville](/locations/centreville) · [Vienna](/locations/vienna) · [Reston](/locations/reston) · [Herndon](/locations/herndon) · [All service areas](/locations)

**Call or text (571) 477-7222** to clear out your Fairfax home.

---

### How to reuse the Fairfax page for other cities (without copying)

Google can tell when 10 pages are the same page with the city name swapped. Here's how to make each page genuinely its own:

1. **Keep the structure, rewrite every sentence.** Same section *order*, new words. Never use find-and-replace on city names.
2. **Replace the "City of Fairfax or Fairfax County" section** with the local angle from the table in Section 2c. Every town has its own thing: Reston's cluster-home parking, Arlington's building rules, Vienna's pre-rebuild clear-outs, Woodbridge's move-outs.
3. **Change the "Typical jobs" list** to fit that town's homes and customers.
4. **Change the services list order.** Lead with what that town needs most (treadmills in Ashburn, move-outs in Woodbridge, single items in Arlington).
5. **Be honest about travel time.** Chantilly and Centreville: "right next door." Woodbridge and Arlington: "book a day ahead when you can."
6. **Write new FAQs.** At least 2 of the 3 questions should only make sense for that town.
7. **Add a real job photo from that town** once you have one, with an honest caption ("Garage cleanout in Ashburn").
8. **Aim for 400+ words of unique text** on each page.
9. **Check ZIP codes and neighborhood names** before publishing. If you aren't sure a neighborhood is in that town, leave it out.

---

## 4. FAQ (schema-ready)

Put these on the homepage (or a `/faq` page). The visible text and the schema must match **word for word**.

> **Honest note:** since 2023, Google only shows FAQ dropdowns in search results for government and health websites. Adding FAQ schema won't make your listing bigger in Google. It's still worth having: the questions help customers, help Google understand the page, and help AI search tools (like Google's AI answers, ChatGPT and Bing Copilot) quote you.

**1. How much does junk removal cost?**
We price by how much space your items take up in our truck, not by the hour. A single item costs much less than a full truckload. Text a photo to (571) 477-7222 and we'll send you a price range. When we arrive, we confirm the final price before loading anything, and if you decide not to go ahead, you owe nothing.

**2. How do I get a quote?**
The fastest way is to text a photo of what's going to (571) 477-7222. You can also call or email adel@dominionhaul.com. A few photos from different angles help us give you a more accurate range.

**3. What items do you take?**
Most things from a home, garage, or yard: furniture, mattresses, appliances, treadmills and exercise equipment, electronics, boxes and clutter, yard waste, and debris from small remodeling projects. If you're unsure about an item, send us a photo and ask.

**4. What items can't you take?**
We can't take hazardous materials, including paint, solvents, gasoline, oil, pool chemicals, propane tanks, asbestos, and medical waste. We also can't take firearms or ammunition. Each Northern Virginia county runs a household hazardous waste drop-off, and we can point you to the right one.

**5. How does scheduling work? Can you come today?**
Call or text to tell us what you need removed and when. Same-day or next-day pickup is often possible when our schedule allows, especially if you reach out early in the day. We'll give you a time window and let you know when we're on the way.

**6. Do I have to carry everything outside first?**
No. We carry items out from wherever they are, including basements, attics, upstairs bedrooms, garages, and backyards. Just show us what's going.

**7. Do I need to be home during the pickup?**
It's best if someone is there at the start so we can confirm what's going and agree on the price. If you can't be there, contact us ahead of time and we can often work it out with photos.

**8. Where does my stuff go?**
Items in good shape are donated when possible, metal and electronics are recycled when possible, and the rest is taken to a licensed disposal facility.

**9. What areas do you serve?**
We're based in Chantilly and serve Fairfax, Loudoun, Prince William, and Arlington counties. That includes Fairfax, Chantilly, Centreville, Herndon, Reston, Vienna, Ashburn, Leesburg, Manassas, Woodbridge, and Arlington.

**10. Do you work with realtors, remodelers, and property managers?**
Yes. We clear homes before listing and after closing, haul debris for remodeling projects, and clean out units after tenants move out. Call (571) 477-7222 to talk about your project.

> Note for #8: "licensed disposal facility" refers to the dump or transfer station, not to you. That's fine. If you'd rather avoid the word "licensed" entirely, change it to "taken to a county landfill or transfer station."

**FAQ JSON-LD** (paste on the same page as the questions above):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does junk removal cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "We price by how much space your items take up in our truck, not by the hour. A single item costs much less than a full truckload. Text a photo to (571) 477-7222 and we'll send you a price range. When we arrive, we confirm the final price before loading anything, and if you decide not to go ahead, you owe nothing." }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote?",
      "acceptedAnswer": { "@type": "Answer", "text": "The fastest way is to text a photo of what's going to (571) 477-7222. You can also call or email adel@dominionhaul.com. A few photos from different angles help us give you a more accurate range." }
    },
    {
      "@type": "Question",
      "name": "What items do you take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most things from a home, garage, or yard: furniture, mattresses, appliances, treadmills and exercise equipment, electronics, boxes and clutter, yard waste, and debris from small remodeling projects. If you're unsure about an item, send us a photo and ask." }
    },
    {
      "@type": "Question",
      "name": "What items can't you take?",
      "acceptedAnswer": { "@type": "Answer", "text": "We can't take hazardous materials, including paint, solvents, gasoline, oil, pool chemicals, propane tanks, asbestos, and medical waste. We also can't take firearms or ammunition. Each Northern Virginia county runs a household hazardous waste drop-off, and we can point you to the right one." }
    },
    {
      "@type": "Question",
      "name": "How does scheduling work? Can you come today?",
      "acceptedAnswer": { "@type": "Answer", "text": "Call or text to tell us what you need removed and when. Same-day or next-day pickup is often possible when our schedule allows, especially if you reach out early in the day. We'll give you a time window and let you know when we're on the way." }
    },
    {
      "@type": "Question",
      "name": "Do I have to carry everything outside first?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. We carry items out from wherever they are, including basements, attics, upstairs bedrooms, garages, and backyards. Just show us what's going." }
    },
    {
      "@type": "Question",
      "name": "Do I need to be home during the pickup?",
      "acceptedAnswer": { "@type": "Answer", "text": "It's best if someone is there at the start so we can confirm what's going and agree on the price. If you can't be there, contact us ahead of time and we can often work it out with photos." }
    },
    {
      "@type": "Question",
      "name": "Where does my stuff go?",
      "acceptedAnswer": { "@type": "Answer", "text": "Items in good shape are donated when possible, metal and electronics are recycled when possible, and the rest is taken to a licensed disposal facility." }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": { "@type": "Answer", "text": "We're based in Chantilly and serve Fairfax, Loudoun, Prince William, and Arlington counties. That includes Fairfax, Chantilly, Centreville, Herndon, Reston, Vienna, Ashburn, Leesburg, Manassas, Woodbridge, and Arlington." }
    },
    {
      "@type": "Question",
      "name": "Do you work with realtors, remodelers, and property managers?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We clear homes before listing and after closing, haul debris for remodeling projects, and clean out units after tenants move out. Call (571) 477-7222 to talk about your project." }
    }
  ]
}
</script>
```

> Your site already builds FAQ schema automatically from each page's `faq` list (in `Schema.astro`). So in practice you put these Q&As into the homepage's `homeFaq` list, and the site writes the JSON-LD for you. The block above is for reference, or for any page built outside the site.

---

## 5. LocalBusiness schema (JSON-LD)

Only the facts you gave me. **No street address** (service-area business), **no hours** (add them once they're final and match Google), **no ratings** (add only once you have real Google reviews), **no social links** (add `sameAs` as you create real profiles).

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dominionhaul.com/#business",
  "name": "Dominion Haul",
  "url": "https://dominionhaul.com",
  "telephone": "+1-571-477-7222",
  "email": "adel@dominionhaul.com",
  "description": "Junk removal and hauling company based in Chantilly, Virginia, serving Fairfax, Loudoun, Prince William, and Arlington counties.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Chantilly",
    "addressRegion": "VA",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
    { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
    { "@type": "City", "name": "Fairfax, VA" },
    { "@type": "City", "name": "Chantilly, VA" },
    { "@type": "City", "name": "Centreville, VA" },
    { "@type": "City", "name": "Herndon, VA" },
    { "@type": "City", "name": "Reston, VA" },
    { "@type": "City", "name": "Vienna, VA" },
    { "@type": "City", "name": "Ashburn, VA" },
    { "@type": "City", "name": "Leesburg, VA" },
    { "@type": "City", "name": "Manassas, VA" },
    { "@type": "City", "name": "Woodbridge, VA" },
    { "@type": "City", "name": "Arlington, VA" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Junk removal and hauling services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Furniture removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Appliance removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Treadmill and exercise equipment removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Yard waste removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household junk removal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage, basement, and attic cleanouts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estate cleanouts" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pre-listing cleanouts for realtors" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hauling for remodelers and property managers" } }
    ]
  }
}
</script>
```

Notes in plain English:
- The `address` has only the town and state, no street. That's how a service-area business should show up.
- **Test it** at https://search.google.com/test/rich-results and https://validator.schema.org after publishing. Paste your homepage URL and confirm there are no errors.
- Put this on **every page** (your site's `Schema.astro` already does this automatically once the fixes in Section 0 are made). Don't paste a second copy by hand on top of it.

---

## 6. Image guidance

### Rules
- **Only use your own photos** of real jobs, your real truck, and you. Stock photos should never be described as your truck or your work.
- **Name files before uploading.** Use lowercase words separated by hyphens: what it is, then where (only if it really was there).
- **Alt text** = one plain sentence describing what's actually in the photo, as if you were describing it to someone on the phone. Mention the town only if the job really was there. Don't stuff keywords.
- **Before/after pairs** should be shot from the same spot and angle.
- **Size:** resize to about 1600px wide and save as `.webp` or `.jpg` under ~300 KB. Your current photos are large `.png` files, which slows the site down.
- **Customer privacy:** no house numbers, license plates, family photos on walls, or faces without permission.
- **Myth:** adding GPS "geotags" to photo files doesn't help rankings. Don't pay anyone for it.

### File names and alt text

| Photo | File name | Alt text |
|---|---|---|
| Truck, side view | `dominion-haul-junk-removal-truck.webp` | Dominion Haul junk removal truck parked on a residential street |
| Truck, rear with ramp/doors open | `dominion-haul-truck-loading.webp` | Rear of the Dominion Haul truck with doors open, ready to load |
| Truck, loaded | `dominion-haul-truck-full-load.webp` | Dominion Haul truck bed loaded with furniture, boxes, and bags from a cleanout |
| You with the truck | `dominion-haul-owner-with-truck.webp` | Dominion Haul owner standing next to the company truck |
| Garage before | `garage-cleanout-before-centreville-va.webp` | Two-car garage in Centreville packed with boxes, bikes, and old furniture before cleanout |
| Garage after | `garage-cleanout-after-centreville-va.webp` | Same Centreville garage empty and swept after Dominion Haul removed everything |
| Basement before | `basement-cleanout-before-fairfax-va.webp` | Fairfax basement storage room stacked with bins and old furniture |
| Basement after | `basement-cleanout-after-fairfax-va.webp` | Empty basement storage room in Fairfax after cleanout |
| Couch removal | `couch-removal-reston-va.webp` | Old sectional sofa being carried out of a Reston townhouse |
| Treadmill | `treadmill-removal-ashburn-va.webp` | Treadmill being taken out of a finished basement in Ashburn |
| Appliance | `refrigerator-removal-herndon-va.webp` | Old refrigerator on a dolly being removed from a Herndon kitchen |
| Yard waste before | `yard-waste-before-leesburg-va.webp` | Pile of branches and brush in a Leesburg backyard |
| Yard waste after | `yard-waste-after-leesburg-va.webp` | Leesburg backyard cleared of branches and brush |
| Estate cleanout | `estate-cleanout-vienna-va.webp` | Living room of a Vienna home partly cleared during an estate cleanout |
| Remodel debris | `remodel-debris-hauling-manassas-va.webp` | Drywall, old cabinets, and flooring debris from a Manassas kitchen remodel |

(Swap the town names to match where each job really happened.)

### Your current photos
The existing photos in `public/images/jobs/` are real, which is good. Two cleanups:
- Some are labeled wrong in `site.ts`. For example, `afterGarage` isn't an "after" photo, and `founderPortrait` is a dumpster picture. Fix the labels so the alt text describes what's really in each photo.
- Rename them using the pattern above and convert them to `.webp`.

---

## 7. Internal linking plan

**Why it matters:** links between your own pages show Google which pages are most important and how they relate. They also help customers find the right page.

### Rules
1. **Every page links to the homepage** (logo) and has the phone number. Already done.
2. **Main menu:** Services · Service Area · Pricing · About · Contact. Remove Reviews and Blog from the menu until they have real content.
3. **Footer:** links to all 9 services and all 13 area pages. This is the safety net that makes every page reachable.
4. **Link text should describe the page it points to:** "furniture removal in Reston," not "click here."
5. **In-body links (written into the copy) count the most.** Follow the table below.

### Link map

| Page | Links *to* (inside the page text) |
|---|---|
| **Home** | All 9 service pages, all 11 city pages, Pricing, Contact |
| **Services hub** | All 9 service pages |
| **Each service page** | 3 related services + all 11 city pages (an "Areas we serve" sentence) + Pricing |
| **Service area hub** | 4 county pages + all city pages |
| **County hub** (Loudoun, PW) | Every city in that county + 3–4 main services |
| **Each city page** | Its county page, 2–3 neighboring cities, the 4–6 services most relevant to that town |
| **Pricing** | Contact, Junk Removal, Garage Cleanouts |
| **About** | Home, Service area, Contact |
| **Blog posts** (later) | 1 service page + 1 city page each |

### Neighbor links (for each city page)

| City | Link to these nearby cities | Lead services |
|---|---|---|
| Fairfax | Chantilly, Centreville, Vienna, Reston | Furniture, garage cleanouts, pre-listing |
| Chantilly | Centreville, Herndon, Fairfax | Garage cleanouts, furniture, remodeler hauling |
| Centreville | Chantilly, Fairfax, Manassas | Garage cleanouts, furniture, treadmill |
| Herndon | Reston, Chantilly, Ashburn | Furniture, appliance, junk removal |
| Reston | Herndon, Vienna, Fairfax | Furniture, junk removal, estate |
| Vienna | Fairfax, Reston, Arlington | Estate, pre-listing, appliance |
| Ashburn | Leesburg, Herndon, Loudoun County | Treadmill, garage cleanouts, yard waste |
| Leesburg | Ashburn, Loudoun County | Garage/attic cleanouts, yard waste, estate |
| Manassas | Centreville, Woodbridge, Prince William County | Remodeler/PM hauling, garage cleanouts, appliance |
| Woodbridge | Manassas, Prince William County | Junk removal, furniture, remodeler/PM hauling |
| Arlington | Vienna, Fairfax | Furniture, junk removal, appliance |

---

## 8. Google Business Profile (GBP) checklist

Your Google Business Profile is **the single most important thing for showing up on Google Maps** and in the "map pack" (the 3 businesses with a map at the top of local searches). For junk removal searches, most calls come from there, not the website.

### Setup
- [ ] **Business name:** `Dominion Haul`, exactly. Never add "Junk Removal Fairfax" or anything else. That's against Google's rules and can get the profile suspended.
- [ ] **Primary category:** `Junk removal service`
- [ ] **Secondary categories:** only add one if it truly describes what you do *and* it appears in Google's dropdown. Type a word like "haul," "garbage," or "furniture" and see what comes up. When in doubt, leave it blank. The primary category does most of the work.
- [ ] **Address:** enter the Chantilly warehouse for verification, then choose **"don't show my address to customers"** (service-area business). Google may ask you to verify with a video showing your truck, equipment and business documents. Have those ready.
- [ ] **Service areas** (up to 20): Fairfax County, Loudoun County, Prince William County, Arlington County, Fairfax, Chantilly, Centreville, Herndon, Reston, Vienna, Ashburn, Leesburg, Manassas, Woodbridge, Arlington, Sterling, Burke, Gainesville.
- [ ] **Phone:** (571) 477-7222
- [ ] **Website:** `https://dominionhaul.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`. The extra bit at the end doesn't affect ranking. It just lets you see in your analytics how many visitors came from your Google profile. Plain `https://dominionhaul.com` is fine too.
- [ ] **Hours:** your real hours. Make the website match.
- [ ] **Business description** (750 characters max). Paste this:

> Dominion Haul is a local junk removal and hauling company based in Chantilly, Virginia. We remove furniture, appliances, treadmills and exercise equipment, yard waste, and household junk, and we handle garage, basement, attic, and estate cleanouts. We also work with realtors on pre-listing cleanouts and with remodelers and property managers on debris hauling and tenant move-outs. We serve Fairfax, Loudoun, Prince William, and Arlington counties, including Fairfax, Centreville, Herndon, Reston, Vienna, Ashburn, Leesburg, Manassas, Woodbridge, and Arlington. Text a photo of what needs to go to (571) 477-7222 for a price range. We confirm the final price before loading anything.

- [ ] **Opening date:** the real month and year you started
- [ ] **Attributes:** add only ones that are true (e.g., "Online estimates" if you quote by text)

### Services list (in GBP → Edit services)
Add each as a custom service with a one-line description:

| Service | Description (paste) |
|---|---|
| Furniture removal | Couches, mattresses, dressers, and more, carried out from any room. |
| Appliance removal | Refrigerators, freezers, washers, dryers, and stoves hauled away. |
| Treadmill & exercise equipment removal | Treadmills, ellipticals, bikes, and weight benches, even from basements. |
| Yard waste removal | Branches, brush, bagged leaves, and storm debris. |
| Household junk removal | Boxes, clutter, electronics, and anything else piling up. |
| Garage, basement & attic cleanouts | Clear the whole space in one visit. |
| Estate cleanouts | Clearing a loved one's home at your family's pace. |
| Pre-listing cleanouts for realtors | Empty, photo-ready homes on your listing timeline. |
| Hauling for remodelers & property managers | Debris haul-off and tenant move-out cleanouts. |

### Photos
- [ ] **Logo** (square) and **cover photo** (your truck)
- [ ] **At least 10 photos before you start promoting:** truck (3 angles), you, 3–4 before/after pairs
- [ ] **Add 2–3 new real job photos every week.** Profiles that stay active tend to perform better, and customers love before/afters.
- [ ] No stock photos, ever.

### Posts
- [ ] Post **once a week** (5 minutes). Honest note: posts are a small ranking factor. They mainly reassure customers who are looking at your profile. Ideas:
  - A before/after from this week's job ("Garage cleanout in Centreville, two hours, one truckload")
  - A seasonal tip ("Spring yard cleanup: what your curbside pickup won't take")
  - A "what we can and can't take" reminder
  - An "Offer" post only for real offers you'll honor

### Q&A and messages
- Note: Google has been phasing out the public Q&A section on profiles. If it's still showing on yours, answer any questions there. If messaging/chat is available, turn it on only if you'll reply within a few hours.

### Getting real reviews (the plan)

Reviews are **the biggest factor you control** for the map pack. Here's a simple, honest system:

1. **Get your review link:** GBP → "Ask for reviews" → copy the short link.
2. **Ask every single customer** at the end of the job, in person: *"If you're happy with how it went, a Google review would really help us. We're a new local business. Can I text you the link?"*
3. **Text the link within an hour** while they're still pleased. Paste-ready text:

> Hi [Name], thanks for having Dominion Haul out today! If you were happy with the job, a quick Google review would mean a lot to a new local business: [link]. If anything wasn't right, please reply here and I'll make it right. – Adel

4. **One reminder** 3 days later if they haven't left one. Then stop.
5. **Reply to every review** within a couple of days, thanking them by first name and mentioning the job ("Glad we could clear out that garage in Reston!").
6. **Put the link everywhere:** on your invoice/receipt, in your email signature, and as a QR code on a card you leave behind.
7. **Ask your first realtors, remodelers and property managers** too. They can review you after each job.

**Do NOT** (these can get your profile suspended, and some are illegal under the FTC's 2024 rule):
- Offer discounts, gift cards, or anything else in exchange for reviews
- Ask only happy customers ("review gating")
- Write reviews yourself, or have friends and family review you if they weren't customers
- Buy reviews or use a service that "guarantees" reviews
- Leave reviews for yourself from the business's own Wi-Fi/devices

**Realistic expectation:** if you ask every customer, about 1 in 3 to 1 in 2 will leave a review. With 5 jobs a week, that's roughly 8–10 reviews a month. Getting to **20–30 real reviews** is where you'll start to feel a real difference in Maps.

---

## 9. Citations (directory listings)

A "citation" is any listing of your business name, phone, and website on another site. They help Google trust that your business is real. **The #1 rule: the information must match exactly everywhere.**

### Your exact listing info (copy this every time)

```
Name:     Dominion Haul
Phone:    (571) 477-7222
Website:  https://dominionhaul.com
Email:    adel@dominionhaul.com
Address:  Hide it / service-area business. Where a city is required: Chantilly, VA
Category: Junk Removal (or the closest match)
Description: (use the GBP description from Section 8)
```

Never use "Dominion Haul Co," "Dominion Hauling," "Dominion Haul LLC," a different phone number, or `www.` on some and not others. Pick one form and stick with it.

### Where to list (free), in priority order

| Priority | Site | Notes |
|---|---|---|
| 1 | **Google Business Profile** | business.google.com. Covered above. |
| 2 | **Bing Places** | bingplaces.com. Can import directly from your Google profile (5 minutes). Also feeds ChatGPT search and Copilot. |
| 3 | **Apple Business Connect** | businessconnect.apple.com. Puts you on Apple Maps and Siri (many iPhone users never open Google Maps). |
| 4 | **Facebook Business Page** | Post the same before/after photos you put on Google. |
| 5 | **Yelp for Business** | biz.yelp.com. Free listing. Ignore their ad sales calls. Yelp penalizes businesses that ask for Yelp reviews, so don't ask for them. |
| 6 | **Nextdoor Business Page** | business.nextdoor.com. Very strong for local home services. Neighbors recommend businesses there. |
| 7 | **Instagram** | Before/after photos. Link it in your Google profile. |
| 8 | **BBB business profile** | bbb.org. A basic profile is free. Accreditation is paid and optional. |
| 9 | **Angi** | Free basic listing. Leads cost money, so that part is optional. |
| 10 | **Thumbtack** | Free profile. You pay per lead, so it's optional. |
| 11 | **Yellow Pages (yp.com)** | Free basic listing |
| 12 | **Foursquare** | Free. Feeds location data to many apps. |
| 13 | **LinkedIn Company Page** | Useful for realtor and property manager relationships |
| 14 | **Manta** | Free basic listing |

**Later (optional, sometimes paid):** local chambers of commerce (for example, the Dulles Regional Chamber), realtor association vendor lists, and HOA newsletters/vendor lists in neighborhoods you serve. These are often the most *valuable* links because they're truly local.

### Keep a spreadsheet
Columns: Site · URL of your listing · Login email · Date created · Name/phone/website checked ✓. If anything changes (like a new phone number), you'll know every place to update.

### Avoid
- Paid "submit to 300 directories" services. Low value, and they create listings you can't control.
- Anyone selling "guaranteed first page" or reviews.

---

## 10. 30/60/90-day plan

### What to expect, honestly

| Goal | Realistic timeline | Why |
|---|---|---|
| "Dominion Haul" brand search shows your site | **1–4 weeks** after fix #1 and GBP verification | Brand names are easy, but "Dominion" is a common word (Dominion Energy, etc.), so you need the GBP and citations to make your business clear to Google |
| "Dominion Haul junk removal" | **2–6 weeks** | Same as above |
| Town pages showing up for "junk removal [Chantilly/Centreville/Herndon]" | **2–4 months** | Less competition in smaller towns, plus your Chantilly base is close |
| Map pack near Chantilly/Centreville | **2–6 months**, depends heavily on reviews | Google Maps strongly favors businesses physically close to the person searching |
| "junk removal Fairfax VA" on page 1 | **4–9 months** | National franchises with years of reviews compete here |
| "junk removal Northern Virginia" / "NOVA" | **6–12+ months** | The most competitive phrase on your list. It comes *after* you're winning the towns. |
| Map pack in Woodbridge or Arlington | **Hard, maybe never in the map**. Aim for the regular (organic) results with your town pages. | You're 30–45 minutes away. Maps rankings favor nearby businesses, and that can't be changed. |

### If you only have a few hours a week, do these (in this order)

1. **Fix the site problems in Section 0.** One time. Fix #1 (the domain) is urgent.
2. **Get the Google Business Profile verified and complete.**
3. **Ask every customer for a review.** 2 minutes per job. Nothing else moves the needle as much.
4. **Add 2–3 real job photos to GBP every week.** 10 minutes.
5. **Bing, Apple, Facebook, Nextdoor, Yelp listings.** 2–3 hours total, once.
6. **Then** write the pages (city pages for your closest towns first).

Everything else, including blog posts, more directories, and GBP posts, is "nice to have."

### Days 1–30: Foundation

**Week 1**
- [ ] Fix Section 0 items #1–#9 (or have me do it). Republish the site.
- [ ] Set up **Google Search Console** (search.google.com/search-console): add `dominionhaul.com` as a "Domain" property, verify it through your domain registrar, and submit `https://dominionhaul.com/sitemap-index.xml` under **Sitemaps**.
- [ ] Set up **Bing Webmaster Tools** (bing.com/webmasters). You can import straight from Search Console.
- [ ] Create or claim the **Google Business Profile** and start verification. Verification can take anywhere from a few days to a few weeks. Start now.

**Week 2**
- [ ] Take photos: your truck (3 angles), you with the truck, and before/afters on every job from now on.
- [ ] Publish the new **homepage copy** and **FAQ** (Sections 3a and 4).
- [ ] Once GBP is verified: fill in *everything* in Section 8, and upload 10+ photos.

**Weeks 3–4**
- [ ] Publish the **Fairfax** page and the **3 service pages** (Sections 3b–3e).
- [ ] Create listings: **Bing Places, Apple Business Connect, Facebook, Nextdoor, Yelp**.
- [ ] Start the **review routine** on every job.
- [ ] In Search Console → **URL Inspection**, paste the homepage URL and click "Request indexing." Do this for each new page you publish.

**Day 30 check (Search Console):**
- **Pages** report (Indexing → Pages): is your homepage "Indexed"? Are new pages showing up?
- **Sitemaps:** status "Success"?
- **Performance → Search results**, filter Query contains "dominion haul": any impressions yet?

### Days 31–60: Build out pages

- [ ] Write city pages for your **closest towns first**: Chantilly, Centreville, Herndon, Reston, Vienna (one or two a week, using the "how to reuse" rules).
- [ ] Write the remaining service pages: appliance, treadmill, yard waste, estate, pre-listing, remodeler/PM.
- [ ] Set up the **301 redirects** for removed or renamed pages.
- [ ] Add the **internal links** from Section 7 as each page goes live.
- [ ] Remaining citations: Instagram, BBB, YP, Foursquare, LinkedIn, Manta.
- [ ] GBP: weekly photos and one weekly post. Reply to every review.
- [ ] Introduce yourself to **3–5 local realtors and property managers** (in person or by email). One job from a realtor can turn into a steady stream, and they leave reviews.

**Day 60 check (Search Console):**
- **Performance:** turn on "Average position." Look at Queries. You should start seeing impressions for phrases like "junk removal chantilly" or "furniture removal reston," even at position 30–60. **Impressions rising = Google is testing you. That's the early sign it's working.**
- **Pages** report: are all your service and city pages indexed? If a page says "Crawled – currently not indexed," it usually needs more unique content or more internal links.
- **GBP → Performance:** count calls, website clicks, and direction requests.

### Days 61–90: Expand and strengthen

- [ ] City pages for Ashburn, Leesburg, Manassas, Woodbridge, Arlington, and the Loudoun and Prince William hubs.
- [ ] Add a real job photo and a short "recent job" note to each city page as you complete jobs there. This makes each page more unique and more trustworthy over time.
- [ ] Once you have **5+ real Google reviews**, add a reviews section on the site that quotes them (first name + town, with permission) and links to your Google profile.
- [ ] Optional: one helpful blog post a month answering a real customer question ("What Fairfax County bulk pickup won't take"), linking to a service page and a city page.

**Day 90 check (Search Console):**
- **Performance → Queries:** compare the last 28 days to the previous 28 days (click "Date" → "Compare"). You want rising **impressions** first, then **clicks**.
- **Performance → Pages:** which pages get impressions? Pages with impressions but almost no clicks need a better title tag and meta description.
- Check **average position** for "dominion haul" (should be ~1), town phrases (aim for under 20), and "junk removal fairfax" (anything under 50 at 90 days is progress).
- **GBP:** review count, and calls per week. **Calls are the real scoreboard.**

### Things that take the longest (be patient)
- **Reviews:** they build slowly and keep compounding.
- **Ranking for "Fairfax" and "Northern Virginia":** months, and only after the towns and reviews are in place.
- **Google trusting a new domain:** most new sites see very little for the first 2–3 months, then gradual growth. That's normal. Don't rewrite everything at week 6 because nothing has happened yet.

---

## 11. Title and meta length check

All titles in this document are under 60 characters and all meta descriptions are under 155. (Checked with a script.)
