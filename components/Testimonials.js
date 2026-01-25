"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    id: 1,
    text: "The strategic insights from their AI solutions have helped us optimize our operations in ways we never imagined.",
    author: "David Chen",
    role: "CTO, FutureScale",
  },
  {
    id: 2,
    text: "Their commitment to ethical AI and human values sets them apart. A true partner in innovation.",
    author: "Elena Rodriguez",
    role: "Founder, GreenSpace",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Trusted by Visionaries</h2>
          <p className={styles.subheading}>
            Hear from those who are building the future with us.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Quote className={styles.icon} size={32} />
              <p className={styles.text}>&quot;{item.text}&quot;</p>
              <div className={styles.author}>
                <h4 className={styles.name}>{item.author}</h4>
                <span className={styles.role}>{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
