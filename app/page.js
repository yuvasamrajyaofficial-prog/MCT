import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ProductShowcase from "@/components/ProductShowcase";
import UnitEconomics from "@/components/UnitEconomics";
import CompetitiveAnalysis from "@/components/CompetitiveAnalysis";
import RecruitmentSection from "@/components/RecruitmentSection";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
      <ProductShowcase />
      <UnitEconomics />
      <CompetitiveAnalysis />
      <Testimonials />
      <RecruitmentSection />
      <ContactSection />
    </main>

  );
}
