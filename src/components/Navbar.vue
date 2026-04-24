<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const links = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const scrollToSection = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4 flex items-center justify-between',
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-sm' : 'bg-transparent'
    ]"
  >
    <div class="text-2xl font-bold tracking-tighter text-teal-400">
      <a href="#" @click.prevent="scrollToSection('#top')">Portfolio.</a>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden md:flex items-center gap-8">
      <a 
        v-for="link in links" 
        :key="link.name" 
        :href="link.href"
        @click.prevent="scrollToSection(link.href)"
        class="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
      >
        {{ link.name }}
      </a>
      <a 
        href="#contact" 
        @click.prevent="scrollToSection('#contact')"
        class="px-5 py-2.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 hover:bg-teal-500 hover:text-slate-900 transition-all font-medium text-sm"
      >
        Hire Me
      </a>
    </nav>
    
    <!-- Mobile Menu Toggle (Simplified for UI) -->
    <button class="md:hidden text-slate-300 hover:text-teal-400">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>
  </header>
</template>
