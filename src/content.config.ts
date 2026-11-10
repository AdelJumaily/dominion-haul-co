import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Shared FAQ shape — every entry here is emitted as FAQPage JSON-LD. */
const faq = z.array(
  z.object({
    q: z.string(),
    a: z.string(),
  })
);

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

export const collections = { locations, testimonials };
