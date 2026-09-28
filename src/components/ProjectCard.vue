<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="$emit('open-details', project)"
    class="relative group rounded-2xl glass-card overflow-hidden flex flex-col h-full transition-transform duration-300 ease-out will-change-transform cursor-pointer"
    :style="cardTransformStyle"
  >
    <!-- Dynamic Mouse Spotlight Glow Effect -->
    <div
      class="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      :style="spotlightStyle"
    ></div>

    <!-- Thumbnail Section -->
    <div class="relative aspect-[16/10] bg-slate-900 overflow-hidden">

      <!-- Skeleton Loader (shown while image loads) -->
      <div
        v-if="!imageLoaded && project.image"
        class="absolute inset-0 z-10 bg-slate-900"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-skeleton"></div>
        <!-- Grid skeleton lines -->
        <div class="absolute inset-4 flex flex-col gap-3 opacity-30">
          <div class="h-2 bg-slate-700 rounded-full w-3/4"></div>
          <div class="h-2 bg-slate-700 rounded-full w-1/2"></div>
          <div class="flex-1 bg-slate-800 rounded-lg"></div>
        </div>
      </div>

      <!-- Main Project Image with Parallax-like Zoom -->
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        @load="imageLoaded = true"
        class="w-full h-full object-cover object-top transition-all duration-700 ease-out"
        :class="[
          imageLoaded ? 'opacity-100' : 'opacity-0',
          isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-90'
        ]"
        loading="lazy"
      />

      <!-- Fallback Placeholder when no image -->
      <div v-if="!project.image" class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 relative">
        <!-- Decorative grid dots -->
        <div class="absolute inset-0 bg-dots-pattern opacity-30"></div>
        <div class="relative z-10 flex flex-col items-center gap-3">
          <div class="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <svg class="w-7 h-7 text-indigo-400/70 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
          </div>
          <span class="text-xs font-mono text-slate-500 tracking-wider">APPLICATION PREVIEW</span>
        </div>
      </div>

      <!-- Cinematic Dark Gradient Overlay (bottom-heavy for readability) -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-900/10 transition-opacity duration-500"
           :class="isHovered ? 'opacity-50' : 'opacity-85'"
      ></div>

      <!-- Shimmer Sweep Effect on hover -->
      <div
        class="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
        :class="isHovered ? 'opacity-100' : 'opacity-0'"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      </div>

      <!-- Top Badges Row -->
      <div class="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
        <!-- Category Badge -->
        <span class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold bg-slate-950/85 backdrop-blur-md text-indigo-300 border border-indigo-500/25 shadow-lg tracking-wider uppercase">
          {{ project.category }}
        </span>

        <!-- Live Status Badge -->
        <span
          v-if="project.liveUrl && project.liveUrl !== '#'"
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 backdrop-blur-md border border-emerald-500/35 shadow-lg shadow-emerald-500/10"
        >
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Live
        </span>

        <!-- No-live placeholder -->
        <span
          v-else
          class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-900/70 text-slate-400 backdrop-blur-md border border-slate-700/60"
        >
          <span class="w-2 h-2 rounded-full bg-slate-500"></span>
          Privé
        </span>
      </div>

      <!-- Tech Preview Strip — slides up from the bottom on hover -->
      <div
        class="absolute bottom-0 inset-x-0 z-20 px-3 pb-3 pt-6 bg-gradient-to-t from-slate-950 to-transparent transition-all duration-400 ease-out"
        :class="isHovered ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'"
      >
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tech in project.technologies.slice(0, 4)"
            :key="tech"
            class="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 backdrop-blur-sm"
          >
            {{ tech }}
          </span>
          <span
            v-if="project.technologies.length > 4"
            class="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm"
          >
            +{{ project.technologies.length - 4 }} plus
          </span>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6 flex flex-col flex-grow relative z-20">
      <div class="flex items-start justify-between gap-3 mb-2.5">
        <h3 class="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1">
          {{ project.title }}
        </h3>
      </div>

      <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-1.5 mb-6">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-pill"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action Links -->
      <div class="flex items-center gap-2.5 pt-4 border-t border-white/5 mt-auto">
        <a
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all duration-200 active:scale-95"
        >
          <span>Consulter</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          @click.stop
          class="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-700/80 transition-all duration-200"
          title="Code source GitHub"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="hidden sm:inline">GitHub</span>
        </a>

        <!-- Click anywhere hint -->
        <span class="ml-auto text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 transition-colors flex items-center gap-1 select-none">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
          </svg>
          Cliquer pour détails
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
  highlights?: string[]
}

defineProps<{
  project: Project
}>()

defineEmits<{
  (e: 'open-details', project: Project): void
}>()

const cardRef = ref<HTMLElement | null>(null)
const imageLoaded = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
const rotateX = ref(0)
const rotateY = ref(0)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  mouseX.value = x
  mouseY.value = y
  isHovered.value = true

  // 3D tilt calculation
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  rotateX.value = -((y - centerY) / centerY) * 5
  rotateY.value = ((x - centerX) / centerX) * 5
}

const handleMouseLeave = () => {
  isHovered.value = false
  rotateX.value = 0
  rotateY.value = 0
}

const cardTransformStyle = computed(() => {
  if (!isHovered.value) return {}
  return {
    transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale3d(1.015, 1.015, 1.015)`,
  }
})

const spotlightStyle = computed(() => {
  return {
    background: `radial-gradient(400px circle at ${mouseX.value}px ${mouseY.value}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
    border: '1px solid rgba(99, 102, 241, 0.4)',
  }
})
</script>
