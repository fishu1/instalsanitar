import { site } from "@/site.config";

export function PromoBar() {
  const telHref = `tel:${site.telefonLink}`;
  return (
    <a
      href={telHref}
      className="group relative block overflow-hidden border-b border-cupru-600/40 bg-gradient-to-r from-cupru-600 via-cupru-500 to-cupru-600"
      aria-label="Serviciu nou: curățare panouri solare — sună acum"
    >
      {/* sclipire care traverseaza banda */}
      <span aria-hidden className="promo-shine" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-4 py-2 text-center text-petrol-950 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-petrol-950/90 px-2.5 py-0.5 text-[11px] font-600 uppercase tracking-wider text-cupru-400">
          <SunIcon /> Nou
        </span>
        <span className="text-sm font-600 leading-tight sm:text-[15px]">
          Curățare panouri solare — redăm randamentul de la montaj. <br> Apasă ca să suni!
        </span>
        <span className="hidden items-center gap-1 text-sm font-600 underline decoration-petrol-950/40 underline-offset-2 group-hover:decoration-petrol-950 sm:inline-flex">
          Sună acum →
        </span>
      </div>
    </a>
  );
}

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
