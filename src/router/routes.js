
const routes = [
  {
    path: '/',
    component: () => import('src/pages/Index.vue'),
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
