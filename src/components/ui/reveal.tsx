"use client"

import type React from "react"
import { motion } from "framer-motion"

export type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  once?: boolean
  amount?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  y = 24,
  once = true,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

