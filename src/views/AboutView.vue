<template>
  <div>
    <AppHeader />
    
    <main class="py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement logiciel
          </p>
        </div>

        <!-- Profile Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div class="lg:col-span-1">
            <div class="bg-gray-200 aspect-square rounded-lg flex items-center justify-center">
              <svg class="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">John Doe</h2>
            <p class="text-lg text-gray-600 mb-6">
              Ingénieur en génie logiciel avec {{ yearsOfExperience }} ans d'expérience dans le développement 
              d'applications web et mobiles. Passionné par les technologies modernes et l'innovation, 
              je recherche constamment de nouveaux défis pour faire évoluer mes compétences.
            </p>
            <p class="text-gray-600 mb-6">
              Mon expertise couvre le développement full-stack, de la conception d'interfaces utilisateur 
              intuitives à l'architecture de systèmes backend robustes. J'ai une forte expérience en 
              méthodologies agiles et en collaboration d'équipe.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Paris, France
              </div>
              <div class="flex items-center text-gray-600">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                john.doe@email.com
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Expérience Professionnelle</h2>
          <div class="space-y-8">
            <div v-for="job in experience" :key="job.id" class="border-l-4 border-blue-500 pl-6">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 class="text-xl font-semibold text-gray-900">{{ job.title }}</h3>
                <span class="text-sm text-gray-500">{{ job.period }}</span>
              </div>
              <p class="text-blue-600 font-medium mb-3">{{ job.company }}</p>
              <p class="text-gray-600 mb-4">{{ job.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Formation</h2>
          <div class="space-y-6">
            <div v-for="edu in education" :key="edu.id" class="bg-white p-6 rounded-lg shadow-md">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 class="text-xl font-semibold text-gray-900">{{ edu.degree }}</h3>
                <span class="text-sm text-gray-500">{{ edu.year }}</span>
              </div>
              <p class="text-blue-600 font-medium mb-2">{{ edu.school }}</p>
              <p class="text-gray-600">{{ edu.description }}</p>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Compétences Techniques</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="category in skillCategories" :key="category.name" class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">{{ category.name }}</h3>
              <div class="space-y-3">
                <div v-for="skill in category.skills" :key="skill.name" class="flex items-center justify-between">
                  <span class="text-gray-700">{{ skill.name }}</span>
                  <div class="flex items-center">
                    <div class="w-24 bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        class="bg-blue-600 h-2 rounded-full"
                        :style="{ width: skill.level + '%' }"
                      ></div>
                    </div>
                    <span class="text-sm text-gray-500">{{ skill.level }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface Education {
  id: number
  degree: string
  school: string
  year: string
  description: string
}

interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

const yearsOfExperience = computed(() => {
  const startYear = 2020
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})

const experience = ref<Experience[]>([
  {
    id: 1,
    title: 'Développeur Full-Stack Senior',
    company: 'TechCorp Solutions',
    period: '2022 - Présent',
    description: 'Développement d\'applications web complexes, encadrement d\'équipe junior, architecture de solutions techniques.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: 2,
    title: 'Développeur Frontend',
    company: 'Digital Agency',
    period: '2020 - 2022',
    description: 'Création d\'interfaces utilisateur modernes et responsives, intégration d\'APIs REST, optimisation des performances.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Jest']
  }
])

const education = ref<Education[]>([
  {
    id: 1,
    degree: 'Master en Génie Logiciel',
    school: 'École Supérieure d\'Informatique',
    year: '2018 - 2020',
    description: 'Spécialisation en développement d\'applications, architecture logicielle et gestion de projet.'
  },
  {
    id: 2,
    degree: 'Licence en Informatique',
    school: 'Université de Technologie',
    year: '2015 - 2018',
    description: 'Formation générale en informatique, programmation et mathématiques appliquées.'
  }
])

const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    name: 'DevOps & Outils',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 78 },
      { name: 'AWS', level: 70 },
      { name: 'Linux', level: 85 }
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Communication', level: 88 },
      { name: 'Travail d\'équipe', level: 92 },
      { name: 'Résolution de problèmes', level: 90 },
      { name: 'Gestion de projet', level: 80 }
    ]
  }
])
</script>