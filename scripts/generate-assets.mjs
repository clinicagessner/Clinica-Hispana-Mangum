// Genera, con sharp, a partir de /public/logo-mangum.webp:
//  1) logo-mangum-transparent.webp  → fondo transparente (máscara circular,
//     respeta los blancos internos del logo).
//  2) images/og/og-default.webp     → imagen OG 1200×630 branded con el logo.
// Uso: node scripts/generate-assets.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "public/logo-mangum.webp";
const TRANSPARENT = "public/logo-mangum-transparent.webp";
// OG en PNG: WebP no es soportado por varios scrapers sociales (WhatsApp,
// iMessage, Facebook/LinkedIn antiguos). PNG/JPG es lo seguro.
const OG = "public/images/og/og-default.png";

async function makeTransparent() {
  const { width = 225, height = 225 } = await sharp(SRC).metadata();
  const r = Math.min(width, height) / 2 - 1; // círculo inscrito
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><circle cx="${width / 2}" cy="${height / 2}" r="${r}" fill="#fff"/></svg>`,
  );
  await sharp(SRC)
    .ensureAlpha()
    .composite([{ input: mask, blend: "dest-in" }])
    .webp({ quality: 95 })
    .toFile(TRANSPARENT);
  console.log("✓", TRANSPARENT);
}

async function makeOg() {
  const W = 1200;
  const H = 630;
  const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f4fcf6"/>
        <stop offset="1" stop-color="#dcf3e3"/>
      </linearGradient>
      <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#178a3a"/>
        <stop offset="0.5" stop-color="#e0a83c"/>
        <stop offset="1" stop-color="#c81e2c"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <rect x="0" y="0" width="${W}" height="12" fill="url(#bar)"/>
    <text x="560" y="250" font-family="'Montserrat','DejaVu Sans',sans-serif" font-size="46" font-weight="700" letter-spacing="6" fill="#0f6b2c">CLÍNICA HISPANA</text>
    <text x="556" y="340" font-family="'Montserrat','DejaVu Sans',sans-serif" font-size="104" font-weight="800" fill="#178a3a">MANGUM</text>
    <text x="560" y="410" font-family="'Roboto Condensed','DejaVu Sans',sans-serif" font-size="34" fill="#1e293b">Atención médica 100% en español</text>
    <text x="560" y="456" font-family="'Roboto Condensed','DejaVu Sans',sans-serif" font-size="34" fill="#475569">Houston, TX · (832) 906-8551</text>
  </svg>`);

  const logo = await sharp(TRANSPARENT).resize(360, 360, { fit: "contain" }).png().toBuffer();

  await sharp(bg)
    .composite([{ input: logo, left: 110, top: Math.round((H - 360) / 2) }])
    .png({ compressionLevel: 9 })
    .toFile(OG);
  console.log("✓", OG);
}

await mkdir("public/images/og", { recursive: true });
await makeTransparent();
await makeOg();
console.log("Listo.");
