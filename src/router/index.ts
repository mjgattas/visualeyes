import { createRouter, createWebHistory } from 'vue-router'
import Visualizer1 from '@/components/Visualizer1.vue'
import Visualizer2 from '@/components/Visualizer2.vue'
import Visualizer3 from '@/components/Visualizer3.vue'

const routes = [
  {
    path: '/visualizer-1',
    name: 'Visualizer-1',
    component: Visualizer1
  },
  {
    path: '/visualizer-2',
    name: 'Visualizer-2',
    component: Visualizer2
  },
  {
    path: '/visualizer-3',
    name: 'Visualizer-3',
    component: Visualizer3
  }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })

  export default router;