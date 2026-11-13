/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  DOMINION HAUL — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Everything business-specific lives here. Change it once and it updates the
 *  header, every hero, every tel:/sms: link, the footer, and all of the
 *  Schema.org JSON-LD across the site.
 *
 *  Dominion Haul is a SERVICE-AREA business: no public street address. Keep it
 *  that way. The JSON-LD publishes locality + region only, which is what
 *  Google wants for a business that works out of a truck.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Dominion Haul',
  legalName: 'Dominion Haul',
  tagline: 'Prices on the site. Final price before we load.',
  description:
    'Junk removal out of Chantilly, VA. We publish our prices, we do the lifting, and we confirm the price before anything goes on the truck. Fairfax, Loudoun, Prince William and Arlington.',
  base: 'Chantilly',

  phone: {
    display: '(571) 477-7222',
    e164: '+15714777222',
  },

  email: 'adel@dominionhaul.com',

  /**
   * Service-area business — locality and region only, no street address.
   * This is what gets published in the LocalBusiness JSON-LD.
   */
  address: {
    city: 'Chantilly',
    state: 'VA',
    country: 'US',
  },

  /** Approximate Chantilly town center — NOT a street address. */
  geo: { lat: 38.8943, lng: -77.4311 },

  /** The four counties we serve. Drives areaServed in the JSON-LD. */
  counties: [
    'Fairfax County',
    'Loudoun County',
    'Prince William County',
    'Arlington County',
  ],

  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], open: '07:00', close: '19:00' },
    { days: ['Saturday'], open: '07:00', close: '17:00' },
    { days: ['Sunday'], open: '09:00', close: '15:00' },
  ],
  hoursLabel: 'Mon–Fri 7a–7p · Sat 7a–5p · Sun 9a–3p',

  /**
   * ───────────────────────────────────────────────────────────────────────────
   *  PASTE REAL LINKS HERE
   * ───────────────────────────────────────────────────────────────────────────
   *  Every one of these is null until you paste the real URL. While a value is
   *  null, the site hides the link entirely and leaves it out of the JSON-LD
   *  `sameAs` — nothing points at a dead or generic page.
   *
   *  GBP_PROFILE_URL — your Google Business Profile page.
   *    Get it: Google Maps → search your business → Share → Copy link
   *
   *  GBP_REVIEW_URL — the direct "write a review" link.
   *    Get it: Google Business Profile dashboard → Ask for reviews → copy link
   *    (looks like https://g.page/r/XXXXXXXX/review)
   *
   *  Both are used on /reviews. GBP_PROFILE_URL also goes into the homepage
   *  LocalBusiness `sameAs`.
   * ───────────────────────────────────────────────────────────────────────────
   */
  links: {
    GBP_PROFILE_URL: null as string | null,
    GBP_REVIEW_URL: null as string | null,
    INSTAGRAM_URL: null as string | null,
    FACEBOOK_URL: null as string | null,
    YELP_URL: null as string | null,
  },
} as const;

export const phoneHref = `tel:${site.phone.e164}`;
export const smsHref = `sms:${site.phone.e164}`;
export const cityState = `${site.address.city}, ${site.address.state}`;

/** Non-null social/profile URLs, for `sameAs` and footer icons. */
export const profileLinks = Object.entries(site.links)
  .filter((e): e is [string, string] => typeof e[1] === 'string' && e[1].length > 0)
  .map(([key, url]) => ({ key, url }));

/** Primary nav. */
export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Areas', href: '/locations' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'About', href: '/about' },
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PHOTOS
 * ─────────────────────────────────────────────────────────────────────────────
 *  Keys are named for WHAT IS IN THE FRAME, not for the slot they fill, so a
 *  photo can never drift into claiming something it does not show.
 *
 *  Alt text describes only what is visible. None of it claims whose job it was,
 *  whose truck it is, or who is in it — swap in specific alt text once the real
 *  provenance of each shot is confirmed.
 *
 *  All WebP, max 1400px on the long edge. Width/height are the real intrinsic
 *  dimensions and must stay accurate — they prevent layout shift.
 *
 *  TO ADD A REAL PHOTO:
 *    1. Save to public/images/jobs/
 *    2. Run the WebP conversion (see README)
 *    3. Add an entry here with real width/height and honest alt text
 * ─────────────────────────────────────────────────────────────────────────────
 */
const job = (file: string) => `/images/jobs/${file}.webp`;

export const images = {
  truckLoad: {
    src: job('truck-load'),
    width: 788,
    height: 1400,
    alt: 'Box truck bed loaded with bagged household junk and furniture, parked on a residential street',
  },
  garageFlooring: {
    src: job('garage-flooring'),
    width: 1050,
    height: 1400,
    alt: 'Garage piled with torn-out wood flooring, wallpaper and flattened cardboard from a renovation',
  },
  garageRenovation: {
    src: job('garage-renovation'),
    width: 1400,
    height: 1050,
    alt: 'Garage stacked with moving boxes, lengths of trim and tied-off trash bags from a remodel',
  },
  dumpsterLoad: {
    src: job('dumpster-load'),
    width: 788,
    height: 1400,
    alt: 'Open dumpster filled with rolled carpet, scrap lumber and household debris',
  },
  constructionYard: {
    src: job('construction-yard'),
    width: 1400,
    height: 1050,
    alt: 'Backyard pile of broken drywall sheets, loose insulation and empty fixture boxes',
  },
  bedroomCleanout: {
    src: job('bedroom-cleanout'),
    width: 1050,
    height: 1400,
    alt: 'Bedroom packed with stacked suitcases, cardboard boxes and loose household items',
  },
  roomCleanout: {
    src: job('room-cleanout'),
    width: 1050,
    height: 1400,
    alt: 'Wood-paneled room filled floor to waist with boxes, bedding and household goods',
  },
  constructionDebris: {
    src: job('construction-debris'),
    width: 1400,
    height: 1050,
    alt: 'Drywall offcuts, insulation batts and cardboard packaging piled on a backyard lawn',
  },
  shedCleanout: {
    src: job('shed-cleanout'),
    width: 788,
    height: 1400,
    alt: 'Outdoor storage shed packed to the door with plastic bins, bags and yard tools',
  },
  yardDemo: {
    src: job('yard-demo'),
    width: 768,
    height: 1024,
    alt: 'Backyard pile of filled demo bags, torn-out cabinets and scrap lumber',
  },
} as const;

export type ImageKey = keyof typeof images;

/**
 * Homepage gallery. Captions describe the contents of the photo only.
 *
 * NOTE: these are not labelled as completed Dominion Haul jobs anywhere on the
 * site, because that has not been confirmed. Once you confirm which shots are
 * yours, the captions can name the town and the job.
 */
export const galleryKeys: ImageKey[] = [
  'truckLoad',
  'garageFlooring',
  'shedCleanout',
  'dumpsterLoad',
  'bedroomCleanout',
  'constructionDebris',
  'roomCleanout',
  'garageRenovation',
  'yardDemo',
  'constructionYard',
];

export const galleryCaptions: Record<string, string> = {
  truckLoad: 'A full truck, loaded',
  garageFlooring: 'Flooring tear-out',
  shedCleanout: 'Shed clear-out',
  dumpsterLoad: 'Carpet and lumber',
  bedroomCleanout: 'Bedroom clear-out',
  constructionDebris: 'Remodel debris',
  roomCleanout: 'Whole-room clear-out',
  garageRenovation: 'Garage remodel haul',
  yardDemo: 'Yard demo pile',
  constructionYard: 'Backyard cleanup',
};
