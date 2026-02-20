import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
      <ServicesSection />
      <ProductShowcase />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}
