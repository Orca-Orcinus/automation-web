"use client";

import { Canvas , useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh,MathUtils } from "three";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import React , { useEffect , useState } from "react";

export function RandomSwitch()
{
  const [value,setValue] = useState<number>(0);
    
      useEffect(()=>
        {
            let timeout: NodeJS.Timeout;

                const schedule = () =>
                    {
                          const delay = Math.random() * 2000 + 500;
                                timeout = setTimeout(()=>
                                      {
                                              setValue(Math.floor(Math.random()*10));
                                                      schedule();
                                                            },delay);
                                                                };

                                                                    schedule();

                                                                        return () => clearTimeout(timeout);  

                                                                            // const interval = setInterval(()=>
                                                                                // {
                                                                                    //   const random = Math.floor(Math.random()*10);
                                                                                        //   setValue(random);
                                                                                            // },3000);

                                                                                                // return () => clearInterval(interval);
                                                                                                  },[]);

                                                                                                    return <div>{value}</div>;
                                                                                                    }

                                                                                                    function RotatingMachine() {
                                                                                                      const meshRef = useRef<Mesh>(null!);  
                                                                                                        const targetScale = useRef({ x: 1, y: 1, z: 1 });
                                                                                                          const currentScale = useRef({ x: 1, y: 1, z: 1 });
                                                                                                            const timer = useRef(0);
                                                                                                              const switchTime = useRef(2);
                                                                                                                const min = {x: 2,y:2,z:2};
                                                                                                                  const max = {x: 6,y:6,z:6};

                                                                                                                    const targetVelocity = useRef({
                                                                                                                        x : Math.random() * 0.5,
                                                                                                                            y : Math.random() * 0.5,
                                                                                                                                z : Math.random() * 0.5,
                                                                                                                                  });

                                                                                                                                    const currentVelocity = useRef({
                                                                                                                                        x : 0,
                                                                                                                                            y : 0,
                                                                                                                                                z : 0,
                                                                                                                                                  });

                                                                                                                                                    useFrame((_,delta) => {
                                                                                                                                                        timer.current += delta;


                                                                                                                                                            if(timer.current >= switchTime.current)
                                                                                                                                                                {
                                                                                                                                                                      targetScale.current ={
                                                                                                                                                                              x : MathUtils.randFloat(min.x,max.x),
                                                                                                                                                                                      y : MathUtils.randFloat(min.y,max.y),
                                                                                                                                                                                              z : MathUtils.randFloat(min.z,max.z),
                                                                                                                                                                                                    }       

                                                                                                                                                                                                          switchTime.current = 2 + Math.random() * 2;
                                                                                                                                                                                                                timer.current = 0;
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                        currentScale.current.x = MathUtils.lerp(
                                                                                                                                                                                                                              currentScale.current.x,
                                                                                                                                                                                                                                    targetScale.current.x,
                                                                                                                                                                                                                                          0.05
                                                                                                                                                                                                                                              )

                                                                                                                                                                                                                                                  currentScale.current.y = MathUtils.lerp(
                                                                                                                                                                                                                                                        currentScale.current.y,
                                                                                                                                                                                                                                                              targetScale.current.y,
                                                                                                                                                                                                                                                                    0.05
                                                                                                                                                                                                                                                                        )
                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                currentScale.current.z = MathUtils.lerp(
                                                                                                                                                                                                                                                                                      currentScale.current.z,
                                                                                                                                                                                                                                                                                            targetScale.current.z,
                                                                                                                                                                                                                                                                                                  0.05
                                                                                                                                                                                                                                                                                                      )

                                                                                                                                                                                                                                                                                                          currentVelocity.current.x = MathUtils.lerp(
                                                                                                                                                                                                                                                                                                                currentVelocity.current.x,
                                                                                                                                                                                                                                                                                                                      targetVelocity.current.x,
                                                                                                                                                                                                                                                                                                                            0.02
                                                                                                                                                                                                                                                                                                                                )

                                                                                                                                                                                                                                                                                                                                    currentVelocity.current.y = MathUtils.lerp(
                                                                                                                                                                                                                                                                                                                                          currentVelocity.current.y,
                                                                                                                                                                                                                                                                                                                                                targetVelocity.current.y,
                                                                                                                                                                                                                                                                                                                                                      0.02
                                                                                                                                                                                                                                                                                                                                                          )
                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                  currentVelocity.current.z = MathUtils.lerp(
                                                                                                                                                                                                                                                                                                                                                                        currentVelocity.current.z,
                                                                                                                                                                                                                                                                                                                                                                              targetVelocity.current.z,
                                                                                                                                                                                                                                                                                                                                                                                    0.02
                                                                                                                                                                                                                                                                                                                                                                                        )

                                                                                                                                                                                                                                                                                                                                                                                            meshRef.current.scale.set(
                                                                                                                                                                                                                                                                                                                                                                                                  MathUtils.clamp(currentScale.current.x, min.x, max.x),
                                                                                                                                                                                                                                                                                                                                                                                                        MathUtils.clamp(currentScale.current.y, min.y, max.y),
                                                                                                                                                                                                                                                                                                                                                                                                              MathUtils.clamp(currentScale.current.z, min.z, max.z)
                                                                                                                                                                                                                                                                                                                                                                                                                  )

                                                                                                                                                                                                                                                                                                                                                                                                                      meshRef.current.rotation.x += currentVelocity.current.x * delta;
                                                                                                                                                                                                                                                                                                                                                                                                                          meshRef.current.rotation.y += currentVelocity.current.y * delta;
                                                                                                                                                                                                                                                                                                                                                                                                                              meshRef.current.rotation.z += currentVelocity.current.z * delta;
                                                                                                                                                                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                                                                                                                                                                  return (
                                                                                                                                                                                                                                                                                                                                                                                                                                      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
                                                                                                                                                                                                                                                                                                                                                                                                                                            <boxGeometry args={[1, 0.3, 1]} />
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

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Custom Machine Design", desc: "Tailored engineering for complex manufacturing challenges." },
          { title: "Robotics Integration", desc: "Deploying high-speed pick & place, assembly, and welding robots." },
          { title: "Vision Systems", desc: "Automated quality inspection with 2D/3D machine vision." },
          // { title: "PLC/HMI Programming", desc: "Robust control systems using Siemens, Rockwell, and more." },
        ].map((s) => (
          <div key={s.title} className="p-8 border rounded-xl shadow-sm hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
            <p className="text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#60a5fa" />
          <RotatingMachine />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </div>    
  );
}
