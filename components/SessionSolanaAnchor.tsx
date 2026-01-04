'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  GitBranch,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Terminal,
  Layers,
  Cpu,
  Shield,
  Network,
  Upload,
  Rocket,
  ClipboardList,
  RefreshCw,
  Globe,
  KeyRound
} from 'lucide-react'

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true }
}

export default function SessionSolanaAnchor() {
  return (
    <div className="relative pt-24 pb-24 bg-black text-white selection:bg-purple-900 selection:text-white font-sans overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '38px 38px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.header
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-purple-900/20 border border-purple-800 text-purple-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 03
            </div>
            <div className="h-px bg-neutral-800 flex-1" />
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">Anchor · Solana</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[0.9]">
            Solana Smart Contracts
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              WITH ANCHOR
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            Two-branch walkthrough for building, testing, and deploying a Solana program with Anchor. Focused on programs, accounts, and safe iteration—not on wallet UI complexity.
          </p>
        </motion.header>

        {/* Repo + branches */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">01</span>
            <h2 className="text-2xl font-bold tracking-tight">Repository & Branch Map</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-4">
              <div className="flex items-center gap-3 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <GitBranch size={16} /> main branch
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                First stable edit of the Anchor template: simple counter program, initialize + increment, no frontend coupling. Perfect for absolute beginners.
              </p>
              <div className="text-xs text-neutral-400 bg-neutral-900/60 border border-neutral-800 rounded-sm p-3">
                git checkout main
              </div>
            </div>
            <div className="border border-purple-900 bg-purple-900/10 rounded-sm p-5 space-y-4">
              <div className="flex items-center gap-3 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <GitBranch size={16} /> final branch
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Polished version with refined lib.rs, testp.ts, and the extra app.html. Pull the full branch—files differ from main.
              </p>
              <div className="text-xs text-purple-200 bg-purple-900/20 border border-purple-700 rounded-sm p-3">
                git checkout final &amp;&amp; git pull
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-neutral-400">
            Repo: <Link href="https://github.com/ChinmaiShetti/solana_smartcontract" className="text-purple-300 hover:text-white underline underline-offset-4">github.com/ChinmaiShetti/solana_smartcontract</Link>
          </div>
        </motion.section>

        {/* Prereqs */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">02</span>
            <h2 className="text-2xl font-bold tracking-tight">Prerequisites & Checks</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {[{
              title: 'Toolchain',
              icon: Cpu,
              lines: ['Rust', 'Solana CLI', 'Anchor CLI']
            }, {
              title: 'JS Stack',
              icon: Layers,
              lines: ['Node.js 18+', 'npm']
            }, {
              title: 'Environment',
              icon: Globe,
              lines: ['Linux / WSL preferred', 'Consistent PATH']
            }].map((item, idx) => (
              <div key={idx} className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-3">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <item.icon size={16} /> {item.title}
                </div>
                <ul className="space-y-1 text-neutral-300">
                  {item.lines.map((l, i) => <li key={i}>{l}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-neutral-800 bg-[#050505] rounded-sm p-5 text-xs text-neutral-200 font-mono space-y-1">
            rustc --version
            <br />solana --version
            <br />anchor --version
            <br />node --version
            <br />npm --version
          </div>
        </motion.section>

        {/* Wallet & config */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">03</span>
            <h2 className="text-2xl font-bold tracking-tight">Solana CLI Wallet & Network</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <KeyRound size={16} /> Wallet
              </div>
              <p>Create or reuse CLI wallet for fees, deploys, and tests.</p>
              <div className="font-mono text-xs bg-black/40 border border-neutral-800 rounded-sm p-3 space-y-1 text-neutral-200">
                solana-keygen new
                <br />solana address
              </div>
              <p className="text-neutral-500 text-xs">Default path: ~/.config/solana/id.json</p>
            </div>
            <div className="border border-neutral-800 bg-[#050505] rounded-sm p-5 space-y-3 text-sm text-neutral-300">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <Network size={16} /> Localnet
              </div>
              <p>Anchor manages the local validator. Configure once:</p>
              <div className="font-mono text-xs bg-black/40 border border-neutral-800 rounded-sm p-3 space-y-1 text-neutral-200">
                solana config set --url http://127.0.0.1:8899
                <br />solana config get
              </div>
            </div>
          </div>
        </motion.section>

        {/* Setup steps */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">04</span>
            <h2 className="text-2xl font-bold tracking-tight">Project Setup</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <BookOpen size={16} /> Initialize
              </div>
              <div className="font-mono text-xs bg-black/40 border border-neutral-800 rounded-sm p-3 space-y-1 text-neutral-200">
                anchor init trial
                <br />cd trial
              </div>
              <p>Generates Anchor.toml, programs/, tests/, package.json scaffolding.</p>
            </div>
            <div className="border border-neutral-800 bg-[#050505] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <ClipboardList size={16} /> Files of interest
              </div>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />programs/trial/src/lib.rs (program)</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />tests/testp.ts (client tests)</li>
                <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />Anchor.toml (program IDs, provider)</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Versions */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">05</span>
            <h2 className="text-2xl font-bold tracking-tight">Program Versions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title: 'Version 1 — main',
              accent: 'border-neutral-800 bg-[#0A0A0A]',
              points: ['Counter account', 'initialize + increment', 'Great for first exposure'],
              icon: Layers
            }, {
              title: 'Version 2 — final',
              accent: 'border-purple-800 bg-purple-900/10',
              points: ['Refined lib.rs + testp.ts', 'Multiple increments, cleaner flow', 'Includes app.html for context'],
              icon: Rocket
            }].map((card, idx) => (
              <div key={idx} className={`rounded-sm p-5 border ${card.accent} space-y-3`}>
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <card.icon size={16} /> {card.title}
                </div>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {card.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Program ID reminder */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">06</span>
            <h2 className="text-2xl font-bold tracking-tight">Program ID Discipline</h2>
          </div>
          <div className="border border-red-900 bg-red-900/10 rounded-sm p-5 text-sm text-neutral-200 space-y-3">
            <div className="flex items-center gap-2 text-red-300 font-mono text-xs uppercase tracking-widest">
              <AlertTriangle size={16} /> Critical
            </div>
            <p>After every deploy, update both:</p>
            <ul className="space-y-2 text-neutral-100">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />declare_id!("NEW_PROGRAM_ID") in lib.rs</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />Anchor.toml [programs.localnet].trial</li>
            </ul>
            <p className="text-neutral-400 text-xs">Missing this causes DeclaredProgramIdMismatch.</p>
          </div>
        </motion.section>

        {/* Testing */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">07</span>
            <h2 className="text-2xl font-bold tracking-tight">Run & Test</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <RefreshCw size={16} /> Clean state
              </div>
              <p>Reset ledger and stray validators before tests:</p>
              <div className="font-mono text-xs bg-black/40 border border-neutral-800 rounded-sm p-3 space-y-1 text-neutral-200">
                pkill solana-test-validator
                <br />rm -rf .anchor/test-ledger
              </div>
            </div>
            <div className="border border-neutral-800 bg-[#050505] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                <Terminal size={16} /> Anchor test
              </div>
              <div className="font-mono text-xs bg-black/40 border border-neutral-800 rounded-sm p-3 text-neutral-200">
                anchor test
              </div>
              <p className="text-neutral-400 text-xs">Expect: Counter init to 0, then increments to 2, all tests passing.</p>
            </div>
          </div>
        </motion.section>

        {/* Deploy */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">08</span>
            <h2 className="text-2xl font-bold tracking-tight">Deploy (optional)</h2>
          </div>
          <div className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-5 text-sm text-neutral-300 space-y-3">
            <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
              <Upload size={16} /> anchor deploy
            </div>
            <p>After deployment, copy the new Program ID, update declare_id! and Anchor.toml, then rerun tests if needed.</p>
          </div>
        </motion.section>

        {/* Common issues */}
        <motion.section className="mb-16" {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">09</span>
            <h2 className="text-2xl font-bold tracking-tight">Common Issues</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            {[{
              title: 'Account already exists',
              desc: 'Use a fresh keypair; clear .anchor/test-ledger.'
            }, {
              title: 'Blockhash expired',
              desc: 'Avoid --skip-local-validator; let anchor manage it.'
            }, {
              title: 'Program ID mismatch',
              desc: 'Update declare_id! and Anchor.toml after deploy.'
            }].map((item, idx) => (
              <div key={idx} className="border border-neutral-800 bg-[#0A0A0A] rounded-sm p-4 space-y-2">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-widest">
                  <Shield size={14} /> {item.title}
                </div>
                <p className="text-neutral-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section {...fadeIn}>
          <div className="flex items-baseline gap-4 mb-6 border-b border-neutral-800 pb-3">
            <span className="text-4xl font-mono font-bold text-neutral-800">10</span>
            <h2 className="text-2xl font-bold tracking-tight">Learning Outcomes</h2>
          </div>
          <div className="border border-neutral-800 bg-[#050505] rounded-sm p-5 text-sm text-neutral-300 space-y-2">
            <div className="flex items-center gap-2 text-green-400 font-mono text-xs uppercase tracking-widest">
              <CheckCircle2 size={16} /> You will be able to
            </div>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Explain Solana programs vs. accounts and why programs are stateless.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Use Anchor to scaffold, write, and test on-chain logic safely.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Manage Program IDs, deployments, and local validators confidently.</li>
              <li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-green-500" />Describe how a frontend could interact without diving into wallet UX yet.</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
