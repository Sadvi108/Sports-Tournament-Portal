"use client"

import { useEffect, useId, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export type SparklesProps = {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  fpsLimit?: number
  options?: Record<string, unknown>
}

export function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  fpsLimit = 60,
  options = {},
}: SparklesProps) {
  const [isReady, setIsReady] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setIsReady(true)
    })
  }, [])

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)")
    if (!mq) return
    const onChange = () => setReduceMotion(!!mq.matches)
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [])

  const id = useId()

  const defaultOptions = {
    background: {
      color: {
        value: background,
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    fpsLimit: reduceMotion ? Math.min(30, fpsLimit) : fpsLimit,
    particles: {
      color: {
        value: color,
      },
      move: {
        enable: !reduceMotion,
        direction: "none",
        speed: {
          min: reduceMotion ? 0 : minSpeed || speed / 10,
          max: reduceMotion ? 0 : speed,
        },
        straight: false,
      },
      number: {
        value: density,
      },
      opacity: {
        value: {
          min: minOpacity || opacity / 10,
          max: opacity,
        },
        animation: {
          enable: !reduceMotion,
          sync: false,
          speed: opacitySpeed,
        },
      },
      size: {
        value: {
          min: minSize || size / 2.5,
          max: size,
        },
      },
    },
    detectRetina: true,
  }

  return (
    isReady && (
      <Particles
        id={id}
        options={{ ...(defaultOptions as any), ...(options as any) }}
        className={className}
      />
    )
  )
}

