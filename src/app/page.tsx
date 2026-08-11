import Hero from "@/components/home/Hero";
import StatsRibbon from "@/components/home/StatsRibbon";
import Manifesto from "@/components/home/Manifesto";
import PortfolioStack from "@/components/home/PortfolioStack";
import CareupSpotlight from "@/components/home/CareupSpotlight";
import CapabilityBands from "@/components/home/CapabilityBands";
import TrustSection from "@/components/home/TrustSection";
import LeadCta from "@/components/LeadCta";

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
      <LeadCta source="homepage" title="Let's build the future of healthcare together." subtitle="Whether you run a 50-bed hospital or a multi-country health system — tell us where you're headed and we'll map the fastest route there." />
    </>
  );
}
