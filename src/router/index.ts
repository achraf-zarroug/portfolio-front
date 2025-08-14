import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home Page - Achraf zarroug',
        description: 'Home page for achraf zarroug portfolio'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About me Page - Achraf zarroug',
        description: 'about me page for achraf zarroug portfolio'
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Projects - Achraf zarroug',
        description: 'Projects list with live url and github code'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact - Achraf zarroug',
        description: 'Contact achraf zarroug by whatsapp and email'
      }
    }
  ],
   scrollBehavior() {
  return { top: 0 }
}
})
// Mise à jour des meta tags pour chaque route
router.beforeEach((to, _ , next) => {
  document.title = to.meta.title as string || 'Votre Site'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description as string || '')
  }
  next()
})
export default router