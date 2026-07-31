import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site, firma } from "@/site.config";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalShell titlu="Politica de confidențialitate">
      <p>
        Această politică explică modul în care <strong>{firma.denumire}</strong> tratează
        datele persoanelor care vizitează site-ul <strong>{site.domeniu}</strong> sau ne contactează.
      </p>

      <h2>Cine suntem</h2>
      <p>
        Operatorul site-ului este {firma.denumire}, CUI {firma.cui},
        înregistrată la Registrul Comerțului cu {firma.regCom}, cu sediul în {firma.sediu}.
        Ne poți contacta prin apel telefonic sau WhatsApp la {site.telefon}.
      </p>

      <h2>Ce date colectăm</h2>
      <p>
        Site-ul este pur informativ. <strong>Nu are formulare de contact și nu colectează
        automat date personale.</strong> Nu folosim conturi, comenzi online sau newsletter.
      </p>
      <p>
        Colectăm date personale doar atunci când ne contactezi tu, telefonic sau prin WhatsApp,
        pentru a stabili o lucrare. Este vorba strict de:
      </p>
      <ul>
        <li><strong>numele</strong> tău — ca să știm cu cine vorbim;</li>
        <li><strong>numărul de telefon</strong> — ca să te putem contacta;</li>
        <li><strong>adresa</strong> — ca meseriașul să ajungă la tine;</li>
        <li>detaliile despre lucrarea de care ai nevoie.</li>
      </ul>
      <p>
        Folosim aceste date exclusiv pentru a-ți răspunde, a stabili intervenția și a ajunge la
        locul lucrării. Nu le folosim în scop de marketing, nu le vindem și nu le transmitem
        altcuiva, în afara cazului în care legea ne obligă.
      </p>

      <h2>Date tehnice</h2>
      <p>
        Serverul poate păstra, în jurnale tehnice standard, adresa IP și tipul de browser, strict
        pentru funcționarea și securitatea site-ului. Aceste jurnale nu sunt folosite pentru
        profilare și se șterg periodic.
      </p>

      <h2>Cât păstrăm datele</h2>
      <p>
        Datele primite telefonic sau prin WhatsApp le păstrăm doar cât e nevoie pentru lucrare și
        eventualele obligații legale (de exemplu, garanție sau contabilitate). Apoi le ștergem.
      </p>

      <h2>Drepturile tale</h2>
      <p>
        Conform Regulamentului (UE) 2016/679 (GDPR), ai dreptul de acces, rectificare, ștergere,
        restricționare, opoziție și portabilitate a datelor. Pentru a le exercita, scrie-ne pe WhatsApp.
      </p>
      <p>
        Dacă ești nemulțumit de modul în care îți tratăm datele, te poți adresa Autorității Naționale
        de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP),{" "}
        <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">dataprotection.ro</a>.
      </p>

      <h2>Modificări</h2>
      <p>
        Putem actualiza această politică. Versiunea curentă este cea afișată pe această pagină, cu
        data actualizării de mai sus.
      </p>
    </LegalShell>
  );
}
