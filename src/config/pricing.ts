/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PRICING — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every price shown anywhere on the site comes from this file. Nothing is
 *  hardcoded in a page or a town file. Change a number here and it updates the
 *  pricing table, the town page rails, every service page and the JSON-LD.
 *
 *  Confirmed by the owner. Do not add tiers or invent numbers.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export interface Tier {
  id: string;
  name: string;
  /** Headline price string shown to customers. */
  price: string;
  /** Numeric bounds — used for schema priceRange and sorting. */
  priceFrom: number;
  priceTo: number;
  /** Plain-language description of what this covers. */
  covers: string;
  popular?: boolean;
}

export const tiers: Tier[] = [
  {
    id: 'single',
    name: 'One heavy item',
    price: '$165 – $200',
    priceFrom: 165,
    priceTo: 200,
    covers: 'A couch, a mattress, a fridge, a treadmill. One big thing.',
  },
  {
    id: 'living-room-set',
    name: 'Sofa, loveseat and chair',
    price: 'About $275',
    priceFrom: 275,
    priceTo: 275,
    covers: 'A living room set, or a few large pieces together.',
    popular: true,
  },
  {
    id: 'half',
    name: 'Half a truck',
    price: 'About $340',
    priceFrom: 340,
    priceTo: 340,
    covers: 'A packed garage, a basement corner, a small room.',
  },
  {
    id: 'full',
    name: 'A full truck',
    price: 'About $640',
    priceFrom: 640,
    priceTo: 640,
    covers: 'A whole-house cleanout, or a big garage and basement together.',
  },
];

/** Lowest and highest published numbers — drives schema and "from $X" copy. */
export const priceFloor = Math.min(...tiers.map((t) => t.priceFrom));
export const priceCeiling = Math.max(...tiers.map((t) => t.priceTo));

/** Heavy material is weight-based, not volume-based. Quoted on site. */
export const heavyMaterial = {
  items: 'Concrete, brick, tile, dirt and shingles',
  note: 'Heavy material is priced by weight, not by space. We quote it on site.',
};

/** The one rule that applies to every job. */
export const priceRule = 'We confirm the final price on site before we load anything.';

/** What the price covers. */
export const included = [
  'All the lifting and carrying — you point, we move it',
  'Loading from wherever it is, including basements and upstairs',
  'Disposal fees',
  'Donation and recycling drop-off where we can',
  'A sweep-up of the space before we go',
  'Fuel and truck time',
];

/** Things we quote separately, always before loading. */
export const quotedSeparately = [
  `${heavyMaterial.items} — priced by weight`,
  'Items needing a special disposal route, like freon appliances',
  'Anything that has to come apart before it can be loaded, like a shed',
];
