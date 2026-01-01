'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Network, Zap, Clock, DollarSign, Layers, ArrowRight, TrendingUp, Database, Shield, ChevronDown, CheckCircle2, Play, Server, Activity } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SpeedVisual } from '@/components/AnimatedVisuals'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Reusable "Tech Spec" Card for Platforms
const PlatformSpecCard = ({ 
  name, 
  desc, 
  logoPath, 
  features, 
  colorClass, 
  expanded, 
  onToggle 
}: { 
  name: string, 
  desc: string, 
  logoPath: string, 
  features: { label: string, value: string, desc: string }[], 
  colorClass: string,
  expanded: boolean,
  onToggle: () => void
}) => (
  <div className={`group border transition-all duration-300 ${expanded ? 'bg-[#080808] border-blue-900/50' : 'bg-[#050505] border-neutral-800 hover:border-neutral-700'}`}>
    <button 
      onClick={onToggle}
      className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-6"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm">
           {/* Fallback to text if image fails, or use standard next/image */}
           {logoPath ? (
             <div className="relative w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity">
                <Image src={logoPath} alt={name} fill className="object-contain" />
             </div>
           ) : (
             <Layers size={20} className="text-neutral-500" />
           )}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">{name}</h3>
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-wide">{desc}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
         <span className={`text-[10px] font-mono uppercase tracking-widest px-2 py-1 border rounded-sm ${expanded ? 'text-blue-400 border-blue-900 bg-blue-900/20' : 'text-neutral-500 border-neutral-800 bg-neutral-900'}`}>
           {expanded ? 'Specs Open' : 'View Specs'}
         </span>
         <ChevronDown size={16} className={`text-neutral-500 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
      </div>
    </button>

    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-2 grid md:grid-cols-2 gap-4 border-t border-neutral-800/50">
            {features.map((f, i) => (
              <div key={i} className="p-3 bg-neutral-900/30 border border-neutral-800 rounded-sm">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{f.label}</div>
                <div className="text-sm font-bold text-white mb-1">{f.value}</div>
                <div className="text-xs text-neutral-400 leading-snug">{f.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const MetricRow = ({ label, items }: { label: string, items: { name: string, value: string, highlight?: boolean }[] }) => (
  <div className="p-4 border-b border-neutral-800 last:border-0 hover:bg-[#0A0A0A] transition-colors">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
      <div className="flex items-center gap-2 text-neutral-500">
        <Activity size={14} />
        <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
      </div>
      <div className="flex gap-4 md:gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-end min-w-[80px]">
            <span className="text-[10px] text-neutral-600 font-mono uppercase">{item.name}</span>
            <span className={`text-sm font-bold font-mono ${item.highlight ? 'text-blue-500' : 'text-neutral-300'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default function Session2() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>('eth');

  return (
    <div className="relative pt-24 pb-24 bg-black text-white selection:bg-blue-900 selection:text-white font-sans min-h-screen">
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
         style={{ 
           backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
           backgroundSize: '40px 40px' 
         }}>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 02
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Infrastructure
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            PLATFORM
            <br />
            ARCHITECTURES.
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            Comparative analysis of consensus mechanisms, transaction models, and performance trade-offs across major Layer-1 protocols.
          </p>
        </motion.div>

        {/* Session Goal */}
        <motion.div
          className="mb-24 bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm"
          {...fadeInUp}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm text-blue-500">
              <Server size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold font-mono text-blue-500 uppercase tracking-widest mb-2">
                Core Objective
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Analyze why blockchains perform differently. We will dissect the architectural decisions behind Ethereum, Solana, and Algorand, focusing on the "Blockchain Trilemma."
              </p>
            </div>
          </div>
        </motion.div>

        {/* 1. Platform Architectures */}
        <motion.section className="mb-24" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800">01</span>
            <h2 className="text-2xl font-bold tracking-tight">Layer-1 Protocols</h2>
          </div>

          <div className="space-y-4">
             <PlatformSpecCard 
               name="Ethereum" 
               desc="Modular / General Purpose" 
               logoPath="/logos/ethereum.svg"
               colorClass="blue"
               expanded={expandedPlatform === 'eth'}
               onToggle={() => setExpandedPlatform(expandedPlatform === 'eth' ? null : 'eth')}
               features={[
                 { label: 'Consensus', value: 'Proof of Stake (PoS)', desc: 'Validators stake 32 ETH. Prioritizes decentralization.' },
                 { label: 'Execution', value: 'EVM (Single Thread)', desc: 'Sequential transaction processing.' },
                 { label: 'Scaling', value: 'Rollup Centric', desc: 'Offloads computation to Layer 2s.' },
                 { label: 'Finality', value: '~15 Minutes', desc: 'Probabilistic finality until epochs finalize.' }
               ]}
             />
             <PlatformSpecCard 
               name="Solana" 
               desc="Monolithic / High Throughput" 
               logoPath="/logos/solana.svg"
               colorClass="purple"
               expanded={expandedPlatform === 'sol'}
               onToggle={() => setExpandedPlatform(expandedPlatform === 'sol' ? null : 'sol')}
               features={[
                 { label: 'Consensus', value: 'PoH + PoS', desc: 'Proof of History creates a global clock for ordering.' },
                 { label: 'Execution', value: 'Sealevel (Parallel)', desc: 'Multi-threaded execution of smart contracts.' },
                 { label: 'Scaling', value: 'Hardware Scaling', desc: 'Relies on Moore\'s law and powerful validators.' },
                 { label: 'Finality', value: '~400ms', desc: 'Optimistic confirmation is sub-second.' }
               ]}
             />
             <PlatformSpecCard 
               name="Algorand" 
               desc="Pure Proof of Stake" 
               logoPath="/logos/algorand.svg"
               colorClass="cyan"
               expanded={expandedPlatform === 'algo'}
               onToggle={() => setExpandedPlatform(expandedPlatform === 'algo' ? null : 'algo')}
               features={[
                 { label: 'Consensus', value: 'Pure PoS', desc: 'Cryptographic sortition (VRF) selects committees.' },
                 { label: 'Execution', value: 'AVM', desc: 'Optimized for atomic swaps and assets.' },
                 { label: 'Scaling', value: 'Block Pipelining', desc: 'Efficient block propagation.' },
                 { label: 'Finality', value: 'Instant', desc: 'Zero forking risk. Immediate finality.' }
               ]}
             />
          </div>
        </motion.section>

        {/* 2. Transaction Models */}
        <motion.section className="mb-24" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800">02</span>
            <h2 className="text-2xl font-bold tracking-tight">State Models</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-3 mb-4 text-blue-500">
                <Database size={20} />
                <h3 className="text-lg font-bold uppercase tracking-wider">Account Model</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-6 min-h-[40px]">
                Like a bank account. Global state maps addresses to balances. Used by Ethereum & Solana.
              </p>
              <ul className="space-y-2">
                {['Stateful (easy for DApps)', 'Requires Nonce for ordering', 'Harder to parallelize'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                     <span className="w-1 h-1 bg-blue-500 rounded-full" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-3 mb-4 text-neutral-400">
                <Shield size={20} />
                <h3 className="text-lg font-bold uppercase tracking-wider">UTXO Model</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-6 min-h-[40px]">
                Like cash. Unspent Transaction Outputs are consumed to create new ones. Used by Bitcoin & Cardano.
              </p>
               <ul className="space-y-2">
                {['Stateless verification', 'Privacy benefits', 'Native parallel processing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-mono text-neutral-300">
                     <span className="w-1 h-1 bg-neutral-600 rounded-full" />
                     {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* 3. Performance Benchmark */}
        <motion.section className="mb-24" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800">03</span>
            <h2 className="text-2xl font-bold tracking-tight">Performance Benchmarks</h2>
          </div>

          <div className="bg-[#050505] border border-neutral-800 rounded-sm overflow-hidden">
             {/* Header */}
             <div className="px-6 py-3 bg-neutral-900/50 border-b border-neutral-800 flex justify-between items-center">
               <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">Live Metrics Simulation</span>
               <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-mono text-green-500">SYSTEM ACTIVE</span>
               </div>
             </div>
             
             {/* Visual */}
             <div className="p-8 border-b border-neutral-800 bg-[#080808]">
                <SpeedVisual />
             </div>

             {/* Data Table */}
             <div className="bg-[#050505]">
                <MetricRow 
                  label="Throughput (TPS)" 
                  items={[
                    { name: 'ETH', value: '15-30' },
                    { name: 'ALGO', value: '10k' },
                    { name: 'SOL', value: '65k+', highlight: true }
                  ]} 
                />
                <MetricRow 
                  label="Time to Finality" 
                  items={[
                    { name: 'ETH', value: '13 min' },
                    { name: 'ALGO', value: '3.3 sec' },
                    { name: 'SOL', value: '0.4 sec', highlight: true }
                  ]} 
                />
                 <MetricRow 
                  label="Avg Cost ($)" 
                  items={[
                    { name: 'ETH', value: '$2.50' },
                    { name: 'ALGO', value: '$0.001' },
                    { name: 'SOL', value: '$0.00025', highlight: true }
                  ]} 
                />
             </div>
          </div>
        </motion.section>

        {/* 4. Trade-offs Table */}
        <motion.section className="mb-24" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800">04</span>
            <h2 className="text-2xl font-bold tracking-tight">The Trilemma Trade-off</h2>
          </div>
          
          <div className="overflow-hidden border border-neutral-800 rounded-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-neutral-900 text-neutral-500 font-mono text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Platform</th>
                  <th className="px-6 py-4 font-medium text-blue-500">Optimization</th>
                  <th className="px-6 py-4 font-medium text-neutral-400">Compromise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800 bg-[#050505]">
                {[
                  { name: 'Ethereum', opt: 'Security & Decentralization', comp: 'Low Throughput / High Cost' },
                  { name: 'Solana', opt: 'Speed & Scalability', comp: 'Hardware Centralization Risk' },
                  { name: 'Algorand', opt: 'Efficiency & Finality', comp: 'Permissioned Relay Nodes' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-white">{row.name}</td>
                    <td className="px-6 py-4 text-blue-400 font-mono text-xs">{row.opt}</td>
                    <td className="px-6 py-4 text-neutral-500 font-mono text-xs">{row.comp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* System Check Takeaways */}
        <motion.section className="mb-16 border-t border-neutral-800 pt-16" {...fadeInUp}>
          <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-neutral-500 mb-8 text-center">
            System Check
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Architecture dictates performance limits',
              'Account Model vs UTXO impacts developer experience',
              'No "perfect" chain; only optimal trade-offs'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="flex justify-center" {...fadeInUp}>
          <Link href="/">
            <button className="px-8 py-4 border border-neutral-700 text-neutral-300 font-bold text-sm uppercase tracking-wider hover:bg-neutral-900 transition-colors flex items-center gap-3 rounded-sm">
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Return to Dashboard</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}