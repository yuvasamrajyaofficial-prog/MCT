import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const PLANETS = [
  { name: "Mercury", color: "#A0A0A0", size: 0.08, distance: 2.5, speed: 1.5 },
  { name: "Venus", color: "#E6B800", size: 0.15, distance: 3.5, speed: 1.2 },
  { name: "Earth", color: "#2E8BC0", size: 0.16, distance: 5, speed: 1.0 },
  { name: "Mars", color: "#C1440E", size: 0.12, distance: 6.5, speed: 0.8 },
  { name: "Jupiter", color: "#D9A066", size: 0.4, distance: 9, speed: 0.5 },
  { name: "Saturn", color: "#EDDCA8", size: 0.35, distance: 12, speed: 0.4, ring: true },
];

function Planet({ planet }) {
  const ref = useRef();
  
  // Create orbit path points
  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * planet.distance, 0, Math.sin(angle) * planet.distance));
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * planet.speed * 0.2;
    ref.current.position.x = Math.cos(t) * planet.distance;
    ref.current.position.z = Math.sin(t) * planet.distance;
    ref.current.rotation.y += 0.02;
  });

  return (
    <group>
      {/* Orbit Path */}
      <Line points={points} color="rgba(255,255,255,0.1)" lineWidth={0.5} transparent opacity={0.2} />
      
      {/* Planet */}
      <mesh ref={ref}>
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial color={planet.color} />
        {planet.ring && (
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[planet.size * 1.4, planet.size * 2, 32]} />
            <meshBasicMaterial color={planet.color} transparent opacity={0.5} side={THREE.DoubleSide} />
          </mesh>
        )}
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  return (
    <group rotation={[0.2, 0, 0]}>
      {/* Sun */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#F59E0B" />
        <pointLight intensity={2} distance={20} color="#F59E0B" />
      </mesh>
      
      {/* Sun Glow */}
      <mesh scale={[1.2, 1.2, 1.2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#F59E0B" transparent opacity={0.2} />
      </mesh>

      {/* Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.name} planet={planet} />
      ))}
    </group>
  );
}
