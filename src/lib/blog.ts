import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogFrontmatter, BlogPost, Locale } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Posts que YA tienen portada en /public/images/blog/<slug>.webp.
// Vamos agregando slugs aquí conforme se crean las imágenes.
const BLOG_IMAGE_SLUGS = new Set<string>([
  "bienvenidos-clinica-hispana-mangum",
  "atencion-medica-sin-seguro-houston",
  "control-diabetes-houston-guia-pacientes",
  "examen-dot-cdl-camioneros-houston",
  "ginecologos-hispanos-houston-hablan-espanol",
  "guia-examen-medico-inmigracion-i693-houston",
  "laboratorio-clinico-houston-analisis-sangre",
  "medicos-autorizados-uscis-houston-civil-surgeon",
  "salud-mujer-houston-servicios-ginecologia",
  "salud-hombre-houston-chequeos-preventivos",
  "vitamina-b12-beneficios-inyecciones-houston",
]);

function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// El parser quita el "# Title" inicial: la página ya emite el título del
// frontmatter como h1.
function stripLeadingTitle(content: string): string {
  return content.replace(/^\s*#\s+.*(\r?\n)+/, "");
}

/** Slugs enumerados SIEMPRE desde el directorio es/. */
export function getPostSlugs(): string[] {
  const esDir = path.join(BLOG_DIR, "es");
  if (!fs.existsSync(esDir)) return [];
  return fs
    .readdirSync(esDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPost(slug: string, locale: Locale): BlogPost | undefined {
  const localized = path.join(BLOG_DIR, locale, `${slug}.md`);
  const fallback = path.join(BLOG_DIR, "es", `${slug}.md`);
  const target = fs.existsSync(localized)
    ? localized
    : fs.existsSync(fallback)
      ? fallback
      : null;
  if (!target) return undefined;

  const raw = fs.readFileSync(target, "utf8");
  const { data, content } = matter(raw);
  const fm = data as BlogFrontmatter;
  const body = stripLeadingTitle(content);

  return {
    ...fm,
    slug,
    content: body,
    readingMinutes: readingMinutes(body),
    hasCover: BLOG_IMAGE_SLUGS.has(slug),
  };
}

export function getAllPosts(locale: Locale): BlogPost[] {
  return getPostSlugs()
    .map((slug) => getPost(slug, locale))
    .filter((p): p is BlogPost => Boolean(p))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRecentPosts(locale: Locale, count = 3): BlogPost[] {
  return getAllPosts(locale).slice(0, count);
}

/**
 * Posts relacionados por tema: servicios en común pesan más que la categoría;
 * el empate se rompe rotando desde el post actual para repartir los enlaces.
 */
export function getRelatedPosts(slug: string, locale: Locale, count = 3): BlogPost[] {
  const posts = getAllPosts(locale);
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return posts.slice(0, count);
  const current = posts[i];
  const shared = (p: BlogPost) =>
    (p.relatedServices ?? []).filter((r) => current.relatedServices?.includes(r)).length;
  return posts
    .map((p, k) => ({
      p,
      score: shared(p) * 2 + (p.category === current.category ? 1 : 0),
      dist: (k - i + posts.length) % posts.length,
    }))
    .filter(({ p }) => p.slug !== slug)
    .sort((a, b) => b.score - a.score || a.dist - b.dist)
    .slice(0, count)
    .map(({ p }) => p);
}
