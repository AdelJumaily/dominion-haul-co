/**
 * Load-size pricing tiers.
 *
 * ⚠️ CONFIRM EVERY NUMBER BEFORE LAUNCH. These are realistic Northern Virginia
 * market figures seeded so the layout is honest about what it will hold, but
 * they are not your numbers. Price them against your actual dump fees (Fairfax
 * I-66 and Loudoun Solid Waste both charge by ton), fuel, and crew cost.
 *
 * Publishing transparent pricing is the core competitive play of this site —
 * which only works if the published price is one you will actually honour.
 */
export interface Tier {
  id: string;
  name: string;
  /** Percent of truck bed used — drives the visual fill meter. */
  fill: number;
  price: string;
  priceFrom: number;
  priceTo: number;
  volume: string;
  examples: string;
  truck: string;
  popular?: boolean;
}

export const tiers: Tier[] = [
  {
    id: 'single',
    name: 'Single item',
    fill: 8,
    price: '$95 – $175',
    priceFrom: 95,
    priceTo: 175,
    volume: 'One piece',
    examples: 'A mattress, a treadmill, one sofa, a fridge',
    truck: 'Barely a corner of the truck',
  },
  {
    id: 'quarter',
    name: 'Quarter load',
    fill: 25,
    price: '$249 – $329',
    priceFrom: 249,
    priceTo: 329,
    volume: '~4 cubic yards',
    examples: 'A small bedroom, a dozen boxes plus a dresser',
    truck: 'About 2 pickup-truck beds',
  },
  {
    id: 'half',
    name: 'Half load',
    fill: 50,
    price: '$389 – $499',
    priceFrom: 389,
    priceTo: 499,
    volume: '~8 cubic yards',
    examples: 'A packed single-car garage, a full basement corner',
    truck: 'About 4 pickup-truck beds',
    popular: true,
  },
  {
    id: 'threequarter',
    name: 'Three-quarter load',
    fill: 75,
    price: '$539 – $649',
    priceFrom: 539,
    priceTo: 649,
    volume: '~12 cubic yards',
    examples: 'A two-car garage, a furnished one-bedroom apartment',
    truck: 'About 6 pickup-truck beds',
  },
  {
    id: 'full',
    name: 'Full load',
    fill: 100,
    price: '$679 – $795',
    priceFrom: 679,
    priceTo: 795,
    volume: '~16 cubic yards',
    examples: 'A whole-house cleanout, a full estate clear',
    truck: 'The entire truck, floor to ceiling',
  },
];

/** Shown wherever we promise "no hidden fees". */
export const included = [
  'All labour — we carry it out, you point at it',
  'Loading from anywhere on the property, including basements and upstairs',
  'Disposal and dump fees',
  'Sorting for donation and recycling wherever possible',
  'Sweep-up of the space when we are done',
  'Fuel, insurance and truck time',
];

export const surcharges = [
  'Very heavy material — concrete, brick, dirt, roofing shingles and tile are priced by weight, not volume',
  'Items that need a special disposal route, like paint, tyres or freon appliances',
  'Anything requiring demolition before it can be loaded, like a shed or a deck',
];
