import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return rss({
    title: "PypNetty | Platform Engineer & Resilience Architect",
    description:
      "Flux technique sur le Kubernetes Bare Metal, le Go et l'infrastructure résiliente. Retours d'expérience sur la construction de systèmes cloud-native sans compromis.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>fr-fr</language>`,
  });
}
