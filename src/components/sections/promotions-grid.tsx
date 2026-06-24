"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Navigation,
  PenLine,
  Phone,
  X,
} from "lucide-react";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export interface PromotionGridItem {
  slug: string;
  src: string;
  alt: string;
  title: string;
  price: string | null;
  blurb: string;
  includes: string[];
}

interface Labels {
  limitedTime: string;
  priceLabel: string;
  includesLabel: string;
  viewDetails: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
}

interface Contact {
  phone: string;
  phoneDisplay: string;
  mapsUrl: string;
}

export function PromotionsGrid({
  items,
  labels,
  contact,
  formHref = "#lead-form",
}: {
  items: PromotionGridItem[];
  labels: Labels;
  contact: Contact;
  formHref?: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Deep-link: al llegar con /promociones#<slug> (p. ej. desde el carrusel de
  // la home) abre el dialog de esa promoción y limpia el hash.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const idx = items.findIndex((it) => it.slug === hash);
    if (idx < 0) return;
    const raf = requestAnimationFrame(() => {
      setOpen(idx);
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    });
    return () => cancelAnimationFrame(raf);
  }, [items]);

  // Escape para cerrar, bloqueo de scroll y foco al abrir.
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = open === null ? null : items[open];

  return (
    <>
      {/* Grid de cards compactas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <article
            key={item.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-green-light bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-primary/10"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-red-accent-bg px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-red-accent">
                <Clock className="h-3 w-3" />
                {labels.limitedTime}
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold leading-tight text-slate-dark">
                {item.title}
              </h3>
              {item.price && (
                <p className="mt-1 flex items-baseline gap-1.5">
                  <span className="text-xs font-medium text-slate-muted">
                    {labels.priceLabel}
                  </span>
                  <span className="font-heading text-2xl font-extrabold text-green-primary">
                    {item.price}
                  </span>
                </p>
              )}
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-muted">
                {item.blurb}
              </p>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className={cn(
                  ctaButton({ variant: "outline", size: "sm" }),
                  "mt-4 w-full",
                )}
              >
                {labels.viewDetails}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Dialog con el detalle + CTAs */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-dialog-title"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-green-deep/90 p-4 backdrop-blur-sm sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl sm:grid-cols-2"
          >
            <button
              ref={closeRef}
              type="button"
              aria-label={labels.close}
              onClick={() => setOpen(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-dark shadow-md transition-colors hover:bg-mint-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-primary"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Imagen */}
            <div className="relative aspect-4/5 w-full sm:h-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(min-width: 640px) 24rem, 100vw"
                className="object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col p-6 sm:p-7">
              <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-red-accent-bg px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-accent">
                <Clock className="h-3.5 w-3.5" />
                {labels.limitedTime}
              </span>
              <h2
                id="promo-dialog-title"
                className="mt-4 font-heading text-2xl font-extrabold leading-tight tracking-tight text-slate-dark"
              >
                {active.title}
              </h2>
              {active.price && (
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm font-medium text-slate-muted">
                    {labels.priceLabel}
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-green-primary">
                    {active.price}
                  </span>
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-slate-primary">
                {active.blurb}
              </p>

              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-gold-accent-dark">
                {labels.includesLabel}
              </p>
              <ul className="mt-3 space-y-2">
                {active.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-medium text-slate-primary"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-light text-green-dark">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTAs (contextuales a esta promoción) */}
              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={`tel:${contact.phone}`}
                  aria-label={`${labels.ctaCall} ${contact.phoneDisplay} — ${active.title}`}
                  className={cn(ctaButton({ variant: "gold", size: "md" }))}
                >
                  <Phone className="h-5 w-5" />
                  {labels.ctaCall} · {contact.phoneDisplay}
                </a>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(ctaButton({ variant: "outline", size: "md" }))}
                  >
                    <Navigation className="h-5 w-5" />
                    {labels.ctaDirections}
                  </a>
                  <a
                    href={formHref}
                    onClick={() => setOpen(null)}
                    className={cn(ctaButton({ variant: "ghost", size: "md" }))}
                  >
                    <PenLine className="h-5 w-5" />
                    {labels.ctaForm}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
