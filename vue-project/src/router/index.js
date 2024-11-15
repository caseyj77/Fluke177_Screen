import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, //if the compnent is alredy created it will import it automaticly (see above import statement.)
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'), // lazy loading of the view
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginForm.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/components/ProjectsTable.vue'),
    },
    {
      path: '/multimeter',
      name: 'multimeter',
      component: () => import('@/views/MultimeterView.vue'),
    },
    {
      path: '/schematic',
      name: 'schematic',
      component: () => import('@/views/SchematicMakerView.vue'),
    }
  ],
})

export default router
