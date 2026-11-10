/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  DOMINION HAUL — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything business-specific lives here. Change it once and it updates the
 *  sticky header, every hero, every tel:/sms: link, the footer, and all of the
 *  Schema.org JSON-LD across the site.
 *
 *  Keep NAP (name / address / phone) identical to your Google Business Profile.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Dominion Haul',
  legalName: 'Dominion Haul',
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

  email: 'adel@dominionhaul.com',

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
  { label: 'Services', href: '/services' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Service Area', href: '/locations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
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
/**
 * Stock placeholders via Pexels CDN (source.unsplash.com is unreliable).
 * Hero background stays on Pexels until a dedicated truck exterior exists.
 * Everything else points at real job photos in /public/images/jobs/.
 */
const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const job = (file: string) => `/images/jobs/${file}`;

export const images = {
  heroTruck: {
    src: pexels(11802122),
    alt: 'Dominion Haul box truck parked in a Northern Virginia driveway with the loading ramp down',
    shot: 'Hero background — keep until a dedicated truck exterior shot is ready.',
    ratio: '16/9',
  },
  heroCrewLoading: {
    src: job('truck-load.png'),
    alt: 'Loaded Dominion Haul truck bed packed with household junk, looking out at a Northern Virginia street',
    shot: 'Real job — truck load, residential neighborhood.',
    ratio: '1/1',
  },
  beforeGarage: {
    src: job('garage-flooring.png'),
    alt: 'Northern Virginia garage piled with torn-out wood flooring, wallpaper and cardboard from a renovation',
    shot: 'Real job — garage flooring tear-out.',
    ratio: '3/2',
  },
  afterGarage: {
    src: job('garage-renovation.png'),
    alt: 'Cluttered garage in Northern Virginia stacked with renovation boxes, trim and trash bags ready for haul-away',
    shot: 'Real job — garage renovation debris.',
    ratio: '3/2',
  },
  founderPortrait: {
    src: job('dumpster-load.png'),
    alt: 'Dominion Haul dumpster loaded with carpet, lumber and household debris on a Northern Virginia job',
    shot: 'Real job — dumpster load.',
    ratio: '4/5',
  },
  crewTeam: {
    src: job('construction-yard.png'),
    alt: 'Construction debris pile in a Northern Virginia backyard including drywall, insulation and fixture boxes',
    shot: 'Real job — backyard construction cleanout.',
    ratio: '3/2',
  },
  serviceJunkRemoval: {
    src: job('truck-load.png'),
    alt: 'Household junk packed into the Dominion Haul truck after a residential pickup in Northern Virginia',
    shot: 'Real job — full household load in the truck.',
    ratio: '3/2',
  },
  serviceFurniture: {
    src: job('bedroom-cleanout.png'),
    alt: 'Bedroom packed with suitcases, boxes and household items during a Northern Virginia furniture cleanout',
    shot: 'Real job — bedroom / furniture cleanout.',
    ratio: '3/2',
  },
  serviceAppliance: {
    src: job('garage-renovation.png'),
    alt: 'Garage stacked with fixture boxes, trim and renovation debris during an appliance and remodel haul-out',
    shot: 'Real job — remodel / fixture haul-out.',
    ratio: '3/2',
  },
  serviceEstate: {
    src: job('room-cleanout.png'),
    alt: 'Wood-paneled room filled with boxes, bedding and household goods during an estate cleanout in Northern Virginia',
    shot: 'Real job — estate / whole-room cleanout.',
    ratio: '3/2',
  },
  serviceConstruction: {
    src: job('construction-debris.png'),
    alt: 'Drywall, insulation and fixture packaging piled in a Northern Virginia backyard after a renovation',
    shot: 'Real job — construction debris.',
    ratio: '3/2',
  },
  serviceYardWaste: {
    src: job('yard-demo.png'),
    alt: 'Backyard debris pile with demo bags, old cabinets and scrap lumber ready for haul-away in Northern Virginia',
    shot: 'Real job — yard / demo debris.',
    ratio: '3/2',
  },
  serviceShed: {
    src: job('shed-cleanout.png'),
    alt: 'Overstuffed outdoor storage shed packed with bins, bags and household junk before a Dominion Haul cleanout',
    shot: 'Real job — shed cleanout.',
    ratio: '3/2',
  },
  serviceCommercial: {
    src: job('dumpster-load.png'),
    alt: 'Open dumpster filled with carpet remnants, wood frames and household debris from a Northern Virginia job',
    shot: 'Real job — dumpster / bulk load.',
    ratio: '3/2',
  },
  truckLoadDiagram: {
    src: job('truck-load.png'),
    alt: 'Inside the Dominion Haul truck bed showing a real mixed household load of bags, furniture and debris',
    shot: 'Real job — truck bed from the tailgate.',
    ratio: '16/9',
  },
  serviceAreaMap: {
    src: job('construction-yard.png'),
    alt: 'Residential backyard in Northern Virginia with a construction debris pile staged for same-day haul-away',
    shot: 'Real job — typical NoVA residential site.',
    ratio: '4/3',
  },
} as const;

export type ImageKey = keyof typeof images;

/** Recent-job gallery — all real photos, used on the home page. */
export const jobPhotos = [
  {
    src: job('truck-load.png'),
    alt: 'Loaded Dominion Haul truck looking out at a Northern Virginia neighborhood',
    caption: 'Truck load — residential pickup',
    span: 'feature',
  },
  {
    src: job('garage-flooring.png'),
    alt: 'Garage piled with torn-out flooring and wallpaper after a remodel',
    caption: 'Garage flooring tear-out',
    span: 'feature',
  },
  {
    src: job('shed-cleanout.png'),
    alt: 'Cluttered backyard shed packed with bins and household junk',
    caption: 'Shed cleanout',
    span: 'cell',
  },
  {
    src: job('dumpster-load.png'),
    alt: 'Dumpster packed with carpet, lumber and household debris',
    caption: 'Dumpster load',
    span: 'cell',
  },
  {
    src: job('bedroom-cleanout.png'),
    alt: 'Bedroom stacked with suitcases and boxes during a cleanout',
    caption: 'Bedroom cleanout',
    span: 'cell',
  },
  {
    src: job('construction-debris.png'),
    alt: 'Drywall and insulation piled in a backyard after a renovation',
    caption: 'Construction debris',
    span: 'cell',
  },
  {
    src: job('room-cleanout.png'),
    alt: 'Packed room with boxes and household goods during an estate cleanout',
    caption: 'Estate room clear-out',
    span: 'cell',
  },
  {
    src: job('garage-renovation.png'),
    alt: 'Garage filled with renovation boxes, trim and trash bags',
    caption: 'Garage remodel haul',
    span: 'cell',
  },
  {
    src: job('yard-demo.png'),
    alt: 'Backyard pile of demo bags, cabinets and scrap lumber',
    caption: 'Yard demo pile',
    span: 'cell',
  },
  {
    src: job('construction-yard.png'),
    alt: 'Northern Virginia backyard with insulation, drywall and fixture boxes staged for removal',
    caption: 'Backyard renovation cleanout',
    span: 'cell',
  },
] as const;
