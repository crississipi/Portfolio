"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import NavBtn from "./NavBtn";
import dynamic from "next/dynamic";

const Hero = () => {
  const [boxSize, setSize] = useState<[number, number, number]>([0, 0, 15]);
  
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 728) {
        setSize([0, 0, 40])
      } else { setSize([0, 0, 25]) }
    };

    // Set the initial size based on screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Dice = dynamic(() => import('./Dice'), {loading: () => null})
  
  return (
    <section
      id="home"
      className="h-full w-full relative overflow-hidden flex items-center justify-center text-nav-hover"
    >
      <div className="w-full h-full z-50 flex flex-col items-center justify-between px-5">
        <div className="h-full w-full flex justify-center absolute top-1/2 left-1/2 -translate-1/2">
          <Canvas
              className="w-full max-h-8/9 flex items-center justify-center"
              camera={{ position: boxSize, fov: 50 }}
              shadows
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 0.8,
                outputColorSpace: THREE.SRGBColorSpace,
              }}
            >
              <ambientLight color="#002147" intensity={0.5} />
              <hemisphereLight args={["#002147", "#002147", 0.3]} />
              <directionalLight
                color="#ffffff"
                intensity={1}
                position={[-10, 0, 10]}
                castShadow
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
              />
              <directionalLight
                color="#ffffff"
                intensity={1}
                position={[-10, 0, -10]}
                castShadow
                shadow-mapSize-width={512}
                shadow-mapSize-height={512}
              />
              <Suspense fallback={null}>
                <Dice 
                  size={1} 
                  text='Cris' 
                  position={[-5, 1, 0]} 
                  textPosition={[-2, -1, 2]} 
                  textSize={1.5} 
                  color="#ff0000"
                  backText="Im a"
                  backTextPos={[2,-1,-2]}
                />
                <Dice 
                  size={2}  
                  text='Julius' 
                  position={[2.5, 1, 0]} 
                  textPosition={[-2.5, -1, 2]} 
                  textSize={1.5} 
                  color="#00ff00"
                  backText="Frontend"
                  backTextPos={[4.5,-1,-2]}
                />
                <Dice 
                  size={3} 
                  text='Malipico' 
                  position={[0, -3, 0]} 
                  textPosition={[-5.5, -1, 2]} 
                  textSize={2} 
                  color="#ffea00"
                  backText="Developer"
                  backTextPos={[6.5,-1, -2]}
                />
              </Suspense>
            </Canvas>
        </div>

        <div className="w-full flex flex-col md:mb-5 mb-24 gap-2">
          <NavBtn
            icon={0}
            link="https://www.linkedin.com/in/crismalipico12/"
            label="in/crismalipico12/"
          />
          <NavBtn
            icon={1}
            link="https://github.com/crississipi"
            label="github.com/crississipi"
          />
          <NavBtn
            icon={2}
            link="https://mail.google.com/mail/?view=cm&fs=1&to=crismalipico12@gmail.com"
            label="crismalipico12@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
