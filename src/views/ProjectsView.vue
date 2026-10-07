<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <AppHeader />
    
    <main class="py-16 lg:py-20 flex-grow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Section -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Portfolio & Realisations</span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Mes Projets
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Découvrez une sélection de mes réalisations web d'entreprise, applications full-stack et projets sur mesure.
          </p>
        </div>

        <!-- Filter Section -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            class="px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
            :class="[
              selectedCategory === category 
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
            ]"
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
        <div v-if="filteredProjects.length === 0" class="text-center py-16 bg-white rounded-2xl border border-slate-200/80 my-8">
          <svg class="w-16 h-16 text-slate-300 mx-auto mb-4 stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p class="text-slate-600 font-semibold text-lg">Aucun projet trouvé dans cette catégorie</p>
          <button @click="selectedCategory = 'Tous'" class="mt-4 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            Réinitialiser les filtres
          </button>
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

const categories = ['Tous', 'Full-Stack', 'Web Frontend', 'Enterprise & API', 'Projet Personnel']

const projects = ref<Project[]>([
  {
    id: 1,
    title: 'Site Web GMS57 - Garage Automobile',
    description: 'Plateforme d\'entreprise complète pour Group Motors Sports (GMS57). Consultation des services mécaniques, devis rapide et réservation par WhatsApp/Email.',
    image: '/projects/gms57.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'MySQL', 'Docker', 'Tailwind CSS'],
    category: 'Full-Stack',
    liveUrl: 'https://www.gms57.fr/',
    githubUrl: 'https://github.com/achraf-zarroug/gms57'
  },
  {
    id: 2,
    title: 'Plateforme de Recrutement Intelligent (PFE)',
    description: 'Application de gestion et automatisation des candidatures : extraction IA de compétences depuis CVs PDF, scoring de correspondance et workflow RH.',
    image: '/projects/pfe.jpg',
    technologies: ['.NET 8', 'Vue.js 3', 'Python (FastAPI)', 'MsSQL', 'Docker'],
    category: 'Full-Stack',
    liveUrl: 'https://recrutement-smart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/recrutement-frontend'
  },
  {
    id: 3,
    title: 'Site Web ClesPro - Serrurier Automobile',
    description: 'Site vitrine à forte conversion pour service de reproduction de clés et dépannage auto. SEO local poussé et intégration contact direct.',
    image: '/projects/clespro.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Web Frontend',
    liveUrl: 'https://clespro.fr',
    githubUrl: 'https://github.com/achraf-zarroug/clespro'
  },
  {
    id: 4,
    title: 'Plateforme Web Cabinet Dentaire',
    description: 'Site professionnel pour cabinet de soins dentaires avec système de demande de rendez-vous en ligne et gestion des prestations médicales.',
    image: '/projects/dentiste.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'EmailJS'],
    category: 'Web Frontend',
    liveUrl: 'https://dentiste-frontend.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/dentiste-frontend'
  },
  {
    id: 5,
    title: 'Site Vitrine Pâtisserie Artisanale',
    description: 'Site web gourmand et attractif pour pâtisserie avec catalogue interactif de créations, réservation de commandes et formulaire de contact.',
    image: '/projects/Patisserie.jpg',
    technologies: ['Vue.js 3', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    category: 'Web Frontend',
    liveUrl: 'https://patisserie-pink.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/patisserie-front'
  },
  {
    id: 6,
    title: 'GeoTrack — Gestion & Recherche Géographique',
    description: 'Application web personnelle de gestion et de recherche géographique. Visualisation de données cartographiques, recherche de lieux, tracking de positions et gestion d\'entités géolocalisées sur carte interactive.',
    image: '/projects/geotrack.jpg',
    technologies: ['React js', 'TypeScript', 'Leaflet.js', 'OpenStreetMap', 'PHP 8 ', 'MySQL'],
    category: 'Projet Personnel',
    liveUrl: 'https://geotrack-swart.vercel.app/',
    githubUrl: 'https://github.com/achraf-zarroug/geotrack'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') return projects.value
  return projects.value.filter(p => p.category === selectedCategory.value)
})
</script>
