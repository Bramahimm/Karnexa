"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function cssColor(name: string) {
  if (typeof window === "undefined") return "#ffffff";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}
function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  const emissiveColor = cssColor("--color-karnexa-void");
  const baseColor = cssColor("--color-karnexa-magenta");

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={20} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.8}
          color={baseColor}
          emissive={emissiveColor}
          emissiveIntensity={0.25}
        />
      </Sphere>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#89229D" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
