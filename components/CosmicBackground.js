"use client";

import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styles from "./CosmicBackground.module.css";

function CosmicDust(props) {
  const ref = useRef();
  const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
    
    // Cosmic Breath: Expansion and Contraction
    const time = state.clock.getElapsedTime();
    // Slow, deep breath (approx 6-8 seconds per cycle)
    const breath = 1 + Math.sin(time * 0.8) * 0.4; 
    ref.current.scale.set(breath, breath, breath);
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#F59E0B" // Gold/Fire
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function CoreSource() {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2) * 0.1; // Faster pulse for the core
    mesh.current.scale.set(scale, scale, scale);
  });

  return (
    <Sphere ref={mesh} args={[0.2, 32, 32]}>
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#F59E0B"
        emissiveIntensity={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function CosmicBackground() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CosmicDust />
        <CoreSource />
      </Canvas>
    </div>
  );
}
