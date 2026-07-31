import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Politica de cookies",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalShell titlu="Politica de cookies">
      <p>
        Această pagină explică ce fișiere cookie folosește site-ul <strong>{site.domeniu}</strong>.
      </p>

      <h2>Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere mici pe care un site le poate salva în browserul tău pentru a
        funcționa corect sau pentru a analiza traficul.
      </p>

      <h2>Ce folosim noi</h2>
      <p>
        Site-ul nostru este informativ și <strong>nu folosește cookie-uri de marketing, publicitate
        sau urmărire</strong>. Nu avem Google Analytics, pixeli de social media sau alte instrumente
        de profilare.
      </p>
      <p>
        Pot exista cookie-uri strict tehnice, necesare pentru afișarea corectă a paginilor. Conform
        legii, cookie-urile strict necesare nu au nevoie de consimțământ prealabil.
      </p>

      <h2>Cum le controlezi</h2>
      <p>
        Poți șterge sau bloca oricând cookie-urile din setările browserului tău. Blocarea celor
        tehnice poate afecta afișarea site-ului.
      </p>
    </LegalShell>
  );
}
