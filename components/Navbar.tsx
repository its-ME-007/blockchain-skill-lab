'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Blocks, BookOpen, FileText } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showExploreDropdown, setShowExploreDropdown] = useState(false)
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl font-bold gradient-text">Blockchain Learning</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Explore Button with Dropdown */}
            <div className="relative">
              <motion.button
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2"
                whileHover={{ y: -2 }}
                onClick={() => {
                  setShowExploreDropdown(!showExploreDropdown)
                  setShowResourcesDropdown(false)
                }}
              >
                <BookOpen size={18} />
                Explore
              </motion.button>

              <AnimatePresence>
                {showExploreDropdown && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-80 glass-effect rounded-xl shadow-2xl border border-white/10 p-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-sm font-semibold text-blockchain-cyan mb-3">5-Day Learning Journey</h3>
                    <div className="space-y-2">
                      {[
                        { day: 1, sessions: 3, available: 2 },
                        { day: 2, sessions: 3, available: 0 },
                        { day: 3, sessions: 3, available: 0 },
                        { day: 4, sessions: 3, available: 0 },
                        { day: 5, sessions: 3, available: 0 }
                      ].map((item) => (
                        <Link key={item.day} href="/">
                          <div className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-white">Day {item.day}</span>
                              <span className="text-xs text-gray-400">
                                {item.available > 0 ? `${item.available}/${item.sessions} Available` : 'Coming Soon'}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Button with Dropdown */}
            <div className="relative">
              <motion.button
                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2"
                whileHover={{ y: -2 }}
                onClick={() => {
                  setShowResourcesDropdown(!showResourcesDropdown)
                  setShowExploreDropdown(false)
                }}
              >
                <FileText size={18} />
                Resources
              </motion.button>

              <AnimatePresence>
                {showResourcesDropdown && (
                  <motion.div
                    className="absolute top-full right-0 mt-2 w-64 glass-effect rounded-xl shadow-2xl border border-white/10 p-6 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-4xl mb-2">🚧</div>
                    <h3 className="text-lg font-semibold text-white mb-1">Coming Soon</h3>
                    <p className="text-sm text-gray-400">Resources will be available soon</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 py-4 glass-effect rounded-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col gap-4 px-4">
              {/* Mobile Explore Section */}
              <div>
                <div className="flex items-center gap-2 text-blockchain-cyan font-medium mb-2 px-2">
                  <BookOpen size={18} />
                  <span>Explore</span>
                </div>
                <div className="space-y-2 ml-4">
                  {[
                    { day: 1, sessions: 3, available: 2 },
                    { day: 2, sessions: 3, available: 0 },
                    { day: 3, sessions: 3, available: 0 },
                    { day: 4, sessions: 3, available: 0 },
                    { day: 5, sessions: 3, available: 0 }
                  ].map((item) => (
                    <Link key={item.day} href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-white">Day {item.day}</span>
                          <span className="text-xs text-gray-400">
                            {item.available > 0 ? `${item.available}/${item.sessions}` : 'Soon'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/10" />

              {/* Mobile Resources Section */}
              <div className="px-2">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <FileText size={18} />
                  <span className="font-medium">Resources</span>
                </div>
                <p className="text-sm text-gray-500 ml-6">Coming Soon 🚧</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
