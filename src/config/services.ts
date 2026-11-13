/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SERVICES — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────────────────────
 *  Each entry below becomes its own page at /services/<id>, with a unique
 *  title, meta description, H1, what's-included list, price, FAQ and quote
 *  form. The same data drives the /services index, the homepage grid, the
 *  header and footer lists, and the quote form dropdown.
 *
 *  Prices are never written here — pages pull them from config/pricing.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { ImageKey } from './site';

export interface Service {
  id: string;
  /** Nav/card label. */
  title: string;
  /** Page <h1> — can differ from the nav label. */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  /** One line for cards. */
  short: string;
  icon: string;
  image: ImageKey;
  /** What we take. */
  items: string[];
  /** What the job includes, beyond the generic price inclusions. */
  includes: string[];
  /** Honest caveats. Shown as a short list. */
  notes?: string[];
  faq: { q: string; a: string }[];
  order: number;
}

export const services: Service[] = [
  {
    id: 'junk-removal',
    title: 'Household Junk Removal',
    h1: 'Household Junk Removal in Northern Virginia',
    metaTitle: 'Household Junk Removal in Northern Virginia | Dominion Haul',
    metaDescription:
      'We haul household junk out of homes in Fairfax, Loudoun, Prince William and Arlington. One heavy item from $165, half a truck about $340. Call or text 571-477-7222.',
    short: 'Boxes, clutter, mattresses, electronics and whatever else has piled up.',
    icon: 'home',
    image: 'truckLoad',
    items: [
      'Boxes, bags and general clutter',
      'Mattresses and box springs',
      'TVs, computers and electronics',
      'Toys, bikes and kids’ gear',
      'Rugs, carpet and pads',
      'Storage bins and holiday decorations',
    ],
    includes: [
      'We carry it out from wherever it is',
      'Stairs, basements, attics and backyards',
      'Sweep-up before we leave',
    ],
    faq: [
      {
        q: 'How much is it?',
        a: 'Depends on how much space it takes up in the truck. One heavy item runs $165 to $200. Half a truck is about $340. A full truck is about $640. Text a photo and we will give you a number.',
      },
      {
        q: 'Do I need to drag everything outside first?',
        a: 'No. That is the job. Show us what is going and we carry it out.',
      },
      {
        q: 'What can’t you take?',
        a: 'No hazardous material: paint, solvents, gas, oil, pool chemicals, propane tanks, asbestos. No firearms or ammunition. We also do not do moving, pianos, safes or hot tubs.',
      },
      {
        q: 'Can you get rid of just one thing?',
        a: 'Yes. One heavy item is $165 to $200 and that is a normal booking for us.',
      },
    ],
    order: 1,
  },
  {
    id: 'furniture-removal',
    title: 'Furniture Removal',
    h1: 'Furniture Removal in Northern Virginia',
    metaTitle: 'Furniture Removal in Northern Virginia | Couches, Beds, Desks',
    metaDescription:
      'Couch, sectional, mattress or treadmill gone today. One heavy item $165–$200, a sofa, loveseat and chair about $275. Serving Fairfax, Loudoun, Prince William, Arlington.',
    short: 'Couches, sectionals, mattresses, desks and exercise equipment, carried out from any floor.',
    icon: 'sofa',
    image: 'bedroomCleanout',
    items: [
      'Sofas, sectionals and sleeper sofas',
      'Recliners and armchairs',
      'Beds, mattresses and dressers',
      'Dining tables and chairs',
      'Desks, bookcases and office chairs',
      'Treadmills, ellipticals and weight benches',
      'Patio and outdoor furniture',
    ],
    includes: [
      'We take furniture apart when it will not fit through the door',
      'Door frames and floors get padded',
      'Basement and upstairs carries at no extra charge',
    ],
    notes: [
      'We do not do moving — we haul things away, we do not relocate them.',
      'No pianos, safes or hot tubs.',
    ],
    faq: [
      {
        q: 'How much to take one couch?',
        a: 'One heavy item is $165 to $200. A sofa, loveseat and chair together is about $275.',
      },
      {
        q: 'My sectional will not fit through the door. Now what?',
        a: 'We take the legs and connectors off in the room. Most sectionals come apart more easily than people expect.',
      },
      {
        q: 'It’s in the basement. Does that cost more?',
        a: 'No. We price by how much space it takes in the truck, not by how hard the carry is. Mention the access when you call so we bring enough people.',
      },
      {
        q: 'Will you move furniture to another room instead?',
        a: 'No. We only haul things away. For moving, you want a moving company.',
      },
    ],
    order: 2,
  },
  {
    id: 'appliance-removal',
    title: 'Appliance Removal',
    h1: 'Appliance Removal in Northern Virginia',
    metaTitle: 'Appliance Removal in Northern Virginia | Fridges, Washers, Stoves',
    metaDescription:
      'Old fridge, washer, dryer or water heater hauled off. One heavy item $165–$200. Fully insured, based in Chantilly VA. Call or text 571-477-7222.',
    short: 'Fridges, freezers, washers, dryers, stoves and water heaters hauled off.',
    icon: 'fridge',
    image: 'garageRenovation',
    items: [
      'Refrigerators and freezers',
      'Washers and dryers',
      'Stoves, ovens and dishwashers',
      'Water heaters',
      'Window and portable AC units',
      'Microwaves and small appliances',
    ],
    includes: [
      'We disconnect water lines on washers and dishwashers',
      'Appliances go to a scrap or recycling route, not straight to landfill',
      'We bring a dolly and floor protection',
    ],
    notes: [
      'Anything on a gas line needs a licensed gas fitter to disconnect it first. We will not touch gas connections.',
      'Fridges, freezers and AC units hold refrigerant, so they go through a recycler that recovers it rather than to general waste.',
    ],
    faq: [
      {
        q: 'How much for one appliance?',
        a: 'One heavy item is $165 to $200. Two or three together usually lands closer to the $275 range.',
      },
      {
        q: 'Do you disconnect it?',
        a: 'Water lines on washers and dishwashers, yes. Gas lines, no — that needs a licensed gas fitter, and we would rather say so than guess.',
      },
      {
        q: 'Why can’t I just put the fridge on the curb?',
        a: 'Most collection services will not take a fridge as regular waste because of the refrigerant inside it. Check with your county or town for their specific rules. We route them to a recycler instead.',
      },
      {
        q: 'It’s in the basement. Can you still get it out?',
        a: 'Yes. Stairs are part of the job and do not change the price.',
      },
    ],
    order: 3,
  },
  {
    id: 'garage-basement-attic-cleanouts',
    title: 'Garage, Basement & Attic Cleanouts',
    h1: 'Garage, Basement and Attic Cleanouts',
    metaTitle: 'Garage, Basement & Attic Cleanouts | Northern Virginia',
    metaDescription:
      'Clear the whole garage, basement or attic in one visit. Half a truck is about $340, a full truck about $640. You decide what stays. Fairfax, Loudoun, Prince William, Arlington.',
    short: 'Clear the whole space in one visit. You decide what stays.',
    icon: 'truck',
    image: 'garageFlooring',
    items: [
      'Packed garages',
      'Basement storage rooms',
      'Attics, including pull-down ladder access',
      'Sheds and storage units',
      'Old tools, shelving and workbenches',
      'Bikes, sports gear and storage bins',
    ],
    includes: [
      'You point at what goes, we do the rest',
      'We work around anything you want kept',
      'Sweep-up when the space is clear',
    ],
    faq: [
      {
        q: 'How much to clear a two-car garage?',
        a: 'A packed garage is usually about half a truck, so around $340. If it is stacked to the ceiling it can reach a full truck at about $640. We confirm the number on site before we load.',
      },
      {
        q: 'What if I am not sure what I want to keep?',
        a: 'That is normal. We work through it with you and set aside anything you are unsure about rather than loading it.',
      },
      {
        q: 'Do you take the shelving and workbench too?',
        a: 'Yes. If it is attached to the wall we can take it down.',
      },
      {
        q: 'There is old paint in there. Can you take it?',
        a: 'No. Paint, solvents and fuel need household hazardous waste handling. Your county runs a drop-off for that — check their site for hours and limits. Everything else in the garage we will take.',
      },
    ],
    order: 4,
  },
  {
    id: 'estate-cleanouts',
    title: 'Estate Cleanouts',
    h1: 'Estate Cleanouts in Northern Virginia',
    metaTitle: 'Estate Cleanouts in Northern Virginia | Dominion Haul',
    metaDescription:
      'Clearing a family home, at whatever pace you need. We set aside anything personal, send photos as we go, and quote before we load. Chantilly VA. Call 571-477-7222.',
    short: 'Clearing a family home, at whatever pace you need.',
    icon: 'shield',
    image: 'roomCleanout',
    items: [
      'Whole-house cleanouts',
      'Single rooms or partial cleanouts',
      'Furniture, appliances and household goods',
      'Garage, basement and attic contents',
    ],
    includes: [
      'Papers, photos, documents and anything personal get set aside for you, not loaded',
      'We can text photos as we go if family is out of the area',
      'We work to your timeline, including over several days',
    ],
    notes: [
      'One rule we hold to: if it looks personal, it does not go on the truck. We would rather flag twenty things that turn out to be nothing than bin one that mattered.',
    ],
    faq: [
      {
        q: 'How does pricing work for a whole house?',
        a: 'Most whole-house jobs run more than one truckload, so we walk through it first and give you a number. A full truck is about $640 as a reference point.',
      },
      {
        q: 'Can you do it in stages?',
        a: 'Yes. A lot of families want a room at a time. We book it however you need it.',
      },
      {
        q: 'I live out of state. Can this happen without me there?',
        a: 'Yes. You send photos or do a video walkthrough, we agree on a price, someone gives us access, and we text you photos of the empty rooms when we are done.',
      },
      {
        q: 'What happens to things that are still good?',
        a: 'We take usable furniture and working appliances to a donation drop-off where we can. If you need a receipt for a deduction, tell us before we load and we will try to get you one.',
      },
    ],
    order: 5,
  },
  {
    id: 'yard-waste-removal',
    title: 'Yard Waste Removal',
    h1: 'Yard Waste and Debris Removal',
    metaTitle: 'Yard Waste Removal in Northern Virginia | Brush, Branches, Fencing',
    metaDescription:
      'Branches, brush, bagged leaves, old fencing, playsets and storm debris hauled away. Half a truck about $340. Serving Fairfax, Loudoun, Prince William and Arlington.',
    short: 'Branches, brush, bagged leaves, old fencing and storm debris.',
    icon: 'leaf',
    image: 'yardDemo',
    items: [
      'Branches, limbs and brush',
      'Bagged leaves and grass',
      'Old fencing and landscaping timber',
      'Playsets and trampolines',
      'Above-ground pools',
      'Storm debris',
      'Patio furniture and planters',
    ],
    includes: [
      'We dismantle wooden playsets and fencing on site',
      'Loading from the backyard, not just the curb',
      'Yard waste goes to a compost or mulch route where we can',
    ],
    notes: [
      'We do not cut down standing trees or grind stumps. That needs an arborist.',
      'Anything set in a concrete footing is a bigger job — tell us when you call so we can price it right.',
    ],
    faq: [
      {
        q: 'How much is a yard cleanup?',
        a: 'Depends on the pile. Half a truck is about $340, a full truck about $640. Send a photo and we will tell you which one you are looking at.',
      },
      {
        q: 'Can you take the old swing set?',
        a: 'Yes. Wooden playsets get taken apart on site. If the posts are set in concrete, mention it when you call.',
      },
      {
        q: 'Do I need to bag it first?',
        a: 'No. Loose brush and branches are fine. Bagged is slightly faster but it does not change the price.',
      },
      {
        q: 'What about dirt, sod or gravel?',
        a: 'We take it, but it is priced by weight rather than by space, so we quote it on site.',
      },
    ],
    order: 6,
  },
  {
    id: 'construction-debris-removal',
    title: 'Construction & Remodel Debris',
    h1: 'Construction and Remodel Debris Removal',
    metaTitle: 'Construction & Remodel Debris Removal | Northern Virginia',
    metaDescription:
      'Drywall, lumber, cabinets, flooring and fixtures hauled off your remodel. No dumpster in the driveway. Half a truck about $340. Chantilly VA, fully insured.',
    short: 'Drywall, cabinets, flooring and remodel scrap hauled off, no dumpster needed.',
    icon: 'hammer',
    image: 'constructionDebris',
    items: [
      'Drywall and plaster',
      'Lumber, trim and framing offcuts',
      'Old cabinets and countertops',
      'Flooring, carpet and underlay',
      'Fixtures, doors and windows',
      'Packaging and remodel scrap',
    ],
    includes: [
      'We can come back as the project generates more, rather than waiting for one big pile',
      'Loading from inside the work area',
      'Metal gets separated for scrap',
    ],
    notes: [
      'Concrete, brick, tile, dirt and shingles are priced by weight, not by space. We quote those on site.',
      'If you are demolishing in an older home, test for asbestos before you start. We cannot haul asbestos-containing material.',
    ],
    faq: [
      {
        q: 'How much for a remodel cleanup?',
        a: 'Half a truck is about $340 and a full truck about $640. Heavy material like concrete, tile or shingles is priced by weight instead, quoted on site.',
      },
      {
        q: 'Why is concrete priced differently?',
        a: 'Because disposal for heavy material is billed by weight rather than by volume. A small pile of concrete can weigh more than a full truck of furniture.',
      },
      {
        q: 'Can you come back more than once?',
        a: 'Yes. On a longer job it is usually better to clear debris as it builds up so the space stays workable. Just call when you need us.',
      },
      {
        q: 'Dumpster or haul-off?',
        a: 'If you are running a long project and generating debris every day, a dumpster probably makes more sense. For a defined pile, or where you do not want a container sitting in the driveway, we are the better call. We will tell you honestly which one you need.',
      },
    ],
    order: 7,
  },
];

export const serviceById = (id: string) => services.find((s) => s.id === id);

/** Sorted for nav and grids. */
export const navServices = [...services].sort((a, b) => a.order - b.order);
