import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import HowWeWork from '../views/HowWeWork.vue';
import ContactView from '../views/ContactView.vue';
import HiringView from '../views/HiringView.vue';
import TeamView from '../views/TeamView.vue';
import ROUTES from '@/constants/routes';

const routes = [
  {
    path: ROUTES.Home.path,
    name: ROUTES.Home.name,
    component: HomeView
  },
  {
    path: ROUTES.HowWeWork.path,
    name: ROUTES.HowWeWork.name,
    component: HowWeWork
  },
  {
    path: ROUTES.Team.path,
    name: ROUTES.Team.name,
    component: TeamView
  },
  {
    path: ROUTES.Hiring.path,
    name: ROUTES.Hiring.name,
    component: HiringView
  },
  {
    path: ROUTES.Contact.path,
    name: ROUTES.Contact.name,
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
