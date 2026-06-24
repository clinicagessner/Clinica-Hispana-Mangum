"use client";

import { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export interface PromotionItem {
  slug: string;
  src: string;
  alt: string;
  openLabel: string;
}

export function PromotionsCarousel({
  items,
  labels,
}: {
  items: PromotionItem[];
  labels: {
    viewDetail: string;
    prev: string;
    next: string;
  };
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y py-2">
          {items.map((item) => (
            <div
              key={item.slug}
              className="min-w-0 shrink-0 grow-0 basis-[78%] px-2.5 sm:basis-1/2 lg:basis-1/3"
            >
              <Link
                href={`/promociones#${item.slug}`}
                aria-label={item.openLabel}
                className="group relative block aspect-4/5 w-full overflow-hidden rounded-2xl border border-green-light bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 78vw"
                  className="object-cover"
                />
                {/* Overlay + etiqueta "Ver promoción" al pasar el cursor */}
                <span className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-green-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-green-dark shadow-sm">
                    {labels.viewDetail}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación (ocultas en móvil; ahí se desliza) */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label={labels.prev}
        className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-green-light bg-white p-3 text-green-dark shadow-md transition-colors hover:bg-mint-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-primary md:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        aria-label={labels.next}
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-green-light bg-white p-3 text-green-dark shadow-md transition-colors hover:bg-mint-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-primary md:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
