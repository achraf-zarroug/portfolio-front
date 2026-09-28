<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <!-- Ambient Moving Gradient Orbs -->
    <div
      class="ambient-orb orb-1 absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[130px] opacity-40 dark:opacity-30 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-700 animate-float-slow pointer-events-none"
    ></div>

    <div
      class="ambient-orb orb-2 absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full blur-[140px] opacity-30 dark:opacity-20 bg-gradient-to-bl from-cyan-500 via-blue-600 to-indigo-800 animate-float pointer-events-none"
      style="animation-delay: -3s;"
    ></div>

    <div
      class="ambient-orb orb-3 absolute -bottom-[15%] left-[20%] w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-25 dark:opacity-20 bg-gradient-to-tr from-purple-800 via-indigo-900 to-emerald-600 animate-float-slow pointer-events-none"
      style="animation-delay: -6s;"
    ></div>

    <!-- Tech Cyber Grid Pattern -->
    <div class="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-25 pointer-events-none"></div>

    <!-- Interactive Canvas Particle Field -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full pointer-events-auto"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  color: string
}

let animationFrameId: number
let particles: Particle[] = []
let mouse = { x: -1000, y: -1000, radius: 140 }

const colors = ['#818cf8', '#a855f7', '#38bdf8', '#6366f1', '#34d399']

const initParticles = (width: number, height: number) => {
  particles = []
  // Particle density scaled by screen area
  const count = Math.min(Math.floor((width * height) / 18000), 75)
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
}

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  initParticles(width, height)

  const handleResize = () => {
    if (!canvas) return
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
    initParticles(width, height)
  }

  const handleMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  const handleMouseLeave = () => {
    mouse.x = -1000
    mouse.y = -1000
  }

  window.addEventListener('resize', handleResize, { passive: true })
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

  // Animation Loop
  const render = () => {
    ctx.clearRect(0, 0, width, height)

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      // Movement
      p.x += p.vx
      p.y += p.vy

      // Wrap boundaries
      if (p.x < 0) p.x = width
      if (p.x > width) p.x = 0
      if (p.y < 0) p.y = height
      if (p.y > height) p.y = 0

      // Mouse interactive repulsion / attraction
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius
        p.x -= (dx / dist) * force * 1.5
        p.y -= (dy / dist) * force * 1.5
      }

      // Draw particle dot
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = p.alpha
      ctx.fill()

      // Connect neighboring particles with sleek glowing lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]
        const pDx = p.x - p2.x
        const pDy = p.y - p2.y
        const pDist = Math.sqrt(pDx * pDx + pDy * pDy)

        if (pDist < 120) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = '#6366f1'
          ctx.globalAlpha = (1 - pDist / 120) * 0.18
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }
    }

    ctx.globalAlpha = 1
    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>

<style scoped>
.ambient-orb {
  filter: blur(120px);
  will-change: transform;
}
</style>
