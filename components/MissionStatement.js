"use client";

import { motion } from "framer-motion";
import styles from "./MissionStatement.module.css";

export default function MissionStatement() {
  return (
    <section className={styles.mission}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="container"
      >
        <p className={styles.text}>
          &quot;At Malola Cosmic Tech (MCT), we transcend the boundaries between ancient dedication and futuristic deep tech. From engineering the offline-first future of commerce with MCT Retail to building culturally-aware AI, we build resilient technologies that empower human potential.&quot;
        </p>
      </motion.div>
    </section>
  );
}
