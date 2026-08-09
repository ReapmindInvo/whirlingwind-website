import Hero from "@/components/home/Hero";
import StatsRibbon from "@/components/home/StatsRibbon";
import Manifesto from "@/components/home/Manifesto";
import PortfolioStack from "@/components/home/PortfolioStack";
import CareupSpotlight from "@/components/home/CareupSpotlight";
import CapabilityBands from "@/components/home/CapabilityBands";
import TrustSection from "@/components/home/TrustSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsRibbon />
      <Manifesto />
      <PortfolioStack />
      <CareupSpotlight />
      <CapabilityBands />
      <TrustSection />
      <CtaSection />
    </>
  );
}
