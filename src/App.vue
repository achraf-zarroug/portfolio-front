<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import SkillsAndLanguages from './components/SkillsAndLanguages.vue';
import Education from './components/Education.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="min-h-screen bg-slate-900 selection:bg-teal-300 selection:text-teal-900">
    <Navbar />
    
    <main id="top">
      <Hero />
      <Experience />
      <Projects />
      <SkillsAndLanguages />
      <Education />
      <Contact />
    </main>

    <Footer />
  </div>
</template>
