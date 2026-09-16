import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/animations/reveal";
import { StarRating } from "@/components/shared/star-rating";
import {
  TestimonialsCarousel,
  type CarouselTestimonial,
} from "@/components/sections/testimonials-carousel";
import { CONTACT_INFO } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const tc = await getTranslations("Common");
  const place = await getGooglePlaceData();

  // Solo reseñas reales de Google. Si la API no devuelve textos, no se muestra el carrusel.
  const items: CarouselTestimonial[] = place.reviews.map((r) => ({
    author: r.author,
    rating: r.rating,
    text: r.text,
    relativeTime: r.relativeTime,
    photoUrl: r.photoUrl,
  }));

  return (
    <section
      id="testimonios"
      className="scroll-mt-24 bg-linear-to-b from-mint-bg to-mint-warm py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-accent-dark">
              {t("eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-primary">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:text-right">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-green-light bg-white px-5 py-3 shadow-sm">
              <StarRating rating={place.averageRating} />
              <span className="font-heading text-sm font-bold text-green-dark">
                {tc("ratingSummary", { count: place.totalReviews })}
              </span>
            </div>
          </Reveal>
        </div>

        {items.length > 0 && (
          <Reveal delay={160} className="mt-12">
            <TestimonialsCarousel items={items} verifiedLabel={t("verified")} />
          </Reveal>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href={CONTACT_INFO.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(ctaButton({ variant: "outline", size: "md" }))}
          >
            {t("reviewCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
