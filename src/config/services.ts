/**
 * The 9 services Dominion Haul offers. Single source of truth for the home
 * page grid, the /services page (one section per service, linked by #id),
 * the header/footer lists and the quote form dropdown.
 */
export interface Service {
  id: string;
  title: string;
  /** One sentence for cards. */
  short: string;
  /** Icon name from Icon.astro. */
  icon: string;
  /** What we take, shown as a list on /services. */
  items: string[];
  /** Optional extra note shown under the list. */
  note?: string;
}

export const services: Service[] = [
  {
    id: 'junk-removal',
    title: 'Household Junk Removal',
    short: 'Boxes, clutter, mattresses, electronics and everything else piling up.',
    icon: 'home',
    items: [
      'Boxes, bags and general clutter',
      'Mattresses and box springs',
      'TVs, computers and electronics',
      'Toys, bikes and kids’ gear',
      'Rugs, carpet and pads',
      'Holiday decorations and storage bins',
    ],
  },
  {
    id: 'furniture-removal',
    title: 'Furniture Removal',
    short: 'Couches, sectionals, dressers and desks carried out from any room or floor.',
    icon: 'sofa',
    items: [
      'Sofas, sectionals and sleeper sofas',
      'Recliners and armchairs',
      'Beds, dressers and nightstands',
      'Dining tables and chairs',
      'Desks, bookcases and office chairs',
      'Patio and outdoor furniture',
    ],
    note: 'We take furniture apart on site when it won’t fit through the door.',
  },
  {
    id: 'appliance-removal',
    title: 'Appliance Removal',
    short: 'Refrigerators, freezers, washers, dryers and stoves hauled away.',
    icon: 'fridge',
    items: [
      'Refrigerators and freezers',
      'Washers and dryers',
      'Stoves, ovens and dishwashers',
      'Water heaters',
      'Window and portable AC units',
      'Microwaves and small appliances',
    ],
    note: 'Gas appliances need to be disconnected by a professional before pickup.',
  },
  {
    id: 'treadmill-removal',
    title: 'Treadmill & Exercise Equipment',
    short: 'Treadmills, ellipticals and home gym equipment, even from the basement.',
    icon: 'bolt',
    items: [
      'Treadmills',
      'Ellipticals and exercise bikes',
      'Rowing machines',
      'Weight benches and racks',
      'Free weights and home gyms',
    ],
    note: 'Heavy and awkward is exactly why people call us. We disassemble when needed.',
  },
  {
    id: 'yard-waste-removal',
    title: 'Yard Waste Removal',
    short: 'Branches, brush, bagged leaves, old fencing and storm debris.',
    icon: 'leaf',
    items: [
      'Branches, limbs and brush',
      'Bagged leaves and grass',
      'Old fencing and landscaping',
      'Playsets and trampolines',
      'Storm debris',
    ],
    note: 'We don’t cut down standing trees or grind stumps.',
  },
  {
    id: 'garage-cleanouts',
    title: 'Garage, Basement & Attic Cleanouts',
    short: 'Clear out the whole space in one visit. You choose what stays.',
    icon: 'truck',
    items: [
      'Packed garages',
      'Basement storage rooms',
      'Attics with pull-down ladders',
      'Sheds and storage units',
      'Old tools, shelving and workbenches',
    ],
  },
  {
    id: 'estate-cleanouts',
    title: 'Estate Cleanouts',
    short: 'Clearing a loved one’s home at your family’s pace, with care.',
    icon: 'shield',
    items: [
      'Whole-house cleanouts',
      'Single rooms or partial cleanouts',
      'Papers, photos and valuables set aside for you',
      'Updates and photos by text for family out of the area',
    ],
  },
  {
    id: 'pre-listing-cleanouts',
    title: 'Pre-Listing Cleanouts for Realtors',
    short: 'Empty, photo-ready homes on your listing timeline.',
    icon: 'tag',
    items: [
      'Clear-outs before listing photos',
      'Vacant homes after closing',
      'Before-and-after photos for your records',
      'Scheduled around showings and open houses',
    ],
  },
  {
    id: 'remodeler-property-manager-hauling',
    title: 'Remodelers & Property Managers',
    short: 'Debris haul-off for remodels and tenant move-out cleanouts.',
    icon: 'building',
    items: [
      'Drywall, cabinets, flooring and fixtures',
      'Packaging and remodel scraps',
      'Tenant move-out cleanouts',
      'Abandoned furniture and belongings',
    ],
    note: 'No dumpster sitting in the driveway, and no permit needed.',
  },
];
