import NeuroNodes from "@/components/meetmind/NeuroNodes";
import Nav from "@/components/meetmind/Nav";
import Hero from "@/components/meetmind/Hero";
import StatBanner from "@/components/meetmind/StatBanner";
import BentoGrid from "@/components/meetmind/BentoGrid";
import Hardware from "@/components/meetmind/Hardware";
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
          <Hardware />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
