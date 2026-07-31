import type { MetadataRoute } from "next";
import { site } from "@/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nume} — Instalator ${site.oras}`,
    short_name: site.nume,
    description: `Instalator in ${site.oras} si imprejurimi. Montaj centrale, desfundari, reparatii.`,
    start_url: "/",
    display: "standalone",
    background_color: "#071a1c",
    theme_color: "#071a1c",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
    ],
  };
}
