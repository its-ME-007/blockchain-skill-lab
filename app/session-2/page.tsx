'use client'

import { motion } from 'framer-motion'
import { Network, Zap, Clock, DollarSign, Layers, ArrowRight, TrendingUp, Database, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SpeedVisual } from '@/components/AnimatedVisuals'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function Session2() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);

  return (
    <div className="relative pt-24 pb-16">
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
            <span className="text-blockchain-purple font-semibold">SESSION 2</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Platforms, Models</span><br />
            & Performance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understand how different blockchains are designed and why performance varies across platforms
          </p>
        </motion.div>

        {/* Session Goal */}
        <motion.div
          className="mb-20 p-8 glass-effect rounded-3xl border-l-4 border-blockchain-purple"
          {...fadeInUp}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blockchain-purple/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-blockchain-purple" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Session Goal</h2>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Understand <span className="text-blockchain-purple font-semibold">how different blockchains are designed</span>, 
            how transaction models differ, and why performance, cost, and scalability vary across platforms.
          </p>
        </motion.div>

        {/* Platform Overview */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blockchain-cyan">01</span> Overview of Blockchain Platforms
          </h2>
          <div className="p-8 glass-effect rounded-2xl">
            <p className="text-gray-300 leading-relaxed mb-6">
              Modern blockchains differ significantly in architecture and design philosophy. 
              This session focuses on three major platforms, each optimizing for different trade-offs 
              between security, decentralization, and performance.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                { name: 'Ethereum', color: 'from-blue-500 to-purple-500', logo: '/logos/ethereum.svg', url: 'https://ethereum.org' },
                { name: 'Solana', color: 'from-purple-500 to-pink-500', logo: '/logos/solana.svg', url: 'https://solana.com' },
                { name: 'Algorand', color: 'from-cyan-500 to-blue-500', logo: '/logos/algorand.svg', url: 'https://algorand.com' },
              ].map((platform, i) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="relative p-6 glass-effect rounded-xl overflow-hidden group hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${platform.color} opacity-20 rounded-full blur-2xl group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative z-10 flex flex-col items-center">
                      <motion.div
                        className="w-20 h-20 mb-4 relative"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold group-hover:text-white transition-colors">{platform.name}</h3>
                      <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-400 flex items-center gap-1">
                        <span>Visit Website</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Platform Architectures */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blockchain-blue">02-04</span> Platform Architectures
          </h2>

          <div className="space-y-6">
            {/* Ethereum */}
            <motion.div
              className="p-8 glass-effect rounded-2xl border-l-4 border-blue-500"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href="https://ethereum.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src="/logos/ethereum.svg"
                      alt="Ethereum logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                </a>
                <div>
                  <h3 className="text-3xl font-bold">Ethereum</h3>
                  <p className="text-blue-400">General-purpose programmable blockchain</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Consensus', value: 'Proof of Stake (PoS)', desc: 'Validators stake ETH to secure the network and validate transactions, replacing energy-intensive mining' },
                  { label: 'Design', value: 'Modular L1 + L2 rollups', desc: 'Base layer focuses on security while Layer 2 solutions handle scalability through rollups' },
                  { label: 'Smart Contracts', value: 'Solidity / EVM', desc: 'Programs written in Solidity run on the Ethereum Virtual Machine, enabling decentralized applications' },
                  { label: 'Focus', value: 'Decentralization & flexibility', desc: 'Prioritizes maximum decentralization and developer-friendly programmability over raw speed' },
                ].map((feature, i) => {
                  const featureId = `eth-${i}`;
                  const isExpanded = expandedFeature === featureId;
                  return (
                    <motion.div
                      key={i}
                      className="relative p-4 bg-blue-500/10 rounded-xl cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.03, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      onClick={() => setExpandedFeature(isExpanded ? null : featureId)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-blue-400 font-semibold">{feature.label}</div>
                        <motion.span 
                          className="text-xs text-blue-300"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                      <div className="text-white">{feature.value}</div>

                      {/* Hover Tooltip */}
                      <motion.div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 p-3 bg-blockchain-dark border border-blue-500/50 rounded-lg shadow-xl z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <p className="text-xs text-gray-300 leading-relaxed">{feature.desc}</p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blockchain-dark border-r border-b border-blue-500/50 rotate-45"></div>
                      </motion.div>

                      {/* Expanded Detail */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-blue-200 mt-2 pt-2 border-t border-blue-500/20">
                          {feature.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Solana */}
            <motion.div
              className="p-8 glass-effect rounded-2xl border-l-4 border-purple-500"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href="https://solana.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src="/logos/solana.svg"
                      alt="Solana logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                </a>
                <div>
                  <h3 className="text-3xl font-bold">Solana</h3>
                  <p className="text-purple-400">High-throughput performance blockchain</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Consensus', value: 'Proof of History (PoH) + PoS', desc: 'Uses cryptographic timestamps (PoH) to order transactions before consensus, enabling parallel processing' },
                  { label: 'Design', value: 'Monolithic Layer-1', desc: 'All operations happen on a single high-performance layer rather than splitting across multiple layers' },
                  { label: 'Runtime', value: 'Sealevel (parallel execution)', desc: 'Processes thousands of smart contracts simultaneously using parallel transaction execution' },
                  { label: 'Focus', value: 'Speed & low transaction fees', desc: 'Optimized for maximum throughput with sub-second finality and minimal transaction costs' },
                ].map((feature, i) => {
                  const featureId = `sol-${i}`;
                  const isExpanded = expandedFeature === featureId;
                  return (
                    <motion.div
                      key={i}
                      className="relative p-4 bg-purple-500/10 rounded-xl cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.03, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                      onClick={() => setExpandedFeature(isExpanded ? null : featureId)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-purple-400 font-semibold">{feature.label}</div>
                        <motion.span 
                          className="text-xs text-purple-300"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                      <div className="text-white">{feature.value}</div>

                      <motion.div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 p-3 bg-blockchain-dark border border-purple-500/50 rounded-lg shadow-xl z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <p className="text-xs text-gray-300 leading-relaxed">{feature.desc}</p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blockchain-dark border-r border-b border-purple-500/50 rotate-45"></div>
                      </motion.div>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-purple-200 mt-2 pt-2 border-t border-purple-500/20">
                          {feature.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Algorand */}
            <motion.div
              className="p-8 glass-effect rounded-2xl border-l-4 border-cyan-500"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <a 
                  href="https://algorand.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src="/logos/algorand.svg"
                      alt="Algorand logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </motion.div>
                </a>
                <div>
                  <h3 className="text-3xl font-bold">Algorand</h3>
                  <p className="text-cyan-400">Fast finality & predictable costs</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Consensus', value: 'Pure Proof of Stake (PPoS)', desc: 'Randomly selects validators weighted by stake without requiring miners or delegating power' },
                  { label: 'Validators', value: 'Randomly selected committees', desc: 'Uses verifiable random functions to secretly and fairly select block proposers and validators' },
                  { label: 'Block Time', value: '~2-3 seconds', desc: 'Achieves rapid finality with blocks confirmed in seconds, not minutes' },
                  { label: 'Focus', value: 'Balance of security & performance', desc: 'Combines fast transactions, low fees, and strong security guarantees without compromising decentralization' },
                ].map((feature, i) => {
                  const featureId = `algo-${i}`;
                  const isExpanded = expandedFeature === featureId;
                  return (
                    <motion.div
                      key={i}
                      className="relative p-4 bg-cyan-500/10 rounded-xl cursor-pointer group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.03, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                      onClick={() => setExpandedFeature(isExpanded ? null : featureId)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-cyan-400 font-semibold">{feature.label}</div>
                        <motion.span 
                          className="text-xs text-cyan-300"
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                        >
                          ▼
                        </motion.span>
                      </div>
                      <div className="text-white">{feature.value}</div>

                      <motion.div
                        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 p-3 bg-blockchain-dark border border-cyan-500/50 rounded-lg shadow-xl z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <p className="text-xs text-gray-300 leading-relaxed">{feature.desc}</p>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blockchain-dark border-r border-b border-cyan-500/50 rotate-45"></div>
                      </motion.div>

                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: isExpanded ? 'auto' : 0,
                          opacity: isExpanded ? 1 : 0
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs text-cyan-200 mt-2 pt-2 border-t border-cyan-500/20">
                          {feature.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Transaction Models */}
        <motion.section className="mb-20" {...fadeInUp}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-cyan to-blockchain-purple rounded-2xl flex items-center justify-center">
              <Database size={32} />
            </div>
            <div>
              <span className="text-blockchain-cyan text-sm font-semibold">05</span>
              <h2 className="text-3xl font-bold">Transaction Models</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Account Model */}
            <motion.div
              className="p-8 glass-effect rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blockchain-blue/30 rounded-xl flex items-center justify-center">
                  <Layers size={24} className="text-blockchain-blue" />
                </div>
                <h3 className="text-2xl font-bold">Account Model</h3>
              </div>

              <div className="mb-6 p-4 bg-blockchain-blue/10 rounded-xl">
                <p className="text-sm text-blockchain-blue font-semibold mb-2">Used by: Ethereum</p>
              </div>

              <ul className="space-y-3">
                {[
                  'Each address has a balance',
                  'Transactions directly update balances',
                  'Easier to implement smart contracts',
                  'More stateful approach',
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ArrowRight className="text-blockchain-blue mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* UTXO Model */}
            <motion.div
              className="p-8 glass-effect rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blockchain-purple/30 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-blockchain-purple" />
                </div>
                <h3 className="text-2xl font-bold">UTXO Model</h3>
              </div>

              <div className="mb-6 p-4 bg-blockchain-purple/10 rounded-xl">
                <p className="text-sm text-blockchain-purple font-semibold mb-2">Used by: Bitcoin</p>
              </div>

              <ul className="space-y-3">
                {[
                  'Transactions consume unspent outputs',
                  'Produces new outputs as change',
                  'Easier parallel validation',
                  'More stateless & privacy-friendly',
                ].map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <ArrowRight className="text-blockchain-purple mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 p-6 glass-effect rounded-xl text-center"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-gray-300">
              <span className="font-bold text-blockchain-cyan">Key Insight:</span> Each model has different 
              scalability and design implications that affect how blockchains process transactions.
            </p>
          </motion.div>
        </motion.section>

        {/* Performance Comparison */}
        <motion.section className="mb-20" {...fadeInUp}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blockchain-purple to-blockchain-cyan rounded-2xl flex items-center justify-center">
              <Zap size={32} />
            </div>
            <div>
              <span className="text-blockchain-purple text-sm font-semibold">06</span>
              <h2 className="text-3xl font-bold">Throughput, Latency & Cost Comparison</h2>
            </div>
          </div>

          {/* Animated Speed Comparison Chart */}
          <motion.div 
            className="mb-8 p-6 glass-effect rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-center">Platform Speed Comparison</h3>
            <SpeedVisual />
            <p className="text-xs text-center text-gray-400 mt-4">Relative transaction throughput across major platforms</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Throughput */}
            <motion.div
              className="p-6 glass-effect rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-blockchain-cyan" size={24} />
                <h3 className="text-xl font-bold">Throughput (TPS)</h3>
              </div>
              <div className="space-y-3">
                {[
                  { platform: 'Ethereum L1', value: '~15-30', color: 'blue' },
                  { platform: 'Solana', value: 'Thousands', color: 'purple' },
                  { platform: 'Algorand', value: '~10,000', color: 'cyan' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-gray-300">{item.platform}</span>
                    <span className={`text-${item.color}-400 font-bold`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Latency */}
            <motion.div
              className="p-6 glass-effect rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blockchain-purple" size={24} />
                <h3 className="text-xl font-bold">Block Time</h3>
              </div>
              <div className="space-y-3">
                {[
                  { platform: 'Ethereum', value: '~12-15s', color: 'blue' },
                  { platform: 'Solana', value: '~0.4s', color: 'purple' },
                  { platform: 'Algorand', value: '~2-3s', color: 'cyan' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-gray-300">{item.platform}</span>
                    <span className={`text-${item.color}-400 font-bold`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cost */}
            <motion.div
              className="p-6 glass-effect rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="text-blockchain-blue" size={24} />
                <h3 className="text-xl font-bold">Transaction Cost</h3>
              </div>
              <div className="space-y-3">
                {[
                  { platform: 'Ethereum', value: 'Variable gas', color: 'blue' },
                  { platform: 'Solana', value: 'Ultra-low', color: 'purple' },
                  { platform: 'Algorand', value: 'Fixed minimal', color: 'cyan' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex justify-between items-center p-3 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-gray-300">{item.platform}</span>
                    <span className={`text-${item.color}-400 font-bold`}>{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Design Trade-offs */}
        <motion.section className="mb-20" {...fadeInUp}>
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-blockchain-cyan">07</span> Design Trade-Offs
          </h2>

          <motion.div
            className="p-8 glass-effect rounded-2xl mb-6"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-xl text-center text-gray-300 mb-8">
              No blockchain is <span className="text-white font-bold">"best"</span> at everything.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-blockchain-cyan">Platform</th>
                    <th className="text-left p-4 text-blockchain-purple">Strength</th>
                    <th className="text-left p-4 text-blockchain-blue">Trade-off</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: 'Ethereum', strength: 'Decentralization & ecosystem', tradeoff: 'Higher fees' },
                    { platform: 'Solana', strength: 'Speed & scalability', tradeoff: 'Higher hardware requirements' },
                    { platform: 'Algorand', strength: 'Predictable performance', tradeoff: 'Smaller ecosystem' },
                  ].map((row, i) => (
                    <motion.tr
                      key={i}
                      className="border-b border-white/10 hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <td className="p-4 font-bold">{row.platform}</td>
                      <td className="p-4 text-gray-300">{row.strength}</td>
                      <td className="p-4 text-gray-400">{row.tradeoff}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="p-6 bg-gradient-to-r from-blockchain-blue/20 to-blockchain-purple/20 rounded-xl border border-blockchain-cyan/30"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-center text-gray-300">
              <span className="font-bold text-blockchain-cyan">Design Philosophy:</span> Different platforms 
              optimize for different points on the blockchain trilemma: security, decentralization, and scalability.
            </p>
          </motion.div>
        </motion.section>

        {/* Session Takeaways */}
        <motion.section className="mb-12" {...fadeInUp}>
          <div className="p-8 glass-effect rounded-3xl border-2 border-blockchain-purple/50">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ✅ Session 2 <span className="gradient-text">Takeaways</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'How major blockchains differ architecturally',
                'Why transaction models matter',
                'How performance and cost arise from design choices',
              ].map((takeaway, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-blockchain-purple/10 rounded-xl text-center"
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

        {/* Back to Home */}
        <motion.div className="text-center" {...fadeInUp}>
          <Link href="/">
            <motion.button
              className="px-8 py-4 glass-effect rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
