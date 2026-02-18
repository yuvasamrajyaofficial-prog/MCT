"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import styles from "./CompetitiveAnalysis.module.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function CompetitiveAnalysis() {
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
            <Globe className={styles.icon} />
            Competitive Analysis - Feature Comparison
          </h2>

          <div className={styles.competitiveTableContainer}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Scripture Apps</th>
                  <th>Astrology Platforms</th>
                  <th>Generic AI</th>
                  <th className={styles.ourColumn}>MALOLA (Us)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Digital Scriptures</strong>
                  </td>
                  <td>✅</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅</td>
                </tr>
                <tr>
                  <td>
                    <strong>Audio Library</strong>
                  </td>
                  <td>Partial</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅</td>
                </tr>
                <tr>
                  <td>
                    <strong>AI Chatbot</strong>
                  </td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>✅ (Generic)</td>
                  <td className={styles.ourColumn}>✅ (Cultural)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Voice AI Assistant</strong>
                  </td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>Partial</td>
                  <td className={styles.ourColumn}>✅</td>
                </tr>
                <tr>
                  <td>
                    <strong>Astrology</strong>
                  </td>
                  <td>❌</td>
                  <td>✅ (Manual)</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅ (AI-Powered)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Soul Matching</strong>
                  </td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅</td>
                </tr>
                <tr>
                  <td>
                    <strong>Physical Books</strong>
                  </td>
                  <td>❌</td>
                  <td>❌</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅</td>
                </tr>
                <tr>
                  <td>
                    <strong>Vernacular Support</strong>
                  </td>
                  <td>Partial</td>
                  <td>Partial</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅ 10+ Languages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Cultural Context</strong>
                  </td>
                  <td>Partial</td>
                  <td>Partial</td>
                  <td>❌</td>
                  <td className={styles.ourColumn}>✅ Deep Understanding</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pricing</strong>
                  </td>
                  <td>Free-$2/mo</td>
                  <td>$5-20/consult</td>
                  <td>$10-20/mo</td>
                  <td className={styles.ourColumn}>$0 (ads) or $4.99/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
