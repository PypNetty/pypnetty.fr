import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    type: z
      .enum(["kezako", "deep-dive", "saga", "series"])
      .optional()
      .default("kezako"),
    series: z.string().optional(),
    subseries: z.string().optional(),
    order: z.number().optional(),
    status: z
      .enum(["publié", "en cours", "à venir"])
      .optional()
      .default("publié"),
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
