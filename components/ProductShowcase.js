"use client";

import { Tilt } from "react-tilt";
import { Flower } from "lucide-react";
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
    <section id="innovations" className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Innovations</h2>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={styles.quickNav}
          >
            Jump to Contact ↓
          </button>
        </div>
        <div className={styles.grid}>
          {/* Malola */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/malola" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Flower size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>Malola / Soulink</h3>
                <p className={styles.cardDesc}>
                  AI Wellness Platform combining mental health support with cultural context.
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
