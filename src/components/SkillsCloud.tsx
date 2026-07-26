"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import * as THREE from "three";

export function SkillsCloud({ skills }: { skills: string[] }) {
  const groupRef = useRef<THREE.Group>(null);

  // Distribute words in a sphere
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (skills.length + 1);
    const thetaSpan = (Math.PI * 2) / skills.length;

    for (let i = 0; i < skills.length; i++) {
      // Create a more even distribution
      const phi = phiSpan * i + phiSpan;
      const theta = thetaSpan * i;

      const pos = new THREE.Vector3().setFromSpherical(spherical.set(2.5, phi, theta));

      temp.push({
        text: skills[i],
        position: [pos.x, pos.y, pos.z] as [number, number, number],
      });
    }
    return temp;
  }, [skills]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        {words.map((word, i) => (
          <Text
            key={i}
            position={word.position}
            fontSize={0.4}
            color="#ffffff"
            font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
            outlineWidth={0.02}
            outlineColor="#3b82f6"
            material-toneMapped={false}
          >
            {word.text}
          </Text>
        ))}
      </group>
      <TrackballControls noZoom noPan dynamicDampingFactor={0.1} />
    </>
  );
}
