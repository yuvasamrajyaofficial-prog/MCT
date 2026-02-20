import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";

export const metadata = {
  title: "GovtNaukri4U - Government Job Portal | Prabas Digital",
  description: "GovtNaukri4U simplifies government job notifications with automated PDF parsing and AI-driven data extraction for Karnataka aspirants.",
};

export default function GovtNaukri4uPage() {
  const features = [
    "High-traffic government job information portal for Karnataka",
    "Automated PDF parsing for recruitment notifications using OCR",
    "AI-driven extraction of key dates, eligibility, and vacancies",
    "Advanced SEO optimization — top rankings on Google Search",
    "User-friendly interface with category-based job filtering",
  ];

  const techStack = [
    "Blogger XML",
    "HTML / CSS",
    "JavaScript",
    "Google Cloud Platform",
    "Python (OCR Pipeline)",
    "Google Analytics",
  ];

  const caseStudy = {
    problem: "The Impact",
    solution: "Government job notifications are scattered across multiple PDFs and websites. GovtNaukri4U automated the entire pipeline — from PDF download to structured data extraction — reducing publishing time by 80%.",
    stats: [
      { value: "80%", label: "Faster Publishing" },
      { value: "10K+", label: "Monthly Visitors" },
      { value: "#1", label: "Google Ranking" },
    ],
  };

  return (
    <ProductLayout
      title="GovtNaukri4U"
      description="A comprehensive EdTech and job portal that democratizes access to government job information across Karnataka. We simplified the complex landscape of recruitment notifications through automation and intelligent data extraction."
      features={features}
      techStack={techStack}
      liveLink="https://perfect-theme.vercel.app/"
      image="/images/govtnaukri4u-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        For millions of government job aspirants in Karnataka, finding reliable and timely information is a daily struggle. GovtNaukri4U was built to solve that — one notification at a time.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Scaled the platform to handle high traffic during peak notification periods (exam results, new recruitment drives)</li>
        <li>Built automated pipelines using Python and OCR to process official recruitment PDFs and extract structured data</li>
        <li>Implemented aggressive SEO strategies resulting in top Google rankings for competitive keywords</li>
        <li>Designed mobile-first responsive templates for the Blogger platform</li>
      </ul>

      <h3>Mobile-First Experience</h3>
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', margin: '1.5rem 0' }}>
        <Image src="/images/govtnaukri4u-mobile.png" alt="GovtNaukri4U mobile-responsive design showing job listings, detail view, and notification settings" width={800} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <p>
        Over 75% of our users access the portal from mobile devices. We designed every page to be mobile-first, ensuring aspirants can search and apply for jobs seamlessly on any screen.
      </p>

      <h3>Key Results</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Automation Pipeline</h4>
          <p>
            Reduced manual data entry by 80% through automated PDF parsing, OCR extraction, and structured content generation.
          </p>
        </div>
        <div className="infoCard">
          <h4>Community Impact</h4>
          <p>
            Helped thousands of Karnataka aspirants find relevant government job opportunities through improved discoverability.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
