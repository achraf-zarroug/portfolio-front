<script setup lang="ts">
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-vue-next';
import AnimatedSection from './AnimatedSection.vue';
</script>

<template>
  <section id="about" class="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"></div>
    <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>

    <div class="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Text Content -->
      <div class="space-y-8">
        <AnimatedSection :delay="100">
          <p class="text-teal-400 font-mono tracking-wide">Hi, my name is</p>
          <h1 class="text-5xl md:text-7xl font-bold text-slate-100 mt-4 mb-2">Software Engineer.</h1>
          <h2 class="text-4xl md:text-6xl font-bold text-slate-400">I build things for the web.</h2>
        </AnimatedSection>

        <AnimatedSection :delay="300">
          <p class="text-lg text-slate-400 max-w-xl leading-relaxed">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using modern web technologies like Vue.js and Tailwind CSS.
          </p>
        </AnimatedSection>

        <AnimatedSection :delay="500">
          <div class="flex items-center gap-6">
            <a href="#contact" class="px-8 py-4 rounded-lg bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-colors">
              Get In Touch
            </a>
            <div class="flex gap-4">
              <a href="#" class="p-3 rounded-full text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all border border-transparent hover:border-teal-500/20">
                <Github class="w-6 h-6" />
              </a>
              <a href="#" class="p-3 rounded-full text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all border border-transparent hover:border-teal-500/20">
                <Linkedin class="w-6 h-6" />
              </a>
              <a href="#" class="p-3 rounded-full text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 transition-all border border-transparent hover:border-teal-500/20">
                <Mail class="w-6 h-6" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <!-- Image -->
      <AnimatedSection :delay="700" direction="left" class="flex justify-center lg:justify-end">
        <div class="relative group">
          <div class="absolute inset-0 bg-teal-500 rounded-2xl translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
          <div class="relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-800 z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            <img src="../assets/profile.png" alt="Profile" class="w-full h-full object-cover transition-all duration-500" />
          </div>
        </div>
      </AnimatedSection>
    </div>

    <!-- Scroll Indicator -->
    <AnimatedSection :delay="1000" class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-slate-500">
      <span class="text-xs tracking-widest uppercase mb-2">Scroll</span>
      <ArrowDown class="w-4 h-4" />
    </AnimatedSection>
  </section>
</template>
