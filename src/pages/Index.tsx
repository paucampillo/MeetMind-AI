import NeuroNodes from "@/components/meetmind/NeuroNodes";
import Nav from "@/components/meetmind/Nav";
import Hero from "@/components/meetmind/Hero";
import StatBanner from "@/components/meetmind/StatBanner";
import BentoGrid from "@/components/meetmind/BentoGrid";
import Extension from "@/components/meetmind/Extension";
import Pricing from "@/components/meetmind/Pricing";
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
          <StatBanner />
          <BentoGrid />
          <Extension />
          <Pricing />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
