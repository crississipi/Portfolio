"use client"

import React, { useState, useRef, useEffect, JSX } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text3D } from "@react-three/drei";
import * as THREE from "three";
import { LegoProps } from "@/types";

const Dice = ({ size, text, position, textPosition, textSize, color, backText, backTextPos }: LegoProps) => {
  const cubeRef = useRef<THREE.Mesh>(null);
  const legoSize: [number, number, number] = [size * 5, 4, 5];

  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000); // Flip every 5 seconds
    return () => clearInterval(intervalId); // Cleanup interval
  }, []);

  // Animation Frame
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;

      if (isFlipped) {
        if(cubeRef.current.rotation.y < 3.1) {
          cubeRef.current.rotation.y += 0.05;
        }
      } else {
        if(cubeRef.current.rotation.y > 0) {
          cubeRef.current.rotation.y -= 0.05;
        }
      }
    }
  });

  const cylinders: Record<number, JSX.Element> = {
    1: 
      <>
        <mesh position={[1, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-1, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-1, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[1, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
      </>,
    2: 
      <>
        <mesh position={[2, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-2, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-2, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[2, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh position={[4, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-4, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-4, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[4, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        
        <mesh position={[0, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[0, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh position={[4, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[4, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
      </>,
    3:
      <>
        <mesh position={[0, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[0, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh position={[2, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-2, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-2, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[2, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh position={[4, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-4, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-4, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[4, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>

        <mesh position={[-6, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[-6, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[6, 2.35, -1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
        <mesh position={[6, 2.35, 1]} rotation={[0, 0, 0]}>
          {/* CylinderGeometry: [radiusTop, radiusBottom, height, radialSegments, heightSegments] */}
          <cylinderGeometry args={[0.7, 0.7, 0.7, 100, 1]} /> {/* solid tube geometry */}
          <meshPhysicalMaterial 
            color={color} 
            flatShading 
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
        </mesh>
      </>
  }

  return (
    <group ref={cubeRef} position={position} receiveShadow castShadow>
        {cylinders[size]}
        <RoundedBox    
            args={legoSize} 
            radius={0}
            smoothness={100}
            position={[0, 0, 0]}
        >
            <meshPhysicalMaterial 
              color={color} 
              flatShading 
              reflectivity={1}
              clearcoat={1}
              clearcoatRoughness={0}
              metalness={0}
              roughness={0}
            />
        </RoundedBox>
        <Text3D
          position={textPosition}
          font="/fonts/Merriweather Light_Regular.json"
          size={textSize}
          height={1}
          bevelEnabled
          bevelSize={0.03}
          bevelThickness={0.05}
        >
          {text}
          <meshPhysicalMaterial 
            color={color}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
      </Text3D>
      <Text3D
          rotation={[3.14,0,3.14]}
          position={backTextPos}
          font="/fonts/Merriweather Light_Regular.json"
          size={textSize}
          height={1}
          bevelEnabled
          bevelSize={0.03}
          bevelThickness={0.05}
        >
          {backText}
          <meshPhysicalMaterial 
            color={color}
            reflectivity={1}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0}
            roughness={0}
          />
      </Text3D>
    </group>
  );
};

export default Dice;
