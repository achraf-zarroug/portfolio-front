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
            <div class="w-52 h-52 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border border-gray-200">
              <div class="w-40 h-40 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                <div class="text-white text-3xl">
                 <img 
                  src="/moi.ico" 
                  alt="Photo de profil"
                  class="h-42 w-42 rounded-full object-cover"
                />
                </div>
              </div>
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-teal-400 rounded-full animate-bounce"></div>
            <div class="absolute -bottom-2 -left-2 w-6 h-6 bg-teal-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div class="max-w-4xl mx-auto">
          <h1 class="text-3xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fadeInUp">
            <span class="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 bg-clip-text text-transparent animate-pulse">
             Achraf
            </span>
            <span class=" text-gray-600">
               ZARROUG
            </span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-700 mb-4 animate-fadeInUp" style="animation-delay: 0.2s;">
            Ingénieur en Génie Logiciel
          </p>

          <p class="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style="animation-delay: 0.4s;">
            Ingénieur en informatique spécialisé dans les applications web modernes, avec une attention particulière à la qualité du code, la performance et l'expérience utilisateur.
          </p>

          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp" style="animation-delay: 0.6s;">
            <RouterLink
              to="/projects"
              class="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
            >
              📩 Me contacter
              <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </RouterLink>

            
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
            to="/contact"
            class="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 
            hover:to-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl 
            transform hover:-translate-y-0.5"
          >
           📩 Contactez-moi
              <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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



interface Project {
  id: number
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}



const featuredProjects = ref<Project[]>([
  {
    id: 1,
    title: 'Site web pou un garage mécanicique',
    description: 'Site web de GMS57 (Group Motors Sports) avec réservation whatsapp, emails et consultation des différentes services.',
    image: '/projects/gms57.jpg',
    technologies: ['.NET 8', 'Vue Js', 'MySQL', 'Docker'],
    liveUrl: 'https://www.gms57.fr/',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Site web pour un sérrurier auto  ',
    description: 'Site web pour réparation  reproduction et dépannage auto , avec réservation.',
    image: '/projects/clespro.jpg',
    technologies: ['Vue Js', 'TypeScript', 'TailwindCss'],
    liveUrl: 'https://clespro.fr',
    githubUrl: '#'
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