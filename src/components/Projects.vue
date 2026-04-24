<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue';
import { ExternalLink, Github, Folder } from 'lucide-vue-next';

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms. Features real-time sales tracking, inventory management, and user analytics with beautiful interactive charts.",
    tech: ["Vue 3", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative Kanban-style task management tool. Includes real-time updates, drag-and-drop functionality, and team workspaces with role-based access control.",
    tech: ["Vue 3", "Pinia", "Firebase", "VueUse"],
    github: "#",
    live: "#"
  },
  {
    title: "AI Image Generator",
    description: "A web interface for a text-to-image AI model. Allows users to generate, save, and share images. Includes a gallery and prompt history.",
    tech: ["Nuxt 3", "Tailwind", "OpenAI API", "Supabase"],
    github: "#",
    live: "#"
  },
  {
    title: "Portfolio Template",
    description: "A customizable, accessible, and performant portfolio template for developers. Easily configurable through a single JSON file.",
    tech: ["Vue 3", "Vite", "Tailwind CSS"],
    github: "#",
    live: "#"
  }
];
</script>

<template>
  <section id="projects" class="py-24 relative bg-slate-800/20">
    <div class="container mx-auto px-6 lg:px-12 max-w-6xl">
      <AnimatedSection>
        <div class="flex items-center gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-100"><span class="text-teal-400 font-mono text-xl mr-2">02.</span> Some Things I've Built</h2>
          <div class="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
      </AnimatedSection>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <AnimatedSection v-for="(project, index) in projects" :key="index" :delay="index * 150" direction="up">
          <div class="glass p-6 rounded-2xl h-full flex flex-col group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/10">
            <div class="flex justify-between items-center mb-6">
              <Folder class="w-10 h-10 text-teal-400" />
              <div class="flex gap-4">
                <a :href="project.github" class="text-slate-400 hover:text-teal-400 transition-colors">
                  <Github class="w-5 h-5" />
                </a>
                <a :href="project.live" class="text-slate-400 hover:text-teal-400 transition-colors">
                  <ExternalLink class="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <h3 class="text-xl font-bold text-slate-200 group-hover:text-teal-400 transition-colors mb-3">{{ project.title }}</h3>
            <p class="text-slate-400 text-sm mb-6 flex-grow">{{ project.description }}</p>
            
            <ul class="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
              <li v-for="tech in project.tech" :key="tech" class="text-xs font-mono text-slate-500">
                {{ tech }}
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>
