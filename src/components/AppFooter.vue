<template>
  <footer class="relative z-10 border-t border-white/10 bg-slate-950/90 text-slate-400 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <div class="hidden">
        
        <!-- Brand & Description -->
        <div class="md:col-span-5 space-y-4">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono text-sm tracking-wider">
                AZ
              </div>
            </div>
            <div>
              <span class="text-lg font-bold text-white tracking-tight">{{ name }}</span>
              <p class="text-xs text-indigo-400 font-mono">Ingénieur Logiciel Full-Stack</p>
            </div>
          </div>

          <p class="text-slate-400 text-sm max-w-md leading-relaxed">
            Conception & développement de solutions logicielles d'entreprise robustes, scalables et orientées haute performance (.NET 8 & Vue.js 3).
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-indigo-300 border border-slate-800">.NET 8</span>
            <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-emerald-300 border border-slate-800">Vue.js 3</span>
            <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-cyan-300 border border-slate-800">TypeScript</span>
            <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-purple-300 border border-slate-800">Docker</span>
            <span class="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900 text-blue-300 border border-slate-800">Clean Architecture</span>
          </div>
        </div>

        <!-- Quick Navigation -->
        <div class="md:col-span-3">
          <h3 class="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
            Navigation Rapide
          </h3>
          <ul class="space-y-2.5 text-sm">
            <li v-for="item in navigation" :key="item.name">
              <a
                :href="item.href"
                class="hover:text-indigo-400 transition-colors flex items-center gap-1.5 group"
              >
                <span class="text-slate-600 group-hover:text-indigo-400 transition-colors font-mono">›</span>
                <span>{{ item.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact & Direct Actions -->
        <div class="md:col-span-4 space-y-4">
          <h3 class="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-4">
            Contact Direct
          </h3>
          
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a :href="'mailto:' + email" class="hover:text-indigo-400 transition-colors truncate">
                {{ email }}
              </a>
            </li>

            <li class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>{{ phone }}</span>
            </li>

            <li class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Tunis, Tunisie (Mobile / Remote)</span>
            </li>
          </ul>

          <!-- Socials -->
          <div class="flex items-center gap-3 pt-2">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-slate-900 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-800 hover:border-indigo-500/50 shadow-sm"
              :aria-label="social.name"
            >
              <svg v-if="social.name === 'LinkedIn'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <svg v-else-if="social.name === 'GitHub'" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div class="portfolio-footer-main">
        <div class="portfolio-footer-thanks">
          <h2>Merci d’avoir consulté<br />mon portfolio</h2>
          <span aria-hidden="true"></span>
        </div>

        <div class="portfolio-footer-details">
          <section>
            <h3>Réseaux</h3>
            <div class="portfolio-footer-socials">
              <a v-for="social in socialLinks" :key="social.name" :href="social.href" :aria-label="social.name" :title="social.name" target="_blank" rel="noopener noreferrer">
                <svg v-if="social.name === 'GitHub'" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.82.58A12 12 0 0 0 12 0Z" /></svg>
                <svg v-else viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0Z" /></svg>
              </a>
              <a href="mailto:achraf.zarroug@hotmail.com" aria-label="E-mail" title="E-mail"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
            </div>
          </section>

          <section>
            <h3>Me contacter</h3>
            <ul class="portfolio-footer-contact-list">
              <li><span class="portfolio-footer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg></span><span>Tunis, Tunisie</span></li>
              <li><span class="portfolio-footer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .95.68l1.5 4.5a1 1 0 0 1-.5 1.21l-2.26 1.13a11 11 0 0 0 5.52 5.52l1.13-2.26a1 1 0 0 1 1.21-.5l4.5 1.5a1 1 0 0 1 .68.95V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6Z"/></svg></span><a href="tel:+21624231240">{{ phone }}</a></li>
              <li><span class="portfolio-footer-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span><a :href="'mailto:' + email">{{ email }}</a></li>
            </ul>
          </section>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="hidden mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <p>&copy; {{ currentYear }} {{ name }}. Tous droits réservés.</p>
        
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Conçu avec Vue 3 & .NET Mindset
          </span>

          <!-- Back to Top Button -->
          <button
            @click="scrollToTop"
            class="flex items-center gap-1 text-slate-400 hover:text-indigo-400 transition-colors p-1"
            title="Retour en haut"
          >
            <span>Haut</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>

      <div class="portfolio-footer-bottom">
        <p>&copy; {{ currentYear }} {{ name }}. Tous droits réservés.</p>
        <p>Créé avec <span aria-label="amour">♥</span> en utilisant <strong>Vue.js</strong></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const name = 'Achraf Zarroug'
const email = 'achraf.zarroug@hotmail.com'
const phone = '+216 24 231 240'

const navigation = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Formation', href: '#education' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/achraf-zarroug/' },
  { name: 'GitHub', href: 'https://github.com/achraf1934' }
]

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
