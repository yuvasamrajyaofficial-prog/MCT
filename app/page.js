import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
      <ServicesSection />
      <ProductShowcase />
      <PricingSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
