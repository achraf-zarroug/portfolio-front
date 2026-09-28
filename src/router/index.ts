import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Achraf Zarroug | Software Engineer & Full-Stack Developer (.NET / Vue.js)',
        description: 'Portfolio de Achraf Zarroug, Ingénieur en Génie Logiciel & Développeur Full-Stack (.NET 8, Vue.js 3, TypeScript).'
      }
    },
    {
      path: '/about',
      redirect: '/#about'
    },
    {
      path: '/projects',
      redirect: '/#projects'
    },
    {
      path: '/contact',
      redirect: '/#contact'
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

router.beforeEach((to, _, next) => {
  document.title = (to.meta.title as string) || 'Achraf Zarroug | Software Engineer'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description as string)
  }
  next()
})

export default router