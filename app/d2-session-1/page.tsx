'use client'

import { motion } from 'framer-motion'
import {
  Network,
  Cpu,
  Fuel,
  FileCode,
  ArrowRight,
  Terminal,
  Database,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import { ChainVisual } from '@/components/AnimatedVisuals'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function SessionEthereumArchitecture() {
  return (
    <div className="relative pt-24 pb-24 bg-black text-white selection:bg-blue-900 selection:text-white font-sans">
      
      {/* Background Tech Grid */}
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
              Protocol Level
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            ETHEREUM
            <br />
            ARCHITECTURE.
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            A deep technical exploration of Ethereum’s network design, execution model, gas economics, and state management.
          </p>
        </motion.div>

        {/* Session Goal - Blueprint Box */}
        <motion.div
          className="mb-24 bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm"
          {...fadeInUp}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm">
              <Terminal size={20} className="text-blue-500" />
            </div>
            <div>
              <h2 className="text-sm font-bold font-mono text-blue-500 uppercase tracking-widest mb-2">
                Objective
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Deconstruct the Ethereum stack: understanding how nodes maintain global state via peer-to-peer communication, the deterministic nature of the EVM, and how gas fees regulate computational resources.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 1. Ethereum Network */}
        <motion.section className="mb-24 group" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">01</span>
            <h2 className="text-2xl font-bold tracking-tight">The Network Layer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Ethereum operates as a <strong className="text-white font-medium">peer-to-peer network</strong> of nodes. Unlike client-server architectures, every full node stores the complete history and state of the blockchain.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  'Execution Clients (Geth, Nethermind)',
                  'Consensus Clients (Prysm, Lighthouse)',
                  'P2P Communication (devp2p)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300 font-mono">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-sm"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Container */}
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-neutral-600">FIG 1.0</div>
              <div className="w-full opacity-80">
                <ChainVisual />
              </div>
              <p className="text-[10px] text-neutral-500 font-mono mt-4 uppercase tracking-wider">
                Block Propagation & State Sync
              </p>
            </div>
          </div>
        </motion.section>

        {/* 2. EVM */}
        <motion.section className="mb-24 group" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">02</span>
            <h2 className="text-2xl font-bold tracking-tight">Ethereum Virtual Machine (EVM)</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="md:col-span-2 mb-4">
                <p className="text-neutral-400 leading-relaxed max-w-3xl">
                  The EVM is a <strong className="text-white font-medium">quasi-Turing-complete</strong> state machine. It is stack-based, meaning it operates on a Last-In-First-Out basis with a word size of 256 bits to facilitate native hashing and elliptic curve operations.
                </p>
             </div>

            {[
              {
                title: 'Stack Architecture',
                desc: '256-bit word size. 1024 item depth limit. Strictly deterministic.',
                icon: <Database size={18} />
              },
              {
                title: 'Isolated Sandbox',
                desc: 'Code runs with no access to network, filesystem, or other processes.',
                icon: <Cpu size={18} />
              },
              {
                title: 'Global State',
                desc: 'A large data structure (Merkle Patricia Trie) holding all accounts.',
                icon: <Network size={18} />
              },
              {
                title: 'Bytecode Execution',
                desc: 'High-level Solidity compiles down to low-level Opcodes.',
                icon: <FileCode size={18} />
              }
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#0A0A0A] border border-neutral-800 hover:border-blue-800 transition-colors rounded-sm group/card"
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-bold text-white group-hover/card:text-blue-400 transition-colors">{item.title}</h4>
                  <div className="text-neutral-600 group-hover/card:text-blue-500 transition-colors">
                    {item.icon}
                  </div>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. Gas Model */}
        <motion.section className="mb-24 group" {...fadeInUp} viewport={{ once: true }}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">03</span>
            <h2 className="text-2xl font-bold tracking-tight">Gas & Economics</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
                <p className="text-neutral-400 mb-6">
                  Gas is the unit that measures the amount of computational effort required to execute operations. It serves two purposes: preventing infinite loops (Halting Problem) and prioritizing market resources.
                </p>
                <div className="bg-neutral-900/30 p-4 border-l-2 border-blue-500">
                  <p className="font-mono text-sm text-blue-200">
                    Total Fee = (Base Fee + Priority Fee) × Gas Used
                  </p>
                </div>
             </div>

             <div className="flex-1 w-full">
                <div className="space-y-2">
                  {[
                    { step: '01', text: 'User signs transaction' },
                    { step: '02', text: 'Tx broadcast to Mempool' },
                    { step: '03', text: 'Validator bundles Tx into Block' },
                    { step: '04', text: 'EVM executes & state updates' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 border border-neutral-800 bg-[#0A0A0A]">
                      <span className="font-mono text-xs text-neutral-600">{item.step}</span>
                      <span className="text-sm text-neutral-300">{item.text}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </motion.section>

        {/* Takeaways - Checklist Style */}
        <motion.section className="mb-16 border-t border-neutral-800 pt-16" {...fadeInUp} viewport={{ once: true }}>
          <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-neutral-500 mb-8 text-center">
            System Check
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'State relies on Account Model, not UTXO',
              'EVM guarantees deterministic execution',
              'Gas aligns computation with cost'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="flex justify-center" {...fadeInUp} viewport={{ once: true }}>
          <Link href="/d2-session-2">
            <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next Module: Solidity</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}