"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Database, Server } from "lucide-react";
import styles from "./RecruitmentSection.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function RecruitmentSection() {
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
            <Code className={styles.icon} />
            The Ask - Join Our Pre-Launch Team
          </h2>

          <div className={styles.askContent}>
            <div className={styles.askText}>
              <h3>We&apos;re Pre-Launch & Seeking Professional Developers</h3>
              <p>
                Malola is in active development. We&apos;re looking for talented
                engineers who are passionate about cultural AI and want to build
                something meaningful that impacts millions.
              </p>
            </div>

            <div className={styles.rolesGrid}>
              <div className={styles.roleCard}>
                <div className={styles.cardHeader}>
                  <Smartphone size={32} />
                  <h4>Mobile Developers</h4>
                </div>
                <p>
                  <strong>React Native or Flutter</strong>
                </p>
                <ul>
                  <li>Build cross-platform app</li>
                  <li>Offline-first architecture</li>
                  <li>Voice interface integration</li>
                </ul>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.cardHeader}>
                  <Database size={32} />
                  <h4>Backend Engineers</h4>
                </div>
                <p>
                  <strong>Node.js / Python</strong>
                </p>
                <ul>
                  <li>API development</li>
                  <li>Database design (MongoDB/PostgreSQL)</li>
                  <li>Scalability for millions</li>
                </ul>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.cardHeader}>
                  <Code size={32} />
                  <h4>AI/ML Engineers</h4>
                </div>
                <p>
                  <strong>NLP, LLM fine-tuning</strong>
                </p>
                <ul>
                  <li>Multilingual AI models</li>
                  <li>Cultural context training</li>
                  <li>Voice recognition (Hindi/regional)</li>
                </ul>
              </div>

              <div className={styles.roleCard}>
                <div className={styles.cardHeader}>
                  <Server size={32} />
                  <h4>DevOps/Cloud</h4>
                </div>
                <p>
                  <strong>AWS/GCP, CI/CD</strong>
                </p>
                <ul>
                  <li>Infrastructure setup</li>
                  <li>Deployment pipelines</li>
                  <li>Monitoring & scaling</li>
                </ul>
              </div>
            </div>

            <div className={styles.fundingAsk}>
              <h3>💰 Funding Request: $250K Seed Round</h3>
              <div className={styles.fundingBreakdown}>
                <div className={styles.fundingItem}>
                  <strong>$150K (60%)</strong>
                  <span>Development team (4-5 engineers for 6 months)</span>
                </div>
                <div className={styles.fundingItem}>
                  <strong>$50K (20%)</strong>
                  <span>AI/ML infrastructure & training data</span>
                </div>
                <div className={styles.fundingItem}>
                  <strong>$30K (12%)</strong>
                  <span>Marketing & user acquisition (Tier 2/3 focus)</span>
                </div>
                <div className={styles.fundingItem}>
                  <strong>$20K (8%)</strong>
                  <span>Legal, operations, miscellaneous</span>
                </div>
              </div>
              <p className={styles.fundingTimeline}>
                <strong>Timeline:</strong> 6-month runway to beta launch with 10K
                users
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
