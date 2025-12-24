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
            We are a remote-first company building the future of AI. We value passion, logic, and the drive to create meaningful impact.
          </p>
          
          <div className={styles.jobsGrid}>
            <div className={styles.jobCard}>
              <h3 className={styles.jobTitle}>AI Research Scientist</h3>
              <p className={styles.jobType}>Remote • Full-time</p>
              <p className={styles.jobDesc}>Lead our research initiatives in generative AI and neural networks.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </div>
            
            <div className={styles.jobCard}>
              <h3 className={styles.jobTitle}>Senior Full Stack Engineer</h3>
              <p className={styles.jobType}>Remote • Full-time</p>
              <p className={styles.jobDesc}>Build scalable applications that power our next-gen platforms.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </div>

            <div className={styles.jobCard}>
              <h3 className={styles.jobTitle}>Product Designer</h3>
              <p className={styles.jobType}>Remote • Contract</p>
              <p className={styles.jobDesc}>Craft intuitive and beautiful user experiences for complex AI tools.</p>
              <button className={styles.applyBtn}>Apply Now</button>
            </div>
          </div>

          <div className={styles.cta}>
            <p>Don&apos;t see a role that fits? We are always looking for talent.</p>
            <Link href="/#contact" className={styles.contactLink}>Contact Us</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
