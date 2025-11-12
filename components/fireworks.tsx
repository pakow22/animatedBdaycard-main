"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  color: string
  size: number
}

export default function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ffd93d", "#ff85a2", "#a8e6cf"]

    // Create firework explosion
    const createFirework = (x: number, y: number) => {
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount
        const velocity = 2 + Math.random() * 3
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 0.6 + Math.random() * 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 2,
        })
      }
    }

    // Random firework launcher
    const launchRandomFirework = () => {
      const x = canvas.width * (0.2 + Math.random() * 0.6)
      const y = canvas.height * (0.2 + Math.random() * 0.4)
      createFirework(x, y)
    }

    // Initial fireworks
    launchRandomFirework()

    // Launch fireworks periodically
    const fireworkInterval = setInterval(
      () => {
        launchRandomFirework()
      },
      800 + Math.random() * 1200,
    )

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // Update position
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05 // Gravity
        p.vx *= 0.99 // Air resistance
        p.vy *= 0.99

        // Update life
        p.life -= 0.01

        // Remove dead particles
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        // Draw particle
        const alpha = p.life / p.maxLife
        ctx.fillStyle = p.color
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(fireworkInterval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}
