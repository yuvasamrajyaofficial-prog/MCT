"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import styles from "./UnitEconomics.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function UnitEconomics() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={styles.sectionTitle}>
            <BarChart3 className={styles.icon} />
            Unit Economics - Proven SaaS Model
          </h2>

          <div className={styles.economicsGrid}>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>$15-25</div>
              <h4>CAC (Customer Acquisition Cost)</h4>
              <p>
                Via organic social media, SEO, influencer partnerships in Tier 2/3
                cities
              </p>
            </div>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>$180-240</div>
              <h4>LTV (Lifetime Value)</h4>
              <p>$4.99/mo × 36 months × 70% retention rate</p>
            </div>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>7-12x</div>
              <h4>LTV:CAC Ratio</h4>
              <p>Exceptional: 3x is good, 7-12x is world-class</p>
            </div>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>85%</div>
              <h4>Gross Margin</h4>
              <p>Software-first with minimal infrastructure costs</p>
            </div>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>5-8%</div>
              <h4>Free → Premium Conversion</h4>
              <p>Industry avg 2-5%, we target 5-8% via value</p>
            </div>
            <div className={styles.economicCard}>
              <div className={styles.economicValue}>18 mo</div>
              <h4>Customer Retention</h4>
              <p>Daily spiritual habit = long-term engagement</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
