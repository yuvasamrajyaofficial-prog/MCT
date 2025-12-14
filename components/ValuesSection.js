"use client";

import { Disc, BookOpen, Handshake } from "lucide-react";
import styles from "./ValuesSection.module.css";

export default function ValuesSection() {
  return (
    <section className={styles.values}>
      <div className="container">
        <h2 className={styles.heading}>Our Values</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Disc size={48} color="#F59E0B" />
            </div>
            <h3 className={styles.cardTitle}>Strategy</h3>
            <p className={styles.cardDesc}>
              Like the Sudarshan Chakra, our strategy is precise, dynamic, and effective.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <BookOpen size={48} color="#F59E0B" />
            </div>
            <h3 className={styles.cardTitle}>Knowledge</h3>
            <p className={styles.cardDesc}>
              Rooted in the Vedas and modern EdTech, we value continuous learning.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Handshake size={48} color="#F59E0B" />
            </div>
            <h3 className={styles.cardTitle}>Trust</h3>
            <p className={styles.cardDesc}>
              Building lasting relationships based on integrity and mutual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
