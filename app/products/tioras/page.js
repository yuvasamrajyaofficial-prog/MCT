import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";

export const metadata = {
  title: "TioraS Studio - AI Fashion Design Platform | PraBaS Digital",
  description: "TioraS democratizes fashion design with AI. Generate custom embroidery designs from text prompts and order high-quality menswear instantly.",
};

export default function TiorasPage() {
  const features = [
    "Design-to-Print workflow powered by Gemini AI",
    "Natural language prompts for embroidery design generation",
    "Real-time preview of AI-generated designs on products",
    "Automated print-ready file generation for manufacturing",
    "Full e-commerce with product catalog, cart, and checkout",
    "Admin dashboard for inventory and order management",
  ];

  const techStack = [
    "Next.js",
    "Gemini API",
    "Stable Diffusion",
    "Firebase",
    "Stripe",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Innovation",
    solution: "Traditional fashion design requires years of training and expensive tools. TioraS lets anyone create professional embroidery designs by simply describing what they want in natural language.",
    stats: [
      { value: "90%", label: "Less Design Time" },
      { value: "50+", label: "Products Listed" },
      { value: "AI", label: "Powered Design" },
    ],
  };

  return (
    <ProductLayout
      title="TioraS Studio"
      description="An innovative AI-powered e-commerce platform that democratizes fashion design. Users generate custom embroidery designs using natural language prompts and order them on premium menswear apparel — bridging the gap between imagination and physical products."
      features={features}
      techStack={techStack}
      liveLink="https://tiora-s-studio.vercel.app/"
      image="/images/tioras-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        TioraS Studio was born from the idea that great design shouldn&apos;t be limited to those with professional training. By leveraging Generative AI, we enabled users with zero design experience to create stunning embroidery patterns.
      </p>

      <h3>The Design-to-Print Workflow</h3>
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', margin: '1.5rem 0' }}>
        <Image src="/images/tioras-design-flow.png" alt="TioraS Design-to-Print workflow: Text Input → AI-Generated Pattern → Applied Design on garment" width={800} height={450} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <p>
        From a simple text prompt like &quot;Royal peacock embroidery&quot; to a finished product — our AI pipeline handles the entire creative process in seconds, not days.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Engineered the core &quot;Design-to-Print&quot; workflow — from AI prompt to manufacturing-ready output</li>
        <li>Integrated Gemini API for understanding user intent and generating high-fidelity designs</li>
        <li>Built the frontend with real-time design preview, color/size customization</li>
        <li>Developed admin dashboard with full inventory management and order processing</li>
        <li>Implemented secure payment processing with multiple payment gateways</li>
      </ul>

      <h3>The Technology</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Prompt Engineering</h4>
          <p>
            Advanced prompt processing ensures user descriptions translate into high-fidelity, stitch-compatible embroidery designs.
          </p>
        </div>
        <div className="infoCard">
          <h4>Automated Production</h4>
          <p>
            Reduces manual design dependency by 90%, streamlining the entire path from concept to manufactured product.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
