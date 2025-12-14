"use client";

import { useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere, Plane } from "@react-three/drei";
import * as THREE from "three";
import styles from "./CosmicBackground.module.css";

// The Causal Ocean (Kāraṇa-jala)
function CausalOcean() {
  const mesh = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Gentle, rhythmic undulation of the cosmic waters
    mesh.current.position.y = -2 + Math.sin(time * 0.5) * 0.05;
    mesh.current.rotation.z = Math.sin(time * 0.2) * 0.02;
  });

  return (
    <Plane ref={mesh} args={[20, 10, 64, 64]} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]}>
      <meshStandardMaterial
        color="#020617" // Deepest Cosmic Blue/Black
        roughness={0.1}
        metalness={0.8}
        emissive="#0f172a"
        emissiveIntensity={0.2}
        wireframe={true} // Digital aesthetic
        transparent
        opacity={0.3}
      />
    </Plane>
  );
}

// The Golden Universes (Brahmāṇḍa)
function UniverseParticles() {
  const ref = useRef();
  // Create 5000 particles representing universes
  const count = 5000;
  
  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Random direction vector
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.sin(phi) * Math.sin(theta);
      const z = Math.cos(phi);
      
      // Store normalized direction as initial position
      initPos[i * 3] = x;
      initPos[i * 3 + 1] = y;
      initPos[i * 3 + 2] = z;
      
      // Start at center
      pos[i * 3] = 0;
      pos[i * 3 + 1] = 0;
      pos[i * 3 + 2] = 0;
    }
    return [pos, initPos];
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Cycle duration: 16 seconds
    // 0-6s: Exhale (Creation/Expansion)
    // 6-8s: Pause (Maintenance)
    // 8-14s: Inhale (Dissolution/Contraction)
    // 14-16s: Stillness (Yoga Nidra)
    const cycleDuration = 16;
    const t = time % cycleDuration;
    
    let expansionFactor = 0;

    if (t < 6) {
      // Exhale: 0 to 1
      expansionFactor = THREE.MathUtils.smoothstep(t, 0, 6) * 4; // Expand to radius 4
    } else if (t < 8) {
      // Pause: Stay at max
      expansionFactor = 4 + Math.sin(time * 2) * 0.05; // Slight vibration
    } else if (t < 14) {
      // Inhale: 1 to 0
      expansionFactor = 4 * (1 - THREE.MathUtils.smoothstep(t, 8, 14));
    } else {
      // Stillness: 0
      expansionFactor = 0;
    }

    // Update positions
    const currentPositions = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      // Add some noise/randomness to the distance so they don't form a perfect shell
      const noise = 1 + Math.sin(i * 132.1) * 0.2; 
      
      currentPositions[ix] = initialPositions[ix] * expansionFactor * noise;
      currentPositions[ix + 1] = initialPositions[ix + 1] * expansionFactor * noise;
      currentPositions[ix + 2] = initialPositions[ix + 2] * expansionFactor * noise;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Rotate the whole system slowly
    ref.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#F59E0B" // Golden Universes
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// The Divine Core (Mahāviṣṇu Source)
function DivineCore() {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Pulse with the breath
    const cycleDuration = 16;
    const t = time % cycleDuration;
    
    let intensity = 1;
    if (t > 14) {
      // Glow brighter during stillness (potential energy)
      intensity = 1.5 + Math.sin(time * 5) * 0.2;
    } else {
      intensity = 1 + Math.sin(time * 2) * 0.1;
    }
    
    mesh.current.scale.set(intensity, intensity, intensity);
  });

  return (
    <Sphere ref={mesh} args={[0.1, 32, 32]}>
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#F59E0B"
        emissiveIntensity={3}
        toneMapped={false}
      />
    </Sphere>
  );
}

export default function CosmicBackground() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
        <fog attach="fog" args={['#000000', 5, 15]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#F59E0B" />
        
        <UniverseParticles />
        <DivineCore />
        <CausalOcean />
      </Canvas>
    </div>
  );
}
