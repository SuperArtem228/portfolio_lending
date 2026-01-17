'use client';

import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function Blob({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Sphere args={[1, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.1}
        transparent
        opacity={0.3}
      />
    </Sphere>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Blob position={[-3, 0, 0]} color="#ff6b35" />
      <Blob position={[3, 2, -2]} color="#ff8c5a" />
      <Blob position={[0, -2, -1]} color="#ffa07a" />
    </>
  );
}

export default function Background3D() {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if device can handle 3D (simple heuristic)
    const isLowEnd = navigator.hardwareConcurrency < 4 || 
                     (navigator as any).deviceMemory < 4;
    setShouldRender(!isLowEnd);
  }, []);

  if (!mounted || !shouldRender) {
    // Fallback: gradient background
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent-light/3 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-light/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

