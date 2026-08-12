# Dominion Haul Co — marketing site

Static site built with [Astro](https://astro.build). 36 pages, ~24 KB total first load,
zero external requests, zero web fonts, 1.6 KB of JavaScript.

```bash
npm install
npm run dev      # local dev at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built output
```

`dist/` is plain HTML/CSS/JS. It deploys to Netlify, Vercel, Cloudflare Pages, S3 or any
static host.

---

## ⚠️ Before you launch — 6 things

Nothing below is optional. Each one is either a placeholder or a legal/SEO risk.

### 1. The phone number

Currently **(703) 555-0142**, a reserved fictional number that cannot connect. It lives in
exactly one place:

```
src/config/site.ts  →  site.phone
```

Change `display` and `e164` there and it updates the sticky header, the mobile call bar,
every hero, every CTA, all `tel:`/`sms:` links and every JSON-LD block across all 36 pages.
Set `isPlaceholder: false` when done.

### 2. The address

`site.address` in the same file is a placeholder. A `LocalBusiness` needs a real address
that matches your Google Business Profile **character for character** — mismatched NAP
(name/address/phone) data dilutes local ranking. Update `site.geo` to match.

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

### 5. The reviews are placeholders

Six seeded reviews in `src/content/testimonials/`, all marked `verified: false`. They exist
so the layout was designed against realistic text.

Replace them with genuine reviews copied from your Google Business Profile, then set
`verified: true` on each.

**Do not skip this.** While `site.rating.verified` is `false`, the site deliberately emits
**no** `AggregateRating` structured data and shows no star average. Publishing invented
review counts is a documented cause of Google manual penalties. Flip `site.rating.verified`
to `true` only when the numbers match your real profile.

### 6. The founder story

`src/pages/about.astro` contains a placeholder story with a visible build note. This is the
single highest-converting piece of copy on a local service site and the clearest
differentiator against the national franchises — but only if it is true and specific.

Worth naming: why you started, what you did before, where you actually live, a job that
stuck with you, what you refuse to do. Generic "family business that cares" text is exactly
what the franchises write. Delete the `.story-note` block when you replace it.

---

## Dropping in real photos

Every image is referenced by **key**, never by path. The manifest is at the bottom of
`src/config/site.ts`.

Right now 17 of 21 keys are `src: null`, which renders a loud dashed placeholder naming the
exact shot to capture and its aspect ratio. To swap one in:

1. Save the file to `public/images/` — e.g. `public/images/truck-hero.jpg`
2. Set `src: '/images/truck-hero.jpg'` on that key
3. Rewrite `alt` to describe *that* photo

Every page using the key picks it up on the next build, at the same aspect ratio, so nothing
reflows and no layout shift is introduced.

**Shoot these first** (marked `PRIORITY` in the manifest): `heroTruck`, `heroCrewLoading`,
`beforeGarage` + `afterGarage`, `founderPortrait`. Real job photos outrank stock imagery for
local SEO and convert substantially better — this is one of the biggest advantages you have
over competitors running stock photography.

Compress before committing. Target under 200 KB per image, WebP where possible. The
`<Figure>` component already handles lazy-loading, `decoding`, and `fetchpriority` for
above-the-fold images.

---

## Adding content

No page wiring needed for any of these — drop in a markdown file and it appears.

| Add a… | Create a file in | Appears on |
| --- | --- | --- |
| Service | `src/content/services/` | `/services`, nav, footer, all location pages |
| Location | `src/content/locations/` | `/locations`, nav, footer, county pages |
| Blog post | `src/content/blog/` | `/blog` |
| Review | `src/content/testimonials/` | `/reviews`, home, location pages |

Frontmatter is schema-validated in `src/content.config.ts` — the build fails loudly if a
required field is missing, rather than silently rendering a broken page.

**Location pages**: set `kind: 'county'` for a hub page, or `kind: 'city'` with
`county: '<county-slug>'` to nest it. The `faq` array is rendered on-page *and* emitted as
`FAQPage` JSON-LD from the same source, so the two can never disagree.

### Write genuinely distinct copy

The single biggest SEO weakness of every competitor in this market is templated city pages —
the same three paragraphs with the town name swapped. Google treats that as thin content and
it is why their location pages rank poorly.

Every one of the 16 location pages here has unique prose about local housing stock, access
constraints, common job types and disposal routing. **Zero sentences are shared between any
two pages.** Verify after adding content:

```powershell
# from src/content/ — reports any sentence appearing on two pages
```
(the duplicate-prose check used during the build is described in the project notes)

---

## Structure

```
src/
  config/
    site.ts          ← ALL business data + image manifest. Start here.
    pricing.ts       ← load-size tiers. Confirm against your real costs.
  content.config.ts  ← collection schemas
  content/           ← services (8), locations (16), blog (3), testimonials (6)
  components/        ← Header, Footer, CallBar, Figure, QuoteForm, FAQ, Schema…
  layouts/Base.astro ← <head>, schema, header/footer, scroll-reveal
  pages/             ← routes; [...slug].astro generates service/location/blog pages
  styles/global.css  ← design system. All tokens at the top.
public/              ← robots.txt, favicon, images/
```

## Design system

Palette is safety orange `#FF5A1F` on near-black `#14110F` and warm paper `#FAF7F2` —
deliberately not the corporate blue/green every hauling company defaults to.

One contrast rule drives the button system: safety orange is a *light* colour. White text on
it fails WCAG at 3.1:1; near-black passes at 7.4:1. So every orange surface carries dark
text — which is also how real hi-vis signage works. Accessible and on-concept are the same
choice here.

Dark sections: add `data-band="dark"` to any `<section>`. It flips the semantic colour tokens
wholesale; no component needs a dark variant.

No web fonts — a tuned system stack renders instantly with zero requests and zero layout
shift. Character comes from weight, tight negative tracking and scale. To self-host a
variable font later, add `@font-face` in `global.css` and change `--font-sans`; budget
~30 KB and use `font-display: swap`.

## Performance notes

Measured on the built output:

- Home page: **13 KB** gzipped HTML + 9.1 KB CSS + 1.6 KB JS
- Zero external hosts — no CDN, no Google Fonts, no analytics by default
- Every page has exactly one `<h1>`
- All below-the-fold images lazy-load; hero images set `fetchpriority="high"`
- Scroll-reveal is progressive enhancement — content is fully visible without JS and for
  `prefers-reduced-motion`

If you add analytics, load it deferred. A single tag manager can add more weight than this
entire site.
