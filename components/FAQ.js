"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQ.module.css";

const FAQ_DATA = [
  {
    q: "What services does PraBaS Digital offer?",
    a: "We offer complete digital solutions including website design & development, social media management, SEO optimization, brand identity design, AI-powered tools, and ongoing digital marketing campaigns tailored to your business goals."
  },
  {
    q: "How much does a website cost?",
    a: "Our pricing depends on the scope and complexity. Starter websites begin at ₹15,000, professional sites at ₹30,000, and enterprise-grade applications are custom-quoted. We offer flexible payment plans with a 50-50 split — half upfront, half on delivery."
  },
  {
    q: "How long does it take to build a website?",
    a: "A standard business website takes 1–2 weeks. More complex projects like e-commerce platforms or AI-integrated applications typically take 3–6 weeks depending on features and revisions needed."
  },
  {
    q: "Do you offer monthly maintenance packages?",
    a: "Yes! Our monthly retainer packages include hosting management, security updates, content updates, performance monitoring, and priority support. Plans start at ₹5,000/month."
  },
  {
    q: "Can you help with social media marketing?",
    a: "Absolutely. We manage end-to-end social media campaigns including content creation, scheduling, community management, paid ads, and analytics reporting across Instagram, Facebook, LinkedIn, and more."
  },
  {
    q: "Do you provide SEO services?",
    a: "Yes, SEO is core to our offering. We handle technical SEO, on-page optimization, keyword research, content strategy, backlink building, and local SEO to help your business rank higher on Google."
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
