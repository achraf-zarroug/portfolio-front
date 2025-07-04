<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Salut, je suis <span class="text-yellow-300">Achraf</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            Ingénieur en Génie Logiciel
          </p>
          <p class="text-lg mb-12 max-w-3xl mx-auto text-blue-100">
            Passionné par le développement d'applications web modernes et la résolution de problèmes complexes. 
            Je recherche activement de nouvelles opportunités pour contribuer à des projets innovants.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink
              to="/projects"
              class="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Voir mes projets
            </RouterLink>
            <RouterLink
              to="/contact"
              class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Me contacter
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Compétences
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions efficaces
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="category in skills" :key="category.title" class="text-center">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <div class="text-4xl mb-4">{{ category.icon }}</div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ category.title }}</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <span
                  v-for="skill in category.skills"
                  :key="skill"
                  class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projets Récents
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets les plus récents
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        
        <div class="text-center">
          <RouterLink
            to="/projects"
            class="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Voir tous les projets
          </RouterLink>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ProjectCard from '../components/ProjectCard.vue'

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const skills = ref<SkillCategory[]>([
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['.NET', 'Spring boot', 'Java', 'PostgreSQL', 'MongoDB', 'REST API']
  },
  {
    title: 'Outils',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'Ansible', 'Linux', 'Github actions', 'Jenkins']
  }
])

const featuredProjects = ref<Project[]>([
  {
    id: 1,
    title: 'Site web pour Dentiste',
    description: 'Une application e-commerce complète avec panier, paiement et gestion des commandes.',
    image: '/projects/pts.jpg',
    technologies: ['.NET 8', 'Vue Js', 'MySQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Site web pour Pâtisseries  ',
    description: 'Tableau de bord interactif pour visualiser des données analytiques en temps réel.',
    image: '/projects/Patisserie.jpg',
    technologies: ['Vue Js', 'TypeScript', 'TailwindCss'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Platforme de Recrutement',
    description: 'Platforme de recrutement intélligente permet d automatiser le processus de recrutement avec un analyse automatique des C  vs.',
    image: '/projects/pfe.jpg',
    technologies: ['.NET 8', 'Vue Js', 'MsSQL', 'Docker'],
    githubUrl: '#'
  }
])
</script>