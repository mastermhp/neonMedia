"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { getAllMediaItems } from "@/lib/data"
import { Menu, X } from "lucide-react"
import MediaCard from "./components/media-card"

export default function HomePage() {
  const [mediaItems, setMediaItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setMediaItems(getAllMediaItems())
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative overflow-hidden sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20 z-0" />
        <div className="container mx-auto px-4 py-4 md:py-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center"
          >
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              MediaCorn
            </motion.h1>

            {/* Desktop Navigation */}
            {/* <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <motion.li whileHover={{ scale: 1.1, color: "#ff2d55" }}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Home
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, color: "#ff2d55" }}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Explore
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, color: "#ff2d55" }}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Upload
                  </a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1, color: "#ff2d55" }}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    Profile
                  </a>
                </motion.li>
              </ul>
            </nav> */}

            {/* Mobile Menu Button */}
            {/* <button
              className="md:hidden p-2 text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button> */}
          </motion.div>

          {/* Mobile Navigation */}
          {/* {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-2"
            >
              <ul className="flex flex-col space-y-3">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-red-900/20 rounded-md hover:text-red-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-red-900/20 rounded-md hover:text-red-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Explore
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-red-900/20 rounded-md hover:text-red-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Upload
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-red-900/20 rounded-md hover:text-red-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </a>
                </li>
              </ul>
            </motion.div>
          )} */}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <motion.h2
          className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Trending Media
        </motion.h2>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-video bg-gray-900/50 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            {mediaItems.map((item, index) => (
              <MediaCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-10 md:mt-20 border-t border-red-900/30">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 NeonMedia. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
