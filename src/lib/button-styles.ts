import { cva, type VariantProps } from "class-variance-authority";

/**
 * Estilos de CTA de marketing (links/botones grandes, estética editorial).
 * Para los formularios y UI fina se usan los componentes de @/components/ui.
 */
export const ctaButton = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-green-primary text-white shadow-sm hover:bg-green-dark hover:shadow-md focus-visible:ring-green-primary",
        gold: "bg-gold-accent text-slate-dark shadow-sm hover:bg-gold-accent-dark hover:text-white focus-visible:ring-gold-accent",
        red: "bg-red-accent text-white shadow-sm hover:bg-red-accent-dark focus-visible:ring-red-accent",
        outline:
          "border border-green-primary/70 text-green-dark hover:bg-mint-bg focus-visible:ring-green-primary",
        white:
          "bg-white text-green-dark shadow-sm hover:bg-mint-bg focus-visible:ring-white",
        ghost: "text-green-dark hover:bg-mint-bg focus-visible:ring-green-primary",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type CtaButtonProps = VariantProps<typeof ctaButton>;
