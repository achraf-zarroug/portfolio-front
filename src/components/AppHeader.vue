<template>
  <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <RouterLink to="/" class="flex-shrink-0 flex items-center group">
            <div class="relative">
              <div class="h-12 w-12 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div class="text-white text-xl">                 
                   <img 
                    src="/moi.ico" 
                    alt="Photo de profil"
                    class="h-10 w-10 rounded-full object-cover"
                  /></div>
              </div>
              <div class="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div class="ml-3">
              <span class="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                 {{ name }}
              </span>
              <p class="text-sm text-gray-500 -mt-1">Software Engineer | Full-Stack Developer</p>
              
              <p class="text-sm text-gray-500 -mt-1">Open to New Opportunities</p>
            </div>
          </RouterLink>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              :class="{ 'text-blue-600 font-semibold': $route.path === item.href }"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
 <div class="hidden md:block">
          <button 
            class="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
           <router-link to="/contact">Contact</router-link> 
          </button>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium transition-colors"
            :class="{ 'text-blue-600 font-semibold': $route.path === item.href }"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppHeader',
  components: {
    RouterLink
  },
  setup() {
    const name = ref('Achraf Zarroug')
    const mobileMenuOpen = ref(false)
    const route = useRoute()

    const navigation = ref([
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/about' },
      { name: 'Projets', href: '/projects' },
    ])

    return {
      name,
      mobileMenuOpen,
      navigation,
      $route: route
    }
  }
})
</script>
