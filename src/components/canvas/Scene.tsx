"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

function AnimatedShape({ pathname }: { pathname: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  const emissiveColor = useMemo(() => {
    if (typeof window === "undefined") return new THREE.Color("#7000FF");
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-karnexa-void")
      .trim();
    return new THREE.Color(color || "#7000FF");
  }, [pathname]);

  const config = useMemo(() => {
    if (pathname === "/contact")
      return {
        position: [0, 0, -6],
        speed: 0.3,
        distort: 0.05,
        scale: 1.2,
        opacity: 0.3,
      };
    if (pathname === "/projects")
      return {
        position: [1.5, 0, 0],
        speed: 1.5,
        distort: 0.2,
        scale: 2.0,
        opacity: 0.8,
      };
    if (pathname.startsWith("/projects/"))
      return {
        position: [0, 0, -2],
        speed: 1,
        distort: 0.2,
        scale: 1.8,
        opacity: 0.6,
      };
    return {
      position: [0, 0, 0],
      speed: 3,
      distort: 0.4,
      scale: 2.5,
      opacity: 1.0,
    };
  }, [pathname]);

  useFrame(() => {
    if (!meshRef.current || !materialRef.current) return;
    const lerpFactor = 0.04;

    meshRef.current.position.z = THREE.MathUtils.lerp(
      meshRef.current.position.z,
      config.position[2],
      lerpFactor
    );
    meshRef.current.scale.setScalar(
      THREE.MathUtils.lerp(meshRef.current.scale.x, config.scale, lerpFactor)
    );

    materialRef.current.distort = THREE.MathUtils.lerp(
      materialRef.current.distort,
      config.distort,
      lerpFactor
    );
    materialRef.current.speed = THREE.MathUtils.lerp(
      materialRef.current.speed,
      config.speed,
      lerpFactor
    );
    materialRef.current.opacity = THREE.MathUtils.lerp(
      materialRef.current.opacity,
      config.opacity,
      lerpFactor
    );
    materialRef.current.emissive.lerp(emissiveColor, lerpFactor);

    materialRef.current.transparent = true;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      {" "}
      <MeshDistortMaterial
        ref={materialRef}
        roughness={0.1}
        metalness={0.8}
        color="#ffffff"
        emissiveIntensity={1}
      />
    </Sphere>
  );
}

export default function Scene() {
  const pathname = usePathname();
  return (
    <div className="h-full w-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]} 
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#89229D" />
        <AnimatedShape pathname={pathname} />
      </Canvas>
    </div>
  );
}
