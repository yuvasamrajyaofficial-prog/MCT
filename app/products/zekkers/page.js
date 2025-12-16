import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "Zekkers - AI Job Marketplace | Prabas & Co.",
  description: "Zekkers is an AI-powered job marketplace connecting students, early-career professionals, and employers through predictive skill visualization and smart matching.",
};

export default function ZekkersPage() {
  const features = [
    "Two-sided marketplace connecting students with employers",
    "Predictive skill visualization for career planning",
    "Automated resume parsing and job matching",
    "Real-time application tracking dashboard",
    "Integrated messaging system for direct communication",
  ];

  const techStack = [
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Vercel",
    "OpenAI API",
  ];

  return (
    <ProductLayout
      title="Zekkers"
      description="An AI-powered job marketplace designed to bridge the gap between students, early-career professionals, and employers. Zekkers revolutionizes the hiring process by focusing on skill-based matching and predictive career roadmaps."
      features={features}
      techStack={techStack}
      liveLink="https://zekkers-app2.vercel.app/"
      image="/images/zekkers-screenshot.png"
    >
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-gray-300 mb-6">
          Zekkers addresses the disconnect in the early-career job market. Traditional platforms often fail to capture the potential of students with limited experience. Zekkers uses AI to analyze academic projects, certifications, and skills to present a holistic profile to employers.
        </p>

        <h3 className="text-2xl font-bold text-white mb-4">My Role</h3>
        <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
          <li>
            Led the complete product lifecycle from user research to deployment.
          </li>
          <li>
            Designed the UI/UX to ensure an intuitive experience for both students and recruiters.
          </li>
          <li>
            Architected the database schema to support complex matching logic.
          </li>
          <li>
            Implemented secure authentication flows and role-based access control.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-white mb-4">Key Innovations</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Skill Visualization</h4>
            <p className="text-gray-400">
              Dynamic charts that show students where they stand compared to industry demands, offering actionable insights for upskilling.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-amber-500 mb-2">Smart Matching</h4>
            <p className="text-gray-400">
              Algorithms that go beyond keywords, understanding the context of a candidate's experience to find the perfect fit.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
