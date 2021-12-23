import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Career from '../views/Career.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'
import Education from '../views/Education.vue'
import Contact from '../views/Contact.vue'
import ErrorPage from '../views/ErrorPage.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/career',
    name: 'Career',
    component: Career
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  //redirect
  {
    path: '/',
    redirect: '/about'
  },
  // catch all 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'Error',
    component: ErrorPage,
  }
]

// the router instance that creates our router for the app
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
