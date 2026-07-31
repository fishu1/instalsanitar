import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(site.domeniu),
  title: {
    default: `${site.nume} — Instalator ${site.oras} si imprejurimi`,
    template: `%s — ${site.nume}`,
  },
  description:
    `Instalator in ${site.oras}, judetul ${site.judet}. Montaj centrale termice, desfundari, ` +
    `reparatii tevi, amenajari bai si instalatii de la zero. Urgente ${site.urgente}.`,
  keywords: ["instalator", site.oras, site.judet, "montaj centrale", "desfundari", "reparatii tevi", "amenajari bai"],
  openGraph: {
    title: `${site.nume} — Instalator ${site.oras}`,
    description: `Montaj centrale, desfundari, reparatii si amenajari in ${site.oras} si zona din jur.`,
    url: site.domeniu,
    siteName: site.nume,
    locale: "ro_RO",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#071a1c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.nume,
    url: site.domeniu,
    telephone: site.telefonLink,
    description: `Instalator in ${site.oras}, jud. ${site.judet}. Montaj centrale, desfundari, reparatii tevi, amenajari bai.`,
    areaServed: site.zone.map((z) => ({ "@type": "City", name: z })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.oras,
      addressRegion: site.judet,
      addressCountry: "RO",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "20:00",
    },
  };

  return (
    <html lang="ro">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
