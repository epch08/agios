import type { Metadata } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["600", "800"],
  display: "swap",
});
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const titre = "Agios : récupère les frais bancaires prélevés à tort";
const description =
  "Dépose ton relevé. On repère chaque ligne de frais, on la compare aux plafonds légaux et tu reçois ton courrier de réclamation.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: { title: titre, description, locale: "fr_FR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
