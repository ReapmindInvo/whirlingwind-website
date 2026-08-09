import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/healthcare-ai", "/iot-medical-devices", "/portfolio", "/careup-ai", "/about", "/contact"];
  return routes.map((r) => ({
    url: `${site.domain}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
