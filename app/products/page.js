"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Filter } from "lucide-react";
import styles from "./Portfolio.module.css";

const PROJECTS = [
  {
    id: "malola",
    title: "Malola / Soulink",
    category: "AI",
    image: "/images/malola-dashboard.png",
    description: "AI-powered Vedic astrology compatibility platform for modern relationships.",
    link: "/products/malola",
    color: "#f59e0b"
  },
  {
    id: "lola",
    title: "LOLA AI",
    category: "AI",
    image: "/images/lola-voice.png",
    description: "Advanced AI companion with voice mode, emotional intelligence, and safety controls.",
    link: "/products/lola-ai",
    color: "#ec4899"
  },
  {
    id: "aifitness",
    title: "AI Fitness Trainer",
    category: "AI",
    image: "/images/ai-fitness-form.png",
    description: "Real-time workout form analysis using computer vision and pose detection.",
    link: "/products/ai-fitness",
    color: "#10b981"
  },
  {
    id: "tioras",
    title: "TioraS Studio",
    category: "Web",
    image: "/images/tioras-workflow.png",
    description: "AI-generative fashion design platform transforming text prompts into printable apparel.",
    link: "/products/tioras",
    color: "#7c3aed"
  },
  {
    id: "zekkers",
    title: "Zekkers",
    category: "App",
    image: "/images/zekkers-analytics.png",
    description: "Next-gen job marketplace connecting freelancers with gig opportunities via AI matching.",
    link: "/products/zekkers",
    color: "#3b82f6"
  },
  {
    id: "govtnaukri",
    title: "GovtNaukri4U",
    category: "Web",
    image: "/images/govtnaukri-mobile.png",
    description: "Comprehensive government job portal aggregating vacancies from across India.",
    link: "/products/govtnaukri4u",
    color: "#f97316"
  }
];

const FILTERS = ["All", "AI", "Web", "App"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(p => filter === "All" || p.category === filter);

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
            A showcase of our finest digital craftsmanship. From AI engines to immersive web experiences.
          </motion.p>

          {/* Filters */}
          <div className={styles.filterContainer}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`${styles.filterBtn} ${filter === f ? styles.activeFilter : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        <div className="container">
          <motion.div layout className={styles.grid}>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={styles.card}
                >
                  <Link href={project.link} className={styles.cardLink}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={600} 
                        height={400} 
                        className={styles.projectImage}
                      />
                      <div className={styles.overlay}>
                        <span className={styles.viewProject}>View Case Study <ArrowUpRight size={18} /></span>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <span className={styles.categoryBadge} style={{ borderColor: project.color, color: project.color }}>
                          {project.category}
                        </span>
                      </div>
                      <p className={styles.projectDesc}>{project.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
