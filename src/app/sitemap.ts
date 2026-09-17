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
  "farmacia": "2026-09-17",
  "unas-encarnadas": "2026-09-17",
  "drenaje-abscesos": "2026-09-17",
  "cirugias-menores": "2026-09-17",
  "curacion-heridas": "2026-09-17",
  "suturas-heridas": "2026-09-17",
  "sueros-vitaminados": "2026-09-17",
  "vacunas": "2026-09-17",
  "ultrasonido": "2026-09-17",
  "electrocardiograma": "2026-09-17",
  "examen-alcohol-drogas": "2026-09-17",
  "enfermedades-transmision-sexual": "2026-09-17",
  "prueba-tuberculosis": "2026-09-17",
  "prueba-strep": "2026-09-17",
  "examen-heces": "2026-09-17",
  "infecciones-urinarias": "2026-09-17",
  "extraccion-implantes": "2026-09-17",
  "anticonceptivos": "2026-09-17",
  "prueba-embarazo": "2026-09-17",
  "examen-fisico-escolar": "2026-09-17",
  "enfermedades-respiratorias": "2026-09-17",
  "alergias": "2026-09-17",
  "tiroides": "2026-09-17",
  "condiciones-cronicas": "2026-09-17",
  "salud-hombre": "2026-09-17",
  "examenes-sangre": "2026-09-17",
  "examenes-inmigracion": "2026-09-16",
  "examen-dot": "2026-09-16",
  "ginecologia": "2026-09-17",
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
