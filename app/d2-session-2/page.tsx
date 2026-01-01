'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FileCode, Layers, GitBranch, Database, ChevronRight, ChevronDown, Terminal, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Code Block Component
const CodeWindow = ({ code, language = 'solidity' }: { code: string; language?: string }) => (
  <div className="my-6 rounded-sm overflow-hidden border border-neutral-800 bg-[#050505]">
    <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{language}</span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-neutral-700" />
        <div className="w-2 h-2 rounded-full bg-neutral-700" />
      </div>
    </div>
    <div className="p-4 overflow-x-auto">
      <pre className="font-mono text-sm leading-relaxed text-neutral-300">
        <code>{code}</code>
      </pre>
    </div>
  </div>
)

export default function SoliditySession() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const sections = [
    {
      title: 'Contract Anatomy',
      icon: <FileCode size={18} />,
      content: [
        `Solidity contracts operate similarly to classes in OOP. They encapsulate state (storage) and logic (functions). Every contract is a deployed instance on the global ledger.`,
        <CodeWindow key="1" code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Vault {
    // State Variable (Stored on-chain)
    uint256 public balance;

    // Constructor (Runs once)
    constructor() {
        balance = 100;
    }

    // Function (Modifies state)
    function deposit(uint256 amount) public {
        balance += amount;
    }
}`} />
      ]
    },
    {
      title: 'Type System & Storage',
      icon: <Database size={18} />,
      content: [
        `EVM storage is expensive. Understanding data locations is critical for gas optimization.
        \n• **Storage**: Permanent, expensive (State variables)
        \n• **Memory**: Temporary, cheaper (Function execution)
        \n• **Calldata**: Read-only, cheapest (External function inputs)`,
        <CodeWindow key="2" code={`struct User {
    string name;  // Complex type
    uint8 age;    // Packed into 1 slot
}

// Mapping: Hash Table (O(1) lookup)
mapping(address => User) public registry;

// Array: Ordered list
User[] public userList;`} />
      ]
    },
    {
      title: 'Control Flow & Modifiers',
      icon: <GitBranch size={18} />,
      content: [
        `Modifiers allow you to wrap functions with prerequisite checks, reducing code duplication and enhancing security.`,
        <CodeWindow key="3" code={`modifier onlyOwner() {
    require(msg.sender == owner, "UNAUTHORIZED");
    _; // Function body is inserted here
}

function withdraw() external onlyOwner {
    // Only reachable if require passes
    payable(msg.sender).transfer(address(this).balance);
}`} />
      ]
    },
    {
      title: 'Events & Logs',
      icon: <Terminal size={18} />,
      content: [
        `Events allow contracts to communicate with off-chain applications (frontends). They are significantly cheaper than storing data in contract state.`,
        <CodeWindow key="4" code={`event Transfer(address indexed from, address indexed to, uint amount);

function send(address _to, uint _amount) external {
    // Logic...
    emit Transfer(msg.sender, _to, _amount);
}`} />
      ]
    }
  ]

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
              Session 02.2
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Smart Contracts
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
            SOLIDITY
            <br />
            PROGRAMMING.
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            The syntax of the Ethereum Virtual Machine. Learn to write type-safe, gas-efficient, and secure smart contracts using modern Solidity patterns.
          </p>
        </motion.div>

        {/* Interactive Accordion */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          
          {/* Sidebar / Table of Contents */}
          <div className="md:col-span-4 flex flex-col gap-2">
             <h3 className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest mb-4 pl-2">
               Modules
             </h3>
             {sections.map((sec, i) => (
               <button
                 key={i}
                 onClick={() => setExpanded(i)}
                 className={`group flex items-center justify-between p-4 text-left border rounded-sm transition-all duration-200
                   ${expanded === i 
                     ? 'bg-neutral-900 border-blue-600' 
                     : 'bg-black border-neutral-800 hover:border-neutral-600'}`}
               >
                 <div className="flex items-center gap-3">
                   <div className={`${expanded === i ? 'text-blue-500' : 'text-neutral-500'}`}>
                     {sec.icon}
                   </div>
                   <span className={`text-sm font-bold font-mono uppercase tracking-wide ${expanded === i ? 'text-white' : 'text-neutral-400'}`}>
                     {sec.title}
                   </span>
                 </div>
                 {expanded === i && <ChevronRight size={14} className="text-blue-500" />}
               </button>
             ))}
          </div>

          {/* Main Content Area */}
          <div className="md:col-span-8">
             <div className="bg-[#0A0A0A] border border-neutral-800 rounded-sm p-1 h-full min-h-[400px]">
               <AnimatePresence mode="wait">
                 {expanded !== null && (
                   <motion.div
                     key={expanded}
                     initial={{ opacity: 0, x: 10 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -10 }}
                     transition={{ duration: 0.2 }}
                     className="p-6 md:p-8"
                   >
                      <div className="flex items-center gap-2 mb-6 text-blue-500">
                        <Terminal size={16} />
                        <span className="text-xs font-mono uppercase tracking-widest">
                          /usr/bin/solidity --module {expanded + 1}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-6">
                        {sections[expanded].title}
                      </h2>
                      
                      <div className="text-neutral-400 leading-relaxed space-y-6">
                        {sections[expanded].content.map((c, idx) => 
                          typeof c === 'string' ? (
                            <p key={idx} className="whitespace-pre-line">{c}</p>
                          ) : (
                            <div key={idx}>{c}</div>
                          )
                        )}
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
             </div>
          </div>
        </div>

        {/* Takeaways */}
        <motion.section className="mb-16 border-t border-neutral-800 pt-16" {...fadeInUp}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/3">
              <h2 className="text-lg font-bold font-mono uppercase tracking-widest text-neutral-200 mb-2">
                Compilers Note
              </h2>
              <p className="text-sm text-neutral-500">Critical concepts for production deployment.</p>
            </div>
            
            <div className="md:w-2/3 grid gap-4">
              {[
                'Contracts are immutable: deploy once, run forever (mostly).',
                'Storage is the most expensive resource; pack your variables.',
                'Security is paramount: reentrancy and overflow checks are mandatory.'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-neutral-900/30 border-l-2 border-blue-600">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-300 font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="flex justify-center" {...fadeInUp}>
          <Link href="/d2-session-3">
            <button className="group relative px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next: Contract Workshop</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  )
}