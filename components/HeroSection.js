"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.css";

import NeuralNetwork from "./NeuralNetwork";

function StarField(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 20 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 30;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [
    "Enterprise Retail OS.",
    "Offline-First 3D POS.",
    "Cosmic Intelligence.",
    "Deep Tech Commerce."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section className={styles.hero}>
      {/* Decorative glow orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <StarField />
          <NeuralNetwork count={150} />
        </Canvas>
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Investor Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <a href="/investors" className={styles.investorBadge}>
            <span className={styles.badgePulse} />
            <span className={styles.badgeTag}>FUNDING ROUND</span>
            <span className={styles.badgeText}>MCT Retail Pre-Seed / Seed Round is Live</span>
            <span className={styles.badgeArrow}>Explore Deck →</span>
          </a>
        </motion.div>

        <div className={styles.headlineContainer}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={styles.animatedText}
            >
              {headlines[headlineIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.h2 
          className={styles.staticText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Malola Cosmic Tech (MCT) — Transcending Commerce & Intelligence.
        </motion.h2>

        <motion.p 
          className={styles.subHeadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We build resilient, offline-first enterprise software and AI systems. Backing our flagship innovation — <strong>MCT Retail</strong>, the 3D Point of Sale & Retail OS built for zero-downtime modern commerce.
        </motion.p>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <a 
            href="/investors"
            className={styles.primaryBtn}
          >
            Invest in MCT Retail ⚡
          </a>
          <a 
            href="https://mct-retail-production.up.railway.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Launch Live 3D POS Demo ↗
          </a>
          <button 
             onClick={() => document.getElementById('innovations')?.scrollIntoView({ behavior: 'smooth' })}
             className={styles.ghostBtn}
          >
            Tech Portfolio
          </button>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div 
          className={styles.statsBar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statVal}>100%</span>
            <span className={styles.statLbl}>Offline Operable</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statVal}>&lt;50ms</span>
            <span className={styles.statLbl}>Scan Latency</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statVal}>$40B+</span>
            <span className={styles.statLbl}>Global POS TAM</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statVal}>85%+</span>
            <span className={styles.statLbl}>Gross Margin</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div 
        className={styles.scrollIndicator}
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll</span>
        <div className={styles.scrollArrow} />
      </div>
    </section>
  );
}
