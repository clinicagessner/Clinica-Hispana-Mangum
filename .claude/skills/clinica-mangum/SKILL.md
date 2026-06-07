---
name: clinica-mangum
description: Convenciones, reglas y flujos del sitio Clínica Hispana Mangum (Next.js 16 + React 19 + Tailwind 4 + shadcn/Base UI + next-intl, bilingüe es/en, SEO local médico en Houston, deploy en Vercel, DNS en Bluehost). Úsala SIEMPRE al agregar/editar servicios, imágenes, posts de blog, formularios, tracking, SEO o configuración/deploy de este proyecto.
---

# Clínica Hispana Mangum — Playbook del proyecto

Sitio bilingüe (español por defecto, inglés bajo `/en`) de una clínica médica hispana en
Houston, TX. La puerta de calidad es `npm run build` (incluye type-check) + `npm run lint`.

## Reglas no negociables
- **Server Components por defecto.** `"use client"` solo si hay estado/efectos/handlers/browser APIs.
- **NO usar `"use cache"`** (rompe con i18n en Next 16). En cada page/layout: `setRequestLocale(locale)` + `generateStaticParams()`.
- **Sin barrel imports** de shadcn (un import por archivo). Alias `@/*` → `src/*`.
- **i18n con next-intl**: locales `["es","en"]`, default `es`, `localePrefix: "as-needed"`. Middleware en `src/proxy.ts` (no `middleware.ts`). El `<Link>` SIEMPRE de `@/i18n/navigation` (respeta locale), NUNCA `next/link`.
- **Imágenes**: `next/image` con `alt` descriptivo. Las binarias las crea el usuario; el código solo deja rutas. Formato **WebP**.
- **Colores**: variables/utilidades de la paleta Mangum (verde `#178a3a`, rojo `#c81e2c`, dorado `#e0a83c`, mint `#eaf8ee`). Nunca `bg-white` en secciones (blanco solo en cards/inputs). Los `Input`/`Textarea` llevan `text-slate-dark` (la sección de contacto es oscura y heredarían texto claro).
- **Mobile-first**: verificar SIEMPRE a tamaño iPhone (390×844).
- **Enlaces externos** (mapas, redes, rcweb.dev): `<a target="_blank" rel="noopener noreferrer">`. `tel:`/`mailto:` y navegación interna NO llevan `_blank`.
- **Secretos solo en `.env.local`** (ignorado por git). `.env.example` documenta las vars vacías.
- **Commits**: Conventional Commits, sin mención de IA ni `Co-Authored-By`. Commit/push solo cuando el usuario lo pida. El push requiere red (`dangerouslyDisableSandbox`).

## Mapa de archivos clave
- `src/lib/constants.ts` — `SITE_CONFIG` (baseUrl = `process.env.NEXT_PUBLIC_SITE_URL` normalizado, canónico **con www**), `CONTACT_INFO`, `SOCIAL_LINKS`, `SERVICE_CATEGORIES`, `SERVICES[]` (19), bloques `WHY_ES/EN`, `PAYMENT_ES/EN`, `AREAS_ES/EN`.
- `src/lib/services.ts` — `SERVICE_IMAGE_SLUGS` (set de servicios con foto), `hasServiceImage()`, `getServiceCardData()`.
- `src/lib/service-faqs.ts` — `SERVICE_FAQS` (clave = slug, bilingüe).
- `src/lib/blog.ts` — `BLOG_IMAGE_SLUGS` (set de posts con portada), `hasCover`.
- `src/components/shared/service-icon.tsx` — mapa curado de iconos lucide (PascalCase).
- `src/components/services/service-card.tsx` — card con foto de fondo (si `image`) o icono (fallback).
- `src/components/blog/blog-card.tsx` — card de blog (foto si `hasCover`).
- `src/messages/{es,en}.json` — strings de UI.
- `src/app/[locale]/layout.tsx` — metadata global (incluye `verification.google`), tracking.
- `next.config.ts` — CSP estricta con allowlist (GA/GTM, Meta, Google Maps/Places, CallRail, Vercel).

## Flujo: agregar un servicio nuevo
1. `src/lib/constants.ts` → nuevo objeto en `SERVICES[]` con TODOS los campos (es + `*En`): `slug`, `order`, `category` (una de SERVICE_CATEGORIES), `icon` (debe existir en service-icon.tsx), `title`, `shortDescription`, `description`, `keywords[]`, `features[]`, `longDescription` (secciones markdown + `${WHY_ES}` `${PAYMENT_ES}` `${AREAS_ES}`), y sus equivalentes En.
2. Si el icono no está, agrégalo a `src/components/shared/service-icon.tsx` (import + mapa ICONS).
3. `src/lib/service-faqs.ts` → entrada `"<slug>": [...]` con 3 FAQs bilingües.
4. Imagen (ver flujo de imagen) → añade el slug a `SERVICE_IMAGE_SLUGS`.
5. **Compliance Google Ads salud**: evitar términos farma-adyacentes/claims en title/description/keywords (cuidado especial en urología/STD/farmacia).
6. Se genera solo: card en `/services`, detalle `/services/<slug>`, sitemap, JSON-LD.

## Flujo: agregar imagen (servicio o blog)
1. El usuario genera la imagen; tú das el **prompt en inglés** + filename = **slug** + carpeta:
   - servicio → `public/images/services/<slug>.webp`
   - blog → `public/images/blog/<slug>.webp` (16:9)
2. Al "listo": localizar el archivo (puede venir con `(1)`, doble extensión, o en otra carpeta), moverlo al destino y si no es webp convertir con sharp:
   `node -e "require('sharp')('SRC').webp({quality:88}).toFile('DEST')"`
3. Añadir el slug a `SERVICE_IMAGE_SLUGS` (services.ts) o `BLOG_IMAGE_SLUGS` (blog.ts).
4. `npm run build` y verificar la card con foto (object-cover, overlay verde, texto legible).

## Flujo: agregar post de blog
1. Crear `src/content/blog/es/<slug>.md` y `src/content/blog/en/<slug>.md` con frontmatter (title, description, date, category, author, cover, coverAlt). Los slugs se enumeran desde `es/`.
2. Portada (opcional) → flujo de imagen + `BLOG_IMAGE_SLUGS`.

## Variables de entorno (Vercel = mismas, sin comillas; `NEXT_PUBLIC_*` requieren Redeploy)
- `NEXT_PUBLIC_SITE_URL` = `https://www.clinicahispanamangum.com` (CON www; el apex redirige a www)
- `RESEND_API_KEY`, `RESEND_FROM` = `Clínica Hispana Mangum <noreply@clinicahispanamangum.com>` (dominio verificado en Resend; DKIM/SPF en Bluehost)
- `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` (reseñas en vivo)
- `INDEXNOW_KEY` (+ archivo `public/<key>.txt`)
- `NEXT_PUBLIC_GA_ID` (G-…), `NEXT_PUBLIC_META_PIXEL_ID` (16 dígitos), `META_CAPI_ACCESS_TOKEN` (EAA…), `NEXT_PUBLIC_GOOGLE_ADS_ID` (AW-…)

## Deploy / infra
- Repo: `github.com/clinicagessner/Clinica-Hispana-Mangum` (push con `git push`, requiere red).
- Hosting: Vercel (deploy automático por push). Dominio canónico **www**; apex → www (308).
- DNS en **Bluehost** (nameservers ns1/ns2.bluehost.com): A `@` → IP Vercel, CNAME `www` → host vercel-dns; NO tocar registros de Resend (`resend._domainkey`, `send`).
- El email del formulario va a `clinicahispanamangum@gmail.com` con `reply-to` = correo del paciente.

## Verificación (hacer SIEMPRE antes de cerrar)
- `npm run lint` && `npm run build` verdes.
- Dev persistente: `nohup npm run dev > /tmp/mangum-dev.log 2>&1 & disown` (no matarlo tras cada revisión).
- Revisar en navegador a **390px (iPhone)** y desktop.
- Nota: Console Ninja (extensión) intercepta `console.*`; para depurar server actions, escribir a archivo con `fs` en vez de console.
