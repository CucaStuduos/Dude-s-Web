import { defineCollection, z } from "astro:content";
// z -> zod schema

const langs = defineCollection({
    schema: z.object({
        language: z.string(),
        code: z.string(),
        homeBtn: z.string(),
        projectsBtn: z.string(),
        videosBtn: z.string(),
        faqBtn: z.string(),
        languagesBtn: z.string(),
    })
})

export const collections = { langs };