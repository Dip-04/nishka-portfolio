'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, RoundedBox, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function StudioRoom() {
  const room = useRef<THREE.Group>(null);
  const lamp = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }, delta) => {
    if (room.current) {
      room.current.rotation.y = THREE.MathUtils.lerp(room.current.rotation.y, mouse.x * 0.14, delta * 1.2);
      room.current.rotation.x = THREE.MathUtils.lerp(room.current.rotation.x, -mouse.y * 0.08, delta * 1.2);
    }
    if (lamp.current) {
      lamp.current.position.y = 2.65 + Math.sin(performance.now() * 0.0016) * 0.04;
    }
  });

  return (
    <group ref={room} position={[0, -0.7, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
        <planeGeometry args={[16, 16]} />
        <meshStandardMaterial color="#120f0d" roughness={1} metalness={0.1} />
      </mesh>
      <mesh position={[0, 2.2, -5]} receiveShadow>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#151210" roughness={0.95} />
      </mesh>
      <mesh position={[-5.2, 2.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#12100f" roughness={0.95} />
      </mesh>
      <mesh position={[5.2, 2.2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#120f0e" roughness={0.95} />
      </mesh>

      <RoundedBox args={[4.8, 1.15, 1.55]} radius={0.12} smoothness={6} position={[0, -0.08, -0.2]}>
        <meshStandardMaterial color="#2a2420" roughness={0.9} />
      </RoundedBox>
      <RoundedBox args={[5.0, 1.0, 0.55]} radius={0.1} smoothness={6} position={[0, 0.55, -0.95]}>
        <meshStandardMaterial color="#3b3127" roughness={0.8} />
      </RoundedBox>
      <RoundedBox args={[1.8, 0.2, 1.1]} radius={0.06} smoothness={6} position={[1.55, -0.3, 1.0]} rotation={[0, -0.35, 0]}>
        <meshStandardMaterial color="#8f6b3b" roughness={0.45} metalness={0.1} />
      </RoundedBox>

      <mesh ref={lamp} position={[0, 2.65, -1.2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#f7e7c6" emissive="#ddb97a" emissiveIntensity={3} />
      </mesh>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh position={[-2.2, 1.1, -1.4]} rotation={[0.1, 0.2, 0.2]}>
          <boxGeometry args={[1.2, 1.8, 0.08]} />
          <meshStandardMaterial color="#c8ab74" roughness={0.55} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[2.1, 0.8, -1.2]} rotation={[0.08, -0.2, -0.16]}>
          <boxGeometry args={[1.0, 1.4, 0.08]} />
          <meshStandardMaterial color="#7d6041" roughness={0.48} />
        </mesh>
      </Float>

      <Text
        position={[0, 1.85, -0.4]}
        fontSize={0.28}
        color="#fff2d9"
        anchorX="center"
        anchorY="middle"
      >
        Interior Studio
      </Text>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0.35, 8]} fov={35} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 8, 4]} intensity={2.2} color="#ffe4b1" castShadow />
      <pointLight position={[-4, 1, 4]} intensity={1.4} color="#b68f58" />
      <StudioRoom />
      <Environment preset="city" />
    </Canvas>
  );
}
