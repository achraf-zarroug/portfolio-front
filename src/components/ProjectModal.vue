<template>
  <teleport to="body">
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        @click.self="$emit('close')"
      >
        <div
          class="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8 transform transition-all duration-300"
        >
          <!-- Close Button -->
          <button
            @click="$emit('close')"
            class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
            aria-label="Fermer la fenêtre"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Modal Image Preview -->
          <div class="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover object-top"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            
            <div class="absolute bottom-4 left-6 flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 backdrop-blur-md">
                {{ project.category }}
              </span>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 backdrop-blur-md flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Déployé en production
              </span>
            </div>
          </div>

          <!-- Modal Content -->
          <div class="p-6 sm:p-8 space-y-6">
            <div>
              <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">
                {{ project.title }}
              </h3>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
                {{ project.description }}
              </p>
            </div>

            <!-- Architecture & Tech Stack -->
            <div>
              <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Technologies Clés</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 rounded-xl text-xs font-mono font-semibold bg-slate-800 text-indigo-300 border border-slate-700"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Action Buttons inside Modal -->
            <div class="pt-4 border-t border-slate-800 flex flex-wrap gap-3 items-center">
              <a
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-shimmer flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all active:scale-95"
              >
                <span>Visiter l'application en direct</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Code GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
}

defineProps<{
  project: Project | null
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>
