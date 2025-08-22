import Image from "next/image";
import HeroSection from "@/components/custom/sections/hero-section";
import Navigation from "@/components/custom/ui/navigation";
import FeaturesSection from "@/components/custom/sections/features-section";
import AboutSection from "@/components/custom/sections/about-section";
import Footer from "@/components/custom/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
