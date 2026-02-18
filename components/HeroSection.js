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
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <StarField />
          <NeuralNetwork count={150} />
        </Canvas>
      </div>

      <div className={styles.content}>
        <div className={styles.headlineContainer}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={styles.animatedText}
            >
              {headlines[headlineIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <h2 className={styles.staticText}>
          Prabas Digital - Elevating Your Business in the Digital Age.
        </h2>

        <p className={styles.subHeadline}>
          We craft data-driven marketing strategies and world-class digital experiences to scale your brand.
        </p>

        <div className={styles.ctaGroup}>
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
        </div>
      </div>
    </section>
  );
}
