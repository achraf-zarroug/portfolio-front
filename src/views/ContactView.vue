<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900">
    <AppHeader />
    
    <main class="py-16 lg:py-20 flex-grow">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Section -->
        <div class="text-center max-w-3xl mx-auto mb-14">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">Discutons de vos projets</span>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Me Contactez
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed">
            Vous avez une opportunité de poste, un projet freelance ou une question technique ? Contactez-moi directement.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <!-- Contact Information & Quick Actions -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
              <h2 class="text-xl font-bold text-slate-900 pb-3 border-b border-slate-100">Coordonnées</h2>
              
              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</h3>
                    <a href="mailto:achraf.zarroug@hotmail.com" class="text-sm font-semibold text-slate-800 hover:text-indigo-600 transition-colors">
                      achraf.zarroug@hotmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Téléphone</h3>
                    <p class="text-sm font-semibold text-slate-800">(+216) 24 231 240</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400">Localisation</h3>
                    <p class="text-sm font-semibold text-slate-800">Tunis, Tunisie (Disponible Remote / Relocalisation)</p>
                  </div>
                </div>
              </div>

              <!-- Direct WhatsApp Button Card -->
              <div class="pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/21624231240?text=Bonjour%20Achraf%2C%20je%20souhaite%20discuter%20d'une%20opportunit%C3%A9"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                  Discuter sur WhatsApp
                </a>
              </div>

              <!-- Social Profiles -->
              <div class="pt-4 border-t border-slate-100">
                <h3 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Réseaux Professionnels</h3>
                <div class="flex gap-3">
                  <a
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 text-xs font-semibold transition-colors border border-slate-200/80 flex items-center gap-2"
                  >
                    {{ social.name }}
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-7">
            <div class="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h2 class="text-xl font-bold text-slate-900 mb-6">Envoyez-moi un message</h2>
              
              <form @submit.prevent="submitForm" class="space-y-5">
                <div>
                  <label for="name" class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    placeholder="Ex: Jean Dupont"
                  />
                </div>

                <div>
                  <label for="email" class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Votre Email *
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    placeholder="jean.dupont@entreprise.com"
                  />
                </div>

                <div>
                  <label for="subject" class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Sujet *
                  </label>
                  <input
                    id="subject"
                    v-model="form.subject"
                    type="text"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    placeholder="Ex: Opportunité poste Full-Stack .NET / Vue.js"
                  />
                </div>

                <div>
                  <label for="message" class="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="form.message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none"
                    placeholder="Décrivez votre projet ou votre proposition de collaboration..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md shadow-indigo-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <template v-if="isSubmitting">
                    <span class="flex items-center justify-center gap-2">
                      <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Envoi en cours...
                    </span>
                  </template>
                  <template v-else>Envoyer le message</template>
                </button>
              </form>

              <!-- Success Notification Toast -->
              <transition name="fade-slide">
                <div
                  v-if="showSuccess"
                  class="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 z-50"
                >
                  <div class="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-bold text-sm">Message envoyé avec succès !</p>
                    <p class="text-xs text-slate-400">Je vous répondrai dans les plus brefs délais.</p>
                  </div>
                </div>
              </transition>

            </div>
          </div>

        </div>

      </div>

      <!-- Floating Mobile WhatsApp Quick Button -->
      <a
        href="https://wa.me/21624231240?text=Bonjour%20Achraf%2C%20je%20souhaite%20discuter%20d'une%20opportunit%C3%A9"
        class="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-lg shadow-emerald-500/30 z-40 transition-transform hover:scale-110 active:scale-95"
        target="_blank"
        rel="noopener noreferrer"
        title="Contacter via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-current" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'
import { ref, reactive } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'

interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

interface SocialLink {
  name: string
  href: string
}

const isSubmitting = ref(false)
const showSuccess = ref(false)

const SERVICE_ID = 'service_w2tdwsm'
const TEMPLATE_ID = 'template_xdbyhhd'
const PUBLIC_KEY = '9Plxf4zjvq1bnkXpl'

const form = reactive<ContactForm>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/achraf-zarroug/' },
  { name: 'GitHub', href: 'https://github.com/achraf-zarroug' },
]

const submitForm = async () => {
  isSubmitting.value = true
  const templateParams = {
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  }
  try {
    const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    console.log('Email envoyé', result);

    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    showSuccess.value = true
    
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

