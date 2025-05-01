"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type * as THREE from "three"

function Scene() {
  const { camera } = useThree()
  const boxRef = useRef<THREE.Mesh>(null)

  // Simple animation for the placeholder 3D model
  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.005
      boxRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  // Set initial camera position
  useEffect(() => {
    camera.position.set(5, 2, 5)
  }, [camera])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#eae0d6" />

      {/* Placeholder architectural model - would be replaced with actual building model */}
      <group>
        {/* Base/ground */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#eae0d6" />
        </mesh>

        {/* Main building */}
        <mesh position={[0, 0.5, 0]} ref={boxRef}>
          <boxGeometry args={[2, 1, 3]} />
          <meshStandardMaterial color="#23323a" />
        </mesh>

        {/* Additional structures */}
        <mesh position={[-1.5, 0.25, 0]}>
          <boxGeometry args={[1, 0.5, 2]} />
          <meshStandardMaterial color="#23323a" metalness={0.5} roughness={0.2} />
        </mesh>

        <mesh position={[1.5, 0.75, 0.5]}>
          <boxGeometry args={[1, 1.5, 1]} />
          <meshStandardMaterial color="#23323a" metalness={0.5} roughness={0.2} />
        </mesh>

        {/* Windows */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[0, 0.5, -1.25 + i * 0.5]}>
            <boxGeometry args={[2.1, 0.2, 0.1]} />
            <meshStandardMaterial color="#eae0d6" emissive="#eae0d6" emissiveIntensity={0.2} />
          </mesh>
        ))}
      </group>

      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export function Hero3D() {
  const { t, locale } = useLanguage()

  return (
    <div className="relative h-screen w-full">
      {/* 3D Canvas */}
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault fov={45} />
        <Scene />
      </Canvas>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container relative z-10 flex flex-col items-center text-center">
          <div className="max-w-3xl mx-auto px-4 py-16 backdrop-blur-sm bg-black/20 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">{t("home.hero.title")}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">{t("home.hero.subtitle")}</p>
            <Link href={`/${locale}/projects`}>
              <Button size="lg" className="bg-[#23323a] hover:bg-[#23323a]/90 text-white">
                {t("home.cta")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
