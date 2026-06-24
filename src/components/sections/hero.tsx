import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  Navigation,
  PenLine,
  Phone,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { ScrollLink } from "@/components/shared/scroll-link";
import { StarRating } from "@/components/shared/star-rating";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export async function Hero() {
  // Lectura de Google Places + i18n en paralelo (sin waterfall).
  const [t, place] = await Promise.all([
    getTranslations("Hero"),
    getGooglePlaceData(),
  ]);

  const fullAddress = `${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}`;
  const features = [
    t("trustBilingual"),
    t("trustWalkIn"),
    t("trustInsurance"),
    t("trustPricing"),
  ];

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-green-deep text-mint-bg"
    >
      {/* Foto a sangre completa: médico atendiendo a una familia hispana */}
      <Image
        src="/images/hero-bg.webp"
        alt="Médico atendiendo a una familia hispana en Clínica Hispana Mangum, Houston"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[35%_22%]"
      />
      {/* Overlay de marca: oscuro a la izquierda para legibilidad del texto */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-green-deep/95 via-green-primary/85 to-green-deep/85 md:to-green-deep/40"
      />
      {/* Oscurecido extra inferior solo en móvil */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-green-deep via-green-deep/60 to-transparent md:hidden"
      />
      {/* Glows decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-gold-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-72 w-72 rounded-full bg-red-accent/15 blur-3xl"
      />
      {/* Funde el hero con la sección Servicios */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[-1] h-40 bg-linear-to-b from-transparent to-mint-warm"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-xl text-center md:mx-0 md:text-left lg:max-w-2xl">
          {/* Badge de reseñas de Google */}
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur">
              <StarRating rating={place.averageRating} starClassName="h-4 w-4" />
              <span className="text-sm font-semibold text-white">
                {t("reviewsBadge", { count: place.totalReviews })}
              </span>
            </span>
          </Reveal>

          {/* Título */}
          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 font-heading text-[2.6rem] font-extrabold uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.5rem]"
            >
              {t("titleLead")}{" "}
              <span className="relative inline-block text-gold-accent">
                {t("titleHighlight")}
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-linear-to-r from-gold-accent to-red-accent" />
              </span>
              <span className="mt-3 block text-2xl font-bold normal-case tracking-normal text-mint-bg/90 sm:text-3xl">
                {t("titleTail")}
              </span>
            </h1>
          </Reveal>

          {/* Subtítulo con servicios clave (SEO local) */}
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-mint-bg/85 md:mx-0">
              {t("subtitle")}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={t("ctaCallAria", {
                  phone: CONTACT_INFO.phoneDisplay,
                })}
                className={cn(ctaButton({ variant: "gold", size: "lg" }))}
              >
                <Phone className="h-5 w-5" />
                {t("ctaCall")} · {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("ctaDirectionsAria", { address: fullAddress })}
                className={cn(ctaButton({ variant: "white", size: "lg" }))}
              >
                <Navigation className="h-5 w-5" />
                {t("ctaDirections")}
              </a>
            </div>
            {/* Enlace secundario al formulario de contacto (misma página).
                ScrollLink hace scroll suave sin ensuciar la URL con /#. */}
            <ScrollLink
              href="/#contacto"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-mint-bg/85 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <PenLine className="h-4 w-4 text-gold-accent" />
              {t("ctaForm")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ScrollLink>
          </Reveal>

          {/* Lista de 4 features con checks */}
          <Reveal delay={320}>
            <ul className="mx-auto mt-9 grid max-w-md grid-cols-1 gap-x-6 gap-y-3 text-left sm:grid-cols-2 md:mx-0">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-[0.95rem] font-medium text-white"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-accent text-green-deep">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Tira de ubicación + horario */}
          <Reveal delay={400}>
            <div className="mt-9 flex flex-col items-center gap-x-6 gap-y-2.5 border-t border-white/15 pt-6 text-sm text-mint-bg/85 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold-accent" />
                {fullAddress}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-gold-accent" />
                {t("hoursLine")}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
