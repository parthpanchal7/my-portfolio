import type { MetadataRoute } from "next";
import { projects } from "../src/data/projects";
import { notes } from "../src/data/notes";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://revamped-portfolio.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/notes`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const noteRoutes: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${siteUrl}/notes/${note.slug}`,
    lastModified: note.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
