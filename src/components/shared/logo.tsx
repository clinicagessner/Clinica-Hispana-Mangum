import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Marca de Clínica Hispana Mangum: logo real (/logo-mangum.webp) + wordmark
 * legible al lado (el texto dentro del círculo es muy pequeño en tamaños de
 * header). variant="light" para fondos oscuros.
 */
export function Logo({
  className,
  variant = "default",
  priority = false,
}: {
  className?: string;
  variant?: "default" | "light";
  priority?: boolean;
}) {
  const isLight = variant === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={SITE_CONFIG.logoUrl}
        alt="Logo de Clínica Hispana Mangum"
        width={225}
        height={225}
        priority={priority}
        className="h-11 w-11 shrink-0 object-contain"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[0.62rem] font-semibold uppercase tracking-[0.22em]",
            isLight ? "text-mint-bg-alt" : "text-green-dark",
          )}
        >
          Clínica Hispana
        </span>
        <span
          className={cn(
            "font-heading text-lg font-extrabold uppercase tracking-tight",
            isLight ? "text-white" : "text-slate-dark",
          )}
        >
          Mangum
        </span>
      </span>
    </span>
  );
}
