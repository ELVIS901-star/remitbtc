export const siteConfig = {
  name: "Webxite",
  title: "Webxite",
  description: "Build and launch a modern website in minutes.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, ""),
};

export type SiteConfig = typeof siteConfig;
