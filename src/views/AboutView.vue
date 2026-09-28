<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <AppHeader />
    
    <main class="py-16 lg:py-20 flex-grow">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header / Hero Section -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Profil Professionnel</span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            À propos de moi
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Ingénieur Software passionné par la conception de systèmes d'information robustes et d'expériences web captivantes.
          </p>
        </div>

        <!-- Profile Overview Card -->
        <div class="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-sm mb-16">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-4 flex justify-center">
              <div class="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-tr from-indigo-600 to-indigo-400 p-1 shadow-xl">
                <img src="/moi.ico" alt="Achraf Zarroug" class="w-full h-full object-cover rounded-[14px] bg-slate-900" />
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <div class="flex items-center gap-3">
                <h2 class="text-2xl font-bold text-slate-900">Achraf Zarroug</h2>
                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Ingénieur Génie Logiciel
                </span>
              </div>

              <p class="text-slate-600 leading-relaxed">
                Diplômé en Génie Logiciel de l'ESPRIT (Tunis), je cumule {{ yearsOfExperience }} ans d'expérience dans la création de solutions logicielle full-stack. Je combine une approche rigoureuse côté backend (.NET 8, Clean Architecture, APIs REST) avec une sensibilité UX élevée en frontend (Vue.js 3, TypeScript).
              </p>

              <p class="text-slate-600 leading-relaxed">
                Attentif à la qualité du code, aux bonnes pratiques (SOLID, CI/CD, Containerisation Docker) et au respect des délais en environnement agile.
              </p>

              <div class="pt-2 flex flex-wrap gap-6 text-sm text-slate-600 border-t border-slate-100">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Tunis, Tunisie (Mobile / Remote)</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:achraf.zarroug@hotmail.com" class="hover:text-indigo-600 transition-colors">achraf.zarroug@hotmail.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Technical Skills Badges Grid -->
        <section class="mb-16">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Compétences Techniques
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="category in skillCategories" :key="category.name" class="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
              <h3 class="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>{{ category.name }}</span>
                <span class="text-xs font-normal text-slate-400">{{ category.skills.length }} technologies</span>
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in category.skills"
                  :key="skill"
                  class="px-3 py-1.5 bg-slate-100 text-slate-800 text-sm font-semibold rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors border border-slate-200/60"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience Timeline Section -->
        <section class="mb-16">
          <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Expérience Professionnelle
          </h2>

          <div class="space-y-6">
            <div 
              v-for="job in experience" 
              :key="job.id" 
              class="bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-xs relative overflow-hidden group hover:border-indigo-200 transition-all duration-300"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{{ job.title }}</h3>
                  <span class="text-indigo-600 font-semibold text-sm">{{ job.company }}</span>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 w-fit">
                  {{ job.period }}
                </span>
              </div>
              <p class="text-slate-600 text-sm leading-relaxed mb-4">{{ job.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in job.technologies"
                  :key="tech"
                  class="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md border border-indigo-100"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </section>

        <!-- Education Section -->
        <section>
          <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            Formation & Diplômes
          </h2>

          <div class="space-y-4">
            <div v-for="edu in education" :key="edu.id" class="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 class="text-lg font-bold text-slate-900">{{ edu.degree }}</h3>
                <span class="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md w-fit">{{ edu.year }}</span>
              </div>
              <p class="text-indigo-600 text-sm font-semibold mb-2">{{ edu.school }}</p>
              <p class="text-slate-600 text-sm">{{ edu.description }}</p>
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

interface SkillCategory {
  name: string
  skills: string[]
}

const yearsOfExperience = computed(() => {
  const startYear = 2023
  const currentYear = new Date().getFullYear()
  return currentYear - startYear
})

const experience = ref<Experience[]>([
  {
    id: 1,
    title: 'Développeur Full-Stack .NET & Vue.js',
    company: 'Freelance – Agence de voyage',
    period: '2024',
    description: `Création d’un site complet pour une agence de voyage avec gestion des offres, authentification, réservation et formulaire de contact. Intégration frontend responsive avec Vue.js 3 et backend solide en .NET 8.`,
    technologies: ['.NET 8', 'Vue.js 3', 'TypeScript', 'Tailwind CSS', 'SQL Server', 'Axios']
  },
  {
    id: 2,
    title: 'Développeur Frontend – Landing page & Réservation',
    company: 'Freelance – Cabinet dentaire',
    period: '2024',
    description: `Développement d’un site vitrine professionnel pour un cabinet dentaire avec prise de rendez-vous en ligne, formulaire de contact et SEO local optimisé.`,
    technologies: ['Vue.js 3', 'Tailwind CSS', 'TypeScript', 'EmailJS', 'SEO', 'Responsive design']
  },
  {
    id: 3,
    title: 'Développeur Frontend – Site Pâtisserie Artisanale',
    company: 'Freelance – Projet vitrine',
    period: '2024',
    description: `Réalisation d’un site web attractif avec une interface intuitive et responsive. Catalogue produit interactif et formulaire de contact/réservation.`,
    technologies: ['Vue.js 3', 'Tailwind CSS', 'TypeScript', 'Formspree']
  },
  {
    id: 4,
    title: 'Stage PFE – Développeur Full-Stack',
    company: 'NeoLedge',
    period: '2023',
    description: `Conception d’une plateforme d’automatisation du recrutement : parsing et extraction de compétences depuis les CVs, scoring de correspondance candidates, et génération de rapports automatisés.`,
    technologies: ['.NET Core', 'Vue.js', 'Python (FastAPI)', 'Entity Framework', 'Similarity Matching', 'Docker']
  }
])

const education = ref<Education[]>([
  {
    id: 1,
    degree: 'Diplôme d’Ingénieur en Génie Logiciel',
    school: 'ESPRIT - École Supérieure Privée d’Ingénierie et de Technologie',
    year: '2018 - 2024',
    description: `Spécialisation en ingénierie logicielle, architecture d'applications web, bases de données et gestion de projets agiles.`
  },
  {
    id: 2,
    degree: 'Cycle Préparatoire Mathématiques - Physique',
    school: 'IPEIT - Institut Préparatoire aux Études d’Ingénieurs de Tunis',
    year: '2016 - 2017',
    description: `Formation académique intensive en mathématiques avancées, algorithmique et physique.`
  },
  {
    id: 3,
    degree: 'Baccalauréat – Sciences Expérimentales',
    school: 'Lycée Technique de Zarzis',
    year: '2015',
    description: `Formation secondaire scientifique et technologique.`
  }
])

const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Frontend Development',
    skills: ['Vue.js 3', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'Vite', 'Pinia / Vuex', 'Axios']
  },
  {
    name: 'Backend Development',
    skills: ['.NET 8 / C#', 'ASP.NET Core REST API', 'Entity Framework Core', 'Python (FastAPI)', 'Clean Architecture', 'JWT Authentication']
  },
  {
    name: 'Databases & Cloud / DevOps',
    skills: ['SQL Server', 'MySQL', 'MongoDB', 'Docker', 'Git / GitHub', 'Postman', 'Vercel Deployment']
  },
  {
    name: 'Soft Skills & Méthodes',
    skills: ['Agile / Scrum', 'Résolution de problèmes', 'Esprit d\'équipe', 'Communication', 'Autonomie']
  }
])
</script>