import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NaturesView from '@/views/Natures/NaturesView.vue'
import PokedexView from '@/views/Pokedex/PokedexView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/natures',
      name: 'natures',
      component: NaturesView,
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: PokedexView,
    }
  ]
})

export default router
