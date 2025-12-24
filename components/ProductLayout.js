"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import styles from "./ProductLayout.module.css";

export default function ProductLayout({
  title,
  description,
  features = [],
  techStack = [],
  techStack = [],
  liveLink,
  image,
  caseStudy,
  children,
}) {
  return (
    <div className={styles.container}>


      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveButton}
          >
            Visit Live Site <ExternalLink size={18} />
          </a>
        )}
      </motion.header>

      {image && (
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={image}
            alt={`${title} Screenshot`}
            width={1400}
            height={800}
            className={styles.productImage}
            priority
            quality={100}
          />
        </motion.div>
      )}

      <div className={styles.contentGrid}>
        <motion.div
          className={styles.mainContent}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
          
          {features.length > 0 && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featureList}>
                {features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {caseStudy && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Case Study</h2>
              <div className={styles.caseStudyContent}>
                <h3 className={styles.caseStudyHeading}>{caseStudy.problem}</h3>
                <p className={styles.caseStudyText}>{caseStudy.solution}</p>
                <div className={styles.caseStudyStats}>
                  {caseStudy.stats.map((stat, index) => (
                    <div key={index} className={styles.statItem}>
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <motion.aside
          className={styles.sidebar}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {techStack.length > 0 && (
            <div className={`${styles.card} glass-card`}>
              <h3 className={styles.cardTitle}>Tech Stack</h3>
              <div className={styles.techTags}>
                {techStack.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.aside>
      </div>
    </div>
  );
}
