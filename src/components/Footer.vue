<script setup lang="ts">
import { Github, Linkedin, Twitter, Instagram } from 'lucide-vue-next';
</script>

<template>
  <footer class="py-8 text-center text-slate-400 text-sm">
    <div class="flex justify-center gap-6 mb-4 md:hidden">
      <!-- Mobile social links, since desktop has them in hero -->
      <a href="#" class="hover:text-teal-400 transition-colors"><Github class="w-5 h-5" /></a>
      <a href="#" class="hover:text-teal-400 transition-colors"><Linkedin class="w-5 h-5" /></a>
      <a href="#" class="hover:text-teal-400 transition-colors"><Twitter class="w-5 h-5" /></a>
      <a href="#" class="hover:text-teal-400 transition-colors"><Instagram class="w-5 h-5" /></a>
    </div>
    <p class="font-mono hover:text-teal-400 transition-colors cursor-pointer">
      Designed & Built by You
    </p>
  </footer>
</template>
