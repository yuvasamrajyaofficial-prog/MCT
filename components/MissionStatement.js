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
          &quot;We empower businesses to thrive in the digital ecosystem. Combining creative strategy with technical excellence, we turn your vision into measurable growth.&quot;
        </p>
      </motion.div>
    </section>
  );
}
