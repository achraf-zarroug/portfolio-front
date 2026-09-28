<template>
  <div class="py-10 relative overflow-hidden border-y border-white/5 bg-slate-950/60 backdrop-blur-md">
    <!-- Gradient Fade Masks on sides -->
    <div class="absolute left-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 inset-y-0 w-24 sm:w-36 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
        <p class="text-xs font-mono uppercase tracking-widest text-slate-400">
          Écosystème & Stack Technique Maîtrisée
        </p>
      </div>
      <span class="text-xs font-mono text-indigo-400/80 hidden sm:inline-block">.NET 8 • Vue 3 • Cloud & Architecture</span>
    </div>

    <!-- Row 1: Forward Marquee -->
    <div class="marquee-wrapper flex overflow-hidden select-none mb-3">
      <div class="marquee-track flex gap-4 animate-marquee py-1">
        <div
          v-for="(tech, idx) in row1"
          :key="'r1-a-' + idx"
          class="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-850 hover:text-white transition-all duration-300 shrink-0 group shadow-sm"
        >
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: tech.color }"></span>
          <span class="text-sm font-semibold tracking-tight">{{ tech.name }}</span>
          <span class="text-[11px] font-mono text-slate-500 group-hover:text-slate-400">{{ tech.role }}</span>
        </div>
      </div>
      <!-- Duplicate for seamless infinite loop -->
      <div class="marquee-track flex gap-4 animate-marquee py-1" aria-hidden="true">
        <div
          v-for="(tech, idx) in row1"
          :key="'r1-b-' + idx"
          class="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-850 hover:text-white transition-all duration-300 shrink-0 group shadow-sm"
        >
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: tech.color }"></span>
          <span class="text-sm font-semibold tracking-tight">{{ tech.name }}</span>
          <span class="text-[11px] font-mono text-slate-500 group-hover:text-slate-400">{{ tech.role }}</span>
        </div>
      </div>
    </div>

    <!-- Row 2: Reverse Marquee -->
    <div class="marquee-wrapper flex overflow-hidden select-none">
      <div class="marquee-track flex gap-4 animate-marquee-reverse py-1">
        <div
          v-for="(tech, idx) in row2"
          :key="'r2-a-' + idx"
          class="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-850 hover:text-white transition-all duration-300 shrink-0 group shadow-sm"
        >
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: tech.color }"></span>
          <span class="text-sm font-semibold tracking-tight">{{ tech.name }}</span>
          <span class="text-[11px] font-mono text-slate-500 group-hover:text-slate-400">{{ tech.role }}</span>
        </div>
      </div>
      <!-- Duplicate for seamless infinite loop -->
      <div class="marquee-track flex gap-4 animate-marquee-reverse py-1" aria-hidden="true">
        <div
          v-for="(tech, idx) in row2"
          :key="'r2-b-' + idx"
          class="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-850 hover:text-white transition-all duration-300 shrink-0 group shadow-sm"
        >
          <span class="w-2 h-2 rounded-full" :style="{ backgroundColor: tech.color }"></span>
          <span class="text-sm font-semibold tracking-tight">{{ tech.name }}</span>
          <span class="text-[11px] font-mono text-slate-500 group-hover:text-slate-400">{{ tech.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const row1 = [
  { name: '.NET 8 / C#', role: 'Core Backend', color: '#512bd4' },
  { name: 'Vue.js 3', role: 'Frontend Core', color: '#42b883' },
  { name: 'TypeScript', role: 'Type Safety', color: '#3178c6' },
  { name: 'ASP.NET Core', role: 'REST APIs', color: '#6366f1' },
  { name: 'Entity Framework', role: 'ORM', color: '#a855f7' },
  { name: 'Clean Architecture', role: 'Design Pattern', color: '#06b6d4' },
  { name: 'Docker', role: 'Containers', color: '#2496ed' },
  { name: 'SQL Server', role: 'RDBMS', color: '#cc292b' },
]

const row2 = [
  { name: 'Tailwind CSS', role: 'Modern Styling', color: '#38bdf8' },
  { name: 'Python / FastAPI', role: 'AI & Microservices', color: '#3776ab' },
  { name: 'MySQL', role: 'Database', color: '#00758f' },
  { name: 'Pinia / Vite', role: 'State & Tooling', color: '#ffd859' },
  { name: 'Git & GitHub', role: 'Version Control', color: '#f05032' },
  { name: 'JWT & OAuth2', role: 'Security & Auth', color: '#10b981' },
  { name: 'Postman', role: 'API Testing', color: '#ff6c37' },
  { name: 'Vercel & CI/CD', role: 'DevOps / Deploy', color: '#ffffff' },
]
</script>

<style scoped>
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}
</style>
