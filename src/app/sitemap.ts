import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

const BASE = SITE_CONFIG.baseUrl;

// Fechas reales del último cambio de contenido (git). Actualizar a mano cuando
// cambie el texto de la página, no en refactors ni cambios de schema.
const STATIC_DATES: Record<string, string> = {
  "": "2026-08-28",
  "/walk-in": "2026-08-28",
  "/promociones": "2026-09-02",
};
const SERVICES_LAST_MODIFIED = "2026-08-28";
const SERVICE_DATES: Record<string, string> = {
  "salud-hombre": "2026-09-16",
  "examenes-sangre": "2026-09-16",
  "examenes-inmigracion": "2026-09-16",
  "examen-dot": "2026-09-16",
};

// Strings YYYY-MM-DD comparan bien lexicográficamente.
const latest = (dates: string[]) => dates.reduce((max, d) => (d > max ? d : max));

const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

// Cada idioma lleva su propia <url> con alternates recíprocos (formato que pide
// Google para hreflang en sitemaps). Sin priority/changefreq: Google los ignora.
// /privacy no va: tiene noindex.
function entries(path: string, lastModified: string): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${BASE}${localePath(locale)}${path}`,
    lastModified,
    alternates: {
      languages: {
        es: `${BASE}${path}`,
        en: `${BASE}/en${path}`,
        "x-default": `${BASE}${path}`,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceDate = (slug: string) => SERVICE_DATES[slug] ?? SERVICES_LAST_MODIFIED;
  const posts = getAllPosts("es");
  const postDate = (p: (typeof posts)[number]) => p.dateModified ?? p.date;
  const slugs = getAllServiceSlugs();

  const newestService = latest(slugs.map(serviceDate));
  const newestPost = latest(posts.map(postDate));

  return [
    ...entries("", latest([STATIC_DATES[""], newestService, newestPost])),
    ...entries("/services", newestService),
    ...entries("/walk-in", STATIC_DATES["/walk-in"]),
    ...entries("/promociones", STATIC_DATES["/promociones"]),
    ...entries("/blog", newestPost),
    ...slugs.flatMap((slug) => entries(`/services/${slug}`, serviceDate(slug))),
    ...posts.flatMap((p) => entries(`/blog/${p.slug}`, postDate(p))),
  ];
}
