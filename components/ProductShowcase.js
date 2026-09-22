"use client";

import { Tilt } from "react-tilt";
import {
  Flower,
  Briefcase,
  Users,
  ShoppingBag,
  MessageCircle,
  Activity,
  Store,
  ShieldAlert,
  Coins,
  LockKeyhole,
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
          {/* MCT Retail */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/mct-retail" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Store size={48} color="#06B6D4" />
                </div>
                <h3 className={styles.cardTitle}>MCT Retail</h3>
                <p className={styles.cardDesc}>
                  Enterprise Retail OS & 3D POS Suite with offline PWA caching & multi-store sync.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* The Enforcer */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/the-enforcer" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <ShieldAlert size={48} color="#EF4444" />
                </div>
                <h3 className={styles.cardTitle}>The Enforcer</h3>
                <p className={styles.cardDesc}>
                  Strict Personal Accountability App with 55-min work blocks & AI focus mentor.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* BullMonk */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/bull-monk" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <Coins size={48} color="#FBBF24" />
                </div>
                <h3 className={styles.cardTitle}>BullMonk ($BMONK)</h3>
                <p className={styles.cardDesc}>
                  Enlightened Web3 Crypto Ecosystem with Neeti Lore, tokenomics & live roadmap.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
              </div>
            </Link>
          </Tilt>

          {/* VaultCam */}
          <Tilt options={defaultOptions} className={styles.cardWrapper}>
            <Link href="/products/vaultcam" className={styles.cardLink}>
              <div className={`${styles.card} glass-card`}>
                <div className={styles.iconWrapper}>
                  <LockKeyhole size={48} color="#A855F7" />
                </div>
                <h3 className={styles.cardTitle}>VaultCam (VaultID)</h3>
                <p className={styles.cardDesc}>
                  Privacy-first Biometric Camera Verification & encrypted personal vault locker.
                </p>
                <span className={`${styles.status} ${styles.live}`}>Live</span>
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
              href="/products/govtnaukri4u"
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
              href="/products/zekkers"
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
              href="/products/tioras"
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
