import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { himServices } from "@/lib/him-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/healthcare-ai", "/iot-medical-devices", "/health-information-management", "/portfolio", "/careup-ai", "/about", "/contact"];
  const himRoutes = himServices.map((s) => `/health-information-management/${s.slug}`);
  return [...routes, ...himRoutes].map((r) => ({
    url: `${site.domain}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : r.startsWith("/health-information-management/") ? 0.7 : 0.8,
  }));
}
