import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MetalTicker } from "@/components/MetalTicker";

export default function Home() {
  return (
    <main>
      {/* <MetalTicker /> */}
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <FeatureGrid />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
