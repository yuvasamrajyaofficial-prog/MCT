import HeroSection from "@/components/HeroSection";
import MissionStatement from "@/components/MissionStatement";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionStatement />
      <ProductShowcase />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
