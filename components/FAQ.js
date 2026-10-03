"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const FAQ_DATA = [
  {
    q: "What is Malola Cosmic Tech (MCT)?",
    a: "Malola Cosmic Tech (MCT) is an advanced deep-tech and enterprise software venture founded by Prashant Hiremath. We engineer resilient, offline-first operating systems for modern commerce (flagship: MCT Retail), alongside culturally-attuned AI platforms (Malola AI) and spatial 3D systems."
  },
  {
    q: "What makes MCT Retail different from traditional POS systems?",
    a: "Traditional POS systems crash during internet outages and lock merchants into expensive proprietary hardware ($2,500 - $5,000/terminal). MCT Retail is 100% offline-operable via PWA caching, works on any device (iPad, PC, tablet), features sub-50ms barcode scanning, 3D store floor mapping, and auto-syncs multi-warehouse inventory upon reconnection."
  },
  {
    q: "How can investors participate in the MCT Retail Seed Round?",
    a: "We are currently raising a $350,000 Pre-Seed / Seed round (SAFE / Equity) to scale our merchant acquisition and deploy pilots across 500+ storefronts. Investors can review our interactive pitch deck at /investors, request our data room, or reach Founder Prashant Hiremath directly on WhatsApp (+91 99028 57694)."
  },
  {
    q: "Is there a working product demo of MCT Retail?",
    a: "Yes! MCT Retail is already deployed and live in production on Railway Cloud (https://mct-retail-production.up.railway.app/). You can experience the actual 3D checkout terminal, offline resilience, and catalog engine directly in your web browser."
  },
  {
    q: "What is the commercial SaaS pricing for merchants?",
    a: "MCT Retail offers flexible tiers: Starter Store at ₹1,999/month (single terminal, offline POS), Multi-Store Pro at ₹4,999/month (up to 5 terminals, 3D map, multi-location stock transfer), and Enterprise Chain plans for regional supermarket networks."
  },
  {
    q: "What other products are in the Malola Cosmic Tech portfolio?",
    a: "Our portfolio spans applied AI and deep tech: Malola AI / Soulink (AI Vedic wellness platform), Lola AI (voice emotional companion), The Enforcer (strict productivity mentor), BullMonk (Web3 ecosystem), and VaultCam (biometric security)."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className={styles.list}>
          {FAQ_DATA.map((item, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`${styles.chevron} ${openIndex === i ? styles.rotated : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
