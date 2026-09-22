import ProductLayout from "@/components/ProductLayout";

export const metadata = {
  title: "The Enforcer — Strict Accountability Platform | PraBaS Digital",
  description: "A strict personal accountability application featuring time-blocked work slots, income pacing, habit tracking, and an interactive AI focus coach.",
};

export default function TheEnforcerPage() {
  const features = [
    "Algorithmic 55-minute time-blocked schedule generator with mandatory daily completion thresholds",
    "Real-time monthly and daily income pacing calculator tied directly to completed work slots",
    "Interactive SVG-animated AI mentor avatar with gaze tracking and proactive voice coaching",
    "Habit streak tracker with health, fitness, and lifestyle discipline enforcement",
    "Skin-in-the-game accountability wallet tracking penalty fines owed for missed sessions",
    "Full-screen lock overlay that commands absolute focus when work blocks are active",
  ];

  const techStack = [
    "JavaScript ES6+",
    "Web Audio API",
    "Browser Face Detection",
    "SVG Animation",
    "LocalStorage Persistence",
    "Vercel",
  ];

  const caseStudy = {
    problem: "The Challenge",
    solution: "Standard task managers fail because they rely purely on self-discipline without consequences or pacing feedback. The Enforcer introduces structural accountability through time-blocked slots, monetary penalty tracking, and an AI mentor avatar that monitors user presence.",
    stats: [
      { value: "6 Slots", label: "Daily Minimum" },
      { value: "₹500", label: "Default Fine/Miss" },
      { value: "100%", label: "Client-Side Privacy" },
    ],
  };

  return (
    <ProductLayout
      title="The Enforcer"
      description="A zero-compromise personal accountability platform. Built for founders, creators, and high performers who need strict time-blocking, goal pacing, and ruthless habit consistency."
      features={features}
      techStack={techStack}
      liveLink="https://the-enforcer.vercel.app/"
      image="/images/the-enforcer-screenshot.png"
      caseStudy={caseStudy}
    >
      <p>
        The Enforcer replaces passive wishful thinking with cold, scheduled reality. By dividing the workday into high-intensity 55-minute slots and tying them to income goals and friend-notified fines, it turns execution into a non-negotiable routine.
      </p>

      <h3>What We Built</h3>
      <ul>
        <li>Developed dynamic schedule generation dividing workdays into up to nine 55-minute focus intervals with automated audio cues</li>
        <li>Built live pace calculation visualizing whether daily production matches monthly financial targets</li>
        <li>Implemented an interactive AI mentor avatar using SVG and Web Audio that alerts users if they abandon active focus blocks</li>
        <li>Designed a transparent accountability fine ledger that tallies missed obligations and supports email sync for peer oversight</li>
        <li>Ensured zero third-party tracking: all facial tracking and camera telemetry remain 100% on-device and ephemeral</li>
      </ul>

      <h3>Accountability Philosophy</h3>
      <div className="infoGrid">
        <div className="infoCard">
          <h4>Tangible Stakes</h4>
          <p>
            When skipping a block incurs a recorded penalty in your Accountability Wallet payable to a trusted peer, resistance dissolves and focus sharpens.
          </p>
        </div>
        <div className="infoCard">
          <h4>Vigilant Presence</h4>
          <p>
            The built-in AI focus mentor watches your work blocks, ensuring you remain seated and engaged without transmitting video data beyond your device.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
}
