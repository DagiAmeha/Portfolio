"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export function About3DElement() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation based on scroll or time
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, 1, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#3b82f6" wireframe />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[-2, -1, 1]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.8}>
        <mesh position={[1.5, -1.5, -1]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial color="#10b981" wireframe />
        </mesh>
      </Float>
    </group>
  );
}
