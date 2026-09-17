import { useTranslations } from "next-intl";
import { Reveal } from "@/components/animations/reveal";

/**
 * Bloque de definición de entidad: quién es la clínica, dónde está, qué hace
 * y cómo contactarla, con hechos verificables (sitio + ficha de Google). Es el
 * pasaje que buscadores e IAs citan para describir la clínica; mantenerlo
 * alineado con la descripción del Business Profile y con llms.txt.
 */
export function About() {
  const t = useTranslations("About");

  return (
    <section id="que-es" className="scroll-mt-24 bg-mint-bg py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-accent-dark">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-slate-dark sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-primary sm:text-lg">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
