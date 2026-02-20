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
  const headlines = ["Growth.", "Visibility.", "Excellence."];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 2000);
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
          PraBaS Digital — Elevating Your Business in the Digital Age.
        </motion.h2>

        <motion.p 
          className={styles.subHeadline}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We craft data-driven marketing strategies and world-class digital experiences to scale your brand.
        </motion.p>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className={styles.primaryBtn}
          >
            Explore Our Services
          </button>
          <button 
             onClick={() => document.getElementById('innovations')?.scrollIntoView({ behavior: 'smooth' })}
             className={styles.secondaryBtn}
          >
            View Portfolio
          </button>
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
