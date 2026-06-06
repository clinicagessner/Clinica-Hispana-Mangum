"use client";

import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";
import { ScrollLink } from "@/components/shared/scroll-link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { CONTACT_INFO } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/constants";
import { ctaButton } from "@/lib/button-styles";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const path = href.split("#")[0];
    if (!path || path === "/") return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-green-light/80 bg-mint-warm/90 backdrop-blur supports-[backdrop-filter]:bg-mint-warm/70">
      {/* Acento dorado fino superior */}
      <div className="h-0.5 w-full bg-gradient-to-r from-green-primary via-gold-accent to-red-accent" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Clínica Hispana Mangum" className="shrink-0">
          <Logo priority />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          <NavItem href="/" label={t("home")} active={pathname === "/"} />
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.key}
              href={link.href}
              label={t(link.key)}
              active={isActive(link.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            aria-label={`${t("callNow")} ${CONTACT_INFO.phoneFormatted}`}
            className={cn(ctaButton({ size: "sm" }), "hidden sm:inline-flex")}
          >
            <Phone className="h-4 w-4" />
            {CONTACT_INFO.phoneDisplay}
          </a>

          {/* Mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t("openMenu")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-green-light text-green-dark lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-mint-warm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-2 flex flex-col gap-1 px-4"
                aria-label="Móvil"
              >
                <MobileItem
                  href="/"
                  label={t("home")}
                  onNavigate={() => setOpen(false)}
                />
                {NAV_LINKS.map((link) => (
                  <MobileItem
                    key={link.key}
                    href={link.href}
                    label={t(link.key)}
                    onNavigate={() => setOpen(false)}
                  />
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-3 px-4">
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className={cn(ctaButton({ size: "md" }), "w-full")}
                >
                  <Phone className="h-4 w-4" />
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <LanguageSwitcher className="self-start" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <ScrollLink
      href={href}
      className={cn(
        "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        active
          ? "text-green-dark"
          : "text-slate-primary hover:text-green-dark",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-accent transition-transform duration-200",
          active ? "scale-x-100" : "scale-x-0",
        )}
      />
    </ScrollLink>
  );
}

function MobileItem({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
}) {
  return (
    <ScrollLink
      href={href}
      onNavigate={onNavigate}
      className="rounded-xl px-3 py-3 font-heading text-lg font-semibold text-slate-dark hover:bg-mint-bg-alt"
    >
      {label}
    </ScrollLink>
  );
}
