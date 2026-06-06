import { Montserrat, Roboto_Condensed } from "next/font/google";

// Montserrat → titulares (variable --font-montserrat)
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Roboto Condensed → cuerpo (variable --font-roboto-condensed)
export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
  weight: ["300", "400", "500", "700"],
});

// Clase combinada para aplicar en <html>
export const fontVariables = `${montserrat.variable} ${robotoCondensed.variable}`;
