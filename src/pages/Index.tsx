import NeuroNodes from "@/components/meetmind/NeuroNodes";
import Nav from "@/components/meetmind/Nav";
import Hero from "@/components/meetmind/Hero";
import HowItWorks from "@/components/meetmind/HowItWorks";
import StatBanner from "@/components/meetmind/StatBanner";
import BentoGrid from "@/components/meetmind/BentoGrid";
import Comparison from "@/components/meetmind/Comparison";
import Extension from "@/components/meetmind/Extension";
import Security from "@/components/meetmind/Security";
import Testimonials from "@/components/meetmind/Testimonials";
import Pricing from "@/components/meetmind/Pricing";
import FAQ from "@/components/meetmind/FAQ";
import FinalCTA from "@/components/meetmind/FinalCTA";
import Footer from "@/components/meetmind/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <NeuroNodes />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <HowItWorks />
          <StatBanner />
          <BentoGrid />
          <Comparison />
          <Extension />
          <Security />
          <Testimonials />
          <Pricing />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
