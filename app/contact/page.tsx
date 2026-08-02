import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site, firma } from "@/site.config";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactează InstalSanitar.ro — instalator în ${site.oras}, jud. ${site.judet}. Telefon și WhatsApp.`,
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalShell titlu="Contact">
      <p>
        Suntem la un telefon distanță. Pentru orice lucrare de instalații sanitare sau termice
        în {site.oras} și împrejurimi, sună sau scrie-ne.
      </p>

      <h2>Date de contact</h2>
      <ul>
        <li><strong>Telefon:</strong> <a href={`tel:${site.telefonLink}`}>{site.telefon}</a></li>
        <li><strong>WhatsApp:</strong> <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">{site.telefon}</a></li>
        <li><strong>Email:</strong> <a href={`mailto:${firma.emailContact}`}>{firma.emailContact}</a></li>
        <li><strong>Program:</strong> {site.program} · Urgențe: {site.urgente}</li>
        <li><strong>Zonă:</strong> {site.razaKm}</li>
      </ul>

      <h2>Date firmă</h2>
      <ul>
        <li><strong>Denumire:</strong> {firma.denumire}</li>
        <li><strong>CUI:</strong> {firma.cui}</li>
        <li><strong>Reg. Com.:</strong> {firma.regCom}</li>
        <li><strong>Sediu:</strong> {firma.sediu}</li>
      </ul>

      <h2>Protecția consumatorilor</h2>
      <p>
        Pentru reclamații te poți adresa Autorității Naționale pentru Protecția Consumatorilor,{" "}
        <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer">anpc.ro</a>, sau
        platformei europene SOL,{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">ec.europa.eu/consumers/odr</a>.
      </p>
    </LegalShell>
  );
}
