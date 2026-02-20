import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";

export const metadata = {
  title: "LOLA AI - Advanced AI Companion | PraBaS Digital",
  description: "LOLA AI is an advanced AI companion designed for meaningful conversations, emotional support, and personal growth guidance.",
};

export default function LolaAIPage() {
  const features = [
    "Advanced conversational AI with emotional intelligence",
    "Context-aware responses that remember conversation history",
    "Voice-first design for natural, hands-free interaction",
    "Safety layer with content filtering for safe conversations",
    "Customizable personality and conversation styles",
    "Settings menu with safe mode toggle and memory management",
  ];

  const techStack = [
    "Next.js",
    "OpenAI GPT-4",
    "Web Speech API",
    "Framer Motion",
    "Firebase",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Vision",
    solution: "In a world of impersonal chatbots, LOLA AI was designed to be different — an AI that truly listens, remembers, and responds with empathy. Built for meaningful conversations, not just transactions.",
    stats: [
      { value: "24/7", label: "Availability" },
      { value: "GPT-4", label: "Powered By" },
      { value: "Safe", label: "Content Filter" },
    ],
  };

  return (
    <ProductLayout
      title="LOLA AI"
      description="An advanced AI companion designed for meaningful conversations and emotional support. LOLA goes beyond simple Q&A — she understands context, remembers your conversations, and provides thoughtful responses that feel genuinely human."
      features={features}
      techStack={techStack}
      liveLink="https://lola-ai-mu.vercel.app/"
      image="/images/lola-ai-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        Most AI chatbots feel cold and transactional. LOLA was built with a different philosophy — conversations should feel real, supportive, and naturally human. She&apos;s designed to be the companion you can talk to about anything, anytime.
      </p>

      <h3>Voice Mode &amp; Safety Controls</h3>
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', margin: '1.5rem 0' }}>
        <Image src="/images/lola-ai-features.png" alt="LOLA AI voice interaction mode with waveform visualization and safety settings panel" width={800} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <p>
        LOLA features a voice-first interface with real-time waveform visualization, and a comprehensive settings panel including Safe Mode, Voice Mode toggle, and memory management — putting users in full control.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Developed a sophisticated prompt engineering system for empathetic, context-aware responses</li>
        <li>Implemented conversation memory that maintains context across sessions</li>
        <li>Built a voice-first interface using Web Speech API for natural hands-free interaction</li>
        <li>Created a comprehensive safety layer with content filtering to prevent unsafe conversations</li>
        <li>Designed a settings menu with safe mode toggle and conversation memory management</li>
      </ul>

      <h3>Core Philosophy</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Emotional Intelligence</h4>
          <p>
            LOLA detects emotional cues in conversations and adjusts her tone accordingly — offering comfort during tough times and celebration during wins.
          </p>
        </div>
        <div className="infoCard">
          <h4>Privacy First</h4>
          <p>
            All conversations are encrypted and users have full control over their data — including the ability to clear history at any time.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
