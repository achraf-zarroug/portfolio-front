<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue';
import { Send } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="py-32 relative">
    <div class="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
      <AnimatedSection direction="up">
        <p class="text-teal-400 font-mono mb-4">05. What's Next?</p>
        <h2 class="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
        <p class="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
          Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </AnimatedSection>

      <AnimatedSection :delay="200" direction="up">
        <form @submit.prevent class="glass p-8 md:p-10 rounded-3xl text-left">
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-2">
              <label for="name" class="text-sm font-medium text-slate-300 ml-1">Name</label>
              <input type="text" id="name" placeholder="John Doe" class="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600" />
            </div>
            <div class="space-y-2">
              <label for="email" class="text-sm font-medium text-slate-300 ml-1">Email</label>
              <input type="email" id="email" placeholder="john@example.com" class="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600" />
            </div>
          </div>
          <div class="space-y-2 mb-8">
            <label for="message" class="text-sm font-medium text-slate-300 ml-1">Message</label>
            <textarea id="message" rows="5" placeholder="Hello, I'd like to talk about..." class="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all placeholder:text-slate-600 resize-none"></textarea>
          </div>
          <button type="submit" class="w-full md:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
            <Send class="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </AnimatedSection>
    </div>
  </section>
</template>
