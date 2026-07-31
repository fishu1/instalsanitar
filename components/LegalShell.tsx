import Link from "next/link";
import { site, firma, firmaCompleta } from "@/site.config";

export function LegalShell({
  titlu,
  children,
}: {
  titlu: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-petrol-950">
      <header className="border-b border-petrol-line/40">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-600 text-cream">
            Instal<span className="text-cupru-400">Sanitar</span>
            <span className="text-zinc-500">.ro</span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-cupru-400">
            ← Acasă
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-3xl font-600 tracking-tight text-cream sm:text-4xl">
          {titlu}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Ultima actualizare: {firma.actualizat}
        </p>

        {!firmaCompleta && (
          <div className="mt-6 rounded-xl border border-cupru-500/40 bg-cupru-500/10 p-4 text-sm text-cupru-400">
            Datele firmei sunt provizorii. Completează-le în{" "}
            <code className="rounded bg-petrol-900 px-1.5 py-0.5">site.config.ts</code>{" "}
            (blocul <code className="rounded bg-petrol-900 px-1.5 py-0.5">firma</code>).
          </div>
        )}

        <div className="prose-legal mt-8">{children}</div>
      </article>

      <footer className="border-t border-petrol-line/40">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 text-sm text-zinc-500">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/confidentialitate" className="hover:text-cupru-400">Confidențialitate</Link>
            <Link href="/termeni" className="hover:text-cupru-400">Termeni</Link>
            <Link href="/cookies" className="hover:text-cupru-400">Cookies</Link>
            <Link href="/contact" className="hover:text-cupru-400">Contact</Link>
          </div>
          <span className="mt-2">© {new Date().getFullYear()} {firma.denumire} · {site.oras}, jud. {site.judet}</span>
        </div>
      </footer>
    </main>
  );
}
