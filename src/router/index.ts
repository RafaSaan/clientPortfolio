import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";
import HomeView from '../views/HomeView.vue'
import ProjectsRoutes from '../modules/projects/routes'
import curriculumnRoutes from '../modules/curriculum/routes'

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...mainRoutes,
    ...curriculumnRoutes,
    ...ProjectsRoutes,
  ]
})

export default router
