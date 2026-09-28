<template>
  <header class="fixed top-0 inset-x-0 z-50 pointer-events-none pt-3 sm:pt-4 px-3 sm:px-6">
    <!-- Top Scroll Progress Bar -->
    <div class="fixed top-0 left-0 right-0 h-[2px] bg-slate-800 z-50 pointer-events-none">
      <div
        class="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-150 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <!-- Floating Island Navbar -->
    <nav class="max-w-6xl mx-auto pointer-events-auto">
      <div
        class="glass-panel rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 shadow-2xl shadow-black/40 border border-white/10 flex items-center justify-between transition-all duration-300"
        :class="{ 'py-2 border-indigo-500/20 shadow-indigo-500/10': isScrolled }"
      >
        <!-- Logo & Identity -->
        <a href="#home" class="flex items-center gap-3 group">
          <div class="relative">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300">
              <div class="w-full h-full rounded-[10px] overflow-hidden bg-slate-900 flex items-center justify-center">
                <img 
                  src="/moi2.png" 
                  alt="Achraf Zarroug"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <span class="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950"></span>
            </span>
          </div>

          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors tracking-tight">
                {{ name }}
              </span>
              <span class="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Dispo
              </span>
            </div>
            <span class="text-[11px] text-slate-400 font-mono tracking-tight hidden sm:inline-block">
              Software Engineer • .NET & Vue
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center bg-slate-900/60 p-1 rounded-xl border border-white/5 space-x-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="activeSection = item.href"
            class="relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200"
            :class="[
              activeSection === item.href
                ? 'text-white font-semibold bg-indigo-600/90 shadow-sm shadow-indigo-500/30'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            ]"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- Desktop Action Buttons -->
        <div class="hidden sm:flex items-center gap-2 sm:gap-2.5">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
            :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
            aria-label="Changer de thème"
          >
            <!-- Sun icon when dark -->
            <svg v-if="isDark" class="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon when light -->
            <svg v-else class="w-4 h-4 text-indigo-400 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Download CV -->
          <a
            href="/cv.pdf"
            target="_blank"
            download="Achraf_Zarroug_CV.pdf"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-750 transition-colors border border-slate-700/80 hover:border-slate-600"
          >
            <svg class="w-3.5 h-3.5 text-indigo-400 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>CV</span>
          </a>

          <!-- Contact Button with Shimmer -->
          <a
            href="#contact"
            class="btn-shimmer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all duration-200 active:scale-95 border border-indigo-400/30"
          >
            <span>Contact</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <div class="flex items-center gap-1 md:hidden">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg text-slate-300 hover:text-white"
            aria-label="Changer de thème"
          >
            <svg v-if="isDark" class="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Menu de navigation"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4 scale-95"
        enter-to-class="opacity-100 translate-y-0 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0 scale-100"
        leave-to-class="opacity-0 -translate-y-4 scale-95"
      >
        <div
          v-if="mobileMenuOpen"
          class="md:hidden mt-2 p-3 rounded-2xl glass-panel border border-white/10 shadow-2xl shadow-black/60 space-y-1.5"
        >
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="mobileMenuOpen = false; activeSection = item.href"
            class="block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            :class="[
              activeSection === item.href
                ? 'text-white bg-indigo-600 font-semibold'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            ]"
          >
            {{ item.name }}
          </a>

          <div class="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="/cv.pdf"
              target="_blank"
              download="Achraf_Zarroug_CV.pdf"
              class="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV (.PDF)
            </a>

            <a
              href="#contact"
              @click="mobileMenuOpen = false"
              class="block w-full py-2.5 text-center text-xs font-bold text-white bg-indigo-600 rounded-xl shadow-md shadow-indigo-500/20"
            >
              Me contacter directement
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const name = 'Achraf Zarroug'
const mobileMenuOpen = ref(false)
const activeSection = ref('#home')
const isScrolled = ref(false)
const scrollProgress = ref(0)
const isDark = ref(true)

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos & Parcours', href: '#about' },
  { name: 'Réalisations', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const handleScroll = () => {
  const currentScroll = window.scrollY
  isScrolled.value = currentScroll > 40

  // Calculate scroll progress percentage
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0

  // Detect active section
  const sections = ['home', 'about', 'projects', 'contact']
  const scrollPosition = currentScroll + 200

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = `#${section}`
        break
      }
    }
  }
}

onMounted(() => {
  // Check persisted theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
