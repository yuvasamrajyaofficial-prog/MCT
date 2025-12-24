"use client";

import { motion } from "framer-motion";
import TeamMember from "@/components/TeamMember";
import styles from "./Team.module.css";

const TEAM_MEMBERS = [
  {
    name: "Prashant Hiremath",
    role: "Founder & Visionary",
    bio: "Driving the mission to combine ancient wisdom with modern logic. Passionate about AI, education, and human potential.",
    socials: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "AI Architect",
    role: "Lead Engineer",
    bio: "The digital brain behind our innovations. Specializing in neural networks, generative AI, and scalable systems.",
    socials: {
      github: "#"
    }
  },
  {
    name: "Creative Mind",
    role: "Head of Design",
    bio: "Crafting intuitive and beautiful experiences that bridge the gap between complex technology and human emotion.",
    socials: {
      dribbble: "#"
    }
  }
];

export default function TeamPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Meet the <span className="text-gradient">Visionaries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            The minds behind PraBaS & Co., dedicated to building a future grounded in values and powered by intelligence.
          </motion.p>
        </div>
      </section>

      <section className={styles.teamGrid}>
        <div className="container">
          <div className={styles.grid}>
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMember 
                key={index}
                {...member}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
