import { createRouter, createWebHistory } from 'vue-router'
import DetailView from '../views/DetailView.vue'
import ExploreView from '../views/ExploreView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/explore',
      name: 'movies',
      component: ExploreView,
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView,
    },
  ],
})

export default router
