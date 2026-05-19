import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog", ({ data }) => {
    return !data.draft && new Date(data.date) <= new Date();
  });

  const items = posts
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())
    .map((post) => ({
      title:       post.data.title,
      pubDate:     new Date(post.data.date),
      description: post.data.excerpt,
      link:        `/blog/${post.id}/`,
    }));

  return rss({
    title:       "PypNetty",
    description: "DevOps, Cloud-Native et SRE.",
    site:        context.site,
    items,
  });
}
