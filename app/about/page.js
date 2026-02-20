"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Disc, BookOpen, Handshake } from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero / Legacy Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <motion.div
              className={styles.imageWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/legacy-image.png"
                alt="Our father – the foundation of our legacy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.heroImage}
              />
              <div className={styles.imageOverlay} />
            </motion.div>

            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className={styles.title}>
                Built on <span className="text-gradient">Legacy</span>
              </h1>
              <p className={styles.subtitle}>
                Prabas Digital is more than a business — it&apos;s a tribute to the values our father instilled in us: hard work, integrity, and the belief that anyone can grow.
              </p>
              <p className={styles.description}>
                From the golden fields of Karnataka to the digital frontier, we carry forward the spirit of dedication. Every project we take on is powered by the same discipline and care our father taught us.
              </p>
              <div className={styles.badge}>
                <span>🇮🇳 Proudly Made in India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <motion.h2
            className={styles.valuesHeading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <div className={styles.valuesGrid}>
            {[
              {
                icon: <Disc size={40} color="#F59E0B" />,
                title: "Strategy",
                desc: "Like the Sudarshan Chakra, our strategy is precise, dynamic, and effective."
              },
              {
                icon: <BookOpen size={40} color="#F59E0B" />,
                title: "Knowledge",
                desc: "Rooted in the Vedas and modern tech, we value continuous learning."
              },
              {
                icon: <Handshake size={40} color="#F59E0B" />,
                title: "Trust",
                desc: "Building lasting relationships based on integrity and mutual growth."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
