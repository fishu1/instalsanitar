import { site, servicii } from "@/site.config";
import { PromoBar } from "@/components/Promo.Bar";
import Image from "next/image";

export default function Home() {
  const telHref = `tel:${site.telefonLink}`;
  const waHref = `https://wa.me/${site.whatsapp}`;

  return (
    <main className="relative">
      <PromoBar />
      <Header telHref={telHref} />
      <Hero telHref={telHref} waHref={waHref} />
      <Servicii />
      <DeCe />
      <Zone />
      <Contact telHref={telHref} waHref={waHref} />
      <Footer />
    </main>
  );
}

/* ── Header ─────────────────────────────────────────────── */
function Header({ telHref }: { telHref: string }) {
  return (
    <header className="relative z-20 border-b border-petrol-line/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center">
          <Image
            src="/Logo1.png"
            alt="InstalSanitar.ro"
            width={180}
            height={40}
            priority
            className="h-16 w-auto"
          />
        </a>
        <a
          href={telHref}
          className="hidden items-center gap-2 rounded-full border border-cupru-500/50 px-4 py-2 text-sm font-500 text-cupru-400 transition-colors hover:bg-cupru-500/10 sm:inline-flex"
        >
          <PhoneIcon /> {site.telefon}
        </a>
      </div>
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────── */
function Hero({ telHref, waHref }: { telHref: string; waHref: string }) {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* imaginea de fundal */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Background-image.PNG')" }}
      />
      {/* strat întunecat peste imagine, ca textul să rămână lizibil */}
      <div className="pointer-events-none absolute inset-0 bg-petrol-950/70" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-petrol-line/60 bg-petrol-900/60 px-3 py-1 text-xs font-500 uppercase tracking-widest text-cupru-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cupru-400" />
          {site.oras}, jud. {site.judet}
        </span>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-600 leading-[1.05] tracking-tight text-cream sm:text-6xl">
          Instalatorul pe care îl suni{" "}
          <span className="text-cupru-400">o singură dată.</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
          Montaj centrale, desfundări, reparații și amenajări complete în{" "}
          {site.razaKm}. Lucrare făcută ca la
          carte, cu preț spus din start.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cupru-500 px-6 py-3.5 font-600 text-petrol-950 shadow-lg shadow-cupru-600/20 transition-transform hover:scale-[1.02] active:scale-100"
          >
            <PhoneIcon /> Sună acum
          </a>
          <a
            href={waHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-petrol-line bg-petrol-900/50 px-6 py-3.5 font-500 text-cream transition-colors hover:bg-petrol-800"
          >
            <WhatsAppIcon /> Scrie pe WhatsApp
          </a>
        </div>

        <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-petrol-line/40 pt-6">
          <Stat k="Urgențe" v={site.urgente} />
          <Stat k="Program" v="L–S, 8–20" />
          <Stat k="Rază" v={`${site.razaKm}`} />
        </dl>
      </div>
    </section>
  );
}


function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widest text-zinc-500">{k}</dt>
      <dd className="mt-1 font-display text-lg font-600 text-cream">{v}</dd>
    </div>
  );
}

/* ── Servicii ───────────────────────────────────────────── */
function Servicii() {
  return (
    <section id="servicii" className="relative bg-petrol-900">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-cupru-400">Ce fac</p>
            <h2 className="mt-2 font-display text-3xl font-600 tracking-tight text-cream sm:text-4xl">
              Servicii
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-petrol-line/40 bg-petrol-line/40 sm:grid-cols-2 lg:grid-cols-3">
          {servicii.map((s, i) => (
            <article
              key={s.slug}
              className="group relative bg-petrol-900 p-7 transition-colors hover:bg-petrol-800"
            >
              <span className="font-display text-sm font-600 text-cupru-500/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-600 text-cream">
                {s.titlu}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {s.scurt}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Pagini detaliate pentru fiecare serviciu — în curând.
        </p>
      </div>
    </section>
  );
}

/* ── De ce eu ───────────────────────────────────────────── */
function DeCe() {
  const puncte = [
    { t: "Preț spus din start", d: "Afli cât costă înainte să încep, nu după. Fără surprize la final." },
    { t: "Vin cu ce trebuie", d: "Scule și materiale pregătite, ca lucrarea să se termine dintr-o vizită." },
    { t: "Lucrare curată", d: "Las în urmă o instalație ordonată și locul strâns, nu un șantier." },
    { t: "Om din zonă", d: `Sunt aproape — ajung repede în ${site.oras} și satele din jur, plus deplasări în afara țării.` },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-widest text-cupru-400">De ce eu</p>
            <h2 className="mt-2 font-display text-3xl font-600 leading-tight tracking-tight text-cream sm:text-4xl">
              Meseriaș serios, fără bătăi de cap.
            </h2>
            <div className="pipe-rule mt-6 max-w-xs" />
            <p className="mt-6 max-w-md leading-relaxed text-zinc-300">
              Nu promit ce nu pot face. Vin, mă uit, îți spun clar ce e de făcut
              și cât costă, apoi rezolv. Așa lucrez de fiecare dată.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-petrol-line/40 bg-petrol-line/40 sm:grid-cols-2">
            {puncte.map((p) => (
              <div key={p.t} className="bg-petrol-950 p-6">
                <div className="flex items-center gap-2 text-cupru-400">
                  <CheckIcon />
                  <h3 className="font-display text-lg font-600 text-cream">{p.t}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Zone ───────────────────────────────────────────────── */
function Zone() {
  return (
    <section className="relative bg-petrol-900">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-widest text-cupru-400">Unde activez</p>
        <h2 className="mt-2 font-display text-2xl font-600 text-cream sm:text-3xl">
          Pornesc din {site.oras}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {site.zone.map((z) => (
        
          ))}
          <li className="rounded-full border border-cupru-500/40 bg-cupru-500/10 px-4 py-1.5 text-sm text-cupru-400">
            + deplasări în Europa
          </li>
        </ul>
      </div>
    </section>
  );
}

/* ── Contact ────────────────────────────────────────────── */
function Contact({ telHref, waHref }: { telHref: string; waHref: string }) {
  return (
    <section id="contact" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_120%_at_20%_120%,#164249_0%,#0b2529_50%,#071a1c_100%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl border border-petrol-line/50 bg-petrol-900/60 p-8 sm:p-12">
          <h2 className="max-w-2xl font-display text-3xl font-600 leading-tight tracking-tight text-cream sm:text-4xl">
            Ai o lucrare? Hai să vorbim.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-zinc-300">
            Sună sau scrie pe WhatsApp cu ce ai nevoie. Îți răspund și stabilim
            când trec pe la tine.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cupru-500 px-6 py-3.5 font-600 text-petrol-950 transition-transform hover:scale-[1.02]"
            >
              <PhoneIcon /> {site.telefon}
            </a>
            <a
              href={waHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-petrol-line bg-petrol-950/60 px-6 py-3.5 font-500 text-cream transition-colors hover:bg-petrol-800"
            >
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>

          <div className="mt-8 grid gap-4 border-t border-petrol-line/40 pt-6 text-sm sm:grid-cols-2">
            <p className="text-zinc-400">
              <span className="text-zinc-500">Program: </span>
              {site.program}
            </p>
            <p className="text-zinc-400">
              <span className="text-zinc-500">Urgențe: </span>
              {site.urgente}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
function Footer() {
  const an = new Date().getFullYear();
  return (
    <footer className="border-t border-petrol-line/40 bg-petrol-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-zinc-500">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-cream">
            Instal<span className="text-cupru-400">Sanitar</span>.ro
          </span>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a href="/contact" className="hover:text-cupru-400">Contact</a>
            <a href="/confidentialitate" className="hover:text-cupru-400">Confidențialitate</a>
            <a href="/termeni" className="hover:text-cupru-400">Termeni</a>
            <a href="/cookies" className="hover:text-cupru-400">Cookies</a>
          </nav>
        </div>
        <span>© {an} · {site.oras}, jud. {site.judet}</span>
      </div>
    </footer>
  );
}
/* ── Fundal cu conducte (SVG decorativ) ─────────────────── */
function PipesBg() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="p" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M0 60 H120 M60 0 V120" stroke="var(--cupru-500)" strokeWidth="1" fill="none" />
          <circle cx="60" cy="60" r="4" fill="none" stroke="var(--cupru-500)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p)" />
    </svg>
  );
}


/* ── Iconuri ────────────────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a2 2 0 01-2 2A16 16 0 013 6.5 2 2 0 015 4.5"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 2a8 8 0 016.9 12l.6.9-.4 1.4-1.5-.4-.9.5A8 8 0 1112 4zm-2.7 3.6c-.2 0-.5 0-.7.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 5 4.2 2.4.9 2.9.7 3.4.7.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3l-.7-.4-1.6-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.4z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}