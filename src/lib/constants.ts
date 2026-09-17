import type {
  NavLink,
  Service,
  ServiceCategory,
} from "@/types";

// Normaliza la URL del sitio: añade https:// si falta el esquema y quita la
// barra final. Evita que un valor mal puesto en la env (p. ej.
// "clinicahispanamangum.com" sin https) rompa `new URL()` en el build.
function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, "");
}

const SITE_URL = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicahispanamangum.com",
);

export const SITE_CONFIG = {
  name: "Clínica Hispana Mangum",
  shortName: "Clínica Mangum",
  tagline: "Atención médica profesional 100% en español",
  taglineEn: "Professional healthcare 100% in Spanish",
  description:
    "Clínica médica hispana en Houston, TX. Centro médico con atención profesional en español, sin cita previa, aceptamos pacientes sin necesidad de seguro. Médico primario, medicina familiar, exámenes de inmigración, laboratorio y más.",
  descriptionEn:
    "Hispanic medical clinic in Houston, TX. A medical center with professional care in Spanish, walk-ins welcome, patients with no insurance needed. Primary care, family medicine, immigration exams, lab work and more.",
  baseUrl: SITE_URL,
  locale: "es-MX",
  logoUrl: "/logo-mangum-transparent.webp",
  ogImage: "/images/og/og-default.png",
} as const;

export const CONTACT_INFO = {
  address: "2912 Mangum Rd Ste. A",
  city: "Houston",
  state: "TX",
  zip: "77092",
  // Número real de la clínica (NAP). CallRail swap.js lo intercambia en el
  // navegador por un número del pool de seguimiento; el código siempre lleva
  // el real para mantener la consistencia del NAP (SEO local + JSON-LD).
  phone: "+18328345507",
  phoneFormatted: "+1 (832) 834-5507",
  phoneDisplay: "(832) 834-5507",
  // WhatsApp — mismo número real de la clínica, en E.164 sin "+" (formato que
  // exige wa.me). Los botones de WhatsApp nunca muestran el número como texto:
  // solo el label "WhatsApp", para que CallRail swap.js no tenga nada que
  // intercambiar y el chat apunte siempre al número real.
  whatsapp: "18328345507",
  email: "clinicahispanamangum@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursEn: "Monday to Sunday: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  placeId: "0x8640c72997b7028b:0x53fa8804e364dac2",
  placeIdChIJ: "ChIJiwK3lynHQIYRwtpk4wSI-lM",
  coordinates: { lat: 29.8145757, lng: -95.4587173 },
  googleMapsUrl:
    "https://www.google.com/maps/place/Clinica+Hispana+Mangum/@29.8145757,-95.4612922,17z/data=!3m1!4b1!4m6!3m5!1s0x8640c72997b7028b:0x53fa8804e364dac2!8m2!3d29.8145757!4d-95.4587173!16s%2Fg%2F11y9_mc4m7",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJiwK3lynHQIYRwtpk4wSI-lM",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=Clinica+Hispana+Mangum,+2912+Mangum+Rd+STE+A,+Houston,+TX+77092&t=m&z=17&ie=UTF8&iwloc=&output=embed",
} as const;

// Horario estructurado para JSON-LD (openingHoursSpecification).
export const OPENING_HOURS = [
  { day: "Monday", opens: "09:00", closes: "21:00" },
  { day: "Tuesday", opens: "09:00", closes: "21:00" },
  { day: "Wednesday", opens: "09:00", closes: "21:00" },
  { day: "Thursday", opens: "09:00", closes: "21:00" },
  { day: "Friday", opens: "09:00", closes: "21:00" },
  { day: "Saturday", opens: "09:00", closes: "21:00" },
  { day: "Sunday", opens: "09:00", closes: "21:00" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/clinicahispanamangum",
  instagram: "https://www.instagram.com/clinicahispanamangum",
} as const;

// Fallback de build para rating/reseñas. Valores reales (Google Maps, jun 2026).
// La data en vivo la trae getGooglePlaceData() con la API key en .env.
export const GOOGLE_REVIEWS_DATA = {
  averageRating: 5.0,
  totalReviews: 555,
} as const;

// Promociones. El flyer (imagen 4:5, 1080x1350) vive en
// public/images/promotions/<slug>.webp y el texto descriptivo (title, blurb,
// includes, price) se renderiza en la página /promociones para SEO y los flyers
// se muestran en el carrusel de la home. Para agregar una: nuevo objeto aquí +
// flyer con el mismo slug. `price` = null cuando el flyer no muestra precio.
export interface Promotion {
  slug: string;
  title: string;
  titleEn: string;
  price: string | null;
  blurb: string;
  blurbEn: string;
  includes: string[];
  includesEn: string[];
  alt: string;
  altEn: string;
}

export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    title: "Chequeo general completo",
    titleEn: "Complete general checkup",
    price: "$99",
    blurb:
      "Cuídate hoy y vive mejor mañana. Nuestro chequeo general completo incluye examen general de sangre, A1C (hemoglobina glicosilada), examen general de orina y consulta médica gratis, con resultados rápidos y atención 100% en español. Valor regular de $250, ahora por solo $99.",
    blurbEn:
      "Take care of yourself today and live better tomorrow. Our complete general checkup includes a complete blood panel, A1C (glycated hemoglobin), a complete urine test and a free medical consultation, with fast results and care 100% in Spanish. Regular value $250, now for only $99.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
      "Resultados rápidos",
    ],
    includesEn: [
      "Complete blood panel",
      "A1C (glycated hemoglobin)",
      "Complete urine test",
      "Free medical consultation",
      "Fast results",
    ],
    alt: "Promoción de chequeo general completo con examen de sangre, A1C, examen de orina y consulta médica gratis por $99 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete general checkup promotion with blood panel, A1C, urine test and free medical consultation for $99 at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo Completo de la Mujer",
    titleEn: "Complete Women's Check-Up",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo de la mujer por $179 (valor regular $300) que incluye ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis. Sin cita previa y con atención en español.",
    blurbEn:
      "How long since your last women's health check? Complete women's check-up for $179 (regular value $300) including pelvic ultrasound, Pap smear, urine test and a free medical consultation. Walk-ins welcome, with care in Spanish.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    alt: "Promoción de chequeo completo de la mujer con ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis por $179 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete women's check-up promotion with pelvic ultrasound, Pap smear, urine test and free medical consultation for $179 at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "examen-dot",
    title: "Examen DOT para licencia CDL",
    titleEn: "DOT exam for your CDL license",
    price: null,
    blurb:
      "¿Necesitas tu examen físico DOT para conducir? En Clínica Hispana Mangum te lo hacemos de forma rápida, con certificación oficial y atención 100% en español. Sal el mismo día con tu certificado y vuelve a la carretera sin demoras.",
    blurbEn:
      "Need your DOT physical to drive? At Clínica Hispana Mangum we do it fast, with official certification and care 100% in Spanish. Leave the same day with your certificate and get back on the road without delays.",
    includes: [
      "Examen médico DOT rápido",
      "Certificación oficial para tu licencia CDL",
      "Atención 100% en español",
      "Resultados el mismo día",
    ],
    includesEn: [
      "Fast DOT medical exam",
      "Official certification for your CDL license",
      "Care 100% in Spanish",
      "Same-day results",
    ],
    alt: "Promoción de examen médico DOT para licencia CDL en Clínica Hispana Mangum, Houston",
    altEn:
      "DOT medical exam promotion for CDL license at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "sangre-b12",
    title: "Examen general de sangre + Vitamina B12",
    titleEn: "Complete blood panel + Vitamin B12",
    price: "$99",
    blurb:
      "Cuida tu salud con nuestra promoción especial: un examen general de sangre completo más una inyección de vitamina B12 para apoyar tu energía y bienestar. Conoce cómo está tu cuerpo y date un impulso, todo por solo $99.",
    blurbEn:
      "Take care of your health with our special promotion: a complete blood panel plus a vitamin B12 shot to support your energy and wellbeing. Find out how your body is doing and give yourself a boost, all for only $99.",
    includes: [
      "Examen general de sangre completo",
      "Inyección de vitamina B12",
      "Apoyo a tu energía y bienestar",
      "Atención en español",
    ],
    includesEn: [
      "Complete blood panel",
      "Vitamin B12 injection",
      "Support for your energy and wellbeing",
      "Care in Spanish",
    ],
    alt: "Promoción de examen general de sangre con inyección de vitamina B12 por $99 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete blood panel with vitamin B12 injection for $99 promotion at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud íntima femenina",
    titleEn: "Women's intimate health",
    price: "$69",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores: pueden ser señales de una infección. Nuestra promoción de salud íntima femenina incluye cultivo íntimo, consulta médica y examen de orina gratis, con atención confidencial y personal femenino. Todo por solo $69.",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — these can be signs of an infection. Our women's intimate health promotion includes an intimate culture, a medical consultation and a free urine test, with confidential care and female staff. All for only $69.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
      "Atención confidencial con personal femenino",
      "Resultados rápidos",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Free urine test",
      "Confidential care with female staff",
      "Fast results",
    ],
    alt: "Promoción de salud íntima femenina por $69 en Clínica Hispana Mangum, Houston",
    altEn:
      "Women's intimate health promotion for $69 at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "perfil-hormonal-hombres",
    title: "Perfil hormonal para hombres",
    titleEn: "Hormone panel for men",
    price: "$200",
    blurb:
      "¿Cansancio, irritabilidad, pérdida de masa muscular o baja libido? Pueden ser señales de un desequilibrio hormonal. Nuestro perfil hormonal masculino evalúa tu salud hormonal con exámenes confiables y resultados precisos, con atención profesional en español. Por solo $200.",
    blurbEn:
      "Fatigue, irritability, loss of muscle mass or low libido? These can be signs of a hormonal imbalance. Our male hormone panel evaluates your hormonal health with reliable tests and precise results, with professional care in Spanish. For only $200.",
    includes: [
      "Evalúa desequilibrios hormonales",
      "Energía, sueño y estado de ánimo",
      "Masa muscular y libido",
      "Exámenes confiables y resultados precisos",
    ],
    includesEn: [
      "Evaluates hormonal imbalances",
      "Energy, sleep and mood",
      "Muscle mass and libido",
      "Reliable tests and precise results",
    ],
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Mangum, Houston",
    altEn:
      "Male hormone panel promotion for $200 at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "diagnostico-its",
    title: "Diagnóstico completo de ITS",
    titleEn: "Complete STI screening",
    price: "$249",
    blurb:
      "Cuida tu salud y la de tu pareja con un diagnóstico completo de enfermedades de transmisión sexual. Incluye pruebas de RPR (sífilis), VIH, herpes, clamidia y gonorrea, con atención confidencial 100% en español. Todo por solo $249.",
    blurbEn:
      "Protect your health and your partner's with a complete screening for sexually transmitted infections. It includes RPR (syphilis), HIV, herpes, chlamydia and gonorrhea testing, with confidential care 100% in Spanish. All for only $249.",
    includes: [
      "Prueba RPR (sífilis)",
      "Prueba de VIH",
      "Prueba de herpes",
      "Prueba de clamidia",
      "Prueba de gonorrea",
      "Atención confidencial en español",
    ],
    includesEn: [
      "RPR test (syphilis)",
      "HIV test",
      "Herpes test",
      "Chlamydia test",
      "Gonorrhea test",
      "Confidential care in Spanish",
    ],
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $249 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete sexually transmitted infection screening for $249 promotion at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "chequeo-mujer",
    title: "Chequeo completo de la mujer",
    titleEn: "Complete women's checkup",
    price: "$79",
    blurb:
      "Tu salud es una prioridad. Nuestro chequeo completo de la mujer incluye examen de Papanicolaou, consulta ginecológica y orden de mamografía, con atención cercana y 100% en español. Cuídate hoy por solo $79.",
    blurbEn:
      "Your health is a priority. Our complete women's checkup includes a Pap smear, a gynecological consultation and a mammogram referral, with caring service 100% in Spanish. Take care of yourself today for only $79.",
    includes: [
      "Examen de Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
      "Atención en español",
    ],
    includesEn: [
      "Pap smear test",
      "Gynecological consultation",
      "Mammogram referral",
      "Care in Spanish",
    ],
    alt: "Promoción de chequeo completo de la mujer con Papanicolaou, consulta ginecológica y orden de mamografía por $79 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete women's checkup with Pap smear, gynecological consultation and mammogram referral for $79 promotion at Clínica Hispana Mangum, Houston",
  },
  {
    slug: "examen-hombres",
    title: "Examen completo para hombres",
    titleEn: "Complete men's exam",
    price: "$89",
    blurb:
      "Tómate un momento para tu salud. Nuestro examen completo para hombres incluye examen de orina, examen de próstata para prevención de cáncer y examen de testosterona, más una consulta médica gratis, con atención 100% en español. Por solo $89.",
    blurbEn:
      "Take a moment for your health. Our complete men's exam includes a urine test, a prostate exam for cancer prevention and a testosterone test, plus a free medical consultation, with care 100% in Spanish. For only $89.",
    includes: [
      "Examen de orina",
      "Examen de próstata (prevención de cáncer)",
      "Examen de testosterona",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Urine test",
      "Prostate exam (cancer prevention)",
      "Testosterone test",
      "Free medical consultation",
    ],
    alt: "Promoción de examen completo para hombres con examen de orina, próstata y testosterona por $89 en Clínica Hispana Mangum, Houston",
    altEn:
      "Complete men's exam with urine, prostate and testosterone testing for $89 promotion at Clínica Hispana Mangum, Houston",
  },
];

// Navbar (header): sin "Sin cita".
export const NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

// Footer: incluye "Sin cita" (walk-in).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "walkIn", href: "/walk-in" },
  { key: "contact", href: "/#contacto" },
];

export const SERVICE_CATEGORIES: {
  value: ServiceCategory;
  label: string;
  labelEn: string;
}[] = [
  { value: "medicina-general", label: "Medicina general", labelEn: "General medicine" },
  { value: "salud-mujer", label: "Salud de la mujer", labelEn: "Women's health" },
  { value: "examenes", label: "Exámenes y certificados", labelEn: "Exams & certificates" },
  { value: "laboratorio", label: "Laboratorio y pruebas", labelEn: "Lab & testing" },
  { value: "tratamientos", label: "Tratamientos", labelEn: "Treatments" },
];

// Lista de promociones vigentes con precio para el texto de un servicio. Los
// precios salen solo de PROMOTIONS (flyers), así no se desfasan.
function promoList(slugs: string[], en = false): string {
  return PROMOTIONS.filter((p) => slugs.includes(p.slug) && p.price)
    .map(
      (p) =>
        `- **${en ? p.titleEn : p.title}: ${p.price}.** ${(en ? p.includesEn : p.includes).join(", ")}.`,
    )
    .join("\n");
}

// Bloques de copy reutilizados (marca Mangum + Houston).
const WHY_ES = `## ¿Por qué elegir Clínica Hispana Mangum?

Somos una clínica hispana y latina que te atiende 100% en español, sin cita previa y sin necesidad de seguro. Encuéntranos como tu centro médico cerca de ti en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.`;

const WHY_EN = `## Why choose Clínica Hispana Mangum?

We are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment or insurance needed. Find your medical center near you at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.`;

const PAYMENT_ES = `## Formas de pago

No necesitas seguro para atenderte. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.`;

const PAYMENT_EN = `## Payment

No insurance needed to be seen. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.`;

const AREAS_ES = `## Áreas que servimos

Atendemos con gusto a toda la comunidad hispana de Houston, TX y sus alrededores. Nos encuentras en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sin cita previa y con atención 100% en español.`;

const AREAS_EN = `## Areas we serve

We gladly serve the entire Hispanic community of Houston, TX and surrounding areas. Find us at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, with no appointment needed and care 100% in Spanish.`;

export const SERVICES: Service[] = [
  {
    slug: "condiciones-cronicas",
    order: 1,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes, Hipertensión y Colesterol",
    titleEn: "Diabetes, Hypertension & Cholesterol Care",
    shortDescription: "Exámenes y control de diabetes, presión alta y dislipidemias (colesterol y triglicéridos), con seguimiento cercano.",
    shortDescriptionEn: "Testing and management of diabetes, high blood pressure and dyslipidemia (cholesterol and triglycerides), with close follow-up.",
    description: "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    descriptionEn: "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    keywords: [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston",
    ],
    keywordsEn: [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston",
    ],
    features: [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos",
    ],
    featuresEn: [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan",
    ],
    longDescription: `La diabetes, la presión alta y el colesterol elevado casi nunca duelen al principio, y por eso muchas personas no saben que los tienen hasta que aparece una complicación. En Clínica Hispana Mangum el equipo médico de la clínica te ayuda a medirlos, entenderlos y mantenerlos bajo control con visitas regulares y en español.

## ¿Qué hacemos en tu control?

- **Diagnóstico con laboratorio:** glucosa, A1C, perfil de lípidos y función del riñón.
- **Medición de presión** en cada visita y revisión de tus registros de casa.
- **Ajuste de medicamentos** según tus resultados y cómo te sientes.
- **Plan de alimentación y actividad** que puedas seguir con tu rutina y tu comida de siempre.
- **Revisión de pies y vigilancia de complicaciones** en diabetes.

## ¿Cuáles son las metas habituales?

Para muchos adultos, la Asociación Americana de la Diabetes sugiere una **A1C menor de 7 %** y una **presión menor de 130/80**. Las metas de colesterol dependen de tu riesgo cardiovascular. Tu equipo médico ajusta cada meta a tu edad y tu salud.

## ¿Cada cuánto debo venir?

Mientras se ajusta el tratamiento, cada 1 a 3 meses. Cuando ya estás en meta, cada 3 a 6 meses. Trae tu glucómetro o tu registro de presión para revisarlos juntos.

## Señales para buscar atención pronto

Azúcar por encima de 300 varias veces, presión de 180/120 o más, dolor de pecho, falta de aire o debilidad de un lado del cuerpo. Las últimas tres son una emergencia: llama al 911.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Diabetes, high blood pressure and high cholesterol rarely hurt at first, which is why many people do not know they have them until a complication appears. At Clínica Hispana Mangum the clinic's medical team helps you measure, understand and control them with regular visits in Spanish or English.

## What do we do at your follow-up?

- **Lab-based diagnosis:** glucose, A1C, lipid panel and kidney function.
- **Blood pressure checks** at every visit and review of your home readings.
- **Medication adjustments** based on your results and how you feel.
- **A food and activity plan** you can follow with your routine and usual meals.
- **Foot checks and complication monitoring** for diabetes.

## What are the usual goals?

For many adults, the American Diabetes Association suggests an **A1C below 7%** and **blood pressure below 130/80**. Cholesterol goals depend on your heart risk. Your medical team adjusts each goal to your age and health.

## How often should I come?

While treatment is being adjusted, every 1 to 3 months. Once you are at goal, every 3 to 6 months. Bring your glucose meter or blood pressure log so we can review them together.

## Signs to get care soon

Blood sugar above 300 several times, blood pressure of 180/120 or higher, chest pain, shortness of breath or weakness on one side of the body. The last three are emergencies: call 911.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "tiroides",
    order: 2,
    category: "medicina-general",
    icon: "Thermometer",
    title: "Exámenes y Tratamiento de la Tiroides",
    titleEn: "Thyroid Testing & Treatment",
    shortDescription: "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn: "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description: "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    descriptionEn: "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    keywords: [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston",
    ],
    keywordsEn: [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston",
    ],
    features: [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español",
    ],
    featuresEn: [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish",
    ],
    longDescription: `La tiroides es una glándula pequeña en el cuello que controla el ritmo con que el cuerpo usa la energía. Cuando trabaja lento o acelerado, los síntomas se confunden con cansancio, estrés o cambios de peso. Un análisis de sangre sencillo aclara la duda.

## ¿Qué síntomas pueden venir de la tiroides?

| Tiroides lenta (hipotiroidismo) | Tiroides acelerada (hipertiroidismo) |
|---|---|
| Cansancio y sueño | Nerviosismo o ansiedad |
| Aumento de peso | Pérdida de peso sin dieta |
| Frío, piel seca, caída de cabello | Calor, sudor, temblor |
| Estreñimiento | Palpitaciones |
| Reglas abundantes | Reglas escasas |

## ¿Cómo se diagnostica?

Con la **TSH**, la prueba principal. Si sale alterada, se agregan **T4 libre** y a veces **T3**. En algunos casos se pide un ultrasonido del cuello para revisar nódulos.

## ¿Cómo es el tratamiento?

- **Hipotiroidismo:** una pastilla diaria de hormona tiroidea. Se toma en ayunas, con agua, 30 a 60 minutos antes del desayuno y lejos del calcio o el hierro.
- **Hipertiroidismo:** medicamentos para bajar la actividad de la glándula y controlar las palpitaciones; algunos casos necesitan especialista.
- **Seguimiento:** se repite la TSH unas 6 a 8 semanas después de cada ajuste de dosis.

## ¿Quién debería revisarse?

Personas con síntomas, mujeres embarazadas o que buscan embarazo con antecedentes, quienes tienen familiares con problemas de tiroides y pacientes con diabetes tipo 1 u otras enfermedades autoinmunes.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `The thyroid is a small gland in the neck that controls how fast the body uses energy. When it runs slow or fast, the symptoms are mistaken for fatigue, stress or weight changes. A simple blood test clears up the doubt.

## Which symptoms can come from the thyroid?

| Slow thyroid (hypothyroidism) | Overactive thyroid (hyperthyroidism) |
|---|---|
| Fatigue and sleepiness | Nervousness or anxiety |
| Weight gain | Weight loss without dieting |
| Feeling cold, dry skin, hair loss | Feeling hot, sweating, tremor |
| Constipation | Palpitations |
| Heavy periods | Light periods |

## How is it diagnosed?

With **TSH**, the main test. If it is abnormal, **free T4** and sometimes **T3** are added. In some cases a neck ultrasound is ordered to check for nodules.

## What is the treatment?

- **Hypothyroidism:** a daily thyroid hormone pill. It is taken on an empty stomach with water, 30 to 60 minutes before breakfast and away from calcium or iron.
- **Hyperthyroidism:** medications to lower the gland's activity and control palpitations; some cases need a specialist.
- **Follow-up:** TSH is repeated about 6 to 8 weeks after each dose change.

## Who should get checked?

People with symptoms, pregnant women or those planning pregnancy with a history of thyroid problems, people with relatives who have thyroid disease and patients with type 1 diabetes or other autoimmune conditions.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "alergias",
    order: 3,
    category: "medicina-general",
    icon: "Leaf",
    title: "Exámenes y Tratamiento de Alergias",
    titleEn: "Allergy Testing & Treatment",
    shortDescription: "Evaluación y tratamiento de alergias estacionales, respiratorias y de la piel, con atención en español.",
    shortDescriptionEn: "Evaluation and treatment of seasonal, respiratory and skin allergies, with care in Spanish.",
    description: "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    descriptionEn: "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    keywords: [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston",
    ],
    keywordsEn: [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston",
    ],
    features: [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish",
    ],
    longDescription: `Estornudos todas las mañanas, ojos que pican en primavera o ronchas después de comer algo: las alergias son muy comunes en Houston, donde el polen, el moho y la humedad están presentes casi todo el año. Con un buen diagnóstico se pueden controlar y dejar de afectar tu sueño y tu trabajo.

## ¿Qué alergias atendemos?

- **Rinitis alérgica:** estornudos, nariz tapada o que escurre, comezón en ojos y garganta.
- **Alergias de la piel:** ronchas (urticaria), comezón y eccema.
- **Reacciones a picaduras o alimentos** leves, con plan para evitarlas.
- **Tos o silbido en el pecho** relacionados con alergia, para descartar asma.

## ¿Cómo sabemos qué te causa la alergia?

El equipo médico revisa cuándo aparecen los síntomas, dónde estás y qué cambió en tu rutina. Muchas veces el patrón basta para identificar el desencadenante. Si hace falta confirmar, se indican estudios o la referencia a un alergólogo.

## ¿Cómo se tratan?

- **Antihistamínicos** que no dan sueño y **esteroides nasales**, que funcionan mejor si se usan todos los días en temporada.
- **Cremas o medicamentos** para ronchas y comezón.
- **Medidas en casa:** lavar la ropa de cama con agua caliente, cerrar ventanas en días de mucho polen y controlar la humedad para evitar moho.

## ¿Cuándo es una emergencia?

Si hay **hinchazón de labios, lengua o garganta, dificultad para respirar o mareo** después de un alimento, medicamento o picadura, llama al 911 de inmediato: puede ser anafilaxia.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Sneezing every morning, itchy eyes in spring or hives after eating something: allergies are very common in Houston, where pollen, mold and humidity are around most of the year. With a good diagnosis they can be controlled so they stop affecting your sleep and work.

## Which allergies do we treat?

- **Allergic rhinitis:** sneezing, stuffy or runny nose, itchy eyes and throat.
- **Skin allergies:** hives, itching and eczema.
- **Mild reactions to insect stings or foods**, with a plan to avoid them.
- **Cough or wheezing** related to allergies, to rule out asthma.

## How do we find what causes it?

The medical team reviews when symptoms appear, where you are and what changed in your routine. Often the pattern is enough to identify the trigger. If confirmation is needed, tests or a referral to an allergist are arranged.

## How are allergies treated?

- **Non-drowsy antihistamines** and **nasal steroids**, which work best when used every day during the season.
- **Creams or medications** for hives and itching.
- **Home measures:** wash bedding in hot water, close windows on high-pollen days and control humidity to prevent mold.

## When is it an emergency?

If there is **swelling of the lips, tongue or throat, trouble breathing or dizziness** after a food, medication or sting, call 911 right away: it may be anaphylaxis.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "enfermedades-respiratorias",
    order: 4,
    category: "medicina-general",
    icon: "Wind",
    title: "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    titleEn: "Flu & COVID Testing and Respiratory Illness Care",
    shortDescription: "Pruebas de detección de influenza (flu) y COVID, y tratamiento de gripe, tos y enfermedades respiratorias.",
    shortDescriptionEn: "Influenza (flu) and COVID detection testing, plus treatment of flu, cough and respiratory illnesses.",
    description: "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    descriptionEn: "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    keywords: [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston",
    ],
    keywordsEn: [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston",
    ],
    features: [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish",
    ],
    longDescription: `Fiebre, dolor de cuerpo, tos y garganta irritada pueden ser gripe, COVID-19, una infección de garganta o un resfriado común. Se parecen mucho, pero no se tratan igual. En Clínica Hispana Mangum hacemos pruebas rápidas en la misma visita, sin cita, para saber qué tienes y empezar el tratamiento correcto.

## ¿Qué pruebas hacemos?

- **Prueba rápida de influenza (flu).**
- **Prueba rápida de COVID-19.**
- **Evaluación de garganta, oídos y pulmones**, y prueba de estreptococo cuando hay sospecha.

## ¿Por qué conviene venir pronto?

Los antivirales contra la influenza funcionan mejor si se empiezan en las **primeras 48 horas** de síntomas, sobre todo en personas mayores de 65 años, embarazadas, niños pequeños o con diabetes, asma o problemas del corazón.

## ¿Qué tratamiento recibes?

Depende del resultado: antiviral para la gripe cuando está indicado, alivio de fiebre, dolor y tos, y antibiótico **solo si hay infección bacteriana**. Los antibióticos no sirven contra gripe, COVID ni resfriado.

## Cuidados en casa

- Descansa y toma mucho líquido.
- Quédate en casa hasta pasar **24 horas sin fiebre** sin usar medicamento para bajarla.
- Cúbrete al toser y lávate las manos seguido.

## Señales de alarma

Dificultad para respirar, dolor o presión en el pecho, labios morados, confusión, fiebre que regresa después de mejorar, o en niños, respiración rápida y no querer tomar líquidos. En esos casos ve a urgencias o llama al 911.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Fever, body aches, cough and a sore throat can be flu, COVID-19, a throat infection or a common cold. They look alike, but they are not treated the same way. At Clínica Hispana Mangum we run rapid tests during the same visit, no appointment needed, to find out what you have and start the right treatment.

## Which tests do we do?

- **Rapid influenza (flu) test.**
- **Rapid COVID-19 test.**
- **Throat, ear and lung exam**, plus a strep test when suspected.

## Why come in early?

Flu antivirals work best when started within the **first 48 hours** of symptoms, especially for people over 65, pregnant women, young children or people with diabetes, asthma or heart disease.

## What treatment do you get?

It depends on the result: an antiviral for flu when indicated, relief for fever, pain and cough, and antibiotics **only if there is a bacterial infection**. Antibiotics do not work against flu, COVID or colds.

## Care at home

- Rest and drink plenty of fluids.
- Stay home until you are **fever-free for 24 hours** without fever-reducing medicine.
- Cover your cough and wash your hands often.

## Warning signs

Trouble breathing, chest pain or pressure, bluish lips, confusion, fever that returns after improving, or in children, fast breathing and refusing fluids. In those cases go to the emergency room or call 911.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "examen-fisico-escolar",
    order: 5,
    category: "examenes",
    icon: "ClipboardList",
    title: "Chequeos Físicos Escolares y Deportivos",
    titleEn: "School & Sports Physical Exams",
    metaTitle: "Examen Físico Escolar y Deportivo en Houston, Sin Cita",
    metaTitleEn: "School & Sports Physicals in Houston · Walk-in, Same Day",
    shortDescription: "Exámenes físicos para la escuela y los deportes, rápidos y con los formularios completados.",
    shortDescriptionEn: "Physical exams for school and sports, fast and with the forms completed.",
    description: "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    descriptionEn: "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    keywords: [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston",
    ],
    keywordsEn: [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston",
    ],
    features: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español",
    ],
    featuresEn: [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish",
    ],
    longDescription: `Muchas escuelas, ligas y campamentos piden un examen físico antes de empezar el año o la temporada. En Clínica Hispana Mangum lo hacemos sin cita y llenamos el formulario durante la visita, para que tu hijo o hija pueda entrar a clases o al equipo sin retrasos.

## ¿Qué revisa el examen?

- **Historia de salud:** enfermedades, cirugías, alergias, medicamentos y antecedentes familiares del corazón.
- **Signos vitales:** peso, estatura, presión arterial y pulso.
- **Vista y oído.**
- **Examen físico:** corazón, pulmones, abdomen, piel, columna y articulaciones.
- **Revisión del registro de vacunas** según lo que pida la escuela.

## Examen deportivo: el corazón es lo más importante

Antes de un deporte se pregunta si el atleta se ha **desmayado o ha tenido dolor de pecho al hacer ejercicio**, y si algún familiar murió de forma repentina antes de los 50 años. Si hay alguna de esas señales, se recomienda estudiar el corazón antes de competir, por ejemplo con un electrocardiograma.

## ¿Qué debo traer?

1. El **formulario de la escuela o la liga**; cada una usa el suyo.
2. La **cartilla de vacunas** del menor.
3. Lentes, si los usa.
4. La lista de medicamentos, incluido el inhalador si tiene asma.

## ¿Quién puede traer al menor?

Los menores de edad deben venir con su padre, madre o tutor legal, quien firma la autorización y responde la historia de salud.

## ¿Cuándo hacerlo?

Con **2 a 4 semanas** de anticipación a la fecha límite, para tener tiempo si falta alguna vacuna o un estudio.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Many schools, leagues and camps require a physical before the school year or season starts. At Clínica Hispana Mangum we do it with no appointment and fill out the form during the visit, so your child can start classes or join the team without delays.

## What does the exam check?

- **Health history:** illnesses, surgeries, allergies, medications and family history of heart problems.
- **Vital signs:** weight, height, blood pressure and pulse.
- **Vision and hearing.**
- **Physical exam:** heart, lungs, abdomen, skin, spine and joints.
- **Vaccination record review** based on what the school requires.

## Sports physicals: the heart comes first

Before a sport, we ask whether the athlete has **fainted or had chest pain during exercise**, and whether a relative died suddenly before age 50. If any of those signs are present, a heart evaluation such as an electrocardiogram is recommended before competing.

## What should I bring?

1. The **school or league form**; each one uses its own.
2. The child's **vaccination record**.
3. Glasses, if they wear them.
4. A list of medications, including an inhaler if they have asthma.

## Who can bring the child?

Minors must come with a parent or legal guardian, who signs the consent and answers the health history.

## When should we do it?

**2 to 4 weeks** before the deadline, so there is time if a vaccine or test is missing.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "ginecologia",
    order: 6,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Atención Ginecológica: Papanicolaou y Cultivos",
    titleEn: "Gynecology Care: Pap Smear & Cultures",
    shortDescription: "Papanicolaou, cultivos vaginales y tratamiento de infecciones vaginales, con privacidad y en español.",
    shortDescriptionEn: "Pap smear, vaginal cultures and treatment of vaginal infections, with privacy and in Spanish.",
    description: "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    descriptionEn: "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    keywords: [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston",
    ],
    keywordsEn: [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston",
    ],
    features: [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español",
    ],
    featuresEn: [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish",
    ],
    longDescription: `Muchas mujeres posponen su revisión ginecológica por falta de tiempo, por pena o porque no encuentran quién las atienda en su idioma. En Clínica Hispana Mangum el equipo médico de la clínica te atiende en un consultorio privado, sin cita y en español, y te explica cada paso antes de empezar.

## ¿Qué atendemos en la consulta de ginecología?

- **Papanicolaou y revisión ginecológica** para detectar a tiempo cambios en el cuello del útero.
- **Cultivo vaginal** para saber qué causa una infección y darte el tratamiento correcto.
- **Infecciones vaginales:** hongos, vaginosis bacteriana y otras causas de flujo, comezón o mal olor.
- **Molestias al orinar o dolor pélvico**, con estudios de orina cuando hacen falta.
- **Referencia a especialista** si el resultado lo necesita.

## ¿Cada cuánto debo hacerme el Papanicolaou?

Según el Grupo de Trabajo de Servicios Preventivos de EE. UU. (USPSTF):

- **De 21 a 29 años:** cada 3 años.
- **De 30 a 65 años:** cada 3 años con Papanicolaou, o cada 5 años si se combina con la prueba del VPH.

Si has tenido resultados anormales, el equipo médico puede pedirte controles más seguidos.

## ¿Cómo me preparo?

1. Programa tu visita **fuera de los días de tu periodo**.
2. Durante los **2 días anteriores** evita relaciones sexuales, duchas vaginales, óvulos y cremas vaginales.
3. Anota la fecha de tu última regla y los medicamentos que tomas.

## ¿Cuándo no debo esperar?

Acude pronto si tienes flujo con mal olor o de color distinto, comezón o ardor que no se quita, sangrado entre reglas o después de las relaciones, o dolor en la parte baja del abdomen. Si el dolor es muy fuerte o hay fiebre alta, ve a emergencias.

## Promociones para la mujer

${promoList(["chequeo-mujer", "chequeo-mujer-ultrasonido", "salud-intima-femenina"])}

No necesitas seguro médico y aceptamos efectivo, tarjetas y Apple Pay. Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, todos los días de 9 AM a 9 PM. También hacemos [prueba de embarazo](/services/prueba-embarazo), [ultrasonido](/services/ultrasonido) y [métodos anticonceptivos](/services/anticonceptivos).`,
    longDescriptionEn: `Many women put off their gynecology checkup because of time, embarrassment or not finding care in their language. At Clínica Hispana Mangum the clinic's medical team sees you in a private exam room, no appointment needed, in Spanish or English, and explains each step before starting.

## What does the gynecology visit cover?

- **Pap smear and gynecological exam** to catch cervical changes early.
- **Vaginal culture** to find what is causing an infection and give you the right treatment.
- **Vaginal infections:** yeast, bacterial vaginosis and other causes of discharge, itching or odor.
- **Urinary discomfort or pelvic pain**, with urine tests when needed.
- **Referral to a specialist** if a result calls for it.

## How often should I get a Pap smear?

According to the U.S. Preventive Services Task Force (USPSTF):

- **Ages 21 to 29:** every 3 years.
- **Ages 30 to 65:** every 3 years with a Pap smear, or every 5 years when combined with HPV testing.

If you have had abnormal results, the medical team may ask you to come more often.

## How do I prepare?

1. Schedule your visit **when you are not on your period**.
2. For **2 days before**, avoid sex, douching, vaginal suppositories and creams.
3. Note the date of your last period and the medications you take.

## When should I not wait?

Come in soon if you have discharge with an odor or a different color, itching or burning that does not go away, bleeding between periods or after sex, or lower abdominal pain. If the pain is severe or you have a high fever, go to the emergency room.

## Women's health promotions

${promoList(["chequeo-mujer", "chequeo-mujer-ultrasonido", "salud-intima-femenina"], true)}

You do not need health insurance, and we accept cash, cards and Apple Pay. We are at 2912 Mangum Rd, Suite A, in northwest Houston, every day from 9 AM to 9 PM. We also offer [pregnancy testing](/en/services/prueba-embarazo), [ultrasound](/en/services/ultrasonido) and [birth control](/en/services/anticonceptivos).`,
  },
  {
    slug: "prueba-embarazo",
    order: 7,
    category: "salud-mujer",
    icon: "Baby",
    title: "Examen y Diagnóstico de Embarazo",
    titleEn: "Pregnancy Testing & Confirmation",
    shortDescription: "Pruebas de embarazo confiables y orientación sobre tus siguientes pasos, en español.",
    shortDescriptionEn: "Reliable pregnancy tests and guidance on your next steps, in Spanish.",
    description: "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    descriptionEn: "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    keywords: [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston",
    ],
    keywordsEn: [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston",
    ],
    features: [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español",
    ],
    featuresEn: [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish",
    ],
    longDescription: `Un retraso en la regla trae muchas preguntas. Confirmar el embarazo con personal de salud te da un resultado claro y, sobre todo, te orienta sobre qué hacer después, tanto si lo buscabas como si no. En Clínica Hispana Mangum la prueba se hace sin cita y con total privacidad.

## ¿Cuándo hacer la prueba?

- **Prueba en orina:** es confiable a partir del **primer día de retraso** de la regla. Si sale negativa y la regla no llega, repítela en una semana.
- **Prueba en sangre:** detecta la hormona del embarazo antes y en menor cantidad; útil cuando hay dudas o para seguimiento.

## ¿Qué pasa si sale positiva?

1. El equipo médico confirma el resultado y calcula las semanas según tu última regla.
2. Revisamos tus medicamentos y si ya tomas **ácido fólico** (400 microgramos diarios).
3. Te orientamos para iniciar el **control prenatal** cuanto antes; si hace falta, con un ultrasonido y la referencia a obstetricia.

## ¿Y si sale negativa?

Si la regla sigue sin llegar, pueden influir el estrés, cambios de peso, la tiroides o el síndrome de ovario poliquístico. Vale la pena una consulta para revisar la causa.

## Señales de alarma al inicio del embarazo

**Dolor fuerte de un solo lado del abdomen, sangrado abundante, mareo o desmayo** pueden indicar un embarazo fuera del útero. Es una emergencia: ve a urgencias o llama al 911.

## Privacidad

Tu resultado es confidencial y solo se comparte contigo. Puedes venir sola o acompañada.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `A late period brings lots of questions. Confirming a pregnancy with health staff gives you a clear result and, above all, guidance on what comes next, whether or not you were planning it. At Clínica Hispana Mangum the test is done with no appointment and full privacy.

## When should I test?

- **Urine test:** reliable from the **first day of a missed period**. If it is negative and your period still does not come, repeat it in a week.
- **Blood test:** detects the pregnancy hormone earlier and at lower levels; useful when in doubt or for follow-up.

## What if it is positive?

1. The medical team confirms the result and estimates the weeks from your last period.
2. We review your medications and whether you already take **folic acid** (400 micrograms a day).
3. We guide you to start **prenatal care** as soon as possible; if needed, with an ultrasound and a referral to obstetrics.

## What if it is negative?

If your period still does not come, stress, weight changes, thyroid problems or polycystic ovary syndrome may be involved. A visit to look for the cause is worthwhile.

## Warning signs in early pregnancy

**Severe pain on one side of the abdomen, heavy bleeding, dizziness or fainting** can mean a pregnancy outside the uterus. It is an emergency: go to the emergency room or call 911.

## Privacy

Your result is confidential and shared only with you. You can come alone or with someone.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "anticonceptivos",
    order: 8,
    category: "salud-mujer",
    icon: "Tablets",
    title: "Tratamientos Anticonceptivos",
    titleEn: "Contraceptive Methods",
    shortDescription: "Orientación y métodos anticonceptivos (pastillas, inyección y más) para decidir con información, en español.",
    shortDescriptionEn: "Guidance and contraceptive methods (pills, injection and more) to decide with clear information, in Spanish.",
    description: "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    descriptionEn: "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    keywords: [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston",
    ],
    keywordsEn: [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston",
    ],
    features: [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish",
    ],
    longDescription: `Elegir un método anticonceptivo depende de tu salud, tus planes y tu estilo de vida. No existe uno "mejor" para todas. En Clínica Hispana Mangum el equipo médico de la clínica te explica las opciones en español, revisa tu salud y te ayuda a empezar el método que mejor te funcione.

## ¿Qué métodos ofrecemos en la clínica?

- **Pastillas anticonceptivas:** una al día, a la misma hora.
- **Inyección anticonceptiva:** una aplicación cada 3 meses.
- **Orientación** sobre otros métodos de larga duración, como el implante o el DIU, con referencia si eliges uno de ellos.

## ¿Qué tan efectivos son?

Con el uso real de todos los días, según los CDC:

| Método | Embarazos por cada 100 mujeres en un año |
|---|---|
| Implante o DIU | Menos de 1 |
| Inyección | Alrededor de 4 |
| Pastillas | Alrededor de 7 |
| Condón masculino | Alrededor de 13 |

La diferencia está en el olvido: la inyección no depende de acordarte cada día.

## Antes de empezar

El equipo médico revisa tu presión, si fumas, si tienes migraña con aura o antecedentes de coágulos, porque algunas pastillas no son recomendables en esos casos.

## Cosas que conviene saber

- Las pastillas y la inyección **no protegen contra infecciones de transmisión sexual**; para eso está el condón.
- Si tuviste relaciones sin protección, la **pastilla de emergencia** de venta libre funciona mejor mientras antes se tome, idealmente en las primeras 72 horas.
- Si olvidas pastillas o te pasas de la fecha de la inyección, usa condón y pregúntanos qué hacer.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Choosing birth control depends on your health, your plans and your lifestyle. There is no single "best" method for everyone. At Clínica Hispana Mangum the clinic's medical team explains the options in Spanish or English, reviews your health and helps you start the method that works best for you.

## Which methods do we offer at the clinic?

- **Birth control pills:** one a day, at the same time.
- **Birth control shot:** one injection every 3 months.
- **Guidance** on long-acting methods such as the implant or IUD, with a referral if you choose one.

## How effective are they?

With typical everyday use, according to the CDC:

| Method | Pregnancies per 100 women in a year |
|---|---|
| Implant or IUD | Fewer than 1 |
| Shot | About 4 |
| Pills | About 7 |
| Male condom | About 13 |

The difference is forgetting: the shot does not depend on remembering every day.

## Before you start

The medical team checks your blood pressure and asks whether you smoke, have migraines with aura or a history of blood clots, because some pills are not recommended in those cases.

## Good to know

- Pills and the shot **do not protect against sexually transmitted infections**; condoms do.
- If you had unprotected sex, over-the-counter **emergency contraception** works best the sooner it is taken, ideally within 72 hours.
- If you miss pills or are late for your shot, use condoms and ask us what to do.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "extraccion-implantes",
    order: 9,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Subdérmicos",
    titleEn: "Subdermal Implant Removal",
    shortDescription: "Retiro seguro de implantes anticonceptivos subdérmicos del brazo, por personal capacitado.",
    shortDescriptionEn: "Safe removal of subdermal arm contraceptive implants by trained staff.",
    description: "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    descriptionEn: "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    keywords: [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston",
    ],
    keywordsEn: [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained",
    ],
    longDescription: `El implante anticonceptivo es una varilla pequeña y flexible que se coloca debajo de la piel del brazo. Cuando se cumple su tiempo, cuando buscas un embarazo o si te causa molestias, se puede retirar con un procedimiento corto en la clínica.

## ¿Cuándo conviene retirarlo?

- Al cumplirse el tiempo indicado en tu tarjeta del implante; en EE. UU. la etiqueta aprobada es de hasta **3 años**.
- Si quieres **quedar embarazada**.
- Si tienes efectos que no toleras, como sangrado irregular que no mejora.

## ¿Cómo es el procedimiento?

1. **Localización:** el equipo médico palpa el implante en el brazo.
2. **Anestesia local:** se adormece una zona pequeña de la piel.
3. **Extracción:** a través de un corte de pocos milímetros se retira la varilla completa.
4. **Cierre:** se coloca una cinta adhesiva y un vendaje de presión.

La extracción suele tomar pocos minutos. Si el implante **no se siente al tacto**, se necesita un estudio de imagen para ubicarlo antes de intentar retirarlo.

## Cuidados después

- Deja el vendaje de presión **24 horas** y la cinta pequeña unos días.
- Es normal un pequeño moretón o sensibilidad.
- Consulta si aparece enrojecimiento que crece, pus o fiebre.

## ¿Y después del implante?

La fertilidad regresa rápido después de retirarlo. Si no buscas embarazo, **empieza otro método el mismo día** para no quedar sin protección; el equipo médico te orienta sobre pastillas, inyección u otras opciones.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `The birth control implant is a small, flexible rod placed under the skin of the arm. When its time is up, when you want to get pregnant or if it causes problems, it can be removed with a short procedure at the clinic.

## When should it be removed?

- When the time on your implant card is reached; in the U.S. the approved label is up to **3 years**.
- If you want to **get pregnant**.
- If you have side effects you cannot tolerate, such as irregular bleeding that does not improve.

## What is the procedure like?

1. **Locating:** the medical team feels for the implant in the arm.
2. **Local anesthesia:** a small area of skin is numbed.
3. **Removal:** the whole rod is taken out through a cut of a few millimeters.
4. **Closing:** an adhesive strip and a pressure bandage are applied.

Removal usually takes a few minutes. If the implant **cannot be felt**, an imaging study is needed to locate it before trying to remove it.

## Aftercare

- Keep the pressure bandage on for **24 hours** and the small strip for a few days.
- A small bruise or tenderness is normal.
- Get checked if redness spreads, there is pus or you have a fever.

## And after the implant?

Fertility returns quickly after removal. If you do not want to get pregnant, **start another method the same day** so you are not left unprotected; the medical team guides you on pills, the shot or other options.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "salud-hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Exámenes del Hombre: PSA y Perfil Hormonal",
    titleEn: "Men's Health Exams: PSA & Hormone Panel",
    shortDescription: "Exámenes de salud del hombre: antígeno prostático (PSA), perfil hormonal y chequeo general, en español.",
    shortDescriptionEn: "Men's health exams: prostate antigen (PSA), hormone panel and general checkup, in Spanish.",
    description: "Exámenes del hombre en Houston, TX: PSA y perfil hormonal. Laboratorio y atención en español, con precios accesibles.",
    descriptionEn: "Men's health exams in Houston, TX: PSA and hormone panel. Lab work and care in Spanish, with affordable pricing.",
    keywords: [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "perfil hormonal hombre houston",
    ],
    keywordsEn: [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "male hormone panel houston",
    ],
    features: [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish",
    ],
    longDescription: `Muchos hombres solo van a consulta cuando algo duele. El problema es que la próstata, la presión o el azúcar pueden cambiar durante años sin dar síntomas. En Clínica Hispana Mangum hacemos tus exámenes sin cita y el equipo médico de la clínica te explica los resultados en español, claro y sin rodeos.

## ¿Qué incluye el examen del hombre?

- **Antígeno prostático específico (PSA):** un análisis de sangre que ayuda a vigilar la próstata.
- **Perfil hormonal:** incluye el nivel de testosterona cuando hay cansancio, poca energía o cambios de ánimo.
- **Chequeo general:** presión arterial, peso y signos vitales.
- **Análisis de sangre y orina** según tu edad y tus síntomas.
- **Referencia al urólogo** si un resultado lo requiere.

## ¿A qué edad conviene hacerse el PSA?

El USPSTF recomienda que los hombres de **55 a 69 años** decidan con su equipo médico si hacerse el PSA, porque tiene beneficios y también puede dar falsas alarmas. La Sociedad Americana contra el Cáncer sugiere empezar la conversación **a los 45 años** si eres afroamericano o tu padre o un hermano tuvo cáncer de próstata antes de los 65, y **a los 40** si fueron varios familiares.

## ¿Qué señales no debo ignorar?

- Chorro de orina débil o que se corta.
- Levantarte varias veces en la noche para orinar.
- Ardor, dolor o sangre al orinar.
- Cansancio que no mejora con descanso.

## ¿Cómo me preparo?

1. Evita el ejercicio intenso, sobre todo andar en bicicleta, las 48 horas antes del PSA.
2. Si te hacen el perfil hormonal, ven en la mañana: los niveles son más altos a primera hora.
3. Trae la lista de medicamentos y suplementos que tomas.

## Promociones para el hombre

${promoList(["examen-hombres", "perfil-hormonal-hombres"])}

No necesitas seguro y aceptamos efectivo, tarjetas y Apple Pay. Estamos en 2912 Mangum Rd, Suite A, Houston, todos los días de 9 AM a 9 PM. Para saber qué chequeos tocan según tu edad, lee nuestra [guía de salud del hombre](/blog/salud-hombre-houston-chequeos-preventivos).`,
    longDescriptionEn: `Many men only see a doctor when something hurts. The problem is that the prostate, blood pressure or blood sugar can change for years without symptoms. At Clínica Hispana Mangum we do your tests with no appointment, and the clinic's medical team explains the results in Spanish or English, clearly and directly.

## What does the men's exam include?

- **Prostate-specific antigen (PSA):** a blood test that helps monitor the prostate.
- **Hormone panel:** includes the testosterone level when there is fatigue, low energy or mood changes.
- **General checkup:** blood pressure, weight and vital signs.
- **Blood and urine tests** based on your age and symptoms.
- **Referral to a urologist** if a result calls for it.

## At what age should I get a PSA test?

The USPSTF recommends that men aged **55 to 69** decide with their medical team whether to get a PSA test, because it has benefits and can also cause false alarms. The American Cancer Society suggests starting the conversation **at 45** if you are African American or your father or a brother had prostate cancer before 65, and **at 40** if several relatives did.

## Which signs should I not ignore?

- A weak urine stream or one that stops and starts.
- Getting up several times at night to urinate.
- Burning, pain or blood when urinating.
- Fatigue that does not improve with rest.

## How do I prepare?

1. Avoid hard exercise, especially cycling, for 48 hours before the PSA test.
2. If you are getting a hormone panel, come in the morning: levels are highest early in the day.
3. Bring a list of the medications and supplements you take.

## Men's health promotions

${promoList(["examen-hombres", "perfil-hormonal-hombres"], true)}

You do not need insurance, and we accept cash, cards and Apple Pay. We are at 2912 Mangum Rd, Suite A, Houston, every day from 9 AM to 9 PM. To see which checkups apply to your age, read our [men's health guide](/en/blog/salud-hombre-houston-chequeos-preventivos).`,
  },
  {
    slug: "examenes-sangre",
    order: 11,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Análisis y Exámenes de Sangre | Laboratorio",
    titleEn: "Blood Tests | Lab",
    shortDescription: "Análisis de sangre completos con resultados rápidos e interpretación en español, sin cita previa.",
    shortDescriptionEn: "Complete blood work with fast results and results explained in Spanish, no appointment needed.",
    description: "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    descriptionEn: "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    keywords: [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston",
    ],
    keywordsEn: [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston",
    ],
    features: [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish",
    ],
    longDescription: `Un análisis de sangre dice mucho más de lo que parece: puede mostrar azúcar alta, anemia, colesterol elevado o problemas de riñón, hígado o tiroides antes de que notes molestias. En Clínica Hispana Mangum tomamos la muestra en la misma visita, sin cita, y el equipo médico de la clínica revisa contigo los resultados en español.

## ¿Qué análisis puedo hacerme?

- **Biometría hemática (CBC):** glóbulos rojos, blancos y plaquetas; ayuda a detectar anemia o infección.
- **Panel metabólico:** glucosa, función del riñón e hígado, sodio y potasio.
- **Hemoglobina A1C:** tu promedio de azúcar de los últimos 2 a 3 meses.
- **Perfil de lípidos:** colesterol total, LDL, HDL y triglicéridos.
- **Tiroides (TSH):** si tu tiroides trabaja lento o acelerado.
- **Vitaminas:** B12 y vitamina D, cuando hay cansancio o se sospecha deficiencia.

Si no sabes cuál necesitas, el equipo médico te orienta según tus síntomas, tu edad y tus antecedentes.

## ¿Tengo que ir en ayunas?

Depende del estudio. La glucosa en ayunas y algunos paneles piden **8 a 12 horas sin comer**; solo puedes tomar agua. La biometría, la A1C y la TSH no necesitan ayuno. Llámanos antes y te decimos exactamente cómo prepararte.

## ¿Cómo es la visita?

1. Llegas sin cita y te registramos.
2. El equipo médico revisa por qué vienes y qué análisis conviene pedir.
3. Tomamos la muestra de sangre del brazo; tarda pocos minutos.
4. Cuando están los resultados, te los explicamos y, si hace falta, empezamos tratamiento o seguimiento.

## ¿Para quién es este servicio?

- Personas que quieren un chequeo aunque se sientan bien.
- Pacientes con diabetes, presión alta, colesterol o tiroides que necesitan control.
- Quien tiene cansancio, sed excesiva, mareos o pérdida de peso sin causa.
- Trámites que piden laboratorio, como algunos exámenes de trabajo.

## ¿Cuánto cuesta?

No necesitas seguro médico. El precio depende de los análisis que se pidan; pregúntanos el costo antes de la toma de muestra. Aceptamos efectivo, tarjetas y Apple Pay.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. Para saber cómo leer glucosa y A1C, lee nuestra [guía de laboratorio](/blog/laboratorio-clinico-houston-analisis-sangre).`,
    longDescriptionEn: `A blood test tells you much more than it seems: it can reveal high blood sugar, anemia, high cholesterol or kidney, liver or thyroid problems before you notice anything. At Clínica Hispana Mangum we draw the sample during the same visit, no appointment needed, and the clinic's medical team goes over the results with you in Spanish or English.

## Which tests can I get?

- **Complete blood count (CBC):** red cells, white cells and platelets; helps detect anemia or infection.
- **Metabolic panel:** glucose, kidney and liver function, sodium and potassium.
- **Hemoglobin A1C:** your average blood sugar over the last 2 to 3 months.
- **Lipid panel:** total cholesterol, LDL, HDL and triglycerides.
- **Thyroid (TSH):** whether your thyroid is slow or overactive.
- **Vitamins:** B12 and vitamin D, when there is fatigue or a suspected deficiency.

If you are not sure which one you need, the medical team guides you based on your symptoms, age and history.

## Do I need to fast?

It depends on the test. Fasting glucose and some panels require **8 to 12 hours without food**; water is fine. The CBC, A1C and TSH do not require fasting. Call us first and we will tell you exactly how to prepare.

## What happens during the visit?

1. You walk in and we register you.
2. The medical team reviews why you came and which tests make sense.
3. We draw blood from your arm; it takes a few minutes.
4. When results are ready, we explain them and, if needed, start treatment or follow-up.

## Who is this service for?

- People who want a checkup even if they feel fine.
- Patients with diabetes, high blood pressure, cholesterol or thyroid disease who need monitoring.
- Anyone with fatigue, excessive thirst, dizziness or unexplained weight loss.
- Paperwork that requires lab results, such as some work exams.

## How much does it cost?

You do not need health insurance. The price depends on the tests ordered; ask us for the cost before the blood draw. We accept cash, cards and Apple Pay.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. To learn how to read glucose and A1C, see our [lab guide](/en/blog/laboratorio-clinico-houston-analisis-sangre).`,
  },
  {
    slug: "infecciones-urinarias",
    order: 12,
    category: "tratamientos",
    icon: "Droplet",
    title: "Examen de Orina y Tratamiento de Infecciones Urinarias",
    titleEn: "Urinalysis & Urinary Infection Treatment",
    shortDescription: "Examen de orina y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn: "Urinalysis and same-day urinary infection treatment, in Spanish.",
    description: "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    descriptionEn: "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    keywords: [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston",
    ],
    keywordsEn: [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston",
    ],
    features: [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish",
    ],
    longDescription: `Ardor al orinar, ganas de ir al baño a cada rato y sentir que no terminas de vaciar la vejiga son las señales típicas de una infección urinaria. Es muy común, sobre todo en mujeres, y se trata bien si se atiende a tiempo. En Clínica Hispana Mangum hacemos el examen de orina en la visita y, si hay infección, empezamos el tratamiento ese mismo día.

## ¿Qué síntomas tiene?

- Ardor o dolor al orinar.
- Necesidad urgente y frecuente de orinar, aunque salga poco.
- Orina turbia, con mal olor o con sangre.
- Presión o dolor en la parte baja del abdomen.

## ¿Cómo se diagnostica?

Con un **examen general de orina** que busca glóbulos blancos, bacterias y sangre. Si las infecciones se repiten, no mejoran con el tratamiento o estás embarazada, se envía un **cultivo** para saber qué bacteria es y qué antibiótico funciona.

## ¿Cuándo es más serio?

Busca atención el mismo día si hay **fiebre, escalofríos, dolor en la espalda o en un costado, náuseas o vómito**: pueden indicar que la infección llegó al riñón. En hombres, embarazadas, personas con diabetes o niños, toda infección urinaria merece revisión.

## Cómo evitar que regrese

- Toma suficiente agua durante el día.
- No aguantes las ganas de orinar.
- Orina después de las relaciones sexuales.
- Termina el antibiótico completo aunque te sientas mejor.

## Cómo tomar la muestra

Lávate las manos, deja salir el primer chorro al inodoro y recoge la orina de la mitad en el recipiente limpio que te damos.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Burning when you urinate, needing the bathroom all the time and feeling that your bladder never empties are the typical signs of a urinary tract infection. It is very common, especially in women, and it is easily treated when caught early. At Clínica Hispana Mangum we run the urine test during the visit and, if there is an infection, start treatment that same day.

## What are the symptoms?

- Burning or pain when urinating.
- Urgent, frequent need to urinate, even if little comes out.
- Cloudy, bad-smelling or bloody urine.
- Pressure or pain in the lower abdomen.

## How is it diagnosed?

With a **urinalysis** that looks for white blood cells, bacteria and blood. If infections keep coming back, do not improve with treatment or you are pregnant, a **culture** is sent to identify the bacteria and which antibiotic works.

## When is it more serious?

Get care the same day if there is **fever, chills, back or side pain, nausea or vomiting**: the infection may have reached the kidney. In men, pregnant women, people with diabetes or children, every urinary infection deserves an exam.

## How to keep it from coming back

- Drink enough water during the day.
- Do not hold your urine.
- Urinate after sex.
- Finish the whole antibiotic even if you feel better.

## How to collect the sample

Wash your hands, let the first stream go into the toilet and collect the midstream urine in the clean container we give you.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "examen-heces",
    order: 13,
    category: "laboratorio",
    icon: "TestTubes",
    title: "Exámenes de Heces Fecales",
    titleEn: "Stool Tests",
    shortDescription: "Análisis de heces fecales para detectar infecciones y problemas digestivos, en español.",
    shortDescriptionEn: "Stool analysis to detect infections and digestive problems, in Spanish.",
    description: "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    descriptionEn: "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    keywords: [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston",
    ],
    keywordsEn: [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston",
    ],
    features: [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish",
    ],
    longDescription: `Diarrea que no se quita, dolor de estómago, gases o sangre en las heces son molestias incómodas de contar, pero importantes de revisar. Un examen de heces ayuda a encontrar parásitos, infecciones o sangrado oculto. En Clínica Hispana Mangum te damos el recipiente y las instrucciones para tomar la muestra en casa.

## ¿Qué puede detectar?

- **Parásitos** como giardia o amibas, frecuentes después de viajes o por agua o alimentos contaminados.
- **Bacterias** que causan diarrea infecciosa.
- **Sangre oculta**, que no se ve a simple vista y puede venir de hemorroides, úlceras o pólipos del colon.

## ¿Cuándo conviene hacerlo?

- Diarrea de más de **3 días**, o con fiebre o moco.
- Dolor abdominal o gases que se repiten.
- Pérdida de peso sin causa o cansancio con anemia.
- Revisión después de un viaje o si varias personas de la casa tienen síntomas.

## Cómo tomar la muestra

1. Orina antes para que la orina no se mezcle con las heces.
2. Recoge las heces sobre un plástico o recipiente limpio, **no del agua del inodoro**.
3. Pasa una porción al frasco con la paleta, sin llenarlo de más, y ciérralo bien.
4. Anota tu nombre y la fecha y hora.
5. Tráelo a la clínica **el mismo día**, siguiendo las indicaciones del recipiente.

## Detección de cáncer de colon

Si tienes **45 años o más**, pregunta por la prueba anual de sangre oculta en heces (FIT), una de las opciones que recomienda el USPSTF para adultos de 45 a 75 años.

## Señales de alarma

Heces negras o con mucha sangre, mareo, vómito que no para o signos de deshidratación requieren atención urgente.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Diarrhea that will not stop, stomach pain, gas or blood in the stool are uncomfortable to talk about but important to check. A stool test helps find parasites, infections or hidden bleeding. At Clínica Hispana Mangum we give you the container and instructions to collect the sample at home.

## What can it detect?

- **Parasites** such as giardia or amoebas, common after travel or from contaminated water or food.
- **Bacteria** that cause infectious diarrhea.
- **Hidden blood**, not visible to the eye, which can come from hemorrhoids, ulcers or colon polyps.

## When should I get tested?

- Diarrhea lasting more than **3 days**, or with fever or mucus.
- Recurring abdominal pain or gas.
- Unexplained weight loss or fatigue with anemia.
- A check after travel or if several people at home have symptoms.

## How to collect the sample

1. Urinate first so urine does not mix with the stool.
2. Catch the stool on plastic wrap or a clean container, **not from the toilet water**.
3. Transfer a portion to the vial with the scoop, without overfilling, and close it tightly.
4. Write your name and the date and time.
5. Bring it to the clinic **the same day**, following the container instructions.

## Colon cancer screening

If you are **45 or older**, ask about the yearly fecal immunochemical test (FIT), one of the options the USPSTF recommends for adults aged 45 to 75.

## Warning signs

Black or very bloody stools, dizziness, nonstop vomiting or signs of dehydration need urgent care.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "prueba-strep",
    order: 14,
    category: "laboratorio",
    icon: "TestTube",
    title: "Prueba de Estreptococo (Strep Test)",
    titleEn: "Strep Test",
    shortDescription: "Prueba rápida de estreptococo (strep) para el dolor de garganta, con resultado el mismo día.",
    shortDescriptionEn: "Rapid strep test for sore throat, with same-day result.",
    description: "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    descriptionEn: "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston",
    ],
    keywordsEn: [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston",
    ],
    features: [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish",
    ],
    longDescription: `No todo dolor de garganta necesita antibiótico. La mayoría los causan virus, pero la faringitis por estreptococo del grupo A sí requiere tratamiento para evitar complicaciones. La prueba rápida de strep permite saberlo en la misma visita, sin cita.

## ¿Cuándo sospechar estreptococo?

- Dolor de garganta que empezó de repente y duele al tragar.
- Fiebre.
- Ganglios del cuello inflamados y adoloridos.
- Amígdalas rojas, a veces con puntos blancos.
- **Sin tos ni nariz tapada**, que apuntan más a un virus.

Es más frecuente en niños de 5 a 15 años, pero también da en adultos.

## ¿Cómo es la prueba?

Se pasa un hisopo por la parte de atrás de la garganta durante unos segundos. Puede dar arcadas, pero no duele. El resultado de la prueba rápida está en **pocos minutos**. En niños y adolescentes, si la prueba rápida sale negativa pero la sospecha es alta, se recomienda confirmar con un **cultivo**.

## Si sale positiva

- El equipo médico indica el antibiótico adecuado, que se toma **completo** aunque te sientas mejor en dos días.
- Puedes volver a la escuela o al trabajo cuando **ya no tienes fiebre y llevas al menos 12 horas** con el antibiótico.
- Cambia el cepillo de dientes cuando termines el tratamiento.

## ¿Por qué no dejarla pasar?

Sin tratamiento, el estreptococo puede causar abscesos alrededor de las amígdalas y, con menos frecuencia, fiebre reumática, que afecta el corazón.

## Señales de urgencia

Dificultad para respirar o tragar saliva, babeo, no poder abrir bien la boca o voz de "papa caliente": ve a urgencias.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Not every sore throat needs antibiotics. Most are caused by viruses, but group A strep throat does need treatment to prevent complications. The rapid strep test tells you during the same visit, no appointment needed.

## When to suspect strep

- A sore throat that started suddenly and hurts to swallow.
- Fever.
- Swollen, tender neck lymph nodes.
- Red tonsils, sometimes with white spots.
- **No cough or stuffy nose**, which point more to a virus.

It is most common in children aged 5 to 15, but adults get it too.

## What is the test like?

A swab is passed over the back of the throat for a few seconds. It may cause gagging, but it does not hurt. The rapid test result is ready in **a few minutes**. In children and teens, if the rapid test is negative but suspicion is high, a **culture** is recommended to confirm.

## If it is positive

- The medical team prescribes the right antibiotic, which must be taken **completely** even if you feel better in two days.
- You can return to school or work once you **have no fever and have taken the antibiotic for at least 12 hours**.
- Replace your toothbrush when you finish treatment.

## Why not let it go?

Untreated strep can cause abscesses around the tonsils and, less often, rheumatic fever, which affects the heart.

## Urgent signs

Trouble breathing or swallowing saliva, drooling, not being able to open the mouth fully or a "hot potato" voice: go to the emergency room.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "prueba-tuberculosis",
    order: 15,
    category: "laboratorio",
    icon: "ShieldPlus",
    title: "Examen de Tuberculosis (TB)",
    titleEn: "Tuberculosis (TB) Test",
    shortDescription: "Prueba de tuberculosis (PPD) para trabajo, escuela o trámites, con lectura en español.",
    shortDescriptionEn: "Tuberculosis (PPD) test for work, school or paperwork, with reading in Spanish.",
    description: "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    descriptionEn: "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    keywords: [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston",
    ],
    keywordsEn: [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston",
    ],
    features: [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español",
    ],
    featuresEn: [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish",
    ],
    longDescription: `Muchos trabajos en escuelas, guarderías, hospitales y asilos, además de algunas escuelas y programas, piden una prueba de tuberculosis. En Clínica Hispana Mangum aplicamos la **prueba cutánea (PPD)** y te damos la cita para leerla y el documento con tu resultado.

## ¿Cómo funciona la prueba cutánea?

1. **Aplicación:** se inyecta una pequeña cantidad de líquido justo debajo de la piel del antebrazo. Toma segundos.
2. **Espera:** no rasques, no cubras con curitas ni pongas cremas en la zona.
3. **Lectura entre 48 y 72 horas después:** el equipo médico mide en milímetros si se formó una zona dura (no el enrojecimiento).

**Si no regresas dentro de ese plazo, la prueba no se puede leer** y hay que repetirla.

## ¿Qué significa un resultado positivo?

Indica contacto con la bacteria de la tuberculosis en algún momento, **no necesariamente enfermedad activa**. El siguiente paso es una **radiografía de tórax** y una revisión de síntomas. Si recibiste la vacuna BCG de niño, la prueba cutánea puede salir positiva sin infección; en ese caso a veces conviene una prueba en sangre.

## Prueba de TB para inmigración

Para el examen médico de inmigración I-693, el CDC exige una **prueba en sangre (IGRA)**, no la cutánea. Esa prueba forma parte del [examen de inmigración](/services/examenes-inmigracion).

## Síntomas que requieren revisión

Tos de más de 3 semanas, sangre al toser, fiebre o sudores por la noche y pérdida de peso sin causa. Si los tienes, avísalo antes de la prueba.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Many jobs in schools, daycares, hospitals and nursing homes, as well as some schools and programs, require a tuberculosis test. At Clínica Hispana Mangum we give the **skin test (PPD)**, schedule your reading and give you a document with your result.

## How does the skin test work?

1. **Placement:** a small amount of fluid is injected just under the skin of the forearm. It takes seconds.
2. **Waiting:** do not scratch, cover with a bandage or put creams on the area.
3. **Reading 48 to 72 hours later:** the medical team measures in millimeters whether a firm bump formed (not the redness).

**If you do not return within that window, the test cannot be read** and must be repeated.

## What does a positive result mean?

It shows contact with the tuberculosis bacteria at some point, **not necessarily active disease**. The next step is a **chest X-ray** and a symptom review. If you received the BCG vaccine as a child, the skin test may be positive without infection; in that case a blood test is sometimes better.

## TB testing for immigration

For the I-693 immigration medical exam, the CDC requires a **blood test (IGRA)**, not the skin test. That test is part of the [immigration exam](/en/services/examenes-inmigracion).

## Symptoms that need an exam

A cough lasting more than 3 weeks, coughing up blood, fever or night sweats and unexplained weight loss. If you have them, tell us before the test.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "enfermedades-transmision-sexual",
    order: 16,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    titleEn: "Sexually Transmitted Disease (STD) Testing",
    shortDescription: "Pruebas de enfermedades de transmisión sexual confidenciales y sin juicios, con tratamiento.",
    shortDescriptionEn: "Confidential, judgment-free sexually transmitted disease testing, with treatment.",
    description: "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    descriptionEn: "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston",
    ],
    keywordsEn: [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston",
    ],
    features: [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Muchas infecciones de transmisión sexual no dan ningún síntoma y aun así pueden causar infertilidad o contagiar a tu pareja. Hacerte la prueba es una forma de cuidarte, no un motivo de vergüenza. En Clínica Hispana Mangum las pruebas son **confidenciales** y el equipo médico te atiende con respeto y sin juicios.

## ¿Qué infecciones se revisan?

| Infección | Cómo se detecta |
|---|---|
| Clamidia y gonorrea | Muestra de orina o hisopo |
| Sífilis | Análisis de sangre |
| VIH | Análisis de sangre |
| Tricomoniasis | Muestra de orina o hisopo |
| Herpes | Revisión y muestra si hay llagas |

El equipo médico elige las pruebas según tus síntomas y tu riesgo.

## ¿Cuándo hacerme la prueba?

- Si tienes **flujo, ardor, llagas, verrugas o dolor** en la zona genital.
- Si tu pareja te dijo que tiene una infección.
- Después de relaciones sin condón con una pareja nueva.
- Los CDC recomiendan la prueba de **VIH al menos una vez** a toda persona de 13 a 64 años, y clamidia y gonorrea **cada año** a mujeres sexualmente activas menores de 25.

Algunas infecciones tardan en aparecer en las pruebas; si la exposición fue muy reciente, puede ser necesario repetirla semanas después.

## Si el resultado sale positivo

- Muchas infecciones se **curan con antibiótico**; otras, como el VIH o el herpes, se controlan con tratamiento.
- Tu pareja o parejas también deben tratarse para no volver a contagiarte.
- Evita las relaciones sexuales hasta terminar el tratamiento, según lo que te indiquen.

## Prevención

El condón en cada relación reduce mucho el riesgo. Pregunta también por la vacuna contra el VPH y la hepatitis B.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Many sexually transmitted infections cause no symptoms at all and can still lead to infertility or spread to your partner. Getting tested is a way to take care of yourself, not something to be ashamed of. At Clínica Hispana Mangum testing is **confidential** and the medical team treats you with respect and without judgment.

## Which infections are checked?

| Infection | How it is detected |
|---|---|
| Chlamydia and gonorrhea | Urine sample or swab |
| Syphilis | Blood test |
| HIV | Blood test |
| Trichomoniasis | Urine sample or swab |
| Herpes | Exam and sample if there are sores |

The medical team chooses tests based on your symptoms and risk.

## When should I get tested?

- If you have **discharge, burning, sores, warts or pain** in the genital area.
- If a partner told you they have an infection.
- After sex without a condom with a new partner.
- The CDC recommends an **HIV test at least once** for everyone aged 13 to 64, and **yearly** chlamydia and gonorrhea testing for sexually active women under 25.

Some infections take time to show up on tests; if the exposure was very recent, a repeat test may be needed weeks later.

## If the result is positive

- Many infections are **cured with antibiotics**; others, such as HIV or herpes, are managed with treatment.
- Your partner or partners should also be treated so you do not get reinfected.
- Avoid sex until treatment is finished, as directed.

## Prevention

Using a condom every time greatly lowers the risk. Ask about the HPV and hepatitis B vaccines too.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "examen-alcohol-drogas",
    order: 17,
    category: "examenes",
    icon: "Beaker",
    title: "Exámenes de Alcohol y Drogas",
    titleEn: "Alcohol & Drug Testing",
    shortDescription: "Pruebas de alcohol y drogas para trabajo y trámites, rápidas y con documentación.",
    shortDescriptionEn: "Alcohol and drug testing for work and paperwork, fast and with documentation.",
    description: "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    descriptionEn: "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    keywords: [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston",
    ],
    keywordsEn: [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston",
    ],
    features: [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado",
    ],
    featuresEn: [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation",
    ],
    longDescription: `Muchas empresas piden una prueba de drogas o alcohol antes de contratar, después de un accidente o de forma aleatoria. En Clínica Hispana Mangum hacemos la prueba sin cita, de forma discreta, y te entregamos la documentación del resultado para tu empleador o trámite.

## ¿Qué pruebas hacemos?

- **Prueba de drogas en orina**, con paneles que suelen incluir marihuana, cocaína, anfetaminas, opioides y otras sustancias. El panel depende de lo que pida tu empleador.
- **Prueba de alcohol.**

## ¿Qué debo traer?

1. **Identificación con foto** vigente; sin ella no se puede tomar la muestra.
2. El **formulario u orden de tu empleador**, si te dieron uno.
3. La lista de **medicamentos con receta** que tomas.

## Cómo es la toma de muestra

- Se verifica tu identidad y se registra la muestra para que no se confunda con otra.
- Das la muestra de orina en privado, siguiendo las indicaciones del personal.
- Se sella el frasco frente a ti.

## Consejos para evitar repetirla

- **No tomes grandes cantidades de agua** antes: una muestra muy diluida puede ser rechazada.
- Avisa si tomas medicamentos con receta, como algunos para el dolor, la ansiedad o el TDAH, que pueden dar positivo.
- Llega con ganas de orinar.

## Pruebas bajo reglas del DOT

Si tu empleador pide una prueba bajo las reglas del Departamento de Transporte, avísanos al llamar para confirmar el procedimiento. Es un trámite distinto del [examen físico DOT](/services/examen-dot).

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Many employers require a drug or alcohol test before hiring, after an accident or at random. At Clínica Hispana Mangum we do the test with no appointment, discreetly, and give you documentation of the result for your employer or paperwork.

## Which tests do we do?

- **Urine drug test**, with panels that often include marijuana, cocaine, amphetamines, opioids and other substances. The panel depends on what your employer requests.
- **Alcohol test.**

## What should I bring?

1. A current **photo ID**; without it the sample cannot be collected.
2. Your **employer's form or order**, if you were given one.
3. A list of the **prescription medications** you take.

## How the sample is collected

- Your identity is verified and the sample is logged so it cannot be mixed up.
- You give the urine sample in private, following staff instructions.
- The container is sealed in front of you.

## Tips to avoid a retest

- **Do not drink large amounts of water** beforehand: a very diluted sample may be rejected.
- Tell us about prescription medications, such as some for pain, anxiety or ADHD, which can test positive.
- Arrive needing to urinate.

## Tests under DOT rules

If your employer requires a test under Department of Transportation rules, tell us when you call so we can confirm the procedure. It is separate from the [DOT physical](/en/services/examen-dot).

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "electrocardiograma",
    order: 18,
    category: "laboratorio",
    icon: "HeartPulse",
    title: "Electrocardiograma (EKG)",
    titleEn: "Electrocardiogram (EKG)",
    shortDescription: "Electrocardiograma (EKG) rápido y sin dolor para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn: "Fast, painless electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description: "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    descriptionEn: "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    keywords: [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston",
    ],
    keywordsEn: [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish",
    ],
    features: [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish",
    ],
    longDescription: `El electrocardiograma (EKG o ECG) registra la actividad eléctrica del corazón en pocos minutos. Es un estudio rápido, sin dolor y sin radiación, y muchas veces es el primer paso para revisar palpitaciones, mareos o un requisito médico antes de una cirugía o un deporte.

## ¿Para qué sirve?

- Detectar **alteraciones del ritmo**, como latidos rápidos, lentos o irregulares.
- Buscar señales de un **infarto previo** o de falta de oxígeno en el corazón.
- Ver si alguna cavidad del corazón está **agrandada**.
- Cumplir requisitos de **exámenes preoperatorios, laborales o deportivos**.

## ¿Cómo es el estudio?

1. Te recuestas en la camilla.
2. Se colocan **electrodos adhesivos** en el pecho, los brazos y las piernas.
3. Te quedas quieto y respiras normal durante unos segundos mientras se registra.
4. Se retiran los electrodos y el equipo médico revisa el trazo.

Todo el proceso suele tomar alrededor de 10 minutos.

## ¿Cómo prepararme?

- Usa **ropa de dos piezas** para descubrir el pecho con facilidad.
- No te pongas **cremas ni aceites** en el pecho ese día.
- Trae la lista de tus medicamentos.

## Lo que el electrocardiograma no muestra

Un EKG normal no descarta todos los problemas del corazón; solo registra lo que pasa en ese momento. Si los síntomas van y vienen, puede hacer falta un monitoreo más largo o la referencia al cardiólogo.

## Dolor de pecho: no esperes

Si tienes **dolor u opresión en el pecho, falta de aire, sudor frío o dolor que se va al brazo o la mandíbula**, llama al 911. No vengas manejando a la clínica.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `An electrocardiogram (EKG or ECG) records the heart's electrical activity in a few minutes. It is a quick, painless test with no radiation, and it is often the first step to check palpitations, dizziness or a medical requirement before surgery or sports.

## What is it for?

- Detecting **rhythm problems**, such as fast, slow or irregular heartbeats.
- Looking for signs of a **past heart attack** or lack of oxygen to the heart.
- Seeing whether a heart chamber is **enlarged**.
- Meeting requirements for **pre-surgery, work or sports exams**.

## What is the test like?

1. You lie down on the exam table.
2. **Adhesive electrodes** are placed on your chest, arms and legs.
3. You stay still and breathe normally for a few seconds while it records.
4. The electrodes are removed and the medical team reviews the tracing.

The whole process usually takes about 10 minutes.

## How do I prepare?

- Wear **two-piece clothing** so your chest is easy to uncover.
- Do not put **lotions or oils** on your chest that day.
- Bring a list of your medications.

## What the EKG does not show

A normal EKG does not rule out every heart problem; it only records what happens at that moment. If symptoms come and go, longer monitoring or a cardiology referral may be needed.

## Chest pain: do not wait

If you have **chest pain or pressure, shortness of breath, cold sweats or pain spreading to your arm or jaw**, call 911. Do not drive yourself to the clinic.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "ultrasonido",
    order: 19,
    category: "laboratorio",
    icon: "ScanLine",
    title: "Ultrasonido y Ecografía",
    titleEn: "Ultrasound & Sonography",
    shortDescription: "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn: "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description: "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    descriptionEn: "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    keywords: [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston",
    ],
    keywordsEn: [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston",
    ],
    features: [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español",
    ],
    featuresEn: [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish",
    ],
    longDescription: `El ultrasonido usa ondas de sonido para ver órganos por dentro, sin agujas y **sin radiación**, por eso es seguro también durante el embarazo. En Clínica Hispana Mangum hacemos estudios de ultrasonido en la clínica y el equipo médico te explica qué se vio y cuáles son los siguientes pasos.

## ¿Qué estudios hacemos?

- **Abdominal:** hígado, vesícula, páncreas, riñones y bazo; útil para dolor abdominal o piedras en la vesícula.
- **Pélvico:** útero y ovarios; ayuda a revisar sangrado irregular, dolor pélvico, quistes o miomas.
- **De embarazo:** confirma el embarazo, calcula las semanas y da seguimiento.
- **De tiroides y tejidos blandos:** nódulos en el cuello o bolitas debajo de la piel.

## ¿Cómo me preparo?

| Estudio | Preparación |
|---|---|
| Abdominal | **Ayuno de 6 a 8 horas**; puedes tomar un poco de agua |
| Pélvico | **Vejiga llena:** toma unos 4 vasos de agua una hora antes y no orines |
| Embarazo al inicio | Vejiga llena, salvo que te indiquen otra cosa |
| Tiroides o tejidos blandos | No requiere preparación |

Usa ropa cómoda y fácil de quitar en la zona que se va a revisar.

## ¿Cómo es el estudio?

Te recuestas, se aplica un gel tibio sobre la piel y se desliza el transductor por la zona. Puede sentirse algo de presión, sobre todo con la vejiga llena. La mayoría de los estudios toman entre 15 y 30 minutos.

## ¿Qué pasa después?

El equipo médico revisa las imágenes contigo. Si se encuentra algo que necesita otro estudio o un especialista, te damos la orden o la referencia.

## Cuándo no esperar

Dolor abdominal intenso con fiebre o vómito, o sangrado abundante en el embarazo, requieren atención de urgencias.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Ultrasound uses sound waves to see inside the body, with no needles and **no radiation**, which is why it is also safe during pregnancy. At Clínica Hispana Mangum we perform ultrasound studies at the clinic, and the medical team explains what was seen and the next steps.

## Which studies do we do?

- **Abdominal:** liver, gallbladder, pancreas, kidneys and spleen; useful for abdominal pain or gallstones.
- **Pelvic:** uterus and ovaries; helps check irregular bleeding, pelvic pain, cysts or fibroids.
- **Pregnancy:** confirms the pregnancy, estimates the weeks and follows progress.
- **Thyroid and soft tissue:** neck nodules or lumps under the skin.

## How do I prepare?

| Study | Preparation |
|---|---|
| Abdominal | **Fast for 6 to 8 hours**; a little water is fine |
| Pelvic | **Full bladder:** drink about 4 glasses of water an hour before and do not urinate |
| Early pregnancy | Full bladder, unless told otherwise |
| Thyroid or soft tissue | No preparation needed |

Wear comfortable clothing that is easy to remove from the area being checked.

## What is the study like?

You lie down, warm gel is applied to the skin and the transducer is moved over the area. You may feel some pressure, especially with a full bladder. Most studies take 15 to 30 minutes.

## What happens next?

The medical team reviews the images with you. If something needs another study or a specialist, we give you the order or referral.

## When not to wait

Severe abdominal pain with fever or vomiting, or heavy bleeding during pregnancy, needs emergency care.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "examen-dot",
    order: 20,
    category: "examenes",
    icon: "Truck",
    highlighted: true,
    title: "Examen Físico DOT - Licencia CDL",
    titleEn: "DOT Physical Exam - CDL License",
    shortDescription: "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn: "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description: "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    descriptionEn: "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    keywords: [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español",
    ],
    keywordsEn: [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish",
    ],
    longDescription: `Todo conductor que maneja un vehículo comercial en rutas interestatales necesita un certificado médico DOT vigente para su licencia CDL. En Clínica Hispana Mangum hacemos el examen físico DOT sin cita y te explicamos cada parte en español.

## ¿Qué se revisa en el examen DOT?

- **Historia médica:** llenas el formulario MCSA-5875 con tus condiciones y medicamentos.
- **Vista:** al menos 20/40 en cada ojo, con o sin lentes, y campo visual de 70 grados.
- **Oído:** escuchar un susurro a 5 pies, con o sin aparato auditivo.
- **Presión arterial y pulso.**
- **Análisis de orina:** busca proteína, sangre o azúcar como señal de otros problemas. No es una prueba de drogas.
- **Examen físico general:** corazón, pulmones, abdomen, columna y sistema nervioso.

## ¿Por cuánto tiempo me dan el certificado?

Hasta **24 meses** si todo está en orden. Si hay una condición que requiere control, como presión alta o diabetes, el examinador puede darte un certificado más corto para vigilarla. Con la presión en 140/90 o más, lo habitual es un certificado de un año.

## ¿Qué debo traer?

- Tu licencia de conducir.
- Lentes o aparato auditivo, si los usas.
- La lista de tus medicamentos con dosis.
- Si tienes diabetes con insulina, el formulario **MCSA-5870** llenado por tu médico en los 45 días anteriores.
- Si tienes apnea del sueño, problemas del corazón u otra condición, un informe reciente de tu especialista.

## ¿Qué pasa si hay algo que revisar?

No siempre significa que no pasas. Puede que necesites control de la presión, un informe médico adicional o una revisión más frecuente. Te explicamos qué sigue en tu idioma.

## ¿La prueba de drogas va incluida?

El examen físico DOT y la prueba de drogas DOT son trámites distintos. Si tu empresa te pide las dos, pregúntanos por nuestra [prueba de alcohol y drogas](/services/examen-alcohol-drogas).

## ¿Cuánto cuesta?

No necesitas seguro. Pregúntanos el precio antes de venir; aceptamos efectivo, tarjetas y Apple Pay. Estamos en 2912 Mangum Rd, Suite A, Houston, todos los días de 9 AM a 9 PM, así que puedes venir antes o después de tu ruta.`,
    longDescriptionEn: `Every driver who operates a commercial vehicle on interstate routes needs a current DOT medical certificate for their CDL. At Clínica Hispana Mangum we do the DOT physical with no appointment and explain each part in Spanish or English.

## What does the DOT exam check?

- **Medical history:** you fill out form MCSA-5875 with your conditions and medications.
- **Vision:** at least 20/40 in each eye, with or without glasses, and a 70-degree field of vision.
- **Hearing:** hearing a forced whisper at 5 feet, with or without a hearing aid.
- **Blood pressure and pulse.**
- **Urinalysis:** checks for protein, blood or sugar as signs of other problems. It is not a drug test.
- **General physical exam:** heart, lungs, abdomen, spine and nervous system.

## How long is the certificate valid?

Up to **24 months** if everything is in order. If a condition needs monitoring, such as high blood pressure or diabetes, the examiner may issue a shorter certificate. With blood pressure at 140/90 or higher, a one-year certificate is common.

## What should I bring?

- Your driver's license.
- Glasses or hearing aid, if you use them.
- A list of your medications and doses.
- If you have insulin-treated diabetes, form **MCSA-5870** completed by your doctor within the previous 45 days.
- If you have sleep apnea, heart problems or another condition, a recent report from your specialist.

## What if something needs attention?

It does not always mean you fail. You may need blood pressure control, an extra medical report or more frequent checks. We explain the next steps in your language.

## Is the drug test included?

The DOT physical and the DOT drug test are separate. If your employer requires both, ask about our [alcohol and drug testing](/en/services/examen-alcohol-drogas).

## How much does it cost?

You do not need insurance. Ask us for the price before you come; we accept cash, cards and Apple Pay. We are at 2912 Mangum Rd, Suite A, Houston, every day from 9 AM to 9 PM, so you can come before or after your route.`,
  },
  {
    slug: "examenes-inmigracion",
    order: 21,
    category: "examenes",
    icon: "ClipboardCheck",
    title: "Examen Médico de Inmigración I-693",
    titleEn: "Immigration Medical Exam I-693",
    metaTitle: "Examen Médico de Inmigración I-693 en Houston · USCIS",
    metaTitleEn: "I-693 Immigration Medical Exam in Houston · Civil Surgeon",
    shortDescription: "Examen médico de inmigración con médico autorizado por USCIS y el Formulario I-693 sellado.",
    shortDescriptionEn: "Immigration medical exam with a USCIS-authorized physician and the sealed Form I-693.",
    description: "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    descriptionEn: "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    keywords: [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston",
    ],
    keywordsEn: [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston",
    ],
    features: [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español",
    ],
    featuresEn: [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish",
    ],
    longDescription: `Para ajustar tu estatus a residente permanente, USCIS pide el formulario I-693, y solo puede firmarlo un médico designado como civil surgeon. En Clínica Hispana Mangum ese examen lo hace un civil surgeon autorizado por USCIS, con explicaciones en español en cada paso.

## ¿Qué revisa el civil surgeon?

- Tu historia clínica y tus registros de vacunas.
- Un examen físico general.
- Las pruebas que indica el CDC según tu edad: sangre para tuberculosis desde los 2 años, sífilis de 18 a 44 años y gonorrea de 18 a 24.
- Las vacunas que te falten según tu edad. La del COVID-19 ya no es obligatoria.

## ¿Cuántas visitas son?

Normalmente dos. En la primera se hace la revisión, se toman las muestras y se aplican vacunas. Cuando llegan los resultados, regresas por el formulario firmado en sobre sellado. Si la prueba de tuberculosis sale positiva, antes de firmar hace falta una radiografía de tórax.

## ¿Qué debo traer?

- Pasaporte u otra identificación con foto.
- Registros de vacunas, aunque estén en otro idioma.
- Resultados o radiografías anteriores, si tienes.
- Tu número A (A-Number), si ya te lo asignaron.

## ¿Cuándo conviene hacerlo?

Desde el 2 de diciembre de 2024 el I-693 se presenta junto con el I-485. Lo ideal es hacer el examen cuando tu abogado ya tenga el resto del paquete casi listo. USCIS solo acepta la edición 01/20/25 del formulario.

## Lo que el civil surgeon no hace

No decide tu caso ni da asesoría legal. Si aparece una condición que requiere dispensa (waiver), tu abogado es quien la tramita.

## ¿Cuánto cuesta?

No necesitas seguro. El costo depende de las pruebas y vacunas que te falten, así que pregúntanos el precio total antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.

Te esperamos en 2912 Mangum Rd, Suite A, Houston, TX 77092, todos los días de 9 AM a 9 PM. Lee la [guía completa del I-693](/blog/guia-examen-medico-inmigracion-i693-houston) y [cómo verificar a un civil surgeon](/blog/medicos-autorizados-uscis-houston-civil-surgeon).`,
    longDescriptionEn: `To adjust your status to permanent resident, USCIS requires Form I-693, and only a doctor designated as a civil surgeon can sign it. At Clínica Hispana Mangum this exam is done by a USCIS-designated civil surgeon, with every step explained in Spanish or English.

## What does the civil surgeon check?

- Your medical history and vaccination records.
- A general physical exam.
- The tests the CDC requires by age: a tuberculosis blood test from age 2, syphilis for ages 18 to 44 and gonorrhea for ages 18 to 24.
- Any vaccines you are missing for your age. The COVID-19 vaccine is no longer required.

## How many visits does it take?

Usually two. At the first visit we do the review, draw samples and give vaccines. When results are back, you return for the signed form in a sealed envelope. If the tuberculosis test is positive, a chest X-ray is needed before signing.

## What should I bring?

- Passport or another photo ID.
- Vaccination records, even if they are in another language.
- Previous results or X-rays, if you have them.
- Your A-Number, if you already have one.

## When is the best time?

Since December 2, 2024, Form I-693 is filed together with Form I-485. The best time is when your attorney has the rest of the package almost ready. USCIS only accepts the 01/20/25 edition of the form.

## What the civil surgeon does not do

They do not decide your case or give legal advice. If a condition requires a waiver, your attorney handles it.

## How much does it cost?

You do not need insurance. The cost depends on the tests and vaccines you still need, so ask us for the total price before your visit. We accept cash, cards and Apple Pay.

Visit us at 2912 Mangum Rd, Suite A, Houston, TX 77092, every day from 9 AM to 9 PM. Read the [full I-693 guide](/en/blog/guia-examen-medico-inmigracion-i693-houston) and [how to verify a civil surgeon](/en/blog/medicos-autorizados-uscis-houston-civil-surgeon).`,
  },
  {
    slug: "vacunas",
    order: 22,
    category: "tratamientos",
    icon: "Syringe",
    title: "Vacunas contra la Influenza y Toxoide Tetánico",
    titleEn: "Flu and Tetanus (Tdap) Vaccines",
    shortDescription: "Vacuna contra la influenza (flu) y toxoide tetánico, aplicadas por personal médico, en español.",
    shortDescriptionEn: "Influenza (flu) vaccine and tetanus toxoid, administered by medical staff, in Spanish.",
    description: "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    descriptionEn: "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    keywords: [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston",
    ],
    keywordsEn: [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston",
    ],
    features: [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Las vacunas son una de las formas más sencillas de evitar enfermedades graves. En Clínica Hispana Mangum aplicamos la **vacuna contra la influenza (flu)** y el **refuerzo contra el tétanos**, sin cita, y te orientamos sobre qué otras vacunas te tocan según tu edad.

## Vacuna contra la influenza

- Los CDC la recomiendan **cada año a toda persona de 6 meses o más**.
- Lo ideal es aplicarla **en septiembre u octubre**, antes de que suban los casos, pero sigue sirviendo durante toda la temporada.
- Es especialmente importante para mayores de 65 años, embarazadas, niños pequeños y personas con diabetes, asma o problemas del corazón.

## Refuerzo contra el tétanos (Td o Tdap)

- Los adultos necesitan un refuerzo **cada 10 años**.
- Si te hiciste una **herida sucia o profunda** y tu última dosis fue hace más de 5 años, conviene aplicarlo pronto.
- En cada **embarazo** se recomienda la Tdap entre las semanas 27 y 36 para proteger al bebé contra la tos ferina.

## ¿Qué debo saber antes de vacunarme?

- Un resfriado leve **no impide** vacunarse; con fiebre alta conviene esperar.
- Avisa si tuviste una **reacción alérgica grave** a una vacuna anterior.
- Trae tu **cartilla de vacunas** para anotar la dosis.

## ¿Qué reacciones son normales?

Dolor o enrojecimiento en el brazo, cansancio o febrícula durante uno o dos días. Si aparece dificultad para respirar, hinchazón de la cara o ronchas extendidas, busca atención de inmediato.

## Vacunas para trámites

Si necesitas vacunas para el examen de inmigración, revisa el [examen médico I-693](/services/examenes-inmigracion); si son para la escuela, trae el requisito de la escuela a tu [examen físico escolar](/services/examen-fisico-escolar).

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `Vaccines are one of the simplest ways to prevent serious illness. At Clínica Hispana Mangum we give the **flu vaccine** and the **tetanus booster**, no appointment needed, and guide you on other vaccines you may need for your age.

## Flu vaccine

- The CDC recommends it **every year for everyone 6 months and older**.
- Ideally get it **in September or October**, before cases rise, but it still helps throughout the season.
- It is especially important for people over 65, pregnant women, young children and people with diabetes, asthma or heart disease.

## Tetanus booster (Td or Tdap)

- Adults need a booster **every 10 years**.
- If you have a **dirty or deep wound** and your last dose was more than 5 years ago, get it soon.
- During every **pregnancy**, Tdap is recommended between weeks 27 and 36 to protect the baby against whooping cough.

## What should I know before getting vaccinated?

- A mild cold **does not prevent** vaccination; with a high fever it is better to wait.
- Tell us if you had a **severe allergic reaction** to a previous vaccine.
- Bring your **vaccination record** so the dose can be written down.

## Which reactions are normal?

Soreness or redness in the arm, tiredness or a low fever for one or two days. If you have trouble breathing, facial swelling or widespread hives, get care right away.

## Vaccines for paperwork

If you need vaccines for the immigration exam, see the [I-693 medical exam](/en/services/examenes-inmigracion); for school, bring the school requirement to your [school physical](/en/services/examen-fisico-escolar).

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "sueros-vitaminados",
    order: 23,
    category: "tratamientos",
    icon: "Droplets",
    title: "Sueros Vitaminados (Terapia IV)",
    titleEn: "Vitamin IV Therapy",
    shortDescription: "Sueros vitaminados intravenosos para hidratación y energía, aplicados por personal médico.",
    shortDescriptionEn: "Intravenous vitamin drips for hydration and energy, administered by medical staff.",
    description: "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    descriptionEn: "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    keywords: [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston",
    ],
    keywordsEn: [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston",
    ],
    features: [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Los sueros vitaminados, también llamados terapia IV, administran líquidos, vitaminas y minerales directamente en la vena. Muchas personas los buscan para rehidratarse después de un malestar, un día de mucho calor o una etapa de cansancio. En Clínica Hispana Mangum el equipo médico de la clínica hace una evaluación breve antes de aplicarlos y vigila la aplicación de principio a fin.

## ¿Para quién pueden ser útiles?

- Personas **deshidratadas** por calor intenso, ejercicio o un cuadro de vómito o diarrea ya en recuperación.
- Quienes tienen **dificultad para tomar suficientes líquidos** por la boca.
- Personas que buscan un aporte de hidratación y vitaminas como apoyo, junto con alimentación y descanso.

Los sueros **no sustituyen** el tratamiento de una enfermedad ni la consulta para encontrar la causa del cansancio.

## ¿Cómo es la visita?

1. **Evaluación:** preguntas sobre tu salud, medicamentos y alergias, y toma de signos vitales.
2. **Elección del suero** adecuado para ti.
3. **Colocación** de una vía pequeña en la vena del brazo.
4. **Aplicación y monitoreo**, normalmente entre 30 y 60 minutos, sentado y cómodo.

## ¿Quién no debería aplicárselo sin revisión?

Personas con **insuficiencia cardiaca, enfermedad de los riñones**, presión muy alta sin control o embarazo requieren una valoración cuidadosa, porque el exceso de líquido puede ser peligroso. Por eso siempre hay una evaluación antes.

## Si el cansancio no se quita

Cuando el cansancio dura semanas, conviene buscar la causa con [análisis de sangre](/services/examenes-sangre): anemia, vitamina B12 baja o [problemas de tiroides](/services/tiroides) son frecuentes.

## Cuándo ir a urgencias

Confusión, desmayo, orinar muy poco o vómito que no para son señales de deshidratación grave que requieren atención de urgencias.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `IV vitamin therapy delivers fluids, vitamins and minerals directly into a vein. Many people look for it to rehydrate after being sick, a very hot day or a period of fatigue. At Clínica Hispana Mangum the clinic's medical team does a brief evaluation before starting and monitors the infusion from start to finish.

## Who might it help?

- People who are **dehydrated** from intense heat, exercise or a bout of vomiting or diarrhea that is already improving.
- People who have **trouble drinking enough fluids** by mouth.
- People looking for hydration and vitamin support alongside good food and rest.

IV therapy **does not replace** treatment for an illness or a visit to find the cause of fatigue.

## What is the visit like?

1. **Evaluation:** questions about your health, medications and allergies, plus vital signs.
2. **Choosing the right IV** for you.
3. **Placing** a small line in an arm vein.
4. **Infusion and monitoring**, usually 30 to 60 minutes, seated and comfortable.

## Who should not get it without a review?

People with **heart failure, kidney disease**, uncontrolled high blood pressure or pregnancy need careful evaluation, because too much fluid can be dangerous. That is why there is always an evaluation first.

## If the fatigue does not go away

When fatigue lasts for weeks, it is worth looking for the cause with [blood tests](/en/services/examenes-sangre): anemia, low vitamin B12 or [thyroid problems](/en/services/tiroides) are common.

## When to go to the emergency room

Confusion, fainting, urinating very little or vomiting that will not stop are signs of severe dehydration that need emergency care.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "suturas-heridas",
    order: 24,
    category: "tratamientos",
    icon: "Scissors",
    title: "Suturas de Heridas",
    titleEn: "Wound Suturing",
    shortDescription: "Suturas (puntos) para cerrar heridas de forma segura, sin cita previa y en español.",
    shortDescriptionEn: "Sutures (stitches) to close wounds safely, walk-ins welcome and in Spanish.",
    description: "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    descriptionEn: "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    keywords: [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston",
    ],
    keywordsEn: [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston",
    ],
    features: [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions",
    ],
    longDescription: `Una cortada en la cocina, en el trabajo o jugando puede necesitar puntos para cerrar bien y dejar menos cicatriz. En Clínica Hispana Mangum atendemos heridas sin cita: las limpiamos, aplicamos anestesia local y las cerramos con suturas cuando hace falta.

## ¿Cuándo necesita puntos una herida?

- Mide **más de 1 a 2 centímetros** o está abierta y se ven los bordes separados.
- Es **profunda** y se ve grasa amarilla o tejido.
- Está en la **cara, las manos o una articulación**.
- **Sigue sangrando** después de 10 minutos de presión.

Lo mejor es venir **pronto, idealmente en las primeras horas**: mientras más tiempo pasa, mayor el riesgo de infección y menos conviene cerrarla.

## Qué hacer mientras llegas

1. Presiona con una tela limpia sin soltar.
2. Enjuaga con agua limpia si hay tierra.
3. No pongas remedios caseros, polvo ni alcohol dentro de la herida.

## ¿Cómo es la atención?

Revisión de la herida, limpieza profunda, anestesia local, cierre con puntos y vendaje. El equipo médico revisa si tu **vacuna del tétanos** está al día.

## ¿Cuándo se quitan los puntos?

| Zona | Días aproximados |
|---|---|
| Cara | 5 |
| Cuero cabelludo | 7 a 10 |
| Brazos y tronco | 7 a 10 |
| Piernas y pies | 10 a 14 |
| Sobre articulaciones | 14 |

Mantén la herida **seca las primeras 24 a 48 horas** y consulta si hay enrojecimiento que crece, pus, calor o fiebre.

## Ve a urgencias si

Hay sangrado que no para con presión, se ve el hueso, perdiste sensibilidad o movimiento en un dedo, o es una mordida profunda de animal.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `A cut in the kitchen, at work or while playing may need stitches to close properly and leave less of a scar. At Clínica Hispana Mangum we treat wounds with no appointment: we clean them, apply local anesthesia and close them with sutures when needed.

## When does a wound need stitches?

- It is **longer than 1 to 2 centimeters** or gaping, with separated edges.
- It is **deep** and you can see yellow fat or tissue.
- It is on the **face, hands or a joint**.
- It **keeps bleeding** after 10 minutes of pressure.

It is best to come **early, ideally within the first hours**: the longer you wait, the higher the infection risk and the less suitable it is to close.

## What to do on the way

1. Press with a clean cloth without letting go.
2. Rinse with clean water if there is dirt.
3. Do not put home remedies, powders or alcohol inside the wound.

## What is the care like?

Wound check, thorough cleaning, local anesthesia, closure with stitches and a bandage. The medical team checks whether your **tetanus vaccine** is up to date.

## When are stitches removed?

| Area | Approximate days |
|---|---|
| Face | 5 |
| Scalp | 7 to 10 |
| Arms and trunk | 7 to 10 |
| Legs and feet | 10 to 14 |
| Over joints | 14 |

Keep the wound **dry for the first 24 to 48 hours** and get checked if redness spreads or there is pus, warmth or fever.

## Go to the emergency room if

Bleeding does not stop with pressure, bone is visible, you lost feeling or movement in a finger, or it is a deep animal bite.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "curacion-heridas",
    order: 25,
    category: "tratamientos",
    icon: "Bandage",
    title: "Cura y Curación de Heridas",
    titleEn: "Wound Care",
    shortDescription: "Limpieza, curación y cambio de vendajes de heridas para una buena cicatrización, en español.",
    shortDescriptionEn: "Cleaning, wound care and dressing changes for proper healing, in Spanish.",
    description: "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    descriptionEn: "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    keywords: [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston",
    ],
    keywordsEn: [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston",
    ],
    features: [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español",
    ],
    featuresEn: [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish",
    ],
    longDescription: `Una herida que no se cuida bien puede infectarse o tardar semanas en cerrar. En Clínica Hispana Mangum limpiamos, curamos y cambiamos vendajes, y damos seguimiento hasta que la herida cicatriza, sin cita.

## ¿Qué heridas curamos?

- **Raspones y cortadas** que no necesitan puntos.
- **Quemaduras leves** de primer grado o pequeñas de segundo grado.
- **Heridas después de un procedimiento**, como cirugías menores o drenaje de abscesos.
- **Heridas que tardan en cerrar**, sobre todo en personas con diabetes o mala circulación.

## ¿Cómo es la curación?

1. Revisión de la herida y de señales de infección.
2. Limpieza con solución adecuada, retirando tejido o suciedad.
3. Aplicación del apósito o vendaje indicado.
4. Plan de cambios de vendaje y fecha de la próxima revisión.

## Señales de infección

- Enrojecimiento que **se extiende** o líneas rojas desde la herida.
- **Pus**, mal olor o más dolor en lugar de menos.
- Calor en la zona o **fiebre**.

Si aparece alguna, consulta el mismo día.

## Cuidados en casa

- Lávate las manos antes de tocar la herida.
- Mantén el vendaje limpio y seco; cámbialo si se moja o se ensucia.
- No uses algodón que deje pelusa ni pongas remedios caseros.
- Si tienes **diabetes**, revisa tus pies todos los días y no esperes para consultar una herida pequeña.

## Quemaduras: cuándo ir a urgencias

Quemaduras grandes, en la cara, manos, genitales o articulaciones, quemaduras eléctricas o químicas, o con piel blanca o negra y sin dolor, requieren atención de urgencias.

Estamos en 2912 Mangum Rd, Suite A, en el noroeste de Houston, abiertos todos los días de 9 AM a 9 PM. No necesitas seguro; pregunta el precio antes de tu visita. Aceptamos efectivo, tarjetas y Apple Pay.`,
    longDescriptionEn: `A wound that is not cared for properly can get infected or take weeks to close. At Clínica Hispana Mangum we clean, dress and change bandages, and follow up until the wound heals, no appointment needed.

## Which wounds do we care for?

- **Scrapes and cuts** that do not need stitches.
- **Minor burns**, first degree or small second degree.
- **Wounds after a procedure**, such as minor surgery or abscess drainage.
- **Slow-healing wounds**, especially in people with diabetes or poor circulation.

## What is wound care like?

1. Checking the wound and signs of infection.
2. Cleaning with a suitable solution, removing debris or dirt.
3. Applying the right dressing or bandage.
4. A plan for bandage changes and the date of the next check.

## Signs of infection

- Redness that **spreads** or red streaks from the wound.
- **Pus**, a bad smell or more pain instead of less.
- Warmth in the area or **fever**.

If any appear, get checked the same day.

## Care at home

- Wash your hands before touching the wound.
- Keep the bandage clean and dry; change it if it gets wet or dirty.
- Do not use cotton that leaves lint or put home remedies on it.
- If you have **diabetes**, check your feet every day and do not wait to have a small wound looked at.

## Burns: when to go to the emergency room

Large burns, burns on the face, hands, genitals or joints, electrical or chemical burns, or burns with white or black skin and no pain need emergency care.

We are at 2912 Mangum Rd, Suite A, in northwest Houston, open every day from 9 AM to 9 PM. No insurance needed; ask for the price before your visit. We accept cash, cards and Apple Pay.`,
  },
  {
    slug: "cirugias-menores",
    order: 26,
    category: "tratamientos",
    icon: "Stethoscope",
    title: "Cirugías Menores",
    titleEn: "Minor Surgery",
    shortDescription: "Procedimientos de cirugía menor ambulatoria (lunares, quistes, lipomas) con anestesia local.",
    shortDescriptionEn: "Minor outpatient surgical procedures (moles, cysts, lipomas) with local anesthesia.",
    description: "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    descriptionEn: "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    keywords: [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston",
    ],
    keywordsEn: [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston",
    ],
    features: [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained",
    ],
    longDescription: `Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Mangum realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.

## ¿Qué incluye?

- Evaluación del lunar, quiste o lesión
- Procedimiento ambulatorio con anestesia local
- Extracción de lunares, quistes y lipomas
- Indicaciones claras de cuidado posterior
- Retiro de puntos cuando corresponde

## Rápido y seguro

La mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Mangum we perform minor outpatient surgery with local anesthesia, in a single day.

## What's included?

- Evaluation of the mole, cyst or lesion
- Outpatient procedure with local anesthesia
- Removal of moles, cysts and lipomas
- Clear after-care instructions
- Suture removal when appropriate

## Fast and safe

Most of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "drenaje-abscesos",
    order: 27,
    category: "tratamientos",
    icon: "Droplet",
    title: "Drenaje de Abscesos",
    titleEn: "Abscess Drainage",
    shortDescription: "Drenaje de abscesos e infecciones de piel para aliviar el dolor y favorecer la curación.",
    shortDescriptionEn: "Drainage of abscesses and skin infections to relieve pain and promote healing.",
    description: "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    descriptionEn: "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    keywords: [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston",
    ],
    keywordsEn: [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston",
    ],
    features: [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions",
    ],
    longDescription: `Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Mangum lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.

## ¿Qué incluye?

- Evaluación del absceso o infección de piel
- Drenaje con anestesia local
- Limpieza y desinfección de la zona
- Tratamiento de la infección cuando se requiere
- Indicaciones de cuidado y seguimiento

## No lo dejes pasar

Un bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Mangum we treat it safely to relieve the discomfort and prevent the infection from spreading.

## What's included?

- Evaluation of the abscess or skin infection
- Drainage with local anesthesia
- Cleaning and disinfection of the area
- Treatment of the infection when needed
- Care and follow-up instructions

## Don't let it go

A red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "unas-encarnadas",
    order: 28,
    category: "tratamientos",
    icon: "Footprints",
    title: "Extracción de Uñas Encarnadas",
    titleEn: "Ingrown Toenail Removal",
    shortDescription: "Tratamiento de uñas encarnadas para aliviar el dolor y prevenir infecciones, en español.",
    shortDescriptionEn: "Ingrown toenail treatment to relieve pain and prevent infection, in Spanish.",
    description: "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    descriptionEn: "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    keywords: [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston",
    ],
    keywordsEn: [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston",
    ],
    features: [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions",
    ],
    longDescription: `Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Mangum la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.

## ¿Qué incluye?

- Evaluación de la uña y el dedo
- Procedimiento con anestesia local
- Extracción de la porción encarnada de la uña
- Tratamiento de la infección si la hay
- Indicaciones de cuidado para evitar que regrese

## Cuándo acudir

Dolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Mangum we treat it with a simple procedure and local anesthesia to relieve you the same day.

## What's included?

- Evaluation of the nail and toe
- Procedure with local anesthesia
- Removal of the ingrown portion of the nail
- Treatment of the infection if present
- Care instructions to prevent recurrence

## When to come in

Pain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "farmacia",
    order: 29,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia",
    titleEn: "Pharmacy",
    shortDescription: "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn: "Pick up your medications right after your visit — no second stop.",
    description: "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    descriptionEn: "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    keywords: [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston",
    ],
    keywordsEn: [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston",
    ],
    features: [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español",
    ],
    featuresEn: [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish",
    ],
    longDescription: `Al terminar tu consulta en Clínica Hispana Mangum puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.

## ¿Qué incluye?

- Surtido de tu receta justo al terminar la consulta
- Medicamentos de marca y genéricos
- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más
- Asesoría del personal sobre cómo tomar tus medicamentos
- Resurtido de recetas

## ¿Por qué usar nuestra farmacia?

Te ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `After your visit at Clínica Hispana Mangum you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.

## What's included?

- Your prescription filled right after your visit
- Brand-name and generic medications
- Over-the-counter (OTC) medications for colds, pain, allergies and more
- Staff guidance on how to take your medications
- Prescription refills

## Why use our pharmacy?

You skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
];
