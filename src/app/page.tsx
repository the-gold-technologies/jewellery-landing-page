import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { FeatureGrid } from "@/components/FeatureGrid";
import { SecuritySpotlight } from "@/components/SecuritySpotlight";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MetalTicker } from "@/components/MetalTicker";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <FeatureGrid />
      <SecuritySpotlight />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
