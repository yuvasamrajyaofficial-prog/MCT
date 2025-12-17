"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

const PLANETS = [
  { name: "Mercury", color: "#A0A0A0", size: 0.2, distance: 3.5, speed: 1.5 },
  { name: "Venus", color: "#E6B800", size: 0.3, distance: 5, speed: 1.2 },
  { name: "Earth", color: "#2E8BC0", size: 0.32, distance: 7, speed: 1.0 },
  { name: "Mars", color: "#C1440E", size: 0.25, distance: 9, speed: 0.8 },
  { name: "Jupiter", color: "#D9A066", size: 0.8, distance: 13, speed: 0.5 },
  { name: "Saturn", color: "#EDDCA8", size: 0.7, distance: 17, speed: 0.4, ring: true },
];

function Planet({ planet }) {
  const ref = useRef();
  
  // Create orbit path points
  const points = [];
  const segments = 128;
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * planet.distance, 0, Math.sin(angle) * planet.distance));
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * planet.speed * 0.15;
    ref.current.position.x = Math.cos(t) * planet.distance;
    ref.current.position.z = Math.sin(t) * planet.distance;
    ref.current.rotation.y += 0.01;
  });

  return (
    <group>
      {/* Orbit Path */}
      <Line points={points} color="rgba(255,255,255,0.05)" lineWidth={0.5} transparent opacity={0.1} />
      
      {/* Planet */}
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[planet.size, 64, 64]} />
        <meshStandardMaterial 
          color={planet.color} 
          roughness={0.7}
          metalness={0.2}
        />
        {planet.ring && (
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <ringGeometry args={[planet.size * 1.4, planet.size * 2.2, 64]} />
            <meshStandardMaterial color={planet.color} transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
        )}
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  return (
    <group rotation={[0.1, 0, 0]}>
      {/* Sun Light Source */}
      <pointLight 
        intensity={3} 
        distance={50} 
        color="#FDB813" 
        castShadow 
        shadow-mapSize={[2048, 2048]}
      />

      {/* Sun Core */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>
      
      {/* Sun Glow Layers */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.3} />
      </mesh>
      <mesh scale={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#D97706" transparent opacity={0.1} />
      </mesh>

      {/* Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </group>
  );
}
