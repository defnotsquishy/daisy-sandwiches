import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://daisy-sandwiches-godalming.nathanyu2010.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/catering", "/trailer", "/about", "/contact"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      changeFrequency: path === "/menu" ? "weekly" : "monthly",
      priority: path === "" ? 1 : path === "/menu" ? 0.9 : 0.7,
    }),
  );
}
