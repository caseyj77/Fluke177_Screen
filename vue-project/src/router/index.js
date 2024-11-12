import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginForm from '@/components/LoginForm.vue'
import ProjectsTable from '@/components/ProjectsTable.vue'
import MultimeterView from '@/views/MultimeterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView //if the compnent is alredy created it will import it automaticly (see above import statement.)
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsTable
    },
    {
      path: '/multimeter',
      name: 'multimeter',
      component: MultimeterView
    }
  ],
})

export default router
