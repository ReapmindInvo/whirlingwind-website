import type { Metadata } from "next";
import { Sora, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "WhirlingWind | Healthcare AI, HMS & IoT Solutions | India",
    template: "%s | WhirlingWind Technologies",
  },
  description: site.description,
  keywords: [
    "healthcare technology company India",
    "healthtech innovation company",
    "healthcare AI development company",
    "custom healthcare LLM development",
    "AI hospital management system",
    "ABDM compliant HMS",
    "health ATM kiosk India",
    "healthcare IoT solutions India",
  ],
  openGraph: {
    type: "website",
    siteName: "WhirlingWind Technologies",
    title: "WhirlingWind | Healthcare AI, HMS & IoT Solutions",
    description: site.description,
    url: site.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: "WhirlingWind | Healthcare AI, HMS & IoT Solutions",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  alternateName: "WhirlingWind",
  url: site.domain,
  logo: `${site.domain}/brand/ww-logo-full.png`,
  description: site.description,
  parentOrganization: { "@type": "Organization", name: site.group },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "sales",
    areaServed: ["IN", "AE", "SA", "US", "EU"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
