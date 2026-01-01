'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Database, Lock, Link2, GitBranch, Shield, Eye, Users, ArrowRight, Layers, Hash, FileText, ChevronDown, CheckCircle2, Play } from 'lucide-react'
import Link from 'next/link'
import { LedgerVisual, ChainVisual, MerkleVisual } from '@/components/AnimatedVisuals'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

const FigureFrame = ({ children, label, id }: { children: React.ReactNode, label: string, id: string }) => (
  <div className="my-8 bg-[#050505] border border-neutral-800 rounded-sm relative group hover:border-blue-900 transition-colors">
    <div className="absolute top-0 left-0 px-2 py-1 bg-neutral-900 border-r border-b border-neutral-800 z-10">
      <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">{id}</span>
    </div>
    <div className="p-8 flex justify-center opacity-80 hover:opacity-100 transition-opacity">
      {children}
    </div>
    <div className="px-4 py-2 border-t border-neutral-800 bg-neutral-900/30">
      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider text-center">
        FIG {id}: {label}
      </p>
    </div>
  </div>
)

export default function Session1() {
  // State for Block Header Accordion
  const [expandedHeaderItem, setExpandedHeaderItem] = useState<number | null>(null);

  const blockHeaderItems = [
    { name: 'Timestamp', desc: 'Epoch time recording when the block was solved.' },
    { name: 'Nonce', desc: 'Arbitrary number iterated to solve the Proof of Work puzzle.' },
    { name: 'Version', desc: 'Bitmask indicating validation rules.' },
    { name: 'Prev_Hash', desc: 'Pointer to previous block (Enforces Immutability).' },
    { name: 'Merkle_Root', desc: 'Hash digest of all transactions in the block.' },
  ];

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
              Session 01
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Fundamentals
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            DISTRIBUTED
            <br />
            LEDGERS.
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            The architectural shift from centralized databases to trustless, decentralized networks.
          </p>
        </motion.div>

        {/* Session Goal */}
        <motion.div
          className="mb-24 bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm"
          {...fadeInUp}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm text-blue-500">
              <Play size={20} />
            </div>
            <div>
              <h2 className="text-sm font-bold font-mono text-blue-500 uppercase tracking-widest mb-2">
                Core Objective
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                Deconstruct the anatomy of a blockchain: cryptographic hashing, the immutable chain structure, and the consensus mechanisms that enable trust without authority.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 1. Introduction */}
        <motion.section className="mb-24 group" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">01</span>
            <h2 className="text-2xl font-bold tracking-tight">The Ledger Shift</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-neutral-400 leading-relaxed">
                A <strong className="text-white font-medium">distributed ledger</strong> is a database that is consensually shared and synchronized across multiple sites, institutions, or geographies.
              </p>
              
              <div className="space-y-3">
                {[
                  { text: 'No Single Point of Failure', icon: Shield },
                  { text: 'Consensus-Based Updates', icon: Users },
                  { text: 'Audit via Transparency', icon: Eye },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-neutral-900/50 border border-neutral-800 rounded-sm">
                    <item.icon className="text-neutral-500" size={16} />
                    <span className="text-sm font-mono text-neutral-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="-mt-4">
              <FigureFrame label="Node Synchronization" id="1.0">
                <LedgerVisual />
              </FigureFrame>
            </div>
          </div>
        </motion.section>

        {/* 2. Core Principles */}
        <motion.section className="mb-24 group" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">02</span>
            <h2 className="text-2xl font-bold tracking-tight">System Properties</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Decentralization', desc: 'State sovereignty is distributed; no admin access.', icon: GitBranch },
              { title: 'Consensus', desc: 'Mathematical agreement on the "truth" of the ledger.', icon: Users },
              { title: 'Transparency', desc: 'Read-access is typically open to all observers.', icon: Eye },
              { title: 'Trustlessness', desc: 'Reliance on cryptography, not human reputation.', icon: Shield },
            ].map((principle, i) => (
              <div key={i} className="p-6 bg-[#0A0A0A] border border-neutral-800 hover:border-blue-800 transition-colors rounded-sm">
                <div className="flex items-center gap-3 mb-3">
                  <principle.icon size={18} className="text-blue-600" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{principle.title}</h3>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 3. Blockchain Architecture */}
        <motion.section className="mb-24 group" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">03</span>
            <h2 className="text-2xl font-bold tracking-tight">Chain Architecture</h2>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-neutral-400 mb-6 max-w-3xl">
                A blockchain is a specialized distributed ledger where data is batched into <strong className="text-white">blocks</strong> and linked cryptographically.
              </p>
              <FigureFrame label="Immutable Chain Structure" id="3.1">
                <ChainVisual />
              </FigureFrame>
            </div>

            {/* Block Header Components Accordion */}
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div>
                <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase tracking-widest mb-4">
                  Block Header Data
                </h3>
                <div className="space-y-1">
                  {blockHeaderItems.map((item, i) => (
                    <div 
                      key={i}
                      className="border border-neutral-800 bg-[#0A0A0A] rounded-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedHeaderItem(expandedHeaderItem === i ? null : i)}
                        className={`w-full flex items-center justify-between p-3 text-left transition-colors ${expandedHeaderItem === i ? 'bg-neutral-900' : 'hover:bg-neutral-900'}`}
                      >
                        <span className="text-sm font-mono text-white font-medium">{item.name}</span>
                        <ChevronDown size={14} className={`text-neutral-500 transition-transform ${expandedHeaderItem === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {expandedHeaderItem === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-3 pt-0 text-xs text-neutral-500 border-t border-neutral-800 bg-neutral-900/30 font-mono">
                              {item.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                 <div className="p-6 border border-dashed border-neutral-800 rounded-sm">
                    <div className="text-center space-y-2">
                       <Lock size={24} className="mx-auto text-neutral-600" />
                       <h4 className="text-sm font-bold text-white">Immutability Guarantee</h4>
                       <p className="text-xs text-neutral-500">
                         Changing a single bit in Block N invalidates the hash, breaking links to Block N+1 and all subsequent blocks.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 4. Hashing */}
        <motion.section className="mb-24 group" {...fadeInUp}>
          <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
            <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-blue-900 transition-colors">04</span>
            <h2 className="text-2xl font-bold tracking-tight">Cryptographic Primitives</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
              <div className="flex items-center gap-3 mb-4">
                <Hash className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-white">SHA-256 Hashing</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-6">
                A one-way function that maps input data of arbitrary size to a fixed-size bit string (digest).
              </p>
              <div className="space-y-2">
                 <div className="flex justify-between text-xs font-mono text-neutral-500 border-b border-neutral-800 pb-1">
                    <span>Input: "Hello"</span>
                    <span>Output: 185f8...</span>
                 </div>
                 <div className="flex justify-between text-xs font-mono text-neutral-500 border-b border-neutral-800 pb-1">
                    <span>Input: "hello"</span>
                    <span>Output: 2cf24...</span>
                 </div>
                 <p className="text-[10px] text-blue-500 font-mono mt-2 uppercase tracking-wide">
                   // Avalanche Effect Observed
                 </p>
              </div>
            </div>

            <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
               <div className="flex items-center gap-3 mb-4">
                <FileText className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-white">Merkle Trees</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-6">
                A binary hash tree allowing efficient verification of content in large data structures.
              </p>
              <div className="flex justify-center py-2">
                 {/* Reusing visual logic via CSS scaling if needed, or simplified icon representation */}
                 <div className="w-full">
                   <FigureFrame label="Merkle Root Construction" id="4.2">
                     <MerkleVisual />
                   </FigureFrame>
                 </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Public vs Private */}
        <motion.section className="mb-24 pt-12 border-t border-neutral-900" {...fadeInUp}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-bold font-mono text-blue-500 uppercase tracking-widest mb-4">
                Public / Permissionless
              </h3>
              <ul className="space-y-3">
                {['Open Access (Bitcoin, Ethereum)', 'Censorship Resistant', 'High Redundancy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase tracking-widest mb-4">
                Private / Permissioned
              </h3>
              <ul className="space-y-3">
                {['Restricted Access (Hyperledger)', 'Identity Known', 'Higher Throughput'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                    <div className="w-1.5 h-1.5 bg-neutral-600 rounded-sm" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Takeaways - System Check */}
        <motion.section className="mb-16 border-t border-neutral-800 pt-16" {...fadeInUp}>
          <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-neutral-500 mb-8 text-center">
            System Check
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Ledgers are distributed, not centralized',
              'Hashing ensures data integrity & immutability',
              'Consensus replaces central authority'
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
          <Link href="/session-2">
            <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next: Platforms</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}