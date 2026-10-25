<template>
  <header class="reference-header fixed top-0 inset-x-0 z-50 pointer-events-none px-5 sm:px-8">
    <!-- Top Scroll Progress Bar -->
    <div class="fixed right-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-slate-900 z-50 pointer-events-none rounded-full overflow-hidden">
      <div
        class="w-full bg-gradient-to-b from-violet-400 via-fuchsia-500 to-violet-400 transition-all duration-150 ease-out rounded-full"
        :style="{ height: `${scrollProgress}%` }"
      ></div>
    </div>

    <!-- Floating Island Navbar -->
    <nav class="max-w-7xl mx-auto pointer-events-auto">
      <div
        class="reference-header-inner flex items-center justify-between py-3 sm:py-4 transition-all duration-300"
      >
        <!-- Logo & Identity -->
        <a href="#home" class="flex items-center gap-3 group">
          <div class="brand-mark w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-black tracking-tight group-hover:scale-105 transition-transform duration-300">
            AZ
          </div>

          <div class="flex flex-col">
            <div class="flex items-center gap-2">
              <span class="text-sm sm:text-base font-extrabold text-white group-hover:text-violet-300 transition-colors tracking-tight uppercase">
                {{ name }}
              </span>
            </div>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <div class="header-links hidden lg:flex items-center gap-0.5 xl:gap-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="activeSection = item.href"
            class="relative px-2 py-2 text-[11px] xl:px-2.5 xl:text-xs font-semibold rounded-lg transition-all duration-200"
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
        <div class="header-actions hidden lg:flex items-center gap-2">
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
            class="inline-flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] font-semibold text-slate-200 bg-white/[0.035] hover:bg-white/[0.08] transition-colors border border-violet-300/20"
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
        <div class="header-mobile-actions flex items-center gap-4 lg:hidden">
          <span class="text-xs font-bold tracking-[0.18em] text-slate-300">FR</span>
          <button
            @click="toggleTheme"
            class="hidden"
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
            class="p-2 rounded-xl text-violet-200 hover:text-white hover:bg-white/10 focus:outline-none"
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
          class="mt-3 ml-auto w-full max-w-xs p-3 rounded-2xl glass-panel border border-violet-300/15 shadow-2xl shadow-black/60 space-y-1.5"
        >
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            @click="mobileMenuOpen = false; activeSection = item.href"
            class="block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
            :class="[
              activeSection === item.href
                ? 'text-white bg-violet-600/70 font-semibold'
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
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Formation', href: '#education' },
  { name: 'Projets', href: '#projects' },
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
  const sections = ['home', 'about', 'services', 'skills', 'experience', 'education', 'projects', 'contact']
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
