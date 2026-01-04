'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, DollarSign, FileText, Loader, Upload, Video } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="px-3 py-1 bg-purple-900/20 border border-purple-800 text-purple-400 text-xs font-mono uppercase tracking-widest rounded-sm">
              Session 04.03
            </div>
            <div className="h-px bg-neutral-800 flex-1"></div>
            <span className="text-neutral-500 text-xs font-mono uppercase tracking-widest">
              Integration
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.95]">
            ETHEREUM
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
              + IPFS
            </span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed font-light border-l border-neutral-800 pl-6">
            Pair Ethereum’s stateful contracts with IPFS content addressing. Store hashes on-chain, keep bytes off-chain, and build resilient, verifiable Web3 apps.
          </p>
        </motion.div>

        {/* Resources Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10"
        >
          <Link
            href="https://tinyurl.com/resourcesgit"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-800 text-purple-200 text-sm font-mono uppercase tracking-widest rounded-sm hover:bg-purple-900/30 transition-colors"
          >
            Resources & Procedure
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Section 01: Why Ethereum Needs IPFS */}
        <Section number="01" title="The Storage Trilemma">
          <p className="text-neutral-400 mb-8 leading-relaxed">
            Ethereum excels at verifiable state but is economically unsuitable for file storage. IPFS complements it by storing content cheaply and verifiably.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <ScenarioCard
              icon={FileText}
              title="NFT Metadata"
              before="500KB JSON on-chain ≈ massive gas"
              after="Store CID on-chain (<$2), host file on IPFS"
            />
            <ScenarioCard
              icon={DollarSign}
              title="Document Verification"
              before="1MB PDF on-chain = impractical"
              after="Hash on-chain, file on IPFS = efficient + verifiable"
            />
            <ScenarioCard
              icon={Video}
              title="Media DApps"
              before="Video/images on-chain = impossible"
              after="CID registry on-chain, media on IPFS = scalable"
            />
          </div>

          <div className="p-6 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-blue-900/20 border border-purple-800 rounded-sm">
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-purple-300 font-bold mb-2">Ethereum</div>
                <div className="text-neutral-300">Ownership, permissions, transactions (expensive, permanent)</div>
              </div>
              <div>
                <div className="text-cyan-300 font-bold mb-2">IPFS</div>
                <div className="text-neutral-300">File storage & distribution (cheap, content-addressed)</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-700 text-center text-neutral-200">
              <strong>Together:</strong> immutable references with scalable storage
            </div>
          </div>
        </Section>

        {/* Section 02: Architecture Pattern */}
        <Section number="02" title="Decentralized Application Architecture">
          <div className="bg-[#050505] border border-neutral-800 rounded-sm p-8 mb-8">
            <div className="text-xs font-mono text-purple-500 uppercase tracking-widest mb-6">Workflow</div>
            <div className="space-y-4">
              {[
                'User uploads file',
                'Upload to IPFS (get CID)',
                'Store CID in smart contract',
                'Emit event indexed by CID',
                'Frontend reads CID from contract',
                'Fetch file from IPFS via CID',
                'Render to user'
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500 flex items-center justify-center font-mono text-sm text-purple-400 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-neutral-900/50 border border-neutral-800 rounded px-4 py-2 text-sm">
                    {step}
                  </div>
                  {i < 6 && <div className="text-neutral-700">↓</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <LayerCard
              number="1"
              title="Frontend (Next.js)"
              items={['UI + wallet connect', 'IPFS client integration', 'Reads events & CIDs']}
            />
            <LayerCard
              number="2"
              title="Smart Contract"
              items={['Store CIDs', 'Manage permissions', 'Track ownership']}
            />
            <LayerCard
              number="3"
              title="IPFS Network"
              items={['File storage', 'Content distribution', 'Pinning services']}
            />
            <LayerCard
              number="4"
              title="Ethereum Network"
              items={['State management', 'Transaction execution', 'Immutable records']}
            />
          </div>
        </Section>

        {/* Section 03: Smart Contract Design */}
        <Section number="03" title="CID Registry Contract">
          <TerminalBlock title="DocumentRegistry.sol" code={`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DocumentRegistry {
    event DocumentStored(address indexed owner, string cid, uint256 timestamp);

    struct Document {
        string cid;
        address owner;
        uint256 timestamp;
        string metadata;
    }

    mapping(bytes32 => Document) public documents;
    mapping(address => bytes32[]) public userDocuments;

    function storeDocument(string memory _cid, string memory _metadata) public {
        bytes32 docId = keccak256(abi.encodePacked(_cid, msg.sender, block.timestamp));

        documents[docId] = Document({
            cid: _cid,
            owner: msg.sender,
            timestamp: block.timestamp,
            metadata: _metadata
        });

        userDocuments[msg.sender].push(docId);
        emit DocumentStored(msg.sender, _cid, block.timestamp);
    }

    function getDocument(bytes32 _docId) public view returns (string memory, address, uint256, string memory) {
        Document memory doc = documents[_docId];
        return (doc.cid, doc.owner, doc.timestamp, doc.metadata);
    }

    function getUserDocuments(address _user) public view returns (bytes32[] memory) {
        return userDocuments[_user];
    }
}`} />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <FeatureCard title="CID Storage" description="Store IPFS CIDs as strings with metadata" />
            <FeatureCard title="Ownership" description="Each document linked to uploader" />
            <FeatureCard title="Verification" description="Timestamped records; recover who uploaded what" />
            <FeatureCard title="Events" description="Indexed events for off-chain indexing" />
          </div>
        </Section>

        {/* Section 04: Frontend Integration */}
        <Section number="04" title="Complete DApp Workflow">
          <TerminalBlock title="Upload Flow" code={`import { create } from 'ipfs-http-client'
import { ethers } from 'ethers'

// 1. IPFS
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

// 2. Ethereum
const provider = new ethers.BrowserProvider(window.ethereum)
const signer = await provider.getSigner()
const contract = new ethers.Contract(contractAddress, abi, signer)

// 3. Upload
async function uploadFile(file) {
  const added = await ipfs.add(file)
  const cid = added.path

  const tx = await contract.storeDocument(
    cid,
    JSON.stringify({ name: file.name, type: file.type, size: file.size })
  )
  await tx.wait()
  return cid
}

// 4. Query
async function getUserDocuments() {
  const address = await signer.getAddress()
  const docIds = await contract.getUserDocuments(address)
  const docs = []
  for (const docId of docIds) {
    const doc = await contract.getDocument(docId)
    docs.push({ id: docId, cid: doc.cid, owner: doc.owner, timestamp: doc.timestamp, metadata: JSON.parse(doc.metadata) })
  }
  return docs
}`} />
        </Section>

        {/* Section 05: React Component Example */}
        <Section number="05" title="File Upload Component">
          <TerminalBlock title="FileUploader.tsx" code={`import { useState } from 'react'
import { Upload, CheckCircle2, Loader } from 'lucide-react'

export default function FileUploader() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [cid, setCid] = useState('')
  const [txHash, setTxHash] = useState('')

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    try {
      const added = await ipfs.add(file)
      setCid(added.path)
      const tx = await contract.storeDocument(added.path, JSON.stringify({ name: file.name }))
      const receipt = await tx.wait()
      setTxHash(receipt.hash)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
      <h3 className="text-lg font-bold mb-4">Upload to IPFS + Ethereum</h3>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
      {cid && <div>{cid}</div>}
      {txHash && <div>{txHash}</div>}
    </div>
  )
}`} />

          <div className="mt-8">
            <FileUploaderDemo />
          </div>
        </Section>

        {/* Section 06: Real-World Use Cases */}
        <Section number="06" title="Production Applications">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              title="NFT Platforms"
              items={['Metadata/images on IPFS', 'Token URI stores CID', 'Immutable art + provenance']}
            />
            <UseCaseCard
              title="Document Verification"
              items={['Upload PDFs to IPFS', 'Store hash on-chain', 'Tamper-proof certificates']}
            />
            <UseCaseCard
              title="Decentralized Social"
              items={['Posts/media on IPFS', 'Ownership graph on Ethereum', 'Censorship-resistant feeds']}
            />
            <UseCaseCard
              title="Supply Chain"
              items={['Product specs on IPFS', 'Tracking records on-chain', 'Transparent provenance']}
            />
            <UseCaseCard
              title="Medical Records"
              items={['Encrypted files on IPFS', 'Access control on Ethereum', 'Privacy + portability']}
            />
            <UseCaseCard
              title="Academic Publishing"
              items={['Papers on IPFS', 'Citation network on-chain', 'Permanent scholarly record']}
            />
          </div>
        </Section>

        {/* Section 07: Best Practices */}
        <Section number="07" title="Production Considerations">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
              <h4 className="text-sm font-bold text-purple-500 uppercase mb-4">Before Launch</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                {[
                  'Pin critical content (multi-provider)',
                  'Validate metadata in contracts',
                  'Encrypt private data',
                  'Test retrieval across gateways',
                  'Add robust error handling',
                  'Plan gateway redundancy'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
                <h4 className="text-sm font-bold text-blue-400 uppercase mb-4">Cost Optimization</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    'Store only CIDs on-chain',
                    'Emit events for indexing instead of storage',
                    'Batch CID updates',
                    'Consider L2s (Polygon, Arbitrum)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6">
                <h4 className="text-sm font-bold text-purple-400 uppercase mb-4">User Experience</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    'Show upload progress',
                    'Provide multiple gateway fallbacks',
                    'Cache retrieved content',
                    'Render human-readable metadata'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Key Takeaways */}
        <Section number="08" title="Key Takeaways">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Ethereum handles state; IPFS handles storage',
              'Only CIDs go on-chain, not files',
              'Contracts act as CID registries',
              'Events enable off-chain indexing',
              'Pinning required for persistence',
              'Multiple gateways provide resilience',
              'Encrypt sensitive data',
              'This pattern powers most Web3 apps'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-[#050505] border border-neutral-800 rounded-sm">
                <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={16} />
                <span className="text-sm text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-16">
          <Link href="/d4-session-2">
            <button className="px-6 py-4 text-neutral-500 hover:text-white transition-colors">
              ← Previous: IPFS Storage
            </button>
          </Link>
          <Link href="/d5-session-1">
            <button className="group px-8 py-4 bg-white text-black font-bold hover:bg-neutral-200 transition-colors flex items-center gap-3 rounded-sm">
              <span>Next: Algorand Consensus</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

// Components

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-24 group"
    >
      <div className="flex items-baseline gap-4 mb-8 border-b border-neutral-800 pb-4">
        <span className="text-4xl font-mono font-bold text-neutral-800 group-hover:text-purple-900 transition-colors">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}

function ScenarioCard({ icon: Icon, title, before, after }: any) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6 hover:border-purple-800 transition-colors">
      <Icon className="text-purple-400 mb-4" size={28} />
      <h3 className="text-white font-bold mb-4">{title}</h3>
      <div className="space-y-3 text-sm">
        <div className="text-red-400">❌ {before}</div>
        <div className="text-green-400">✅ {after}</div>
      </div>
    </div>
  )
}

function LayerCard({ number, title, items }: { number: string; title: string; items: string[] }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-4">
      <div className="text-xs font-mono text-purple-400 mb-2">{number}</div>
      <h4 className="font-bold text-sm mb-3">{title}</h4>
      <ul className="space-y-1 text-xs text-neutral-400">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-4">
      <h4 className="font-bold text-sm mb-2 text-purple-300">{title}</h4>
      <p className="text-xs text-neutral-400">{description}</p>
    </div>
  )
}

function UseCaseCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#050505] border border-neutral-800 rounded-sm p-6 hover:border-purple-800 transition-colors">
      <h4 className="font-bold mb-4 text-purple-300">{title}</h4>
      <ul className="space-y-2 text-sm text-neutral-400">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TerminalBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="rounded-sm overflow-hidden border border-neutral-800 bg-[#080808] font-mono text-sm my-6 shadow-2xl">
      <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border-b border-neutral-800">
        <span className="text-[10px] text-neutral-500 uppercase tracking-widest">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-neutral-300 text-xs">{code}</pre>
      </div>
    </div>
  )
}

function FileUploaderDemo() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [cid, setCid] = useState('')
  const [txHash, setTxHash] = useState('')

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    setTimeout(() => {
      setCid('QmX7Kd9FzQ3pR2vN8wH5tJ6mL4sP9xY2aB1cD3eF4gH5i')
      setTimeout(() => {
        setTxHash('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0')
        setUploading(false)
      }, 1500)
    }, 2000)
  }

  return (
    <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-sm">
      <h3 className="text-lg font-bold text-white mb-4">Upload to IPFS + Ethereum (Demo)</h3>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 w-full p-2 bg-neutral-900 border border-neutral-800 rounded text-white text-sm"
      />

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="w-full py-3 bg-purple-500 text-white font-bold rounded hover:bg-purple-600 disabled:opacity-50 flex items-center justify-center gap-2 transition-colors"
      >
        {uploading ? (
          <>
            <Loader className="animate-spin" size={20} />
            Uploading...
          </>
        ) : (
          <>
            <Upload size={20} />
            Upload File
          </>
        )}
      </button>

      {cid && (
        <div className="mt-4 p-3 bg-purple-900/20 border border-purple-800/50 rounded">
          <div className="text-xs text-purple-300 mb-1">IPFS CID:</div>
          <div className="font-mono text-sm text-white break-all">{cid}</div>
        </div>
      )}

      {txHash && (
        <div className="mt-2 p-3 bg-green-900/20 border border-green-800/50 rounded">
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle2 size={16} />
            <span className="text-xs">Stored on blockchain</span>
          </div>
          <div className="font-mono text-xs text-neutral-400 break-all mt-1">{txHash}</div>
        </div>
      )}
    </div>
  )
}
