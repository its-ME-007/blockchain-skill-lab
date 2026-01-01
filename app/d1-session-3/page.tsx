'use client'

import { motion } from 'framer-motion'
import { Terminal, Cpu, Shield, Package, ChevronRight, AlertTriangle, Download, ExternalLink, Command, Copy, Check } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Helper: Copy Button for Commands
const CopyBtn = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={handleCopy} className="text-neutral-500 hover:text-white transition-colors">
      {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
    </button>
  )
}

// Reusable Terminal Component for commands
const CommandBlock = ({ lines, title = "bash" }: { lines: string[], title?: string }) => (
  <div className="mt-4 rounded-sm overflow-hidden border border-neutral-800 bg-[#080808] font-mono text-sm">
    <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-900 border-b border-neutral-800">
      <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{title}</span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-neutral-700" />
        <div className="w-2 h-2 rounded-full bg-neutral-700" />
      </div>
    </div>
    <div className="p-4 space-y-2 overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i} className="flex gap-3 text-neutral-300 group">
          <span className="text-blue-500 select-none">$</span>
          <span className="flex-1">{line}</span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyBtn text={line} />
          </div>
        </div>
      ))}
    </div>
  </div>
)

const DependencyCard = ({ 
  title, 
  desc, 
  commands, 
  icon: Icon, 
  link,
  tag 
}: { 
  title: string, 
  desc: string, 
  commands?: string[], 
  icon: any, 
  link?: string,
  tag?: string 
}) => {
  return (
    <motion.div 
      className="group p-6 border border-neutral-800 bg-[#050505] hover:border-blue-900 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-900 border border-neutral-800 rounded-sm text-neutral-400 group-hover:text-blue-500 transition-colors">
            <Icon size={18} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            {tag && <span className="text-[10px] font-mono text-blue-500 uppercase tracking-wide border border-blue-900/30 bg-blue-900/10 px-1.5 py-0.5 rounded-sm">{tag}</span>}
          </div>
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-white transition-colors">
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      
      <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
        {desc}
      </p>

      {commands && commands.length > 0 && (
        <CommandBlock lines={commands} />
      )}
    </motion.div>
  )
}

// New Component: Workflow Step Pipeline
const WorkflowPipeline = ({ platform, accentColor, steps }: { platform: string, accentColor: string, steps: { title: string, cmd: string, note?: string }[] }) => (
  <div className="border border-neutral-800 bg-[#050505] p-6 md:p-8 rounded-sm h-full">
    <div className={`text-xs font-mono font-bold uppercase tracking-widest mb-6 px-3 py-1 inline-block border bg-neutral-900/50 ${accentColor === 'blue' ? 'text-blue-400 border-blue-900/50' : accentColor === 'purple' ? 'text-purple-400 border-purple-900/50' : 'text-cyan-400 border-cyan-900/50'}`}>
      {platform} Pipeline
    </div>
    
    <div className="space-y-8 relative ml-2">
      {/* Connector Line */}
      <div className="absolute left-0 top-2 bottom-2 w-px bg-neutral-800" />

      {steps.map((step, i) => (
        <div key={i} className="relative pl-8 group">
          {/* Node Dot */}
          <div className={`absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-[#050505] transition-colors duration-300 z-10 ${accentColor === 'blue' ? 'bg-blue-600 group-hover:bg-blue-400' : accentColor === 'purple' ? 'bg-purple-600 group-hover:bg-purple-400' : 'bg-cyan-600 group-hover:bg-cyan-400'}`} />
          
          <h4 className="text-sm font-bold text-white mb-2 font-mono uppercase tracking-wide">{step.title}</h4>
          
          <div className="bg-[#0A0A0A] border border-neutral-800 p-3 rounded-sm flex items-center justify-between group-hover:border-neutral-600 transition-colors">
            <code className={`text-xs font-mono ${accentColor === 'blue' ? 'text-blue-300' : accentColor === 'purple' ? 'text-purple-300' : 'text-cyan-300'}`}>
              {step.cmd}
            </code>
            <CopyBtn text={step.cmd} />
          </div>
          
          {step.note && (
            <p className="text-xs text-neutral-500 mt-2 font-mono">
              // {step.note}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
)


export default function Session3() {
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
          className="mb-16 border-b border-neutral-800 pb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="px-3 py-1 bg-blue-900/20 border border-blue-800 text-blue-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 03
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Environment Setup
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-none">
                SYSTEM
                <br />
                INITIALIZATION.
              </h1>
              <p className="text-neutral-400 max-w-xl font-light">
                Configure your local development environment. Install core runtimes, protocol CLIs, and cryptographic dependencies required for the workshop.
              </p>
            </div>
            
            {/* Workshop Logistics Grid */}
            <div className="grid grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
              {[
                { label: 'Date', value: 'Dec 29, 2025' },
                { label: 'Time', value: '14:30 HRS' },
                { label: 'Venue', value: 'ECE Hall' },
                { label: 'Access', value: 'Open' },
              ].map((item, i) => (
                <div key={i} className="bg-[#050505] p-4 min-w-[120px]">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-sm font-bold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Documentation Link */}
        <motion.div className="mb-16 flex justify-end" {...fadeInUp}>
           <Link 
              href="https://docs.google.com/document/d/1pYnPd9vN5A_jROLuWO46ysusVyFhGCTny53ZtaOwpzk/edit?usp=sharing"
              target="_blank"
              className="group flex items-center gap-3 text-sm font-mono uppercase tracking-wider text-blue-500 hover:text-white transition-colors"
           >
              <span>Access Documentation Protocol</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </motion.div>

        {/* Group 1: Core System & Runtimes */}
        <div className="mb-20">
          <h2 className="text-lg font-bold font-mono text-neutral-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <Cpu size={16} /> 01. Core Runtimes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DependencyCard 
              title="WSL (Ubuntu)"
              desc="Windows Subsystem for Linux. Required for Solana & Geth. Restart required after install."
              icon={Command}
              tag="CRITICAL"
              link="https://learn.microsoft.com/en-us/windows/wsl/install"
              commands={[
                "wsl --install",
                "# Restart Computer",
                "uname -a"
              ]}
            />
            <DependencyCard 
              title="Python 3.13"
              desc="Required for Algorand SDKs. Ensure 'Add to PATH' is checked during installation."
              icon={Package}
              tag="REQUIRED"
              link="https://www.python.org/downloads/"
              commands={[
                "pip install pyteal py-algorand-sdk",
                "python3 --version"
              ]}
            />
            <DependencyCard 
              title="Node.js + npm"
              desc="JavaScript runtime for Ethereum tooling (Hardhat/Truffle) and frontend integration."
              icon={Package}
              tag="LTS VERSION"
              link="https://nodejs.org/"
              commands={[
                "node --version",
                "npm --version"
              ]}
            />
            <DependencyCard 
              title="Rust Toolchain"
              desc="Systems programming language required for Solana smart contract development."
              icon={Command}
              link="https://www.rust-lang.org/tools/install"
              commands={[
                "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh",
                "source $HOME/.cargo/env",
                "rustc --version"
              ]}
            />
          </div>
        </div>

        {/* Group 2: Protocol CLIs */}
        <div className="mb-20">
          <h2 className="text-lg font-bold font-mono text-neutral-500 uppercase tracking-widest mb-8 flex items-center gap-2">
             <Shield size={16} /> 02. Protocol CLIs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DependencyCard 
              title="Solana CLI"
              desc="Command line tools for interacting with the Solana cluster. Run inside WSL."
              icon={Terminal}
              link="https://docs.solana.com/cli/install-solana-cli-tools"
              commands={[
                'sh -c "$(curl -4 -sSfL https://release.solana.com/stable/install)"',
                'export PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"',
                'solana config set --url https://api.devnet.solana.com'
              ]}
            />
             <DependencyCard 
              title="Ethereum (Geth)"
              desc="Go Ethereum implementation. Used for running a local dev node and key management."
              icon={Terminal}
              link="https://geth.ethereum.org/"
              commands={[
                "sudo add-apt-repository -y ppa:ethereum/ethereum",
                "sudo apt update && sudo apt install ethereum",
                "geth version"
              ]}
            />
          </div>
        </div>

        {/* Group 3: Configuration Pipelines (NEW SECTION) */}
        <div className="mb-20">
          <h2 className="text-lg font-bold font-mono text-neutral-500 uppercase tracking-widest mb-8 flex items-center gap-2">
             <Terminal size={16} /> 03. Initialization Workflows
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <WorkflowPipeline 
              platform="Ethereum"
              accentColor="blue"
              steps={[
                { title: 'Init Project', cmd: 'mkdir my-eth-dapp && cd my-eth-dapp', note: 'Create directory' },
                { title: 'Install Hardhat', cmd: 'npm init -y && npm install --save-dev hardhat', note: 'Dev dependency' },
                { title: 'Scaffold', cmd: 'npx hardhat init', note: 'Select "Create a TypeScript project"' },
                { title: 'Verify', cmd: 'npx hardhat test', note: 'Runs sample tests' },
              ]}
            />
             <WorkflowPipeline 
              platform="Solana"
              accentColor="purple"
              steps={[
                { title: 'Keygen', cmd: 'solana-keygen new', note: 'Generates id.json' },
                { title: 'Set Env', cmd: 'solana config set --url devnet', note: 'Target Devnet' },
                { title: 'Airdrop', cmd: 'solana airdrop 2', note: 'Get test SOL' },
                { title: 'Init Anchor', cmd: 'anchor init my-sol-dapp', note: 'Requires Anchor CLI' },
              ]}
            />
             <WorkflowPipeline 
              platform="Algorand"
              accentColor="cyan"
              steps={[
                { title: 'Virtual Env', cmd: 'python3 -m venv venv && source venv/bin/activate', note: 'Isolate dependencies' },
                { title: 'Install SDK', cmd: 'pip install py-algorand-sdk', note: 'Core Python library' },
                { title: 'Verify', cmd: 'python3 -c "import algosdk; print(algosdk.__version__)"', note: 'Check installation' },
              ]}
            />
          </div>
        </div>

        {/* Group 4: Tools & Wallets */}
        <div className="mb-20">
          <h2 className="text-lg font-bold font-mono text-neutral-500 uppercase tracking-widest mb-8 flex items-center gap-2">
             <Package size={16} /> 04. Utilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <DependencyCard 
              title="Remix IDE"
              desc="Browser-based Solidity IDE. No installation required, but VS Code extension is optional."
              icon={ExternalLink}
              link="https://remix.ethereum.org/"
              tag="WEB TOOL"
            />
             <DependencyCard 
              title="MetaMask"
              desc="Browser extension wallet for Ethereum. Create a new wallet and save the seed phrase safely."
              icon={Shield}
              link="https://metamask.io/"
              tag="EXTENSION"
            />
             <DependencyCard 
              title="Phantom"
              desc="Browser extension wallet for Solana. Required for transaction signing in Session 4."
              icon={Shield}
              link="https://phantom.app/"
              tag="EXTENSION"
            />
          </div>
        </div>

        {/* System Warnings */}
        <motion.div 
          className="border-t border-neutral-800 pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="bg-red-900/10 border border-red-900/30 p-6 rounded-sm flex items-start gap-4">
            <AlertTriangle className="text-red-500 shrink-0" />
            <div>
              <h3 className="text-red-500 font-bold font-mono uppercase tracking-wider mb-2">System Critical Notices</h3>
              <ul className="space-y-2 text-sm text-red-200/70 font-mono">
                <li>[!] Restart system immediately after WSL installation to register kernel drivers.</li>
                <li>[!] SECURE STORAGE: Write down wallet seed phrases on physical paper. Do not store in plain text.</li>
                <li>[!] Verify all package checksums/versions after installation using the provided commands.</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}