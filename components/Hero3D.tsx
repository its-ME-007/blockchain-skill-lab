'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Float, 
  PerspectiveCamera, 
  Environment, 
  Stars, 
  Sparkles,
  MeshTransmissionMaterial,
  PresentationControls
} from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

// --- CONSTANTS ---
const CRYSTAL_CONFIG = {
  backside: true,
  samples: 4,
  resolution: 1024,
  transmission: 1,
  roughness: 0.0,
  thickness: 3.5,
  ior: 1.5,
  chromaticAberration: 0.1,
  anisotropy: 0.3,
  distortion: 0.2,
  distortionScale: 0.3,
  temporalDistortion: 0.5,
  clearcoat: 1,
  attenuationDistance: 0.5,
  attenuationColor: '#ffffff',
  color: "#3b82f6",
  bg: '#000000',
}

// --- CRYSTAL COMPONENT ---
const EthCrystal = () => {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state, delta) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y += delta * 0.25 
  })

  return (
    <group ref={groupRef}>
      {/* Top Pyramid */}
      <mesh position={[0, 1.0, 0]} rotation={[0, Math.PI/4, 0]}>
        <coneGeometry args={[1.4, 2.0, 4]} />
        <MeshTransmissionMaterial {...CRYSTAL_CONFIG} />
      </mesh>

      {/* Bottom Pyramid (Inverted) */}
      <mesh position={[0, -1.0, 0]} rotation={[Math.PI, Math.PI/4, 0]}>
         <coneGeometry args={[1.4, 2.0, 4]} />
         <MeshTransmissionMaterial {...CRYSTAL_CONFIG} />
      </mesh>

      {/* Internal Core */}
      <mesh scale={0.4}>
        <octahedronGeometry />
        <meshBasicMaterial color="#ffffff" toneMapped={false} />
      </mesh>
    </group>
  )
}

// --- SCENE COMPONENT ---
const Scene = () => {
  const { viewport } = useThree()
  
  // Responsive Logic
  // viewport.width is in 3D units. roughly < 7 is mobile portrait.
  const isMobile = viewport.width < 7
  
  // Desktop: Right side (x: 3.5)
  // Mobile: Center Bottom (x: 0, y: -1.0)
  const positionX = isMobile ? 0 : 3.7
  const positionY = isMobile ? -1.2 : 0
  const scale = isMobile ? 0.7 : 1

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={35} />
      <Environment preset="city" /> 
      
      <ambientLight intensity={0.2} color="#172554" />
      <pointLight position={[10, 10, 10]} intensity={2} color="#60a5fa" />
      <spotLight position={[-10, 0, 10]} intensity={5} color="#00f0ff" angle={0.5} penumbra={1} />

      <group position={[positionX, positionY, 0]} scale={scale}>
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
        >
          <Float 
            speed={2} 
            rotationIntensity={0.2} 
            floatIntensity={0.5} 
            floatingRange={[-0.1, 0.1]}
          >
            <EthCrystal />
          </Float>
        </PresentationControls>
        
        <Sparkles 
          count={isMobile ? 30 : 60} // Reduce particles on mobile for performance
          scale={isMobile ? 3 : 5}
          size={isMobile ? 6 : 4}
          speed={0.4}
          opacity={0.6}
          color="#00f0ff"
        />
      </group>

      <Stars 
        radius={50} 
        depth={50} 
        count={isMobile ? 1000 : 3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5} 
      />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>
  )
}