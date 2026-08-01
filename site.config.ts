// ─────────────────────────────────────────────────────────────
//  Editezi DOAR fisierul asta ca sa schimbi datele de contact.
//  Dupa modificare pe VPS: git pull && npm run build && pm2 restart instalsanitar
// ─────────────────────────────────────────────────────────────

export const site = {
  nume: "InstalSanitar.ro",
  domeniu: "https://instalsanitar.ro",

  telefon: "0743 664 411",
  telefonLink: "+40743664411",
  whatsapp: "40743664411", // international, fara + si fara spatii

  program: "Luni–Sâmbătă, 08:00–20:00",
  urgente: "non-stop",

  oras: "Rusănești",
  judet: "Olt",
  zone: [
    "Rusănești",
    "Caracal",
    "Corabia",
    "Osica de Sus",
    "Stoenești",
    "Vădastra",
    "Obârșia",
    "Scărișoara",
  ],
  razaKm: 40,
};

// ─────────────────────────────────────────────────────────────
//  DATELE FIRMEI — completeaza cu datele reale ale SRL-ului.
//  Apar in paginile legale si in footer. OBLIGATORII pentru
//  firme din Romania (ANPC cere identificare completa).
// ─────────────────────────────────────────────────────────────
export const firma = {
  denumire: "Instalsanitar Aeroterm S.R.L.",
  cui: "RO48824708",                          // completeaza de pe certificatul de inregistrare, ex: RO12345678
  regCom: "J28/831/2023",             // completeaza de pe certificat, ex: J28/123/2023
  sediu: "Strada Bisericii, nr. 22, Rusănești, jud. Olt",
  emailContact: "instalsanitar.aeroterm@gmail.com",
  // Data ultimei actualizari a documentelor legale (o schimbi cand modifici textele)
  actualizat: "iulie 2026",
};
// Pana completezi, paginile arata un avertisment discret ca datele sunt provizorii.
export const firmaCompleta = !firma.denumire.includes("[");

export type Serviciu = {
  slug: string;
  titlu: string;
  scurt: string;
};

export const servicii: Serviciu[] = [
  {
    slug: "centrale-termice",
    titlu: "Montaj centrale termice",
    scurt: "Instalare, punere în funcțiune și racordare pentru centrale pe gaz sau electrice.",
  },
  {
    slug: "desfundari",
    titlu: "Desfundări",
    scurt: "Scurgeri înfundate, coloane și canalizare — intervenție rapidă, fără spargeri inutile.",
  },
  {
    slug: "reparatii-tevi",
    titlu: "Reparații țevi",
    scurt: "Depistare pierderi, înlocuit porțiuni sparte, refacut îmbinări care picură.",
  },
  {
    slug: "amenajari-bai",
    titlu: "Amenajări băi",
    scurt: "De la trasee de apă la montaj obiecte sanitare — baie funcțională, gata de folosit.",
  },
  {
    slug: "instalatii-case-noi",
    titlu: "Instalații de la zero",
    scurt: "Proiectare și execuție completă a instalației sanitare pentru case noi.",
  },
  {
    slug: "curatare-panouri-solare",
    titlu: "Curățare panouri solare",
    scurt: "Curățare profesională care readuce randamentul panourilor la nivelul de la montaj.",
  },
];
