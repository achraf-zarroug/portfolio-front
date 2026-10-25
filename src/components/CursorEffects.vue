<template>
  <div ref="cursor" class="cursor-effects" :class="{ 'is-visible': visible }" aria-hidden="true">
    <span class="cursor-aura"></span>
    <span class="cursor-star">✦</span>
    <span v-for="index in 4" :key="index" class="cursor-trail" :class="`trail-${index}`">✦</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const cursor = ref<HTMLElement | null>(null)
const visible = ref(false)

type Point = { x: number; y: number }
const target: Point = { x: 0, y: 0 }
const head: Point = { x: 0, y: 0 }
const trail: Point[] = Array.from({ length: 4 }, () => ({ x: 0, y: 0 }))

let frame = 0
let hasPointer = false
let trailNodes: HTMLElement[] = []

const moveCursor = (event: PointerEvent) => {
  target.x = event.clientX
  target.y = event.clientY
  if (!hasPointer) {
    head.x = target.x
    head.y = target.y
    trail.forEach(point => {
      point.x = target.x
      point.y = target.y
    })
    hasPointer = true
    visible.value = true
  }
  if (!frame) frame = requestAnimationFrame(animateCursor)
}

const animateCursor = () => {
  frame = 0
  const node = cursor.value
  if (!node || !hasPointer) return

  head.x += (target.x - head.x) * 0.34
  head.y += (target.y - head.y) * 0.34
  node.style.transform = `translate3d(${head.x}px, ${head.y}px, 0)`

  let leader = head
  trail.forEach((point, index) => {
    const lag = 0.28 - index * 0.045
    point.x += (leader.x - point.x) * lag
    point.y += (leader.y - point.y) * lag
    trailNodes[index]?.style.setProperty('--trail-x', `${point.x - head.x}px`)
    trailNodes[index]?.style.setProperty('--trail-y', `${point.y - head.y}px`)
    leader = point
  })

  if (Math.abs(target.x - head.x) + Math.abs(target.y - head.y) > 0.2) {
    frame = requestAnimationFrame(animateCursor)
  }
}

const hideCursor = () => {
  visible.value = false
  hasPointer = false
  if (frame) cancelAnimationFrame(frame)
  frame = 0
}

const handlePress = () => cursor.value?.classList.add('is-clicking')
const handleRelease = () => cursor.value?.classList.remove('is-clicking')

onMounted(() => {
  const finePointer = window.matchMedia('(pointer: fine)').matches
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!finePointer || reducedMotion || !cursor.value) return

  trailNodes = Array.from(cursor.value.querySelectorAll<HTMLElement>('.cursor-trail'))
  window.addEventListener('pointermove', moveCursor, { passive: true })
  window.addEventListener('pointerleave', hideCursor)
  window.addEventListener('pointerdown', handlePress)
  window.addEventListener('pointerup', handleRelease)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', moveCursor)
  window.removeEventListener('pointerleave', hideCursor)
  window.removeEventListener('pointerdown', handlePress)
  window.removeEventListener('pointerup', handleRelease)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<style scoped>
.cursor-effects {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 80;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  will-change: transform, opacity;
  transition: opacity 180ms ease;
}

.cursor-effects.is-visible { opacity: 1; }
.cursor-aura {
  position: absolute;
  left: -20px;
  top: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(190, 126, 255, .28), rgba(139, 72, 255, .09) 48%, transparent 72%);
  filter: blur(2px);
  animation: cursor-breathe 2.2s ease-in-out infinite;
}
.cursor-star {
  position: absolute;
  left: -8px;
  top: -12px;
  color: #d7a2ff;
  font-size: 17px;
  line-height: 1;
  text-shadow: 0 0 7px #bd70ff, 0 0 18px rgba(164, 79, 255, .95);
  animation: cursor-twinkle 1.8s ease-in-out infinite;
}
.cursor-trail {
  position: absolute;
  left: 0;
  top: 0;
  color: #c78aff;
  font-size: 8px;
  line-height: 1;
  opacity: .5;
  transform: translate3d(var(--trail-x, 0), var(--trail-y, 0), 0) scale(.8);
  text-shadow: 0 0 9px rgba(181, 92, 255, .95);
  transition: opacity 200ms ease;
}
.trail-2 { font-size: 6px; opacity: .38; }
.trail-3 { font-size: 9px; opacity: .28; }
.trail-4 { font-size: 5px; opacity: .18; }
.is-clicking .cursor-aura { transform: scale(.72); }

@keyframes cursor-breathe {
  0%, 100% { opacity: .65; transform: scale(.86); }
  50% { opacity: 1; transform: scale(1.18); }
}
@keyframes cursor-twinkle {
  0%, 100% { opacity: .78; transform: rotate(0) scale(.88); }
  50% { opacity: 1; transform: rotate(30deg) scale(1.12); }
}
</style>
