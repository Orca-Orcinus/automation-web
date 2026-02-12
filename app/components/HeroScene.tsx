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
                          <mesh ref={meshRef} position={[0, 0, 0]} scale={1.2}>
                                <torusKnotGeometry args={[1, 0.6, 128, 32]} />
                                      <meshStandardMaterial
                                              color="#3b82f6"
                                                      emissive="#1e40af"
                                                              emissiveIntensity={0.5}
                                                                      roughness={0.2}
                                                                              metalness={0.8}
                                                                                      wireframe        
                                                                                            />
                                                                                                </mesh>
                                                                                                  );
}

function MachinePart({
  position,
  targetPosition,
}: {
  position: [number, number, number];
  targetPosition: [number, number, number];
}) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    meshRef.current.position.lerp(
      { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] } as any,
      0.02
    );
  });

  return (
    <mesh ref={meshRef} position={position} scale={0.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#eb253f" roughness={0.4} metalness={0.7} />
    </mesh>
  );
};

function AssemblyMachine()
{
  return(
    <>
    <MachinePart position={[-1, 0, 0]} targetPosition={[0, 0, 0]} />
    <MachinePart position={[0, 1, 0]} targetPosition={[0, 0.5, 0]} />
    <MachinePart position={[0, 0, -1]} targetPosition={[0, 0, 0.5]} />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-[600px] bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 bg-gradient-to-t from-slate-900 via-transparent to-transparent">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-6 drop-shadow-2xl">
          Future of Automation
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-8 font-light">
          Custom machine design, robotics integration, and intelligent control systems for modern manufacturing.
        </p>
        <div className="flex gap-4">
          <a href="/contact" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/30">
            Request Consultation
          </a>
          <a href="/projects" className="px-8 py-3 rounded-full border border-slate-600 hover:bg-slate-800 text-slate-300 font-semibold transition-all">
            View Projects
          </a>
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
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </div>
    </div>
  );
}
