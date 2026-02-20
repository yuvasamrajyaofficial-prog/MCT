"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Careers.module.css";

export default function CareersPage() {
  return (
    <main className={styles.main}>
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.content}
        >
          <h1 className={styles.title}>Join the <span className="text-gradient">Revolution</span></h1>
          <p className={styles.subtitle}>
            We&apos;re a remote-first team building the future with AI. We value passion, creativity, and the drive to create meaningful impact for businesses across India.
          </p>

          {/* Perks */}
          <div className={styles.perksGrid}>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🏠</div>
              <div className={styles.perkTitle}>Remote First</div>
              <div className={styles.perkDescription}>Work from anywhere in India</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🚀</div>
              <div className={styles.perkTitle}>Fast Growth</div>
              <div className={styles.perkDescription}>Learn cutting-edge AI tools</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>💰</div>
              <div className={styles.perkTitle}>Fair Pay</div>
              <div className={styles.perkDescription}>Competitive compensation</div>
            </div>
            <div className={styles.perkCard}>
              <div className={styles.perkIcon}>🎯</div>
              <div className={styles.perkTitle}>Real Impact</div>
              <div className={styles.perkDescription}>Work on live client projects</div>
            </div>
          </div>
          
          {/* Jobs */}
          <div className={styles.jobsGrid}>
            <motion.div className={styles.jobCard} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className={styles.jobTitle}>AI Research Scientist</h3>
              <p className={styles.jobType}>Remote • Full-time</p>
              <p className={styles.jobDesc}>Lead our research initiatives in generative AI and neural networks. Build AI solutions for real-world business problems.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </motion.div>
            
            <motion.div className={styles.jobCard} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 className={styles.jobTitle}>Senior Full Stack Engineer</h3>
              <p className={styles.jobType}>Remote • Full-time</p>
              <p className={styles.jobDesc}>Build scalable web applications using Next.js, React, and modern cloud infrastructure for our client projects.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </motion.div>

            <motion.div className={styles.jobCard} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className={styles.jobTitle}>Digital Marketing Specialist</h3>
              <p className={styles.jobType}>Remote • Full-time</p>
              <p className={styles.jobDesc}>Drive growth through SEO, social media, and paid advertising campaigns for businesses across multiple industries.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </motion.div>

            <motion.div className={styles.jobCard} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className={styles.jobTitle}>UI/UX Designer</h3>
              <p className={styles.jobType}>Remote • Contract</p>
              <p className={styles.jobDesc}>Craft intuitive and beautiful interfaces for web and mobile apps. Experience with Figma and design systems required.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </motion.div>
          </div>

          <div className={styles.cta}>
            <p>Don&apos;t see a role that fits? We&apos;re always looking for talent.</p>
            <Link href="/#contact" className={styles.contactLink}>Contact Us →</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
