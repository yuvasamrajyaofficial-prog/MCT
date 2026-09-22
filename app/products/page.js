"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./Portfolio.module.css";

const PROJECTS = [
  {
    id: "mct-retail",
    title: "MCT Retail",
    category: "Enterprise OS",
    image: "/images/mct-retail-screenshot.png",
    description: "Enterprise Retail Operating System & 3D Point of Sale Suite engineered by Prashant Hiremath. Features offline-first PWA caching, high-concurrency inventory synchronization, and live sales analytics.",
    link: "/products/mct-retail",
    color: "#06b6d4"
  },
  {
    id: "the-enforcer",
    title: "The Enforcer",
    category: "Productivity AI",
    image: "/images/the-enforcer-screenshot.png",
    description: "A strict personal accountability application featuring time-blocked work intervals, financial pacing monitors, habit streak tracking, and an interactive AI focus mentor.",
    link: "/products/the-enforcer",
    color: "#ef4444"
  },
  {
    id: "bull-monk",
    title: "BullMonk ($BMONK)",
    category: "Web3 & Crypto",
    image: "/images/bullmonk-screenshot.png",
    description: "Enlightened crypto meme coin ecosystem uniting narrative-driven Neeti Lore, transparent tokenomics distribution, interactive roadmap, and decentralized Web3 community integration.",
    link: "/products/bull-monk",
    color: "#f59e0b"
  },
  {
    id: "vaultcam",
    title: "VaultCam / VaultID",
    category: "Biometric Security",
    image: "/images/vaultcam-screenshot.png",
    description: "Next-generation biometric camera verification and encrypted locker app. Provides zero-knowledge client authentication and secure encrypted digital vaults on device.",
    link: "/products/vaultcam",
    color: "#a855f7"
  },
  {
    id: "malola",
    title: "Malola / Soulink",
    category: "AI Platform",
    image: "/images/malola-full-showcase.png",
    description: "An innovative AI-powered Vedic astrology compatibility platform. It combines ancient relationship wisdom with modern AI conversational agents to help users find meaningful connections.",
    link: "/products/malola",
    color: "#f59e0b"
  },
  {
    id: "lola",
    title: "LOLA AI",
    category: "Voice Assistant",
    image: "/images/lola-ai-screenshot.png",
    description: "A next-generation AI companion featuring real-time voice interaction, emotional intelligence, and safe-mode content filtering for a secure user experience.",
    link: "/products/lola-ai",
    color: "#ec4899"
  },
  {
    id: "aifitness",
    title: "AI Fitness Trainer",
    category: "Computer Vision",
    image: "/images/ai-fitness-screenshot.png",
    description: "Uses device camera and pose estimation models to provide real-time feedback on workout form, counting reps and correcting posture instantly.",
    link: "/products/ai-fitness",
    color: "#10b981"
  },
  {
    id: "tioras",
    title: "TioraS Studio",
    category: "Generative AI",
    image: "/images/tioras-screenshot.png",
    description: "A fashion design studio where users describe clothing in text, and AI generates production-ready 3D mockups and patterns.",
    link: "/products/tioras",
    color: "#7c3aed"
  },
  {
    id: "zekkers",
    title: "Zekkers",
    category: "Gig Marketplace",
    image: "/images/zekkers-screenshot.png",
    description: "A decentralized job marketplace connecting freelancers with hyper-local gigs. Features smart matching and secure escrow payments.",
    link: "/products/zekkers",
    color: "#3b82f6"
  },
  {
    id: "govtnaukri",
    title: "GovtNaukri4U",
    category: "Web Portal",
    image: "/images/govtnaukri-live.png",
    description: "A high-traffic government job portal aggregating thousands of vacancies daily, with advanced filtering and instant notification alerts.",
    link: "/products/govtnaukri4u",
    color: "#f97316"
  }
];

const FILTERS = ["All", "AI", "Web", "App", "Enterprise"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => {
    if (filter === "All") return true;
    if (filter === "AI") return ["AI Platform", "Voice Assistant", "Computer Vision", "Generative AI", "Productivity AI", "Biometric Security"].includes(p.category);
    if (filter === "Web") return ["Gig Marketplace", "Web Portal", "Web3 & Crypto", "Enterprise OS"].includes(p.category);
    if (filter === "App") return ["Gig Marketplace", "Biometric Security", "Productivity AI", "Enterprise OS"].includes(p.category);
    if (filter === "Enterprise") return ["Enterprise OS", "Web Portal", "Gig Marketplace"].includes(p.category);
    return true;
  });

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Our <span className="text-gradient">Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Building the future, one pixel at a time.
          </motion.p>
          <div className={styles.filterContainer}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={styles.projectSection}
          >
            <div className={styles.projectContainer}>
              <div className={styles.projectInfo}>
                <span className={styles.categoryLabel} style={{ background: project.color }}>
                  {project.category}
                </span>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDesc}>{project.description}</p>
                <Link href={project.link} className={styles.viewBtn}>
                  View Case Study <ArrowRight size={20} />
                </Link>
              </div>

              <div className={styles.previewWrapper}>
                <div className={styles.browserHeader}>
                  <div className={`${styles.dot} ${styles.red}`}></div>
                  <div className={`${styles.dot} ${styles.yellow}`}></div>
                  <div className={`${styles.dot} ${styles.green}`}></div>
                  <div className={styles.browserAddress}>prabas-digital.com/projects/{project.id}</div>
                </div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={800} 
                  height={500} 
                  className={styles.projectImage}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
