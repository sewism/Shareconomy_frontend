import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Entry from '@/views/Entry'
import NewEntry from '@/views/NewEntry'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/entry',
    name: 'Entry',
    component: Entry
  },
  {
    path: '/new',
    name: 'NewEntry',
    component: NewEntry
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes

})

export default router
