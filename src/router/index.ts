// ! File Purpose:
// ? Declaring which views correspond to which paths
// ? Views being used on every page imported at top
// ? Views only used on a single page imported right in route

import { createRouter, createWebHistory } from 'vue-router'
import PokeDexFace from '../views/PokeDexFace.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokeDexFace
    },
    {
      path: '/open',
      name: 'open',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PokeDexOpen.vue')
    }
  ]
})

export default router
