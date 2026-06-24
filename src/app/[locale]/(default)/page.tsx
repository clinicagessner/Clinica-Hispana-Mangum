import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ScrollSpy } from "@/components/shared/scroll-spy";
import { Hero } from "@/components/sections/hero";
import { Promotions } from "@/components/sections/promotions";
import { Services } from "@/components/sections/services";
import { Gynecology } from "@/components/sections/gynecology";
import { Urology } from "@/components/sections/urology";
import { Testimonials } from "@/components/sections/testimonials";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Faq } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { Contact } from "@/components/sections/contact";
import { SITE_CONFIG } from "@/lib/constants";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/types";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Hispanic Clinic in Houston, TX - Care in Spanish"
      : "Clínica Hispana en Houston, TX - Atención en Español",
    description: isEn ? SITE_CONFIG.descriptionEn : SITE_CONFIG.description,
    alternates: buildAlternates("/", locale as Locale),
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
