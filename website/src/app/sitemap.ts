import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteConfig.url}/`, lastModified },
    { url: `${siteConfig.url}/privacy`, lastModified },
    { url: `${siteConfig.url}/terms`, lastModified },
  ];
}
