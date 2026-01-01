'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  Float, 
  Text, 
  Line, 
  Sphere, 
  Environment,
  useCursor,
  RoundedBox,
  Icosahedron,
  Octahedron,
  MeshTransmissionMaterial,
  Html
} from '@react-three/drei'
import { useState, useRef, useMemo } from 'react'
import * as THREE from 'three'

// --- SHARED CONFIG ---
const THEME = {
  blue: '#3b82f6',
  cyan: '#06b6d4',
  purple: '#a855f7',
  emerald: '#10b981',
  dark: '#1e293b',
  glass: {
    transmission: 1,
    thickness: 1.2,
    roughness: 0.1,
    ior: 1.2,
    chromaticAberration: 0.02,
    anisotropy: 0.1,
  }
}

// ==========================================
// 1. Distributed Ledger: 3D Node Mesh
// ==========================================

const Node = ({ position, onClick, isHovered }: any) => {
  useCursor(isHovered)
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial 
        color={isHovered ? THEME.cyan : THEME.blue} 
        emissive={isHovered ? THEME.cyan : THEME.blue}
        emissiveIntensity={isHovered ? 2 : 0.5}
        toneMapped={false}
      />
      {/* Glow Halo */}
      <mesh scale={1.5}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color={THEME.blue} transparent opacity={0.2} depthWrite={false} />
      </mesh>
    </mesh>
  )
}

const ConnectionLine = ({ start, end, active }: any) => {
  return (
    <Line
      points={[start, end]}
      color={active ? THEME.cyan : THEME.blue}
      lineWidth={active ? 2 : 1}
      transparent
      opacity={active ? 0.8 : 0.2}
    />
  )
}

export const LedgerVisual = () => {
  const [pulse, setPulse] = useState(false)
  
  // Arrange nodes in a pentagon
  const nodes = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const angle = (i / 5) * Math.PI * 2
      return new THREE.Vector3(Math.cos(angle) * 2, Math.sin(angle) * 2, 0)
    })
  }, [])

  return (
    <div className="h-64 w-full relative bg-black/20 rounded-xl overflow-hidden border border-white/5">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={THEME.blue} />
        
        <group rotation={[0, 0, 0]}> 
          {/* Continuous slow rotation group */}
          <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
            <group onClick={() => setPulse(true)} onPointerOut={() => setPulse(false)}>
              {nodes.map((pos, i) => (
                <Node key={i} position={pos} isHovered={pulse} />
              ))}
              
              {/* Mesh Connections (All to All) */}
              {nodes.map((start, i) => 
                nodes.slice(i + 1).map((end, j) => (
                  <ConnectionLine key={`${i}-${j}`} start={start} end={end} active={pulse} />
                ))
              )}
            </group>
          </Float>
        </group>
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <span className="text-[10px] text-blue-400 font-mono bg-black/50 px-2 py-1 rounded">
          INTERACTIVE MESH NETWORK
        </span>
      </div>
    </div>
  )
}

// ==========================================
// 2. Blockchain: 3D Chain (FIXED)
// ==========================================

const BlockContent = ({ isLatest }: { isLatest: boolean }) => {
  const coreRef = useRef<THREE.Mesh>(null)
  
  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta
      coreRef.current.rotation.y += delta * 0.5
    }
  })

  return (
    <group>
      {/* Inner Hash Core */}
      <Icosahedron ref={coreRef} args={[0.3, 0]} >
        <meshStandardMaterial 
          color={isLatest ? THEME.cyan : THEME.blue} 
          emissive={isLatest ? THEME.cyan : THEME.blue}
          emissiveIntensity={2}
          wireframe
        />
      </Icosahedron>
      
      {/* Data Lines */}
      <Line points={[[-0.3, 0.2, 0], [0.3, 0.2, 0]]} color="white" transparent opacity={0.5} lineWidth={1} />
      <Line points={[[-0.3, 0, 0], [0.3, 0, 0]]} color="white" transparent opacity={0.5} lineWidth={1} />
      <Line points={[[-0.3, -0.2, 0], [0.3, -0.2, 0]]} color="white" transparent opacity={0.5} lineWidth={1} />
    </group>
  )
}

const ChainBlock = ({ position, index, isLatest }: any) => {
  return (
    <group position={position}>
      {/* Connection Beam */}
      {index > 0 && (
        <group position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          {/* Core Beam */}
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshBasicMaterial color={THEME.cyan} />
          {/* Glow Beam */}
          <mesh scale={[1.5, 1, 1.5]}>
             <cylinderGeometry args={[0.08, 0.08, 1.2, 8]} />
             <meshBasicMaterial color={THEME.cyan} transparent opacity={0.3} />
          </mesh>
        </group>
      )}
      
      {/* The Block Container */}
      <RoundedBox args={[1.2, 1.2, 1.2]} radius={0.1} smoothness={4}>
        <MeshTransmissionMaterial 
          {...THEME.glass} 
          color={isLatest ? THEME.cyan : '#ffffff'}
          thickness={1.5}
          anisotropy={0.5}
        />
      </RoundedBox>
      
      {/* Inner Content */}
      <BlockContent isLatest={isLatest} />

      {/* Label */}
      <Text 
        position={[0, -0.9, 0]} 
        fontSize={0.15} 
        color="gray"
        anchorX="center" 
        anchorY="middle"
      >
        BLOCK {index}
        {isLatest && " (LATEST)"}
      </Text>
      
      {/* Hash Label */}
      <Text 
        position={[0, 0.9, 0]} 
        fontSize={0.1} 
        color={THEME.cyan}
        anchorX="center" 
        anchorY="middle"
      >
        0x{Math.random().toString(16).substr(2, 6)}...
      </Text>
    </group>
  )
}

export const ChainVisual = () => {
  const [blockCount, setBlockCount] = useState(3)
  
  const addBlock = () => {
    if (blockCount < 5) setBlockCount(prev => prev + 1)
  }
  
  const reset = () => setBlockCount(1)

  return (
    <div className="h-64 w-full relative bg-black/20 rounded-xl overflow-hidden border border-white/5">
      <Canvas camera={{ position: [0, 2, 8], fov: 35 }}>
        {/* ADDED ENVIRONMENT: Critical for glass visibility */}
        <Environment preset="city" />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="white" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={THEME.blue} />
        
        {/* Center the chain based on count */}
        <group position={[-(blockCount - 1) * 1.2 * 0.5, 0, 0]}>
          {Array.from({ length: blockCount }).map((_, i) => (
            <Float key={i} speed={2} rotationIntensity={0.05} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
              <ChainBlock position={[i * 2.4, 0, 0]} index={i} isLatest={i === blockCount - 1} />
            </Float>
          ))}
        </group>
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Canvas>

      {/* HTML Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
        <button 
          onClick={addBlock}
          disabled={blockCount >= 5}
          className="px-3 py-1 bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          + MINE BLOCK
        </button>
        <button 
          onClick={reset}
          className="px-3 py-1 bg-red-900/30 hover:bg-red-900/50 text-red-400 text-xs font-mono rounded border border-red-500/30 transition-colors"
        >
          RESET CHAIN
        </button>
      </div>
    </div>
  )
}

// ==========================================
// 3. Merkle Tree: 3D Tree Structure (FIXED)
// ==========================================

const MerkleNode = ({ position, active, label, onClick, isLeaf }: any) => {
  const [hovered, setHover] = useState(false)
  useCursor(hovered && isLeaf) // Only show pointer for leaves

  // Refactored to avoid invalid nesting of Meshes
  return (
    <group position={position}>
      <group
        onClick={isLeaf ? onClick : undefined}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        rotation={[isLeaf ? 0 : Math.PI / 4, isLeaf ? 0 : Math.PI / 4, 0]} 
      >
        {isLeaf ? (
          // Leaf Nodes are Data Cubes
          <RoundedBox args={[0.8, 0.8, 0.8]} radius={0.1}>
             <meshStandardMaterial 
                color={active ? THEME.emerald : THEME.dark} 
                emissive={active ? THEME.emerald : THEME.dark}
                emissiveIntensity={active ? 0.5 : 0}
             />
          </RoundedBox>
        ) : (
          // Hash Nodes are Crystal Octahedrons
          <Octahedron args={[0.5, 0]}>
             <MeshTransmissionMaterial 
               {...THEME.glass}
               color={active ? THEME.cyan : '#555'} 
               distortion={active ? 0.4 : 0}
               distortionScale={0.5}
               temporalDistortion={0.2}
               thickness={2}
             />
          </Octahedron>
        )}
      </group>
      
      {/* Label */}
      <Text 
        position={[0, isLeaf ? -0.8 : 0.8, 0]} 
        fontSize={0.15} 
        color={active ? "white" : "gray"}
      >
        {label}
      </Text>
      
      {/* Active Indicator Ring */}
      {active && (
        <mesh rotation={[Math.PI/2, 0, 0]}>
          <ringGeometry args={[0.6, 0.65, 32]} />
          <meshBasicMaterial color={isLeaf ? THEME.emerald : THEME.cyan} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  )
}

const MerkleLine = ({ start, end, active }: any) => {
  return (
    <Line 
      points={[start, end]} 
      color={active ? THEME.cyan : '#334155'} 
      lineWidth={active ? 3 : 1}
      transparent
      opacity={active ? 0.8 : 0.3}
    />
  )
}

export const MerkleVisual = () => {
  // Simple state: 4 leaves [boolean]
  const [leaves, setLeaves] = useState([false, false, false, false])

  const toggleLeaf = (index: number) => {
    const newLeaves = [...leaves]
    newLeaves[index] = !newLeaves[index]
    setLeaves(newLeaves)
  }

  // Derive Tree State
  const l0 = leaves[0]
  const l1 = leaves[1]
  const l2 = leaves[2]
  const l3 = leaves[3]
  
  const p0 = l0 || l1 
  const p1 = l2 || l3 
  const root = p0 || p1 

  // Positions (Tree Layout)
  const posL = [-3, -1.5, 0]
  const posL2 = [-1, -1.5, 0]
  const posL3 = [1, -1.5, 0]
  const posL4 = [3, -1.5, 0]
  
  const posP0 = [-2, 0.5, 0]
  const posP1 = [2, 0.5, 0]
  const posRoot = [0, 2.5, 0]

  return (
    <div className="h-80 w-full relative bg-black/20 rounded-xl overflow-hidden border border-white/5">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* ADDED ENVIRONMENT: Critical for glass visibility */}
        <Environment preset="city" />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 5]} intensity={1} color="white" />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} color={THEME.cyan} />

        <group position={[0, -0.5, 0]}>
          {/* Lines */}
          <MerkleLine start={posL} end={posP0} active={l0} />
          <MerkleLine start={posL2} end={posP0} active={l1} />
          <MerkleLine start={posL3} end={posP1} active={l2} />
          <MerkleLine start={posL4} end={posP1} active={l3} />
          <MerkleLine start={posP0} end={posRoot} active={p0} />
          <MerkleLine start={posP1} end={posRoot} active={p1} />

          {/* Leaves */}
          <MerkleNode position={posL} active={l0} label="Tx A" isLeaf onClick={() => toggleLeaf(0)} />
          <MerkleNode position={posL2} active={l1} label="Tx B" isLeaf onClick={() => toggleLeaf(1)} />
          <MerkleNode position={posL3} active={l2} label="Tx C" isLeaf onClick={() => toggleLeaf(2)} />
          <MerkleNode position={posL4} active={l3} label="Tx D" isLeaf onClick={() => toggleLeaf(3)} />

          {/* Parents */}
          <MerkleNode position={posP0} active={p0} label="H(A+B)" />
          <MerkleNode position={posP1} active={p1} label="H(C+D)" />
          
          {/* Root */}
          <MerkleNode position={posRoot} active={root} label="Root Hash" />
        </group>
        
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 2.5} />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wide bg-black/50 px-3 py-1 rounded border border-white/10">
          Click data blocks (cubes) to verify hash path
        </span>
      </div>
    </div>
  )
}

// ==========================================
// 4. Speed Visual: 3D Bar Chart
// ==========================================

const Bar = ({ position, height, color, label, value }: any) => {
  const [hovered, setHover] = useState(false)
  useCursor(hovered)

  return (
    <group position={position}>
      <mesh 
        position={[0, height / 2, 0]} 
        onPointerOver={() => setHover(true)} 
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, height, 1]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      {/* Reflection/Ground effect */}
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI/2, 0, 0]}>
         <planeGeometry args={[1.2, 1.2]} />
         <meshBasicMaterial color={color} opacity={0.2} transparent />
      </mesh>
      
      <Text position={[0, -0.5, 0.6]} fontSize={0.25} color="white" anchorX="center" anchorY="middle">
        {label}
      </Text>
      
      {hovered && (
        <Html position={[0, height + 0.5, 0]} center>
          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded border border-white/10 whitespace-nowrap font-mono backdrop-blur-md">
            {value}
          </div>
        </Html>
      )}
    </group>
  )
}

export const SpeedVisual = () => {
  return (
    <div className="h-64 w-full relative bg-black/20 rounded-xl overflow-hidden border border-white/5">
      <Canvas camera={{ position: [4, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[-5, 5, 5]} intensity={1} color="#ffffff" />
        
        <group position={[0, -1.5, 0]}>
          <Bar 
            position={[-2, 0, 0]} 
            height={1.5} 
            color={THEME.purple} 
            label="ETH" 
            value="~30 TPS" 
          />
          <Bar 
            position={[0, 0, 0]} 
            height={3.0} 
            color="gray" 
            label="ALGO" 
            value="~10,000 TPS" 
          />
          <Bar 
            position={[2, 0, 0]} 
            height={5.0} 
            color={THEME.cyan} 
            label="SOL" 
            value="65,000+ TPS" 
          />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.2} />
      </Canvas>
      <div className="absolute top-4 left-4 pointer-events-none">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wide">
          Throughput Comparison (TPS)
        </span>
      </div>
    </div>
  )
}