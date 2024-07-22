import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('@/pages/List'),
    },
    {
      path: '/show/:id(\\d+)',
      name: 'show',
      component: () => import('@/pages/Show'),
      children: [
        {
          path: '',
          name: 'details',
          component: () => import('@/pages/Details'),
        },
        {
          path: 'season/:seasonId(\\d+)',
          name: 'season',
          component: () => import('@/pages/Season'),
        },
      ],
    },
    // Redirect all other routes to the list
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'list' },
    }
  ]
});
