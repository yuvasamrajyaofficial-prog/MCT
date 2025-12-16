"use client";

import ProductLayout from "@/components/ProductLayout";

export default function GovtNaukri4uPage() {
  const features = [
    "High-traffic government job information portal",
    "Automated PDF parsing for recruitment notifications",
    "AI-driven extraction of key dates, eligibility, and vacancies",
    "Advanced SEO optimization for maximum discoverability",
    "User-friendly dashboard for job tracking",
  ];

  const techStack = [
    "Python",
    "Django",
    "React",
    "PostgreSQL",
    "OCR / Tesseract",
    "Redis",
    "AWS",
  ];

  return (
    <ProductLayout
      title="GovtNaukri4u"
      description="A comprehensive EdTech and job portal dedicated to democratizing access to government job information. GovtNaukri4u simplifies the complex landscape of recruitment notifications through automation and intelligent data extraction."
      features={features}
      techStack={techStack}
      liveLink="https://govtnaukri4u.com"
    >
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 mb-6">
          GovtNaukri4u addresses the challenge of fragmented and complex government job notifications. By automating the extraction of critical information from PDFs and images, it provides aspirants with clear, concise, and timely updates.
        </p>

        <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
        <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
          <li>
            Built and scaled the platform to handle high traffic volumes during peak notification periods.
          </li>
          <li>
            Developed automated pipelines using Python and OCR to process official recruitment PDFs and extract structured data.
          </li>
          <li>
            Implemented aggressive SEO strategies, resulting in a significant increase in organic traffic and top search rankings.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mb-4">Impact</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Automation</h4>
            <p className="text-gray-400">
              Reduced the time to publish new job alerts by 80% through automated data extraction pipelines.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Reach</h4>
            <p className="text-gray-400">
              Helped thousands of aspirants find relevant opportunities through improved discoverability and user-centric design.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
