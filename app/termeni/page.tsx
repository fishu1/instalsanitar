import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site, firma } from "@/site.config";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalShell titlu="Termeni și condiții">
      <p>
        Prin folosirea site-ului <strong>{site.domeniu}</strong>, administrat de{" "}
        <strong>{firma.denumire}</strong>, ești de acord cu termenii de mai jos.
      </p>

      <h2>Despre site</h2>
      <p>
        Site-ul prezintă serviciile de instalații sanitare și termice oferite de {firma.denumire}
        în {site.oras} și zonele din jur. Are rol informativ; nu este un magazin online și nu permite
        comenzi sau plăți online.
      </p>

      <h2>Servicii și programări</h2>
      <p>
        Serviciile se stabilesc direct, telefonic sau prin WhatsApp. Prețul se comunică în urma
        evaluării lucrării, înainte de începerea acesteia. Ne rezervăm dreptul de a refuza lucrări
        care depășesc competențele tehnice sau condițiile de siguranță.
      </p>

      <h2>Proprietate intelectuală</h2>
      <p>
        Conținutul site-ului (texte, design, siglă) aparține {firma.denumire} și nu poate fi
        copiat sau reutilizat fără acord.
      </p>

      <h2>Limitarea răspunderii</h2>
      <p>
        Informațiile de pe site sunt oferite cu bună-credință, dar nu constituie o ofertă contractuală
        fermă. Detaliile concrete ale fiecărei lucrări (preț, durată, materiale) se agreează individual.
      </p>

      <h2>Soluționarea disputelor</h2>
      <p>
        Eventualele reclamații se pot transmite la{" "}
        <a href={`mailto:${firma.emailContact}`}>{firma.emailContact}</a>. Consumatorii se pot adresa și:
      </p>
      <ul>
        <li>
          Autorității Naționale pentru Protecția Consumatorilor (ANPC),{" "}
          <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">anpc.ro</a>
        </li>
        <li>
          platformei SOL (Soluționarea Online a Litigiilor) a Comisiei Europene,{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>
        </li>
      </ul>

      <h2>Legislație aplicabilă</h2>
      <p>
        Acestor termeni li se aplică legislația din România. Litigiile se soluționează de instanțele
        competente de la sediul {firma.denumire}.
      </p>
    </LegalShell>
  );
}
