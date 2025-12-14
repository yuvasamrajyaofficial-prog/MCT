"use client";

import { Tilt } from "react-tilt";
import { GraduationCap, Flower } from "lucide-react";
import Link from "next/link";
import styles from "./ProductShowcase.module.css";

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function ProductShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <h2 className={styles.heading}>Our Innovations</h2>
        <div className={styles.grid}>
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="https://zekkers-app2.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <GraduationCap size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>Zekkers</h3>
                <p className={styles.cardDesc}>
                  The AI Roadmap for Careers. Connecting Students, Colleges, and Employers with predictive skill visualization.
                </p>
                <span className={styles.status}>Live / Beta</span>
              </div>
            </Link>
          </Tilt>

          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/mental-tech" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Flower size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>DivyaVani / SoulTalk</h3>
                <p className={styles.cardDesc}>
                  AI-driven Spiritual Companion. Converse with the wisdom of scriptures and deities for mental peace.
                </p>
                <span className={`${styles.status} ${styles.dev}`}>In Development</span>
              </div>
            </Link>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
