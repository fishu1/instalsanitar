import type { MetadataRoute } from "next";
import { site } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const azi = new Date();
  const pagini = ["", "/contact", "/confidentialitate", "/termeni", "/cookies"];
  return pagini.map((p) => ({
    url: `${site.domeniu}${p}`,
    lastModified: azi,
    changeFrequency: p === "" ? "monthly" : "yearly",
    priority: p === "" ? 1 : 0.5,
  }));
}
