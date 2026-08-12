/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  DOMINION HAUL CO — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything business-specific lives here. Change it once and it updates the
 *  sticky header, every hero, every tel:/sms: link, the footer, and all of the
 *  Schema.org JSON-LD across the site.
 *
 *  Keep NAP (name / address / phone) identical to your Google Business Profile.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Dominion Haul Co',
  legalName: 'Dominion Haul Co LLC',
  shortName: 'Dominion Haul',
  tagline: 'Call before noon. Reston by 2. Price before we lift.',
  description:
    'Same-day junk removal based in Chantilly, VA. Published load-size pricing, no franchise call centre — pickups across Fairfax, Loudoun, Prince William and Arlington.',
  founded: '2026',
  base: 'Chantilly',

  phone: {
    display: '(571) 477-7222',
    e164: '+15714777222',
    isPlaceholder: false,
  },

  email: 'hello@dominionhaulco.com',

  address: {
    street: '14600 Flint Lee Rd',
    city: 'Chantilly',
    state: 'VA',
    zip: '20151',
    country: 'US',
  },

  /** Business location — Flint Lee Rd, Chantilly. */
  geo: { lat: 38.8828, lng: -77.4415 },

  /** Radius covered from the geo point above, in miles. */
  serviceRadiusMiles: 30,

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '19:00' },
    { days: ['Saturday'], open: '07:00', close: '17:00' },
    { days: ['Sunday'], open: '09:00', close: '15:00' },
  ],
  hoursLabel: 'Mon–Fri 7a–7p · Sat 7a–5p · Sun 9a–3p',

  social: {
    google: 'https://www.google.com/maps',
    facebook: 'https://www.facebook.com',
    instagram: 'https://www.instagram.com',
  },

  /**
   * Aggregate rating used in the LocalBusiness JSON-LD.
   *
   * ⚠️ LEGAL / SEO WARNING: Google requires that AggregateRating markup reflect
   * genuine, verifiable reviews that are actually visible on the page. These
   * numbers are seeded for layout only. Emitting them before you have real
   * reviews risks a manual structured-data penalty.
   *
   * Set `verified: true` ONLY once the numbers match your real Google profile.
   * While it is false the rating markup is OMITTED from the JSON-LD entirely.
   */
  rating: {
    verified: false,
    value: 5.0,
    count: 37,
  },
} as const;

export const phoneHref = `tel:${site.phone.e164}`;
export const smsHref = `sms:${site.phone.e164}`;
export const addressOneLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/** Primary nav. `mega` marks items that expand into a dropdown panel. */
export const nav = [
  { label: 'Services', href: '/services', mega: 'services' as const },
  { label: 'Locations', href: '/locations', mega: 'locations' as const },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  IMAGE MANIFEST — how to swap placeholders for real photography
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every image on the site is referenced by KEY, never by raw path. Each entry
 *  starts as `src: null`, which renders a labelled placeholder block showing
 *  the exact shot to capture and the ideal aspect ratio.
 *
 *  TO DROP IN A REAL PHOTO:
 *    1. Save the file to  public/images/  (e.g. public/images/truck-hero.jpg)
 *    2. Set  src: '/images/truck-hero.jpg'  on the matching key below
 *    3. Update `alt` to describe THAT specific photo
 *  Nothing else changes — every page using that key picks it up on next build.
 *
 *  Real job photos (your truck, your crew, real before/afters) outrank stock
 *  photography for local SEO and convert far better. Prioritise the keys
 *  marked PRIORITY below.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type ImageKey = keyof typeof images;

/**
 * Stock placeholders via Pexels CDN (source.unsplash.com is unreliable).
 * Every Astro consumer marks images with a PLACEHOLDER comment so real
 * business photos are easy to swap in later (src → /images/...).
 */
const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  heroTruck: {
    src: pexels(11802122),
    alt: 'Dominion Haul Co box truck parked in a Northern Virginia driveway with the loading ramp down',
    shot: 'PRIORITY — Your truck, 3/4 angle, ramp down, in a real NoVA driveway. Shoot in morning light.',
    ratio: '16/9',
  },
  heroCrewLoading: {
    src: pexels(4246120),
    alt: 'Two Dominion Haul Co crew members carrying an old sofa down the front steps of a Fairfax home',
    shot: 'PRIORITY — Crew mid-carry with a real item. Faces visible, uniforms on. Motion is good here.',
    ratio: '1/1',
  },
  beforeGarage: {
    src: pexels(5691608),
    alt: 'Cluttered two-car garage in Reston packed with boxes, old furniture and paint cans before cleanout',
    shot: 'PRIORITY — Before shot of a packed garage. Wide, from the open door. Pair with afterGarage.',
    ratio: '3/2',
  },
  afterGarage: {
    src: pexels(271816),
    alt: 'The same Reston garage completely emptied and swept clean after a Dominion Haul Co cleanout',
    shot: 'PRIORITY — Exact same camera position as beforeGarage. Same lens, same time of day.',
    ratio: '3/2',
  },
  founderPortrait: {
    src: pexels(8961065),
    alt: 'Dominion Haul Co crew standing in front of the company truck in Northern Virginia',
    shot: 'PRIORITY — Crew / company portrait, natural light, truck behind. Trust anchor on /about.',
    ratio: '4/5',
  },
  crewTeam: {
    src: pexels(4246200),
    alt: 'The Dominion Haul Co crew standing together beside the truck in Northern Virginia',
    shot: 'Full team, relaxed, beside the truck. Used on /about and the reviews page.',
    ratio: '3/2',
  },
  serviceJunkRemoval: {
    src: pexels(7464230),
    alt: 'Crew loading household junk including a broken dresser and bagged debris into the truck',
    shot: 'General household load going up the ramp.',
    ratio: '3/2',
  },
  serviceFurniture: {
    src: pexels(4246266),
    alt: 'Two crew members wrapping and carrying a sectional sofa out through a townhouse door',
    shot: 'Furniture navigating a tight doorway or stairwell — shows the hard part you handle.',
    ratio: '3/2',
  },
  serviceAppliance: {
    src: pexels(5025639),
    alt: 'Crew member moving an old refrigerator onto a dolly in a kitchen for appliance removal',
    shot: 'Appliance on a dolly, mid-removal, indoors.',
    ratio: '3/2',
  },
  serviceEstate: {
    src: pexels(6195125),
    alt: 'Crew sorting boxes and furniture during a full estate cleanout of a Vienna home',
    shot: 'Whole-home cleanout in progress. Show scale — multiple rooms or a full truck.',
    ratio: '3/2',
  },
  serviceConstruction: {
    src: pexels(14076978),
    alt: 'Stacked drywall scrap, lumber and torn-out cabinets loaded from a kitchen renovation',
    shot: 'Renovation debris pile, ideally on a jobsite with the truck visible.',
    ratio: '3/2',
  },
  serviceYardWaste: {
    src: pexels(2219024),
    alt: 'Storm-downed tree limbs and bagged yard waste stacked at a curb in Loudoun County',
    shot: 'Brush and limbs at the curb. Post-storm shots are ideal.',
    ratio: '3/2',
  },
  serviceShed: {
    src: pexels(8293778),
    alt: 'Crew dismantling a weathered backyard storage shed panel by panel',
    shot: 'Shed mid-demolition — half standing, half down. Very compelling.',
    ratio: '3/2',
  },
  serviceCommercial: {
    src: pexels(4483610),
    alt: 'Stacked office chairs, cubicle panels and filing cabinets ready for removal from a Tysons office suite',
    shot: 'Office furniture staged for removal. Empty suite reads as commercial.',
    ratio: '3/2',
  },
  truckLoadDiagram: {
    src: pexels(11802122, 1800),
    alt: 'Side view of the Dominion Haul Co truck bed marked with quarter, half, three-quarter and full load fill lines',
    shot: 'Shoot the empty truck bed square-on from the side. Fill lines get drawn on in edit.',
    ratio: '16/9',
  },
  serviceAreaMap: {
    src: pexels(1396122),
    alt: 'Map of Northern Virginia highlighting the Fairfax, Loudoun, Prince William and Arlington county service area',
    shot: 'Export a styled static map. Keep it under 120KB — see README for the recommended approach.',
    ratio: '4/3',
  },
} as const;
