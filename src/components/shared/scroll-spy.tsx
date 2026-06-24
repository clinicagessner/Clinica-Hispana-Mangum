"use client";

import { useEffect } from "react";

/**
 * Actualiza el hash de la URL (con replaceState, sin ensuciar el historial)
 * según la sección de la home que cruza el centro del viewport al hacer scroll.
 * La primera sección (hero) deja la URL limpia, sin hash.
 *
 * `ids` debe ir en el MISMO orden vertical que las secciones en la página.
 * Coexiste con HashCleaner: este corre al montar (deep-link), el spy después.
 */
export function ScrollSpy({ ids }: { ids: string[] }) {
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const firstId = ids[0];
    let activeId = "";

    const apply = (id: string) => {
      if (id === activeId) return;
      activeId = id;
      const url =
        id === firstId
          ? window.location.pathname + window.location.search
          : `#${id}`;
      window.history.replaceState(null, "", url);
    };

    // Banda estrecha en el centro del viewport: la sección que la cruza es la activa.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) apply(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids]);

  return null;
}
