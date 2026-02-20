import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";

export const metadata = {
  title: "Malola / Soulink - AI Wellness Platform | PraBaS Digital",
  description: "Malola (Soulink) combines AI conversational support with Vedic astrology to provide holistic mental and spiritual wellness guidance.",
};

export default function MalolaPage() {
  const features = [
    "AI-driven mental health assistant for empathetic conversational support",
    "Astrology-based compatibility matching algorithm using Vedic principles",
    "Culturally contextualized wellness insights for Indian users",
    "Personalized daily guidance, affirmations, and mantras",
    "Secure and private user data handling with end-to-end encryption",
  ];

  const techStack = [
    "Next.js",
    "OpenAI API",
    "Vedic Astrology APIs",
    "Firebase",
    "Framer Motion",
    "Vercel",
  ];

  return (
    <ProductLayout
      title="Malola / Soulink"
      description="A unique AI Wellness Platform that harmonizes modern mental health support with traditional cultural wisdom. Malola provides a safe space for users to seek guidance, understand relationships, and find balance in their lives."
      features={features}
      techStack={techStack}
      liveLink="https://studio-mocha-tau-22.vercel.app/"
      image="/images/malola-full-showcase.png"
    >
      <p>
        In a world where mental health tools often feel disconnected from cultural context, Malola bridges the gap. It understands the nuances of Indian culture, family dynamics, and spiritual traditions to offer guidance that truly resonates.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Developed the core AI assistant, fine-tuning prompts to ensure empathetic and culturally relevant responses</li>
        <li>Designed a proprietary compatibility matching algorithm based on Vedic astrology principles</li>
        <li>Created a unified experience blending scientific mental health tools with spiritual guidance</li>
        <li>Implemented multi-language support for Hindi and Kannada users</li>
      </ul>

      <h3>Vedic Compatibility Engine</h3>
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', margin: '1.5rem 0' }}>
        <Image src="/images/malola-features.png" alt="Vedic Compatibility Dashboard showing match scores and personality insights" width={800} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <p>
        Our proprietary compatibility engine uses Vedic astrology principles to analyze birth charts, Rashi compatibility, and Nakshatra alignment — providing users with deep insights into their relationships.
      </p>

      <h3>The Innovation</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Contextual AI</h4>
          <p>
            Unlike generic chatbots, Malola understands cultural nuances — from family expectations to festival seasons — making it a more effective companion.
          </p>
        </div>
        <div className="infoCard">
          <h4>Holistic Wellness</h4>
          <p>
            Addresses both the psychological and spiritual dimensions of well-being, offering a complete support system beyond Western-only approaches.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
