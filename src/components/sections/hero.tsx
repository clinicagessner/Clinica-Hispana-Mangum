import Image from "next/image";
import { Check, Clock, Navigation, Phone, ShieldCheck, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export async function Hero() {
  const t = await getTranslations("Hero");
  const tc = await getTranslations("Common");
  const place = await getGooglePlaceData();

  return (
    <section className="relative isolate overflow-hidden bg-green-deep text-mint-bg">
      {/* Foto de fondo: médico con familia hispana en la clínica */}
      <Image
        src="/images/hero-bg.webp"
        alt="Médico atendiendo a una familia hispana en Clínica Hispana Mangum, Houston"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[72%_30%] lg:object-center"
      />
      {/* Overlay verde: oscuro a la izquierda (texto), claro a la derecha (familia) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-green-deep/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-green-deep via-green-deep/80 to-green-deep/10"
      />
      {/* Degradado inferior: funde el hero con la sección Servicios (mint-warm) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-[1] h-64 bg-gradient-to-b from-transparent to-mint-warm"
      />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
        {/* Bloque superior: eyebrow + titular + subtítulo + CTAs */}
        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-accent-light backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-red-accent" />
              {t("badge")}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-heading text-[2.7rem] font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
              {t("titleLead")}{" "}
              <span className="relative inline-block text-gold-accent">
                {t("titleHighlight")}
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-gold-accent to-red-accent" />
              </span>
              <span className="mt-2 block text-2xl font-bold normal-case tracking-normal text-mint-bg/85 sm:text-3xl">
                {t("titleTail")}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mint-bg/80">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={cn(ctaButton({ variant: "gold", size: "lg" }))}
              >
                <Phone className="h-5 w-5" />
                {t("ctaCall")} · {CONTACT_INFO.phoneDisplay}
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaButton({ variant: "white", size: "lg" }))}
              >
                <Navigation className="h-5 w-5" />
                {t("ctaDirections")}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Franja diagonal con tarjetas escalonadas (superpuestas) */}
        <div className="relative mt-16 lg:mt-20">
          {/* Banda inclinada de fondo */}
          <div
            aria-hidden
            className="absolute inset-x-[-8%] top-1/2 -z-0 hidden h-48 -translate-y-1/2 -rotate-6 rounded-[2rem] bg-gradient-to-r from-green-primary/25 via-gold-accent/15 to-red-accent/20 ring-1 ring-white/10 sm:block"
          />

          <div className="relative grid gap-5 sm:grid-cols-3">
            {/* Reseñas (solo el número) */}
            <Reveal delay={120}>
              <StatCard className="sm:translate-y-6 sm:-rotate-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-gold-accent text-gold-accent"
                    />
                  ))}
                </div>
                <p className="mt-3 font-heading text-base font-bold text-slate-dark">
                  {tc("ratingSummary", { count: place.totalReviews })}
                </p>
              </StatCard>
            </Reveal>

            {/* Horario */}
            <Reveal delay={200}>
              <StatCard>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-bg text-green-primary">
                  <Clock className="h-6 w-6" />
                </span>
                <p className="mt-3 font-heading text-base font-bold text-slate-dark">
                  Lunes a Domingo
                </p>
                <p className="text-sm text-slate-muted">9:00 AM – 9:00 PM</p>
              </StatCard>
            </Reveal>

            {/* Sin cita / seguro */}
            <Reveal delay={280}>
              <StatCard className="sm:-translate-y-6 sm:rotate-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-accent-bg text-red-accent">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <ul className="mt-3 space-y-1.5">
                  <li className="flex items-center gap-2 text-sm font-medium text-slate-dark">
                    <Check className="h-4 w-4 text-green-primary" />
                    {t("trustWalkIn")}
                  </li>
                  <li className="flex items-center gap-2 text-sm font-medium text-slate-dark">
                    <Check className="h-4 w-4 text-green-primary" />
                    {t("trustInsurance")}
                  </li>
                </ul>
              </StatCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-green-light bg-white p-6 shadow-xl shadow-black/10 transition-transform duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
