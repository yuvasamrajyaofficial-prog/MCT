"use client";

import ProductLayout from "@/components/ProductLayout";

export default function TiorasPage() {
  const features = [
    "Design-to-Print workflow using Gemini API",
    "Natural language prompts for embroidery design generation",
    "Real-time preview of generated designs on products",
    "Automated print-ready file generation",
    "Seamless order processing and tracking",
  ];

  const techStack = [
    "Next.js",
    "Gemini API",
    "Stable Diffusion",
    "Stripe",
    "Tailwind CSS",
    "Vercel",
    "PostgreSQL",
  ];

  return (
    <ProductLayout
      title="TioraS"
      description="An innovative AI-powered e-commerce platform that democratizes fashion design. TioraS allows users to generate custom embroidery designs using natural language prompts and order them on high-quality apparel."
      features={features}
      techStack={techStack}
      liveLink="https://tiora-s.vercel.app/"
      image="/images/tioras-screenshot.png"
    >
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 mb-6">
          TioraS bridges the gap between imagination and physical products. By leveraging Generative AI, it enables users with no design experience to create professional-grade embroidery patterns simply by describing them.
        </p>

        <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
        <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
          <li>
            Engineered the core "Design-to-Print" workflow, integrating Gemini API for prompt understanding and image generation models for visual output.
          </li>
          <li>
            Developed the frontend interface for customization, allowing users to tweak colors, sizes, and placement.
          </li>
          <li>
            Built the backend logic to convert AI-generated images into print-ready formats suitable for embroidery machines.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mb-4">The "Design-to-Print" Magic</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Prompt Engineering</h4>
            <p className="text-gray-400">
              Advanced prompt processing ensures that user descriptions are translated into high-fidelity, stitch-compatible designs.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Automated Production</h4>
            <p className="text-gray-400">
              Reduces manual design dependency by 90%, streamlining the path from concept to manufacturing.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
