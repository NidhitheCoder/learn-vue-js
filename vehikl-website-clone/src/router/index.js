import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HowWeWork from '../views/HowWeWork.vue';
import ContactView from '../views/ContactView.vue';
import HiringView from '../views/HiringView.vue';
import TeamView from '../views/TeamView.vue';

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
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/hiring',
    name: 'hiring',
    component: HiringView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
