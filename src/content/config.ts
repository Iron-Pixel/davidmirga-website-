import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('David Mirga'),
    category: z.enum(['ki-sicherheit', 'ki-praxis', 'ki-strategie', 'ki-wissen']),
    image: z.string().optional(),
    video: z.string().optional(),
    deepDive: z.boolean().default(false),
    draft: z.boolean().default(false),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    x: z.string().optional(),
  }),
});

export const collections = { blog };