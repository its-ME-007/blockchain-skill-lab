'use client'

import { motion } from 'framer-motion'
import { Database, Lock, Link2, GitBranch, Shield, Eye, Users, ChevronRight, Layers, Hash, FileText } from 'lucide-react'
import Link from 'next/link'
import { LedgerVisual, ChainVisual, MerkleVisual } from '@/components/AnimatedVisuals'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Session1() {
  const [expandedComponent, setExpandedComponent] = useState<number | null>(null);

  return (
    <div className="relative pt-24 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 glass-effect rounded-full mb-6">
            <span className="text-blockchain-cyan font-semibold">SESSION 1</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Foundations</span> of<br />
            Distributed Ledgers
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build a strong conceptual foundation of blockchain technology, cryptography, and decentralized systems
          </p>
        </motion.div>

        {/* Session Goal */}
        <motion.div
          className="mb-20 p-8 glass-effect rounded-3xl border-l-4 border-blockchain-cyan"
          {...fadeInUp}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blockchain-cyan/20 rounded-xl flex items-center justify-center">
              <ChevronRight className="text-blockchain-cyan" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Session Goal</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Build a <span className="text-blockchain-cyan font-semibold">strong conceptual foundation</span> of what distributed ledgers and blockchains are, 
            why they exist, and how cryptography enables trust without central authorities.
          </p>
        </motion.div>

        {/* Section 1: Introduction */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-blue to-blockchain-purple rounded-2xl flex items-center justify-center">
              <Database size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">01</span>
              <h2 className="text-3xl font-bold">Introduction to Distributed Ledgers</h2>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              className="p-6 glass-effect rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <GitBranch className="text-blockchain-cyan" size={24} />
                The Paradigm Shift
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A <span className="text-white font-semibold">distributed ledger</span> is a decentralized database that is replicated and synchronized 
                across multiple independent nodes in a network. Every participant maintains a copy of the ledger, 
                and updates occur through agreed-upon rules rather than a central authority.
              </p>
              
              {/* Animated Ledger Visual */}
              <div className="my-8 p-6 bg-blockchain-blue/5 rounded-xl border border-blockchain-blue/20">
                <LedgerVisual />
                <p className="text-xs text-center text-gray-400 mt-4">Decentralized nodes maintaining synchronized copies of the ledger</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {[
                  { text: 'No single point of control', icon: Shield },
                  { text: 'Consistency through consensus', icon: Users },
                  { text: 'Trust via transparency', icon: Eye },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="p-4 bg-white/5 rounded-xl flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <item.icon className="text-blockchain-cyan" size={20} />
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2: Core Principles */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-purple to-blockchain-cyan rounded-2xl flex items-center justify-center">
              <Layers size={32} />
            </div>
            <div>
              <span className="text-blockchain-purple text-sm font-semibold">02</span>
              <h2 className="text-3xl font-bold">Core Principles of Distributed Ledgers</h2>
            </div>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Decentralization',
                desc: 'Control is distributed across multiple nodes rather than held by a single entity. This improves fault tolerance and reduces the risk of censorship.',
                icon: GitBranch,
                color: 'from-blockchain-blue to-blockchain-cyan',
              },
              {
                title: 'Consensus',
                desc: 'Nodes agree on the validity of transactions using consensus mechanisms, ensuring all copies of the ledger remain consistent.',
                icon: Users,
                color: 'from-blockchain-purple to-blockchain-blue',
              },
              {
                title: 'Transparency & Verifiability',
                desc: 'Transactions are visible and verifiable by participants, allowing independent validation of system state.',
                icon: Eye,
                color: 'from-blockchain-cyan to-blockchain-purple',
              },
              {
                title: 'Trustlessness',
                desc: 'Participants do not need to trust one another or a central intermediary—the system\'s rules and cryptography enforce correctness.',
                icon: Shield,
                color: 'from-blockchain-blue to-blockchain-purple',
              },
            ].map((principle, i) => (
              <motion.div
                key={i}
                className="p-6 glass-effect rounded-2xl group hover:bg-white/10 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <principle.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 3: Blockchain Architecture */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-cyan to-blockchain-blue rounded-2xl flex items-center justify-center">
              <Link2 size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">03</span>
              <h2 className="text-3xl font-bold">Blockchain Architecture</h2>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div className="p-8 glass-effect rounded-2xl" whileHover={{ scale: 1.01 }}>
              <h3 className="text-2xl font-bold mb-4">The Chained Data Structure</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A <span className="text-white font-semibold">blockchain</span> is a specific type of distributed ledger 
                where data is stored in blocks that are cryptographically linked together.
              </p>

              {/* Animated Chain Visual */}
              <div className="my-8 p-6 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                <ChainVisual />
                <p className="text-xs text-center text-gray-400 mt-4">Blocks cryptographically linked to form an immutable chain</p>
              </div>
            </motion.div>

            <motion.div className="p-6 glass-effect rounded-2xl" whileHover={{ scale: 1.01 }}>
              <h3 className="text-xl font-bold mb-4">Block Header Components</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { name: 'Timestamp', desc: 'Records when the block was created, ensuring chronological order in the blockchain' },
                  { name: 'Nonce', desc: 'Random number used in mining to find a valid block hash (Proof of Work)' },
                  { name: 'Version', desc: 'Indicates the set of block validation rules to follow for this block' },
                  { name: 'Previous Hash', desc: 'Links to the previous block, creating the chain and ensuring immutability' },
                  { name: 'Merkle Root', desc: 'Single hash representing all transactions in the block for efficient verification' },
                ].map((component, i) => {
                  const [isExpanded, setIsExpanded] = useState(false);
                  return (
                    <motion.div
                      key={i}
                      className="relative px-4 py-3 bg-blockchain-blue/10 rounded-lg text-sm font-medium border border-blockchain-blue/30 cursor-pointer group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      onClick={() => setIsExpanded(!isExpanded)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{component.name}</span>
                        <motion.span 
                          className="text-xs text-blockchain-cyan"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                      
                      {/* Tooltip on hover */}
                      <motion.div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 p-3 bg-blockchain-dark border border-blockchain-blue/50 rounded-lg shadow-xl z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        <p className="text-xs text-gray-300 leading-relaxed">{component.desc}</p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blockchain-dark border-r border-b border-blockchain-blue/50 rotate-45"></div>
                      </motion.div>

                      {/* Expanded content on click */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-gray-400 mt-2 pt-2 border-t border-blockchain-blue/20">
                          {component.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">Hover for quick info • Click to expand</p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 4: Immutability */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-purple to-blockchain-cyan rounded-2xl flex items-center justify-center">
              <Lock size={32} />
            </div>
            <div>
              <span className="text-blockchain-purple text-sm font-semibold">04</span>
              <h2 className="text-3xl font-bold">Cryptographic Linkage & Immutability</h2>
            </div>
          </div>

          <motion.div
            className="p-8 glass-effect rounded-2xl border-l-4 border-blockchain-purple"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Blocks are linked using cryptographic hashes. Each block stores the <span className="text-blockchain-purple font-semibold">hash of the previous block</span>, forming a chain.
            </p>

            <div className="space-y-4">
              {[
                'Any modification to a block changes its hash',
                'This invalidates all subsequent blocks',
                'Tampering becomes computationally infeasible',
              ].map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 bg-blockchain-purple/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blockchain-purple/10 rounded-xl border border-blockchain-purple/30">
              <p className="text-sm">
                <span className="font-bold text-blockchain-purple">Immutability:</span> This property makes blockchains tamper-evident by design.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 5: Cryptographic Hashing */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-cyan to-blockchain-blue rounded-2xl flex items-center justify-center">
              <Hash size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">05</span>
              <h2 className="text-3xl font-bold">Cryptographic Hashing</h2>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div className="p-8 glass-effect rounded-2xl" whileHover={{ scale: 1.01 }}>
              <h3 className="text-2xl font-bold mb-4">Foundation of Blockchain Security</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A <span className="text-white font-semibold">hash function</span> is a one-way mathematical algorithm 
                that converts input data of any size into a fixed-size output called a hash or digest.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { title: 'Determinism', desc: 'Same input → same output' },
                  { title: 'Collision Resistance', desc: 'Infeasible to find duplicate hashes' },
                  { title: 'Avalanche Effect', desc: 'Small change → drastic output change' },
                ].map((property, i) => (
                  <motion.div
                    key={i}
                    className="p-5 bg-gradient-to-br from-blockchain-cyan/10 to-blockchain-blue/10 rounded-xl border border-blockchain-cyan/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="font-bold mb-2 text-blockchain-cyan">{property.title}</h4>
                    <p className="text-sm text-gray-300">{property.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blockchain-cyan/10 rounded-xl">
                <p className="text-sm text-center">
                  Hashes act as <span className="font-bold text-blockchain-cyan">digital fingerprints</span> for data
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 6: Merkle Trees */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-blue to-blockchain-purple rounded-2xl flex items-center justify-center">
              <FileText size={32} />
            </div>
            <div>
              <span className="text-blockchain-blue text-sm font-semibold">07</span>
              <h2 className="text-3xl font-bold">Merkle Trees</h2>
            </div>
          </div>

          <motion.div className="p-8 glass-effect rounded-2xl" whileHover={{ scale: 1.01 }}>
            <h3 className="text-2xl font-bold mb-4">Efficient Transaction Verification</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A <span className="text-white font-semibold">Merkle tree</span> is a hierarchical data structure 
              built by hashing pairs of transactions repeatedly until a single hash—the <span className="text-blockchain-blue font-semibold">Merkle root</span>—is produced.
            </p>

            {/* Animated Merkle Tree Visual */}
            <div className="my-8 p-6 bg-amber-500/5 rounded-xl border border-amber-500/20">
              <MerkleVisual />
              <p className="text-xs text-center text-gray-400 mt-4">Transactions hashed hierarchically into a single Merkle root</p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h4 className="font-bold mb-4 text-blockchain-blue">Why Merkle Trees Matter</h4>
              <ul className="space-y-3">
                {[
                  'Efficient verification of large transaction sets',
                  'Compact representation of all transactions in a block',
                  'Enables Simplified Payment Verification (SPV)',
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ChevronRight className="text-blockchain-blue mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-400 italic">
              The Merkle root is stored in the block header, allowing clients to verify individual transactions 
              without downloading the entire block.
            </p>
          </motion.div>
        </motion.section>

        {/* Section 8: Public vs Private */}
        <motion.section className="mb-20" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blockchain-cyan">08</span> Public vs Private Blockchains
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="p-6 glass-effect rounded-2xl border-l-4 border-blockchain-cyan"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blockchain-cyan">Public Blockchains</h3>
              <ul className="space-y-3">
                {['Open and permissionless', 'Anyone can join and validate', 'Highly decentralized', 'Examples: Bitcoin, Ethereum'].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blockchain-cyan rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-6 glass-effect rounded-2xl border-l-4 border-blockchain-purple"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blockchain-purple">Private Blockchains</h3>
              <ul className="space-y-3">
                {['Permissioned and restricted', 'Used by enterprises', 'Greater control over governance', 'Enhanced privacy options'].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-2 text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blockchain-purple rounded-full"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Session Takeaways */}
        <motion.section className="mb-12" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="p-8 glass-effect rounded-3xl border-2 border-blockchain-cyan/50">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ✅ Session 1 <span className="gradient-text">Takeaways</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'What distributed ledgers are and why they matter',
                'How blockchain achieves security and trust',
                'Role of hashing, Merkle trees, and decentralization',
              ].map((takeaway, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-blockchain-cyan/10 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <p className="text-gray-200">{takeaway}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Navigation to Session 2 */}
        <motion.div className="text-center" {...fadeInUp} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Link href="/session-2">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blockchain-purple to-blockchain-cyan rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:shadow-2xl hover:shadow-blockchain-purple/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Continue to Session 2
              <ChevronRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
