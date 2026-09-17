import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { JsonLdMedicalClinic } from "@/components/seo/json-ld";
import { ScrollSpy } from "@/components/shared/scroll-spy";
import { Hero } from "@/components/sections/hero";
import { Promotions } from "@/components/sections/promotions";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Gynecology } from "@/components/sections/gynecology";
import { Urology } from "@/components/sections/urology";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { buildAlternates, buildSocial } from "@/lib/seo";
import type { Locale } from "@/types";

// Meta description de la home (≤155). SITE_CONFIG.description, más larga,
// se sigue usando en el schema y en llms.txt.
const HOME_DESCRIPTION = {
  es: "Clínica hispana en Houston, TX: atención en español, sin cita y sin seguro, los 7 días de 9 AM a 9 PM. Medicina familiar, inmigración I-693 y laboratorio.",
  en: "Hispanic clinic in Houston, TX: care in Spanish and English, walk-ins, no insurance needed, 7 days 9 AM–9 PM. Family medicine, I-693 exams and lab work.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Clínica Hispana Mangum · Walk-in, Houston TX, Open 7 Days"
      : "Clínica Hispana Mangum · Sin Cita en Houston, TX · 7 Días",
    description: isEn ? HOME_DESCRIPTION.en : HOME_DESCRIPTION.es,
    alternates: buildAlternates("/", locale as Locale),
    ...buildSocial({
      title: isEn
        ? "Clínica Hispana Mangum · Walk-in, Houston TX, Open 7 Days"
        : "Clínica Hispana Mangum · Sin Cita en Houston, TX · 7 Días",
      description: isEn ? HOME_DESCRIPTION.en : HOME_DESCRIPTION.es,
      path: "/",
      locale: locale as Locale,
    }),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <JsonLdMedicalClinic locale={locale as Locale} />
      <ScrollSpy
        ids={[
          "inicio",
          "promociones",
          "servicios",
          "ginecologia",
          "urologia",
          "testimonios",
          "blog",
          "faq",
          "ubicacion",
          "contacto",
        ]}
      />
      <Hero />
      <Promotions />
      <Services />
      <About />
      <Gynecology />
      <Urology />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <Location />
      <Contact />
    </>
  );
}
