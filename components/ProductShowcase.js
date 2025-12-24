"use client";

import { Tilt } from "react-tilt";
import { GraduationCap, Flower, Palette, Briefcase } from "lucide-react";
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
          {/* Zekkers */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/zekkers" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <GraduationCap size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>Zekkers</h3>
                <p className={styles.cardDesc}>
                  AI Job Marketplace for students and early-career professionals.
                </p>
                <span className={styles.status}>Live / Beta</span>
              </div>
            </Link>
          </Tilt>

          {/* TioraS */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/tioras" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Palette size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>TioraS</h3>
                <p className={styles.cardDesc}>
                  AI-Powered E-Commerce Platform with "Design-to-Print" workflow.
                </p>
                <span className={styles.status}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* GovtNaukri4u */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/govtnaukri4u" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Briefcase size={48} color="#F59E0B" />
                </div>
                <h3 className={styles.cardTitle}>GovtNaukri4u</h3>
                <p className={styles.cardDesc}>
                  EdTech & Job Portal for government job information and prep.
                </p>
                <span className={styles.status}>Live</span>
              </div>
            </Link>
          </Tilt>

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
