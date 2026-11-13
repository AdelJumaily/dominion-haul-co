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
    /** Short, plain sub-headline under the H1. */
    lede: z.string(),
    /** 'county' pages act as hubs and link down to their 'city' pages. */
    kind: z.enum(['county', 'city']),
    /** Slug of the parent county page. Null for county pages themselves. */
    county: z.string().nullable(),
    countyLabel: z.string(),
    /** Towns and neighborhoods covered — real local signal. */
    areas: z.array(z.string()),
    zips: z.array(z.string()),
    /** Rough drive from Chantilly. Keep it approximate and honest. */
    driveTime: z.string(),
    geo: z.object({ lat: z.number(), lng: z.number() }),
    /**
     * Access notes shown on the page. Only include things that are generally
     * true of the area (narrow streets, shared parking, building elevators).
     * No invented local color.
     */
    accessNotes: z.array(z.string()).default([]),
    faq,
    /**
     * ─────────────────────────────────────────────────────────────────────
     *  REAL JOBS ONLY. Stays empty until there is an actual job to list.
     * ─────────────────────────────────────────────────────────────────────
     *  While this array is empty the "Recent jobs in <Town>" section does
     *  not render at all. To add one:
     *
     *    recentJobs:
     *      - what: Garage cleanout, about half a truck
     *        where: Little Rocky Run
     *        date: 2026-11-02
     *
     *  Do not add anything here that did not happen.
     */
    recentJobs: z
      .array(
        z.object({
          what: z.string(),
          where: z.string().optional(),
          date: z.coerce.date().optional(),
        })
      )
      .default([]),
    order: z.number().default(50),
  }),
});

export const collections = { locations };
