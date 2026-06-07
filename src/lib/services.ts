import { SERVICES, SERVICE_CATEGORIES } from "@/lib/constants";
import { getLocalizedService, serviceImagePath } from "@/lib/utils";
import type {
  Locale,
  Service,
  ServiceCardData,
  ServiceCategory,
} from "@/types";

// Servicios que YA tienen foto en /public/images/services/<slug>.webp.
// Vamos agregando slugs aquí conforme se crean las imágenes.
const SERVICE_IMAGE_SLUGS = new Set<string>([
  "medicina-familiar",
  "ginecologia",
  "urologia",
  "examenes-inmigracion",
  "enfermedades-transmision-sexual",
  "laboratorio",
  "ultrasonido",
  "planificacion-familiar",
  "vacunas-anticonceptivas",
  "extraccion-implantes",
  "electrocardiograma",
  "enfermedades-respiratorias",
  "infecciones-urinarias",
  "infecciones-vaginales",
  "examen-dot",
  "examenes-generales",
  "dolores-musculares",
  "condiciones-cronicas",
  "farmacia",
]);

export function hasServiceImage(slug: string): boolean {
  return SERVICE_IMAGE_SLUGS.has(slug);
}

export function getCategoryLabel(
  category: ServiceCategory,
  locale: Locale,
): string {
  const cat = SERVICE_CATEGORIES.find((c) => c.value === category);
  if (!cat) return "";
  return locale === "en" ? cat.labelEn : cat.label;
}

export function getAllServices(): Service[] {
  return [...SERVICES].sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getHighlightedServices(): Service[] {
  return getAllServices().filter((s) => s.highlighted);
}

export function getServicesByCategory(category: Service["category"]): Service[] {
  return getAllServices().filter((s) => s.category === category);
}

/** Servicios relacionados: misma categoría primero, completando con otros. */
export function getRelatedServices(slug: string, count = 3): Service[] {
  const current = getServiceBySlug(slug);
  if (!current) return getAllServices().slice(0, count);
  const sameCategory = getAllServices().filter(
    (s) => s.slug !== slug && s.category === current.category,
  );
  const others = getAllServices().filter(
    (s) => s.slug !== slug && s.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}

/** DTOs ligeros para tarjetas, ya localizados (seguros para el cliente). */
export function getServiceCardData(locale: Locale): ServiceCardData[] {
  return getAllServices().map((s) => {
    const l = getLocalizedService(s, locale);
    return {
      slug: l.slug,
      title: l.title,
      shortDescription: l.shortDescription,
      icon: l.icon,
      category: l.category,
      categoryLabel: getCategoryLabel(l.category, locale),
      image: SERVICE_IMAGE_SLUGS.has(l.slug)
        ? serviceImagePath(l.slug)
        : undefined,
    };
  });
}
