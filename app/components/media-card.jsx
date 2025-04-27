"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MediaCard({ item, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
    >
      <Link href={item.link} passHref>
        <motion.div
          className="relative overflow-hidden rounded-lg aspect-video bg-gray-900 cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255, 45, 85, 0.5)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Placeholder while image loads */}
          {!isImageLoaded && <div className="absolute inset-0 bg-gray-800 animate-pulse" />}

          <img
            src={item.imageUrl}
            alt={item.title}
            fill
            className={`object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onLoad={() => setIsImageLoaded(true)}
            priority={index < 4} // Load first 4 images with priority
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Play button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0.7, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0.7,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-600/80 group-hover:bg-red-600 transition-colors duration-300">
              <Play className="w-4 h-4 md:w-5 md:h-5 text-white fill-white" />

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 rounded-full border border-red-500"
                animate={{
                  scale: isHovered ? [1, 1.5, 1.8] : 1,
                  opacity: isHovered ? [1, 0.5, 0] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
            <h3 className="text-xs md:text-sm font-medium text-white truncate">{item.title}</h3>
            <p className="text-xs text-gray-300 mt-0.5 md:mt-1 opacity-80">{item.views} views</p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
