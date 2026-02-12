
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";

function RotatingMachine() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
    meshRef.current.rotation.z += delta * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1}>
      <torusKnotGeometry args={[1, 0.6, 128, 32]} />
      <meshStandardMaterial
        color="#3b82f6"
        emissive="#1e40af"
        emissiveIntensity={5}
        roughness={0.2}
        metalness={0.8}
        wireframe        
      />
    </mesh>
  );
}


export default function About() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">About Orcinus Automation.</h1>
      
      <div className="prose max-w-4xl text-lg text-slate-400 leading-relaxed mb-12">
        <p>
          Our mission is to empower manufacturers with systems that are not just automated,
          but adaptable, data-driven, and resilient.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Core Values</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Precision:</strong> Zero tolerance for defects.</li>
            <li><strong>Innovation:</strong> Always leveraging the latest tech (AI, IoT).</li>
            <li><strong>Partnership:</strong> We support you long after installation.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact US</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email Address:</strong> gemsiang@gmail.com</li>
            <li><strong>Contact No:</strong> +6019-7079431</li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
          <RotatingMachine />
          {/* <AssemblyMachine /> */}
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={15} />
        </Canvas>
      </div>
    </div>
  );
}
