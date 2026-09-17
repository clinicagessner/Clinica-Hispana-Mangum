"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

type Props = { services: { value: string; label: string }[] };

// El formulario (react-hook-form + zod + select) solo se descarga cuando la
// sección se acerca a la pantalla, para no cargarlo en el JS inicial de la home.
const ContactForm = dynamic<Props>(
  () => import("@/components/forms/contact-form").then((m) => m.ContactForm),
  { ssr: false, loading: () => <div className="min-h-[560px]" aria-hidden /> },
);

export function ContactFormLazy({ services }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[560px]">
      {show ? <ContactForm services={services} /> : null}
    </div>
  );
}
