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
  liveLink,
  image,
  children,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.backLinkWrapper}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src={image}
            alt={`${title} Screenshot`}
            width={1200}
            height={675}
            className={styles.productImage}
            priority
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
