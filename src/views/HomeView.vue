<template>
  <div>
    <AppHeader />
    
    <!-- Hero Section -->
 <section id="home" class="relative py-20 lg:py-32 overflow-hidden bg-gray-50">
    <!-- Éléments décoratifs -->
    <div class="absolute top-20 left-1/4 w-32 h-32 bg-teal-100 rounded-full opacity-20 animate-float"></div>
    <div class="absolute bottom-20 right-1/4 w-24 h-24 bg-teal-200 rounded-full opacity-30 animate-float" style="animation-delay: 1s;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <!-- Avatar ou logo -->
        <div class="mb-12 flex justify-center">
          <div class="relative">
            <div class="w-32 h-32 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border border-gray-200">
              <div class="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <div class="text-white text-3xl">👨‍💻</div>
              </div>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-teal-400 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-teal-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fadeInUp">
            <span class="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent">
              Achraf Zarroug
            </span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-700 mb-4 animate-fadeInUp" style="animation-delay: 0.2s;">
            Ingénieur en Génie Logiciel
          </p>

          <p class="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style="animation-delay: 0.4s;">
            Développeur passionné spécialisé dans les applications web modernes, avec une attention particulière à la qualité du code, la performance et l'expérience utilisateur.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style="animation-delay: 0.6s;">
            <RouterLink
              to="/projects"
              class="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              🚀 Voir mes projets
              <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </RouterLink>

            <RouterLink
              to="/contact"
              class="group border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center"
            >
              📩 Me contacter
            </RouterLink>
          </div>
        </div>

        <!-- Statistiques -->
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="text-center animate-fadeInUp" style="animation-delay: 0.8s;">
            <div class="text-3xl font-bold text-teal-600 mb-2">+5</div>
            <div class="text-sm text-gray-500">Années d'expérience</div>
          </div>
          <div class="text-center animate-fadeInUp" style="animation-delay: 1s;">
            <div class="text-3xl font-bold text-teal-600 mb-2">20+</div>
            <div class="text-sm text-gray-500">Projets livrés</div>
          </div>
          <div class="text-center animate-fadeInUp" style="animation-delay: 1.2s;">
            <div class="text-3xl font-bold text-teal-600 mb-2">10+</div>
            <div class="text-sm text-gray-500">Stacks maîtrisés</div>
          </div>
          <div class="text-center animate-fadeInUp" style="animation-delay: 1.4s;">
            <div class="text-3xl font-bold text-teal-600 mb-2">100%</div>
            <div class="text-sm text-gray-500">Clients satisfaits</div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- Skills Section -->
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
      <div
        v-for="category in skills"
        :key="category.title"
        class="text-center"
      >
        <div
          class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">{{ category.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ category.title }}
          </h3>
          <div class="flex flex-wrap gap-2 justify-center">
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full"
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
            class="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 
            hover:to-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl 
            transform hover:-translate-y-0.5"
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
    liveUrl: 'https://dr-achraf-zarroug.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/dentiste-frontend'
  },
  {
    id: 2,
    title: 'Site web pour Pâtisseries  ',
    description: 'Tableau de bord interactif pour visualiser des données analytiques en temps réel.',
    image: '/projects/Patisserie.jpg',
    technologies: ['Vue Js', 'TypeScript', 'TailwindCss'],
    liveUrl: 'https://patisserie-pink.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/patisserie-front'
  },
  {
    id: 3,
    title: 'Platforme de Recrutement',
    description: 'Platforme de recrutement intélligente permet d automatiser le processus de recrutement avec un analyse automatique des C  vs.',
    image: '/projects/pfe.jpg',
    technologies: ['.NET 8', 'Vue Js', 'MsSQL', 'Docker'],
    liveUrl: 'https://recrutement-smart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/recrutement-frontend'
  }
])
</script>