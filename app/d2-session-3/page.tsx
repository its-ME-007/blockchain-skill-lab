'use client'

import { motion } from 'framer-motion'
import { FileText, Layers, GitBranch, Terminal, Play, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Custom Terminal Component to wrap the syntax highlighter
const TerminalWindow = ({ code, title = 'script.sol' }: { code: string, title?: string }) => (
  <div className="mt-6 mb-8 rounded-sm overflow-hidden border border-neutral-800 bg-[#050505] shadow-2xl">
    <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
      </div>
      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{title}</span>
    </div>
    <div className="text-sm font-mono">
      <SyntaxHighlighter 
        language="solidity" 
        style={vscDarkPlus} 
        customStyle={{ 
          margin: 0, 
          padding: '1.5rem', 
          background: '#050505', 
          fontSize: '0.875rem',
          lineHeight: '1.6'
        }}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
)

const sections = [
  {
    title: 'Contract Deployment Cycle',
    icon: <FileText size={18} />,
    subtitle: 'LIFECYCLE_INIT',
    content: [
      `Ethereum smart contracts are immutable programs. Once deployed, their logic cannot be altered, only interacted with.`,
      `**Deployment Sequence:**`,
      `1. **Development**: Write Solidity in an IDE (Remix/Hardhat).`,
      `2. **Compilation**: Convert high-level code to EVM Bytecode & ABI.`,
      `3. **Signing**: Sign the deployment transaction with a wallet (EOA).`,
      `4. **Broadcast**: Send to the network; miners/validators verify.`,
    ],
    codeTitle: 'Counter.sol',
    code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Counter {
    uint256 public count;
    event Incremented(uint256 newCount);

    // Initializer
    constructor() {
        count = 0;
    }

    // State Modifier
    function increment() external {
        count += 1;
        emit Incremented(count);
    }
}`
  },
  {
    title: 'Remix & Web3.js Interaction',
    icon: <Terminal size={18} />,
    subtitle: 'INTERFACE_LAYER',
    content: [
      `Remix IDE is the standard playground for testing. For production apps, we use libraries like Web3.js or Ethers.js to bridge the frontend with the blockchain.`,
      `**Key Interfaces:**`,
      `- **ABI (Application Binary Interface)**: JSON that tells your app how to talk to the contract.`,
      `- **Provider**: Connection to an Ethereum node (e.g., Infura, Alchemy).`,
      `- **Signer**: The account paying gas for write operations.`
    ],
    codeTitle: 'dapp.js',
    code: `const Web3 = require('web3');
const contractABI = require('./CounterABI.json');

// Initialize Contract Instance
const contract = new web3.eth.Contract(
  contractABI, 
  '0x123...abc' // Deployed Address
);

// Call: Read Data (Free)
const value = await contract.methods.count().call();

// Send: Write Data (Costs Gas)
await contract.methods.increment().send({ 
  from: userAddress 
});`
  },
  {
    title: 'Complex Logic: Registry Pattern',
    icon: <Layers size={18} />,
    subtitle: 'DATA_STRUCTURES',
    content: [
      `A practical example demonstrating standard Solidity patterns: Mappings for O(1) lookups, Structs for data grouping, and Events for indexing data off-chain.`,
      `This pattern is foundational for Identity Systems, Token Registries, and DAOs.`
    ],
    codeTitle: 'StudentRegistry.sol',
    code: `contract Registry {
    struct Record {
        string name;
        bool isActive;
    }

    // O(1) Lookup Table
    mapping(address => Record) public records;
    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "ACCESS_DENIED");
        _;
    }

    function register(address user, string memory name) external onlyAdmin {
        records[user] = Record(name, true);
    }
}`
  },
  {
    title: 'Security Architecture',
    icon: <GitBranch size={18} />,
    subtitle: 'RISK_MANAGEMENT',
    content: [
      `Security is not an add-on; it is architectural. A single reentrancy bug can drain millions.`,
      `**Defense Strategy:**`,
      `- **Checks-Effects-Interactions**: Update state *before* making external calls.`,
      `- **Reentrancy Guards**: Mutex locks for critical functions.`,
      `- **Access Control**: Strict ownership models.`
    ],
    codeTitle: 'Security.sol',
    code: `// Prevents recursive calling attacks
bool internal locked;

modifier nonReentrant() {
    require(!locked, "REENTRANCY_DETECTED");
    locked = true;
    _;
    locked = false;
}`
  }
]

export default function EthereumSmartContractPage() {
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
              Session 02.3
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Implementation
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            CONTRACT
            <br />
            DEVELOPMENT.
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            From architecture to deployment. A technical walkthrough of writing, compiling, and interacting with production-grade Ethereum smart contracts.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12">
          {sections.map((sec, idx) => (
            <motion.div 
              key={idx} 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-6 border-b border-neutral-800 pb-4">
                <div className="p-2 bg-neutral-900 border border-neutral-800 text-blue-500 rounded-sm">
                  {sec.icon}
                </div>
                <div>
                   <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-1">
                    {sec.subtitle}
                   </span>
                   <h2 className="text-2xl font-bold text-white tracking-tight">{sec.title}</h2>
                </div>
              </div>

              {/* Layout: Text + Code */}
              <div className="grid md:grid-cols-1 gap-6">
                <div className="space-y-4 text-neutral-400 leading-relaxed max-w-3xl">
                  {sec.content.map((c, i) => (
                    <div key={i} dangerouslySetInnerHTML={{ 
                      __html: c.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-medium">$1</span>') 
                    }} />
                  ))}
                </div>
                
                <TerminalWindow code={sec.code} title={sec.codeTitle} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Takeaways - System Check */}
        <motion.section 
          className="mt-24 pt-12 border-t border-neutral-800"
          {...fadeInUp}
        >
          <div className="bg-[#0A0A0A] border border-neutral-800 rounded-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <Play className="text-blue-500 fill-blue-500" size={16} />
              <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-white">
                Deployment Checklist
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Compile contracts to check for syntax errors (ABI generation).',
                'Ensure all state variables are packed to optimize gas.',
                'Verify modifiers are applied to restricted functions.',
                'Use Reentrancy Guards on all functions handling ETH transfer.',
                'Test interaction scripts on a local fork before mainnet.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-neutral-600 group-hover:text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 font-mono leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}