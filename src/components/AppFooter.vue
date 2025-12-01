<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ name }}</h3>
          <p class="text-gray-300">
            Ingénieur en génie logiciel passionné par le développement d'applications innovantes.
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.name">
              <RouterLink
                :to="item.href"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <div class="space-y-2 text-gray-300">
            <p>{{ email }}</p>
            <p>{{ phone }}</p>
            <div class="flex space-x-4 mt-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.href"
                class="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">{{ social.name }}</span>
                <component :is="social.icon" class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; {{ currentYear }} {{ name }}. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'AppFooter',
  components: {
    RouterLink
  },
  setup() {
    const name = 'Achraf ZARROUG'
    const email = 'achraf.zarroug@hotmail.com'
    const phone = '+216 24 231 240'

    const navigation = [
      { name: 'Accueil', href: '/' },
      { name: 'À propos', href: '/about' },
      { name: 'Projets', href: '/projects' },
      { name: 'Contact', href: '/contact' }
    ]

    const socialLinks = [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/achraf-zarroug/', icon: 'linkedin' },
      { name: 'GitHub', href: 'https://github.com/achraf-zarroug', icon: 'github' },
      { name: 'Twitter', href: '#', icon: 'twitter' }
    ]

    const currentYear = computed(() => new Date().getFullYear())

    return {
      name,
      email,
      phone,
      navigation,
      socialLinks,
      currentYear
    }
  }
})
</script>
