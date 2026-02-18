import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ServicesSection from "@/components/ServicesSection";
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
      <Testimonials />
      <ContactSection />
    </main>
  );
}
