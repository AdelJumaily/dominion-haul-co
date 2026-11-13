# Dominion Haul — marketing site

Static site built with [Astro](https://astro.build). 32 pages, minimal JavaScript.
The only external runtime requests are Google Fonts (Barlow / Barlow Condensed), loaded
in `src/layouts/Base.astro`. Self-host them if you want the site fully request-free.

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built output
```

`dist/` is plain HTML/CSS/JS. It deploys to Netlify, Vercel, Cloudflare Pages, S3 or any
static host.

---

## Ground rules for this site

Dominion Haul is a new business with very few completed jobs and **zero reviews**. The
site is written to be accurate about that, and several things are deliberately absent.
Please do not add them back:

- **No reviews, testimonials, star ratings or aggregate ratings.** The testimonials
  collection and component were deleted on purpose, and `Schema.astro` cannot emit
  `Review` or `AggregateRating` under any condition. Invented review markup is a
  documented cause of Google manual penalties.
- **No job counts, statistics or "trusted by" claims.**
- **No street address.** This is a service-area business. The `LocalBusiness` JSON-LD
  publishes locality (`Chantilly`) and region (`VA`) only.
- **Never "licensed" or "bonded".** "Fully insured" is the only permitted phrasing.
- **No claims about what competitors charge or do.** Saying "many companies make you call
  for a price, we publish ours" is fine. Naming what others charge is not.
- **No claims that imply a track record** we do not have yet — "we do this constantly",
  "our most common job", "repeat customers here", "as a matter of routine".

We also do **not** offer: moving, pianos, safes, hot tubs, or hazardous material.

---

## ⚠️ Before you launch

### 1. Paste the real Google links

`src/config/site.ts` → `site.links`. Every value is `null`, and while it is null the site
hides that link entirely and leaves it out of the JSON-LD `sameAs`. Nothing points at a
generic or dead URL.

| Key | Where to get it | Used on |
| --- | --- | --- |
| `GBP_PROFILE_URL` | Google Maps → your business → Share → Copy link | `/reviews`, homepage `sameAs` |
| `GBP_REVIEW_URL` | Google Business Profile → Ask for reviews → copy link | `/reviews` |
| `INSTAGRAM_URL` | your profile URL | homepage `sameAs` |
| `FACEBOOK_URL` | your page URL | homepage `sameAs` |
| `YELP_URL` | your Yelp listing URL | homepage `sameAs` |

Until `GBP_REVIEW_URL` is set, `/reviews` shows a fallback telling visitors to email or
text instead of a dead review button.

### 2. Confirm the prices stay correct

`src/config/pricing.ts` is the **only** place any price is written. Four tiers, confirmed
by the owner:

| Tier | Price |
| --- | --- |
| One heavy item | $165 – $200 |
| Sofa, loveseat and chair | about $275 |
| Half a truck | about $340 |
| A full truck | about $640 |

Heavy material (concrete, brick, tile, dirt, shingles) is priced by weight and quoted on
site. Change a number here and it updates the pricing table, every service page, every
town page rail, the homepage strip and the JSON-LD `priceRange`. No price is hardcoded in
any page or markdown file — keep it that way.

There are intentionally **no quarter or three-quarter tiers**. Do not add them without a
confirmed price.

### 3. The domain

`SITE` at the top of `astro.config.mjs`, and the `Sitemap:` line in `public/robots.txt`.
These drive canonical URLs, the sitemap and every absolute URL in the structured data.

### 4. The quote form is not wired up

A static site cannot process submissions. The form ships configured for **Netlify Forms** —
deploy to Netlify and it works immediately, including the photo upload, with submissions in
your site dashboard.

For anything else, set `FORM_ACTION` at the top of `src/components/QuoteForm.astro`
(Formspree, Web3Forms, your own endpoint) and remove the two `data-netlify` attributes.

Until this is done, submissions go nowhere. The form's error state is honest about failure
and falls back to the phone number rather than faking a success message.

### 5. Confirm the photos

See the next section. The current photos have **not** been confirmed as completed Dominion
Haul jobs, so nothing on the site claims they are.

---

## Photos

The manifest is at the bottom of `src/config/site.ts`. Keys are named for **what is in the
frame** (`garageFlooring`, `shedCleanout`) rather than the slot they fill, so an image
cannot drift into claiming something it does not show.

All ten are WebP, max 1400px on the long edge, with real `width`/`height` recorded so there
is no layout shift. `<Figure>` lazy-loads by default; pass `priority` above the fold.

**Alt text and captions currently describe only visible contents** — no photo claims whose
job it was, whose truck it is, or who is in it. Once you confirm which shots are real
Dominion Haul jobs, the alt text and the gallery captions in `galleryCaptions` can name the
town and the job, which is better for local SEO.

To add a photo:

1. Save the original to `public/images/jobs/`
2. Convert it:

```bash
node -e "const s=require('sharp');s('public/images/jobs/NAME.jpg').resize(1400,1400,{fit:'inside'}).webp({quality:72,effort:6}).toFile('public/images/jobs/NAME.webp').then(i=>console.log(i.width+'x'+i.height))"
```

3. Add an entry to the `images` manifest with the printed width/height and honest alt text

### Recent jobs per town

Each town file in `src/content/locations/` has a `recentJobs:` array. **It is empty on all
16 pages**, and while it is empty the "Recent jobs in <Town>" section does not render at
all. Add only jobs that actually happened:

```yaml
recentJobs:
  - what: Garage cleanout, about half a truck
    where: Little Rocky Run
    date: 2026-11-02
```

---

## Adding content

No page wiring needed for any of these — drop in a markdown file and it appears.

| Add a… | Where | Appears on |
| --- | --- | --- |
| Service | an entry in `src/config/services.ts` | its own `/services/<id>` page, plus `/services`, the homepage grid, footer and the quote-form dropdown |
| Town | a markdown file in `src/content/locations/` | `/locations`, the footer, and its county page |
| Recent job | `recentJobs:` in that town's markdown | that town page only, once non-empty |

There is no blog and no testimonials collection. Adding a service to `services.ts`
generates a full page with its own title, meta description, H1, inclusions, FAQ
(`FAQPage` + `BreadcrumbList` JSON-LD) and quote form — no page wiring needed.

Frontmatter is schema-validated in `src/content.config.ts` — the build fails loudly if a
required field is missing, rather than silently rendering a broken page.

**Location pages**: set `kind: 'county'` for a hub page, or `kind: 'city'` with
`county: '<county-slug>'` to nest it. The `faq` array is rendered on-page *and* emitted as
`FAQPage` JSON-LD from the same source, so the two can never disagree.

### Write genuinely distinct copy

The single biggest SEO weakness of every competitor in this market is templated city pages —
the same three paragraphs with the town name swapped. Google treats that as thin content and
it is why their location pages rank poorly.

Each town page carries only information that is genuinely useful and genuinely true of
that area: the towns and ZIPs covered, a rough drive time from Chantilly, access notes
that hold generally (narrow old-town streets, shared parking courts, HOA parking rules,
building elevator requirements), the prices, and the quote form.

Do not pad these back out with history essays, founding dates, population figures or
invented local color. That was removed deliberately. If you cannot verify it or it is not
useful to someone booking a pickup, leave it out.

Keep titles and meta descriptions unique. To check:

```bash
npm run build
grep -rho '<title>[^<]*</title>' dist/ | sort | uniq -d   # should print nothing
```

---

## Structure

```
src/
  config/
    site.ts          ← business data, Google/social links, photo manifest. Start here.
    pricing.ts       ← the four price tiers. The ONLY place a price is written.
    services.ts      ← the 7 services; each generates its own page.
  content.config.ts  ← location schema (incl. the recentJobs guard)
  content/locations/ ← 16 town/county markdown files
  components/        ← Header, Footer, CallBar, Figure, QuoteForm, FAQ, Schema…
  layouts/Base.astro ← <head>, canonical, OG, schema, scroll-reveal
  pages/
    services/[slug]  ← one page per service
    locations/[slug] ← one page per town/county
  styles/global.css  ← design system. All tokens at the top.
public/              ← robots.txt, favicons, images/jobs/*.webp
```

## SEO invariants

Verified against the built output:

- 32 pages, all with a unique `<title>` and a unique meta description
- `rel="canonical"` on all 32
- `LocalBusiness` JSON-LD on the homepage only; every other page references it by `@id`
- `BreadcrumbList` on every page except the homepage and 404
- No `Review` / `AggregateRating` / `streetAddress` / `meta keywords` anywhere
- 404 is `noindex` and excluded from the sitemap
- `tel:` and `sms:` links present on every page in `+15714777222` form
- No page scrolls horizontally at a 360px viewport
```

## Design system

Tokens are all declared at the top of `src/styles/global.css` — deep green accent, gold
highlight, near-black ink. Change them there rather than in component styles.

Touch targets: standalone action links and list navigation get a 44px minimum tap height
under `@media (hover: none)`. Links that sit inside a flowing sentence are deliberately
left at their natural size, because growing those breaks the paragraph — the same action
is always available as a full-size button nearby and in the fixed mobile call bar.

Dark sections: add `data-band="dark"` to any `<section>`. It flips the semantic colour tokens
wholesale; no component needs a dark variant.

Type is Barlow and Barlow Condensed, currently loaded from Google Fonts in
`Base.astro` with `display=swap`. To drop the external dependency, download the two
families into `public/fonts/`, add `@font-face` rules in `global.css`, and remove the
`preconnect` and stylesheet links from `Base.astro`.

## Performance notes

Measured on the built output:

- Photos: all WebP, 1.7 MB total across 10 images (down from 5.6 MB of mislabelled JPEGs)
- Every image carries `width`/`height`; below-the-fold images lazy-load
- Every page has exactly one `<h1>`
- All below-the-fold images lazy-load; hero images set `fetchpriority="high"`
- Scroll-reveal is progressive enhancement — content is fully visible without JS and for
  `prefers-reduced-motion`

If you add analytics, load it deferred. A single tag manager can add more weight than this
entire site.
