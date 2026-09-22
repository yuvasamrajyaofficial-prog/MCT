import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "BullMonk ($BMONK) — Web3 & Crypto Ecosystem | PraBaS Digital",
  description: "High-energy spiritual crypto meme coin platform featuring interactive lore, tokenomics, roadmap, and decentralized Web3 community integration.",
};

export default function BullMonkPage() {
  const features = [
    "High-energy spiritual crypto aesthetic combining ancient wisdom with bullish Web3 market dynamics",
    "Interactive Neeti Lore storytelling section immersing community members into the token universe",
    "Transparent tokenomics visualization breaking down supply allocation, liquidity lock, and community rewards",
    "Dynamic multi-phase roadmap tracking technical milestones, DEX/CEX listings, and ecosystem development",
    "Responsive, high-performance interface optimized for lightning-fast loads across mobile and desktop devices",
    "Seamless Web3 onboarding gateway ready for decentralized wallet connections and swaps",
  ];

  const techStack = [
    "React",
    "Vite",
    "TailwindCSS",
    "Framer Motion",
    "Web3 Integration",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Challenge",
    solution: "The cryptocurrency meme coin landscape is inundated with generic, cookie-cutter templates that lack identity and transparent communication. BullMonk establishes an iconic presence through bespoke art direction, narrative-driven lore, and a clear architectural roadmap.",
    stats: [
      { value: "1B", label: "Fixed Supply" },
      { value: "100%", label: "Community Backed" },
      { value: "0%", label: "Compromise" },
    ],
  };

  return (
    <ProductLayout
      title="BullMonk ($BMONK)"
      description="The ultimate bullish and spiritual crypto meme coin ecosystem. Uniting community culture, philosophical lore, and decentralized Web3 tokenomics into an electrifying visual web experience."
      features={features}
      techStack={techStack}
      liveLink="https://bull-monk.vercel.app/"
      image="/images/bullmonk-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        BullMonk ($BMONK) blends high-octane crypto excitement with timeless spiritual philosophy. Crafted to provide a distinct, unforgettable community identity, the platform invites users on an enlightened moon mission supported by clear tokenomics.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Designed a captivating visual brand featuring golden meditative deities, neon green cosmic energy, and sleek typography</li>
        <li>Developed an interactive lore exploration module narrating the Neeti Lore through guided visual storytelling</li>
        <li>Built real-time token distribution charts detailing fair launch mechanics, liquidity pool guarantees, and development reserves</li>
        <li>Architected an interactive multi-phase roadmap demonstrating ongoing deliverables from launch to decentralized exchange integrations</li>
        <li>Engineered responsive animations and micro-interactions delivering 60 FPS fluidity on mobile browsers</li>
      </ul>

      <h3>The Web3 Experience</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Narrative-Driven Community</h4>
          <p>
            Rather than relying solely on hype, BullMonk anchors token excitement in the mythological lore of resilience, discipline, and unstoppable market momentum.
          </p>
        </div>
        <div className="infoCard">
          <h4>Transparent Tokenomics</h4>
          <p>
            Community members enjoy complete clarity with interactive supply breakdowns, lock period confirmations, and verified smart contract addresses.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
