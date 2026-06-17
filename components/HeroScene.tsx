'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, RoundedBox, Sparkles, Text } from '@react-three/drei';
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
        <meshStandardMaterial color="#0c1027" roughness={1} metalness={0.1} />
      </mesh>
      <mesh position={[0, 2.2, -5]} receiveShadow>
        <planeGeometry args={[16, 8]} />
        <meshStandardMaterial color="#10153b" roughness={0.95} />
      </mesh>
      <mesh position={[-5.2, 2.2, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#120d34" roughness={0.95} />
      </mesh>
      <mesh position={[5.2, 2.2, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial color="#180f3b" roughness={0.95} />
      </mesh>

      <RoundedBox args={[4.8, 1.15, 1.55]} radius={0.12} smoothness={6} position={[0, -0.08, -0.2]}>
        <meshStandardMaterial color="#26195e" roughness={0.8} metalness={0.08} emissive="#220f49" emissiveIntensity={0.35} />
      </RoundedBox>
      <RoundedBox args={[5.0, 1.0, 0.55]} radius={0.1} smoothness={6} position={[0, 0.55, -0.95]}>
        <meshStandardMaterial color="#1b2f6d" roughness={0.7} metalness={0.05} emissive="#0f1d45" emissiveIntensity={0.28} />
      </RoundedBox>
      <RoundedBox args={[1.8, 0.2, 1.1]} radius={0.06} smoothness={6} position={[1.55, -0.3, 1.0]} rotation={[0, -0.35, 0]}>
        <meshStandardMaterial color="#f7c96e" roughness={0.35} metalness={0.2} emissive="#6d3aff" emissiveIntensity={0.18} />
      </RoundedBox>

      <mesh ref={lamp} position={[0, 2.65, -1.2]}>
        <sphereGeometry args={[0.12, 32, 32]} />
        <meshStandardMaterial color="#f4f7ff" emissive="#66f7ff" emissiveIntensity={4} />
      </mesh>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
        <mesh position={[-2.2, 1.1, -1.4]} rotation={[0.1, 0.2, 0.2]}>
          <boxGeometry args={[1.2, 1.8, 0.08]} />
          <meshStandardMaterial color="#66f7ff" roughness={0.4} emissive="#66f7ff" emissiveIntensity={0.4} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh position={[2.1, 0.8, -1.2]} rotation={[0.08, -0.2, -0.16]}>
          <boxGeometry args={[1.0, 1.4, 0.08]} />
          <meshStandardMaterial color="#ff5bd6" roughness={0.42} emissive="#ff5bd6" emissiveIntensity={0.28} />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.7} floatIntensity={0.8}>
        <mesh position={[0.6, 0.1, 1.3]} rotation={[0.2, 0.6, 0.1]}>
          <torusKnotGeometry args={[0.38, 0.12, 90, 12]} />
          <meshStandardMaterial color="#f7c96e" emissive="#f7c96e" emissiveIntensity={0.35} metalness={0.5} roughness={0.25} />
        </mesh>
      </Float>

      <Text
        position={[0, 1.85, -0.4]}
        fontSize={0.28}
        color="#f4f7ff"
        anchorX="center"
        anchorY="middle"
      >
        Interior Studio
      </Text>

      <Sparkles count={120} scale={[8, 5, 6]} size={2.8} speed={0.25} color="#66f7ff" />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas shadows dpr={[1, 1.5]}>
      <PerspectiveCamera makeDefault position={[0, 0.35, 8]} fov={35} />
      <ambientLight intensity={0.45} color="#9bb7ff" />
      <directionalLight position={[4, 8, 4]} intensity={2.6} color="#66f7ff" castShadow />
      <pointLight position={[-4, 1, 4]} intensity={1.6} color="#ff5bd6" />
      <pointLight position={[2, 2, 2]} intensity={1.2} color="#f7c96e" />
      <StudioRoom />
      <Environment preset="city" />
    </Canvas>
  );
}
