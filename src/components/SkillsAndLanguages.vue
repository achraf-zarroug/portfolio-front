<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React", level: 60 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Python", level: 65 },
      { name: "PostgreSQL", level: 60 },
      { name: "MongoDB", level: 70 }
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 55 },
      { name: "Figma", level: 75 },
      { name: "Jest / Cypress", level: 60 }
    ]
  }
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "French", level: "Native" },
  { name: "Arabic", level: "Native" },
  { name: "German", level: "Basic" }
];
</script>

<template>
  <section id="skills" class="py-24 relative">
    <div class="container mx-auto px-6 lg:px-12 max-w-5xl">
      <AnimatedSection>
        <div class="flex items-center gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-100"><span class="text-teal-400 font-mono text-xl mr-2">03.</span> Skills & Languages</h2>
          <div class="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
      </AnimatedSection>

      <div class="grid lg:grid-cols-3 gap-10">
        
        <!-- Skills -->
        <div class="lg:col-span-2 space-y-10">
          <AnimatedSection v-for="(category, index) in skillCategories" :key="index" :delay="index * 200" direction="up">
            <h3 class="text-xl font-bold text-slate-200 mb-6">{{ category.title }}</h3>
            <div class="space-y-4">
              <div v-for="skill in category.skills" :key="skill.name" class="relative">
                <div class="flex justify-between mb-1 text-sm font-medium">
                  <span class="text-slate-300">{{ skill.name }}</span>
                  <span class="text-teal-400 font-mono">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-2">
                  <div class="bg-gradient-to-r from-teal-500 to-indigo-500 h-2 rounded-full" :style="{ width: `${skill.level}%` }"></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <!-- Languages -->
        <div class="lg:col-span-1">
          <AnimatedSection :delay="400" direction="left">
            <div class="glass p-8 rounded-2xl">
              <h3 class="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                Languages
              </h3>
              <div class="space-y-4">
                <div v-for="lang in languages" :key="lang.name" class="flex justify-between items-center border-b border-slate-700/50 pb-2 last:border-0 last:pb-0">
                  <span class="text-slate-300">{{ lang.name }}</span>
                  <span class="text-teal-400 text-sm font-mono bg-teal-500/10 px-2 py-1 rounded">{{ lang.level }}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  </section>
</template>
