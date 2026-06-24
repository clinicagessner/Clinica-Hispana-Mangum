import Script from "next/script";

/**
 * CallRail swap.js: dynamic number insertion (intercambia el número de la
 * clínica por uno de seguimiento para atribuir llamadas a Ads/SEO/etc.).
 * Carga vía next/script. No-op si falta NEXT_PUBLIC_CALLRAIL_SWAP_URL.
 * El dominio cdn.callrail.com ya está en la allowlist de la CSP (next.config).
 */
export function CallRail() {
  const swapUrl = process.env.NEXT_PUBLIC_CALLRAIL_SWAP_URL;
  if (!swapUrl) return null;

  return (
    <Script id="callrail-swap" strategy="afterInteractive" src={swapUrl} />
  );
}
