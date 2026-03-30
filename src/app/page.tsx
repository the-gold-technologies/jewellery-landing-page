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
    <main className="flex min-h-screen flex-col bg-background text-white mesh-gradient relative">
      <header className="fixed top-0 w-full z-60">
        <MetalTicker />
      </header>
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
