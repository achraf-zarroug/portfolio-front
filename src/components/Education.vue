<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue';
import { GraduationCap } from 'lucide-vue-next';

const educations = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "State University",
    period: "2014 - 2018",
    description: "Foundational studies in algorithms, data structures, and web development. Active member of the coding club."
  }
];
</script>

<template>
  <section id="education" class="py-24 relative bg-slate-800/20">
    <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
      <AnimatedSection>
        <div class="flex items-center gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-100"><span class="text-teal-400 font-mono text-xl mr-2">04.</span> Education</h2>
          <div class="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
      </AnimatedSection>

      <div class="space-y-8">
        <AnimatedSection v-for="(edu, index) in educations" :key="index" :delay="index * 200" direction="up">
          <div class="glass p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:border-teal-500/30 transition-colors group">
            <div class="p-4 bg-teal-500/10 rounded-full text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900 transition-colors shrink-0">
              <GraduationCap class="w-8 h-8" />
            </div>
            <div>
              <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                <h3 class="text-xl font-bold text-slate-200">{{ edu.degree }}</h3>
                <span class="text-teal-400 font-mono text-sm shrink-0">{{ edu.period }}</span>
              </div>
              <p class="text-slate-400 font-medium mb-3">{{ edu.school }}</p>
              <p class="text-slate-400 text-sm leading-relaxed">{{ edu.description }}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
</template>
