<template>
  <div>
    <AppHeader />
    
    <main class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Hero Section -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations et projets personnels
          </p>
        </div>

        <!-- Filter Section -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-6 py-2 rounded-full font-medium transition-colors"
            :class="selectedCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p class="text-gray-500 text-lg">Aucun projet trouvé pour cette catégorie</p>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import ProjectCard from '../components/ProjectCard.vue'

interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  category: string
  liveUrl?: string
  githubUrl?: string
}

const selectedCategory = ref('Tous')

const categories = ['Tous', 'Web', 'Mobile', 'API', 'Desktop']

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Application E-commerce',
    description: 'Une application e-commerce complète avec panier, paiement Stripe, gestion des commandes et interface d\'administration.',
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Tableau de bord interactif pour visualiser des données analytiques en temps réel avec graphiques et métriques.',
    technologies: ['React', 'TypeScript', 'Chart.js', 'Express', 'MongoDB'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'API REST Microservices',
    description: 'Architecture microservices avec API RESTful, authentification JWT, documentation Swagger et tests automatisés.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis'],
    category: 'API',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Application Mobile Todo',
    description: 'Application mobile de gestion de tâches avec synchronisation cloud et notifications push.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'AsyncStorage'],
    category: 'Mobile',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'Système de Gestion CRM',
    description: 'Système CRM complet pour la gestion des clients, leads et opportunités commerciales.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Application Desktop Electron',
    description: 'Application desktop cross-platform pour la gestion de fichiers et synchronisation cloud.',
    technologies: ['Electron', 'Vue.js', 'Node.js', 'SQLite'],
    category: 'Desktop',
    githubUrl: '#'
  },
  {
    id: 7,
    title: 'Blog Personnel',
    description: 'Blog personnel avec système de commentaires, recherche et interface d\'administration.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'Web',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 8,
    title: 'API GraphQL',
    description: 'API GraphQL avec authentification, autorisation et intégration de bases de données multiples.',
    technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'MongoDB'],
    category: 'API',
    githubUrl: '#'
  },
  {
    id: 9,
    title: 'App Mobile Fitness',
    description: 'Application mobile de fitness avec suivi d\'entraînements, statistiques et défis communautaires.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    category: 'Mobile',
    githubUrl: '#'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory.value)
})
</script>