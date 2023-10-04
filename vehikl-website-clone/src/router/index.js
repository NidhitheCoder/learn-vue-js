import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HowWeWork from '../views/HowWeWork.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/how-we-work',
    name: 'how we work',
    component: HowWeWork
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
