'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Blocks } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-blockchain-dark/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/">
              <div className="flex items-center gap-2 mb-4 cursor-pointer">
                <span className="text-xl font-bold gradient-text">Blockchain Learning</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Master blockchain fundamentals and modern distributed ledger technologies.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sessions */}
          <div>
            <h4 className="font-bold mb-4 text-blockchain-cyan">Learning Path</h4>
            <div className="flex flex-col gap-2">
              <Link href="/session-1">
                <motion.span
                  className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer block"
                  whileHover={{ x: 5 }}
                >
                  Session 1: Foundations
                </motion.span>
              </Link>
              <Link href="/session-2">
                <motion.span
                  className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer block"
                  whileHover={{ x: 5 }}
                >
                  Session 2: Platforms
                </motion.span>
              </Link>
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-bold mb-4 text-blockchain-purple">Topics</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <span>Distributed Ledgers</span>
              <span>Cryptographic Hashing</span>
              <span>Blockchain Platforms</span>
              <span>Transaction Models</span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4 text-blockchain-blue">Resources</h4>
            <div className="flex flex-col gap-2">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                Documentation
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                GitHub Repository
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
                whileHover={{ x: 5 }}
              >
                Community
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {currentYear} Blockchain SkillLab. Built for learners, by educators.</p>
        </div>
      </div>
    </footer>
  )
}
