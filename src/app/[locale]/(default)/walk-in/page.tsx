import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import {
  Clock,
  DoorOpen,
  HeartHandshake,
  Phone,
  Navigation,
  Wallet,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Reveal } from "@/components/animations/reveal";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { JsonLdBreadcrumb, JsonLdFaqPage } from "@/components/seo/json-ld";
import { CONTACT_INFO } from "@/lib/constants";
import { absoluteUrl, buildAlternates } from "@/lib/seo";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

// COPY local bilingüe (sin message keys), propio de esta landing.
const COPY = {
  es: {
    metaTitle: "Clínica Sin Cita en Houston - Walk-in en Español",
    metaDescription:
      "Atención médica sin cita previa en Houston, en español, con o sin seguro. Abierto de lunes a domingo de 9 AM a 9 PM.",
    eyebrow: "Atención sin cita previa",
    title: "Te atendemos hoy, sin cita y en español",
    subtitle:
      "No necesitas agendar. Llega a Clínica Hispana Mangum cuando lo necesites: te recibimos con o sin seguro, todos los días de 9 AM a 9 PM.",
    call: "Llamar ahora",
    directions: "Cómo llegar",
    benefitsTitle: "Por qué venir sin cita",
    benefits: [
      { title: "Sin cita previa", body: "Llega cuando puedas; te atendemos el mismo día." },
      { title: "Con o sin seguro", body: "Precios accesibles y transparentes para todos." },
      { title: "100% en español", body: "Un equipo que te escucha y te explica en tu idioma." },
      { title: "Todos los días", body: "Abierto de lunes a domingo, de 9 AM a 9 PM." },
    ],
    stepsTitle: "Cómo funciona",
    steps: [
      { n: "1", title: "Llega o llama", body: "Ven directamente o llámanos para avisar que vas en camino." },
      { n: "2", title: "Te evaluamos", body: "Nuestro equipo médico te atiende en español el mismo día." },
      { n: "3", title: "Recibes tu plan", body: "Diagnóstico, tratamiento y los siguientes pasos, claros." },
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿De verdad no necesito cita?",
        answer: "Correcto. Puedes llegar sin cita de lunes a domingo de 9 AM a 9 PM.",
      },
      {
        question: "¿Atienden si no tengo seguro?",
        answer: "Sí, atendemos con o sin seguro, con precios accesibles.",
      },
      {
        question: "¿Qué servicios puedo recibir sin cita?",
        answer:
          "Consultas de medicina familiar, laboratorio, exámenes, tratamiento de infecciones y más.",
      },
    ],
    finalTitle: "Estamos abiertos. Ven cuando nos necesites.",
    finalBody: "2912 Mangum Rd Ste. A, Houston, TX 77092",
  },
  en: {
    metaTitle: "Walk-in Clinic in Houston - No Appointment, Spanish",
    metaDescription:
      "Walk-in medical care in Houston, in Spanish, with or without insurance. Open Monday to Sunday, 9 AM to 9 PM.",
    eyebrow: "Walk-ins welcome",
    title: "We see you today—no appointment, in Spanish",
    subtitle:
      "No need to schedule. Come to Clínica Hispana Mangum whenever you need: we see you with or without insurance, every day from 9 AM to 9 PM.",
    call: "Call now",
    directions: "Get directions",
    benefitsTitle: "Why walk in",
    benefits: [
      { title: "No appointment", body: "Come when you can; we see you the same day." },
      { title: "With or without insurance", body: "Affordable, transparent pricing for everyone." },
      { title: "100% in Spanish", body: "A team that listens and explains in your language." },
      { title: "Every day", body: "Open Monday to Sunday, 9 AM to 9 PM." },
    ],
    stepsTitle: "How it works",
    steps: [
      { n: "1", title: "Walk in or call", body: "Come directly or call to let us know you're on the way." },
      { n: "2", title: "We evaluate you", body: "Our medical team sees you in Spanish the same day." },
      { n: "3", title: "Get your plan", body: "Clear diagnosis, treatment and next steps." },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "Do I really not need an appointment?",
        answer: "Correct. You can walk in Monday to Sunday from 9 AM to 9 PM.",
      },
      {
        question: "Do you see patients without insurance?",
        answer: "Yes, we see patients with or without insurance, with affordable pricing.",
      },
      {
        question: "Which services can I get as a walk-in?",
        answer:
          "Family medicine visits, lab work, exams, infection treatment and more.",
      },
    ],
    finalTitle: "We're open. Come whenever you need us.",
    finalBody: "2912 Mangum Rd Ste. A, Houston, TX 77092",
  },
} as const;

const BENEFIT_ICONS = [DoorOpen, Wallet, HeartHandshake, Clock];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = COPY[locale === "en" ? "en" : "es"];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: buildAlternates("/walk-in", locale as Locale),
  };
}

export default async function WalkInPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const loc = locale as Locale;
  const c = COPY[loc === "en" ? "en" : "es"];

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: "Home", url: absoluteUrl("/", loc) },
          { name: c.eyebrow, url: absoluteUrl("/walk-in", loc) },
        ]}
      />
      <JsonLdFaqPage
        faqs={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-primary via-green-dark to-green-deep py-20 text-mint-bg lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-16 h-96 w-96 rounded-full bg-gold-accent/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-accent-light">
              {c.eyebrow}
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {c.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mint-bg/85">
              {c.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={cn(ctaButton({ variant: "gold", size: "lg" }))}
              >
                <Phone className="h-5 w-5" />
                {c.call}
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(ctaButton({ variant: "white", size: "lg" }))}
              >
                <Navigation className="h-5 w-5" />
                {c.directions}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beneficios */}
      <section className="bg-gradient-to-b from-mint-warm to-mint-bg py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-slate-dark">
            {c.benefitsTitle}
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <Reveal key={b.title} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-green-light bg-white p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-bg text-green-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-slate-dark">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                      {b.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-gradient-to-b from-mint-bg to-mint-warm py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-slate-dark">
            {c.stepsTitle}
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {c.steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-green-light bg-white p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-primary font-heading text-lg font-extrabold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-slate-dark">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-b from-mint-warm to-mint-bg py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-3xl font-extrabold tracking-tight text-slate-dark">
            {c.faqTitle}
          </h2>
          <div className="mt-8 rounded-2xl border border-green-light bg-white px-6 py-2 shadow-sm">
            <FaqAccordion
              items={c.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-b from-mint-bg to-green-deep py-16 text-center">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-gradient-to-br from-green-deep via-green-dark to-green-deep px-6 py-12 text-mint-bg shadow-2xl shadow-green-deep/20 sm:px-10">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            {c.finalTitle}
          </h2>
          <p className="mt-3 text-mint-bg/80">{c.finalBody}</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={cn(ctaButton({ variant: "gold", size: "lg" }))}
            >
              <Phone className="h-5 w-5" />
              {CONTACT_INFO.phoneDisplay}
            </a>
            <Link
              href="/services"
              className={cn(ctaButton({ variant: "white", size: "lg" }))}
            >
              {loc === "en" ? "View services" : "Ver servicios"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
