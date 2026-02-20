import ProductLayout from "@/components/ProductLayout";
import Image from "next/image";

export const metadata = {
  title: "Zekkers - AI Job Marketplace | PraBaS Digital",
  description: "Zekkers connects students and early-career professionals with employers through AI-powered skill matching and predictive career roadmaps.",
};

export default function ZekkersPage() {
  const features = [
    "Two-sided marketplace connecting students with employers",
    "AI-powered predictive skill visualization for career planning",
    "Automated resume parsing and intelligent job matching",
    "Real-time application tracking dashboard for both sides",
    "Integrated messaging system for direct recruiter communication",
  ];

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "OpenAI API",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Challenge",
    solution: "Students struggle to translate academic achievements into industry requirements. Zekkers solves this by visualizing skill gaps and providing clear roadmaps to bridge them — going beyond keyword matching to contextual understanding.",
    stats: [
      { value: "40%", label: "Faster Hiring" },
      { value: "85%", label: "Match Accuracy" },
      { value: "2K+", label: "Active Students" },
    ],
  };

  return (
    <ProductLayout
      title="Zekkers"
      description="An AI-powered job marketplace designed to bridge the gap between students, early-career professionals, and employers. Zekkers revolutionizes hiring by focusing on skill-based matching and predictive career roadmaps rather than traditional resume screening."
      features={features}
      techStack={techStack}
      liveLink="https://zekkers-app2.vercel.app/"
      image="/images/zekkers-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        Traditional job platforms fail to capture the potential of students with limited work experience. Zekkers uses AI to analyze academic projects, certifications, and skills to build holistic candidate profiles that go beyond a one-page resume.
      </p>

      <h3>Skill Analytics Dashboard</h3>
      <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', margin: '1.5rem 0' }}>
        <Image src="/images/zekkers-features.png" alt="Zekkers Analytics Dashboard showing skill radar chart, match scores, and recommended skills" width={800} height={800} style={{ width: '100%', height: 'auto', display: 'block' }} />
      </div>
      <p>
        Our analytics engine compares student skills against real job requirements, generating match scores and actionable upskilling recommendations to close the gap.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Led the complete product lifecycle from user research and wireframing to deployment</li>
        <li>Designed intuitive UI/UX for both student and recruiter dashboards</li>
        <li>Architected the database schema to support complex multi-dimensional matching</li>
        <li>Implemented secure auth flows and role-based access control</li>
        <li>Built real-time notification system for application status updates</li>
      </ul>

      <h3>Key Innovations</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Skill Visualization</h4>
          <p>
            Dynamic charts showing students where they stand vs. industry demands, with actionable insights for targeted upskilling.
          </p>
        </div>
        <div className="infoCard">
          <h4>Smart Matching</h4>
          <p>
            Algorithms that understand context beyond keywords — analyzing project complexity, certifications, and growth trajectory.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
