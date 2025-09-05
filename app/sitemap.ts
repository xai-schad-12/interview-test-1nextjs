import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "/", changeFrequency: "weekly", priority: 1 },
    { url: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { url: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  ]
}
