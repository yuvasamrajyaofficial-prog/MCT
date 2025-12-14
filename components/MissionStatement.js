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
          "We are a technology house rooted in critical thinking. From the legacy of Neelaganga Agro to the future of Artificial Intelligence, we build tools that empower the human spirit."
        </p>
      </motion.div>
    </section>
  );
}
