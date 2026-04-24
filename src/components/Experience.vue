<script setup lang="ts">
import AnimatedSection from './AnimatedSection.vue';
import { Briefcase } from 'lucide-vue-next';

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2021 - Present",
    description: "Led the frontend development team in migrating a legacy monolith to a micro-frontend architecture using Vue 3 and TypeScript. Improved performance by 40% and reduced deployment times.",
    skills: ["Vue.js", "TypeScript", "Micro-frontends", "Tailwind CSS"]
  },
  {
    role: "Software Engineer",
    company: "Web Solutions Inc",
    period: "2018 - 2021",
    description: "Developed and maintained several high-traffic e-commerce platforms. Implemented a custom state management solution and integrated various payment gateways.",
    skills: ["JavaScript", "Vue 2", "Node.js", "MongoDB"]
  },
  {
    role: "Junior Web Developer",
    company: "Creative Agency",
    period: "2016 - 2018",
    description: "Built responsive landing pages and interactive UI components for various client projects. Collaborated closely with designers to ensure pixel-perfect implementation.",
    skills: ["HTML", "CSS", "jQuery", "PHP"]
  }
];
</script>

<template>
  <section id="experience" class="py-24 relative">
    <div class="container mx-auto px-6 lg:px-12 max-w-4xl">
      <AnimatedSection>
        <div class="flex items-center gap-4 mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-100"><span class="text-teal-400 font-mono text-xl mr-2">01.</span> Experience</h2>
          <div class="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
      </AnimatedSection>

      <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
        
        <AnimatedSection v-for="(exp, index) in experiences" :key="index" :delay="index * 200" :direction="index % 2 === 0 ? 'left' : 'right'" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          
          <div class="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-teal-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow absolute left-0 md:left-1/2 z-10">
            <Briefcase class="w-4 h-4" />
          </div>

          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl ml-auto md:ml-0 hover:border-teal-500/50 transition-colors">
            <div class="flex flex-col mb-2">
              <span class="text-teal-400 font-mono text-sm mb-1">{{ exp.period }}</span>
              <h3 class="text-xl font-bold text-slate-100">{{ exp.role }}</h3>
              <p class="text-slate-400 font-medium">{{ exp.company }}</p>
            </div>
            <p class="text-slate-300 text-sm leading-relaxed mb-4">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in exp.skills" :key="skill" class="text-xs font-mono text-teal-300 bg-teal-500/10 px-2 py-1 rounded">
                {{ skill }}
              </span>
            </div>
          </div>

        </AnimatedSection>

      </div>
    </div>
  </section>
</template>
