"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Investors.module.css";

export default function InvestorsPage() {
  return (
    <main className={styles.main}>
      <section className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.content}
        >
          <h1 className={styles.title}>Invest in the <span className="text-gradient">Future</span></h1>
          <p className={styles.subtitle}>
            PraBaS & Co. is pioneering the next generation of AI solutions. We are building a sustainable, high-growth ecosystem grounded in ethical innovation.
          </p>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>$10B+</span>
              <span className={styles.statLabel}>Market Opportunity</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>3</span>
              <span className={styles.statLabel}>Live Products</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Bootstrapped Growth</span>
            </div>
          </div>

          <div className={styles.thesis}>
            <h2>Our Thesis</h2>
            <p>
              We believe that the most valuable companies of the next decade will be those that successfully bridge the gap between advanced artificial intelligence and fundamental human needs. By focusing on Education, Employment, and Mental Wellness, we are targeting high-impact sectors with massive scalability.
            </p>
          </div>

          <div className={styles.cta}>
            <Link href="/#contact" className={styles.primaryBtn}>Request Pitch Deck</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
