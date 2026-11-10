import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Shared FAQ shape — every entry here is emitted as FAQPage JSON-LD. */
const faq = z.array(
  z.object({
    q: z.string(),
    a: z.string(),
  })
);

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    /** <title> tag. Keep under ~60 chars. */
    metaTitle: z.string(),
    metaDescription: z.string(),
    /** Short punchy hero line, distinct from title. */
    headline: z.string(),
    /** One-sentence value prop under the headline. */
    lede: z.string(),
    /** Card blurb on the services grid — must NOT repeat `lede`. */
    cardBlurb: z.string(),
    imageKey: z.string(),
    order: z.number(),
    /** Typical price band shown on the service page. */
    priceFrom: z.number(),
    priceTo: z.number(),
    /** Bulleted list of what's included. */
    includes: z.array(z.string()),
    /** "We take / we can't take" — sets expectations, reduces bad leads. */
    accepts: z.array(z.string()),
    excludes: z.array(z.string()),
    faq,
    related: z.array(z.string()).default([]),
  }),
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/locations' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    headline: z.string(),
    lede: z.string(),
    /** 'county' pages act as hubs and link down to their 'city' pages. */
    kind: z.enum(['county', 'city']),
    /** Slug of the parent county page. Null for county pages themselves. */
    county: z.string().nullable(),
    countyLabel: z.string(),
    /** Neighbourhoods / areas listed on the page — real local signal. */
    areas: z.array(z.string()),
    zips: z.array(z.string()),
    /** Drive-time promise shown in the hero. */
    responseTime: z.string(),
    geo: z.object({ lat: z.number(), lng: z.number() }),
    /** Unique-to-this-page context: housing stock, common jobs, landmarks. */
    faq,
    order: z.number().default(50),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Dominion Haul'),
    category: z.enum(['Pricing', 'Guides', 'Seasonal', 'Local']),
    readingMinutes: z.number(),
    draft: z.boolean().default(false),
    faq: faq.optional(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    rating: z.number().min(1).max(5),
    date: z.coerce.date(),
    city: z.string(),
    service: z.string(),
    /** Set true only for reviews genuinely copied from a real Google profile. */
    verified: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

export const collections = { services, locations, blog, testimonials };
