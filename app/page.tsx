'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Zap, ArrowRight, Blocks, Lock, Network } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0">
          {/* Floating blockchain blocks */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-16 h-16 border-2 border-blockchain-blue/30 rounded-lg"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="px-6 py-2 rounded-full glass-effect border border-blockchain-blue/50">
                <span className="text-blockchain-cyan text-sm font-semibold">🚀 Web3 Education Platform</span>
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Blockchain</span>
              <br />
              <span className="text-white">Learning Program</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Master the fundamentals of <span className="text-blockchain-cyan font-semibold">distributed ledgers</span>, 
              understand modern platforms, and build your blockchain expertise through a structured 5-day program.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/session-1">
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-blockchain-blue to-blockchain-purple rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-blockchain-blue/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Learning
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </motion.button>
              </Link>

              <Link href="/session-2">
                <motion.button
                  className="px-8 py-4 glass-effect rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Platforms
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Day Cards */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            5-Day <span className="gradient-text">Learning Journey</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                day: 1, 
                sessions: [
                  { title: 'Foundations of Distributed Ledgers', topics: ['Distributed Ledgers', 'Blockchain Architecture', 'Cryptographic Hashing', 'Merkle Trees'], link: '/session-1', available: true },
                  { title: 'Platforms & Performance', topics: ['Ethereum Overview', 'Solana Architecture', 'Algorand Consensus', 'Performance Comparison'], link: '/session-2', available: true },
                  { title: 'Advanced Concepts', topics: ['Smart Contracts', 'Transaction Models', 'Consensus Mechanisms'], link: '#', available: false }
                ], 
                color: 'blue' 
              },
              { 
                day: 2, 
                sessions: [
                  { title: 'Security & Cryptography', topics: ['Public-Key Cryptography', 'Digital Signatures', 'Hash Functions'], link: '#', available: false },
                  { title: 'Network Architecture', topics: ['P2P Networks', 'Node Communication', 'Block Propagation'], link: '#', available: false },
                  { title: 'Mining & Validation', topics: ['Proof of Work', 'Proof of Stake', 'Block Validation'], link: '#', available: false }
                ], 
                color: 'cyan' 
              },
              { 
                day: 3, 
                sessions: [
                  { title: 'Ethereum Deep Dive', topics: ['EVM Architecture', 'Gas & Fees', 'Account Model'], link: '#', available: false },
                  { title: 'Smart Contract Development', topics: ['Solidity Basics', 'Contract Deployment', 'Testing'], link: '#', available: false },
                  { title: 'DApp Development', topics: ['Web3.js', 'Frontend Integration', 'Wallet Connection'], link: '#', available: false }
                ], 
                color: 'purple' 
              },
              { 
                day: 4, 
                sessions: [
                  { title: 'Solana Architecture', topics: ['Proof of History', 'Parallel Processing', 'Program Development'], link: '#', available: false },
                  { title: 'UTXO Model', topics: ['Bitcoin Architecture', 'Transaction Structure', 'Script System'], link: '#', available: false },
                  { title: 'Layer 2 Solutions', topics: ['Lightning Network', 'Rollups', 'Sidechains'], link: '#', available: false }
                ], 
                color: 'teal' 
              },
              { 
                day: 5, 
                sessions: [
                  { title: 'Algorand Consensus', topics: ['Pure Proof of Stake', 'Byzantine Agreement', 'Fast Finality'], link: '#', available: false },
                  { title: 'Cross-Chain Integration', topics: ['Bridges', 'Interoperability', 'Multi-Chain Apps'], link: '#', available: false },
                  { title: 'Future of Blockchain', topics: ['Scalability Solutions', 'Privacy Tech', 'Industry Trends'], link: '#', available: false }
                ], 
                color: 'indigo' 
              },
            ].map((day, idx) => (
              <motion.div
                key={day.day}
                className="group relative p-6 glass-effect rounded-2xl overflow-hidden border border-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-blockchain-${day.color} to-blockchain-purple rounded-xl flex items-center justify-center text-xl font-bold`}>
                      {day.day}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Day {day.day}</h3>
                      <p className="text-xs text-gray-400">3 Sessions</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {day.sessions.map((session, i) => (
                      <Link key={i} href={session.link}>
                        <motion.div
                          className={`p-4 bg-white/5 rounded-lg transition-all ${session.available ? 'hover:bg-white/10 cursor-pointer' : 'opacity-60 cursor-not-allowed'}`}
                          whileHover={session.available ? { x: 5 } : {}}
                        >
                          <div className="flex items-start gap-2 mb-2">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${session.available ? 'bg-blockchain-cyan' : 'bg-gray-500'}`} />
                            <div className="flex-1">
                              <div className="font-semibold text-sm mb-1">{session.title}</div>
                              <div className="flex flex-wrap gap-1">
                                {session.topics.map((topic, t) => (
                                  <span key={t} className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                                    {topic}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs">
                    {day.sessions.some(s => s.available) ? (
                      <span className="text-blockchain-cyan font-semibold">Available Now</span>
                    ) : (
                      <span className="text-gray-500">Coming Soon</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
