"use client";

import { Tilt } from "react-tilt";
import {
  Flower,
  Briefcase,
  Users,
  ShoppingBag,
  MessageCircle,
  Activity,
} from "lucide-react";
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
          <h2 className={styles.heading}>Our Work Portfolio</h2>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
                  AI Wellness Platform combining mental health support with
                  cultural context.
                </p>
                <span className={`${styles.status} ${styles.dev}`}>
                  In Development
                </span>
              </div>
            </Link>
          </Tilt>

          {/* GovtNaukri4U */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link
              href="https://perfect-theme.vercel.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Briefcase size={48} color="#3B82F6" />
                </div>
                <h3 className={styles.cardTitle}>GovtNaukri4U</h3>
                <p className={styles.cardDesc}>
                  Premium Government Job Portal in Karnataka with AI-powered
                  matching.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* Zekkers */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link
              href="https://zekkers-app2.vercel.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Users size={48} color="#10B981" />
                </div>
                <h3 className={styles.cardTitle}>Zekkers</h3>
                <p className={styles.cardDesc}>
                  Smart Job Matching for Students & Employers across multiple
                  sectors.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* TioraS Studio */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link
              href="https://tiora-s-studio.vercel.app/"
              target="_blank"
              className={styles.cardLink}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <ShoppingBag size={48} color="#EC4899" />
                </div>
                <h3 className={styles.cardTitle}>TioraS Studio</h3>
                <p className={styles.cardDesc}>
                  AI-driven Menswear Fashion Brand with exclusive collections
                  and design studio.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* LOLA AI */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link
              href="/products/lola-ai"
              className={styles.cardLink}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <MessageCircle size={48} color="#8B5CF6" />
                </div>
                <h3 className={styles.cardTitle}>LOLA AI</h3>
                <p className={styles.cardDesc}>
                  Advanced AI Companion designed for meaningful conversations
                  and support.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* AI Fitness Trainer */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link
              href="/products/ai-fitness"
              className={styles.cardLink}
            >
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Activity size={48} color="#EF4444" />
                </div>
                <h3 className={styles.cardTitle}>AI Fitness Trainer</h3>
                <p className={styles.cardDesc}>
                  Your Personal AI Coach for customized workout plans and form
                  correction.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>
        </div>
      </div>
    </section>
  );
}
