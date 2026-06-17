'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import * as THREE from 'three';

const cards = [
  {
    title: 'Editorial Suite',
    label: 'Curation / Styling',
    image: 'https://picsum.photos/seed/gallery-suite/900/1200'
  },
  {
    title: 'Executive Lounge',
    label: 'Commercial / Premium',
    image: 'https://picsum.photos/seed/gallery-lounge/900/1200'
  },
  {
    title: 'Residential Calm',
    label: 'Home / Serenity',
    image: 'https://picsum.photos/seed/gallery-home/900/1200'
  }
];

function GalleryScene() {
  const group = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    const offset = scroll.offset;
    if (group.current) {
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -offset * 4.3, delta * 2.2);
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, offset * 0.35, delta * 1.6);
    }
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 8.5 - offset * 1.8, delta * 2);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, Math.sin(offset * Math.PI) * 0.35, delta * 2);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <mesh position={[0, -1.6, -2]}>
        <planeGeometry args={[18, 10]} />
        <meshStandardMaterial color="#0e0d0c" />
      </mesh>

      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh position={[-3.9, 1.3, 0]} rotation={[0, 0.2, 0.2]}>
          <boxGeometry args={[1.2, 2.2, 0.2]} />
          <meshStandardMaterial color="#8a6b41" roughness={0.5} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.4}>
        <mesh position={[3.7, 1.6, -0.6]} rotation={[0.2, -0.3, -0.18]}>
          <cylinderGeometry args={[0.35, 0.6, 2.8, 16]} />
          <meshStandardMaterial color="#2f2925" roughness={0.75} />
        </mesh>
      </Float>

      {cards.map((card, index) => (
        <Html
          key={card.title}
          transform
          position={[-2.8 + index * 2.9, 0.5 + index * 0.15, 0]}
          distanceFactor={1.4}
          className="!pointer-events-auto"
        >
          <motion.div
            whileHover={{ y: -10, rotate: -1 }}
            transition={{ duration: 0.35 }}
            className="glass w-[14rem] overflow-hidden rounded-[1.5rem] border border-white/10"
          >
            <div className="h-48 overflow-hidden">
              <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#ddb97a]">{card.label}</p>
              <h3 className="mt-3 font-display text-2xl text-[#f6e8cb]">{card.title}</h3>
            </div>
          </motion.div>
        </Html>
      ))}
    </group>
  );
}

export default function PortfolioGallery() {
  return (
    <section id="gallery" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.55em] text-[#ddb97a]">
              3D Interactive Gallery
            </p>
            <h2 className="max-w-3xl font-display text-3xl leading-[0.95] text-[#f6e7c6] sm:text-4xl md:text-6xl">
              Floating project cards shaped by scroll-driven depth
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/68 md:text-base">
            React Three Fiber is used to create a cinematic portfolio environment with parallax motion,
            hovering cards, and a luxurious room-like spatial composition.
          </p>
        </div>

        <motion.div
          className="glass mt-10 overflow-hidden rounded-[1.5rem] min-h-[28rem] sm:min-h-[34rem] md:h-[42rem] md:rounded-[2rem]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid h-full md:hidden">
            <div className="grid gap-4 p-4 sm:grid-cols-2">
              {cards.map((card) => (
                <article key={card.title} className="glass overflow-hidden rounded-[1.4rem]">
                  <div className="h-44 overflow-hidden">
                    <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] uppercase tracking-[0.45em] text-[#ddb97a]">{card.label}</p>
                    <h3 className="mt-3 font-display text-2xl text-[#f6e8cb]">{card.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <div className="px-4 pb-4 text-sm leading-7 text-white/66">
              Scroll animations and 3D depth are enabled on larger screens for a smoother mobile experience.
            </div>
          </div>
          <div className="hidden h-full md:block">
            <Canvas dpr={[1, 1.5]}>
            <PerspectiveCamera makeDefault position={[0, 0, 8.5]} fov={38} />
            <ambientLight intensity={0.8} />
            <directionalLight position={[4, 6, 6]} intensity={2.2} color="#ffe1a8" />
            <ScrollControls pages={3.2} damping={0.2}>
              <GalleryScene />
            </ScrollControls>
            </Canvas>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
