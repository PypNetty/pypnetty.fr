import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    type: z.enum(["kezako", "deep-dive", "saga"]).optional().default("kezako"),
    series: z.string().optional(),
    order: z.number().optional(),
    image: z.string().optional(),
    readTime: z.string().optional(),
    fileType: z.string().optional(),
    size: z.string().optional(),
    isFeatured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
