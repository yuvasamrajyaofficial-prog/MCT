import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "Malola / Soulink - AI Wellness Platform | MCT",
  description: "Malola (Soulink) by Malola Cosmic Technologies combines AI conversational support with Vedic astrology to provide holistic mental and spiritual wellness guidance.",
};

export default function MalolaPage() {
  const features = [
    "AI-driven mental health assistant for conversational support",
    "Astrology-based compatibility matching algorithm",
    "Culturally contextualized wellness insights",
    "Personalized daily guidance and affirmations",
    "Secure and private user data handling",
  ];

  const techStack = [
    "Next.js",
    "OpenAI API",
    "Vedic Astrology APIs",
    "Tailwind CSS",
    "Firebase",
    "Vercel",
  ];

  return (
    <ProductLayout
      title="Malola / Soulink"
      description="A unique AI Wellness Platform that harmonizes modern mental health support with traditional cultural wisdom. Malola provides a safe space for users to seek guidance, understand relationships, and find balance."
      features={features}
      techStack={techStack}
      liveLink="https://studio-mocha-tau-22.vercel.app/"
      image="/images/malola-screenshot.png"
    >
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 mb-6">
          Malola (also known as Soulink) explores the intersection of technology and spirituality. It offers a holistic approach to wellness by combining AI-powered conversational therapy with deep astrological insights.
        </p>

        <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
        <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
          <li>
            Developed the core AI assistant, fine-tuning prompts to ensure empathetic and culturally relevant responses.
          </li>
          <li>
            Designed and implemented a proprietary compatibility matching algorithm based on Vedic astrology principles.
          </li>
          <li>
            Created a unified user experience that seamlessly blends scientific mental health tools with spiritual guidance.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mb-4">Cultural Intelligence</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Contextual AI</h4>
            <p className="text-gray-400">
              Unlike generic chatbots, Malola understands cultural nuances, making it a more effective companion for its target audience.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Holistic Wellness</h4>
            <p className="text-gray-400">
              Addresses both the psychological and spiritual dimensions of well-being, offering a more complete support system.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
