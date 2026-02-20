import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "AI Fitness Trainer - Personal AI Coach | Prabas Digital",
  description: "Your personal AI coach for customized workout plans, real-time form correction, and fitness progress tracking.",
};

export default function AIFitnessPage() {
  const features = [
    "AI-generated personalized workout plans based on your goals",
    "Real-time body form analysis using pose detection",
    "Adaptive difficulty that adjusts based on your progress",
    "Comprehensive exercise library with video demonstrations",
    "Progress tracking with visual charts and milestones",
    "AI coach chat for motivation and fitness guidance",
  ];

  const techStack = [
    "Next.js",
    "TensorFlow.js",
    "OpenAI API",
    "MediaPipe Pose",
    "Chart.js",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Problem",
    solution: "Personal trainers are expensive (₹3,000-10,000/month) and inaccessible to most people. Our AI Fitness Trainer provides the same level of personalized guidance — workout plans, form correction, and motivation — completely free, anytime, anywhere.",
    stats: [
      { value: "₹0", label: "Cost to User" },
      { value: "AI", label: "Form Analysis" },
      { value: "24/7", label: "Available" },
    ],
  };

  return (
    <ProductLayout
      title="AI Fitness Trainer"
      description="Your personal AI coach that creates customized workout plans, analyzes your exercise form in real-time, and adjusts difficulty based on your progress. Professional-grade fitness guidance, accessible to everyone, for free."
      features={features}
      techStack={techStack}
      liveLink="https://ai-fitness-trainer-lime.vercel.app/"
      image="/images/ai-fitness-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        We believe fitness guidance shouldn&apos;t be a luxury. The AI Fitness Trainer brings the expertise of a personal coach to everyone&apos;s phone — creating workout plans tailored to your body, goals, and schedule.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Developed AI workout plan generator that considers user&apos;s fitness level, available equipment, and goals</li>
        <li>Integrated TensorFlow.js and MediaPipe Pose for real-time body form analysis through the camera</li>
        <li>Built adaptive difficulty system that increases intensity as users get stronger</li>
        <li>Created a motivational AI coach chat that keeps users accountable and engaged</li>
        <li>Designed progress dashboard with visual charts tracking strength, cardio, and consistency</li>
      </ul>

      <h3>The Technology</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Pose Detection</h4>
          <p>
            Using MediaPipe and TensorFlow.js, the app analyzes body position in real-time to correct form and prevent injuries during exercises.
          </p>
        </div>
        <div className="infoCard">
          <h4>Adaptive AI</h4>
          <p>
            The AI learns from your performance data — increasing sets, adjusting rest times, and introducing new exercises as you progress.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
