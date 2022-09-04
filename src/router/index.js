import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '/contact',
    name: 'Контакты',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/delivery',
    name: 'Доставка и оплата',
    component: () => import('../views/DeliveryViews.vue')
  },
  {
    path: '/add',
    name: 'Добавить новый товар',
    component: () => import('../views/AddItemView.vue')
  },
  {
    path: '/items',
    component: () => import('../views/CatalogProduct.vue'),
    name: 'Каталок товаров',
    children: [{
      path: '/items',
      component: () => import('../components/BasicComponents/CatalogProduct/CatalogItems.vue')
    },
    {
      path: ':id',
      name: 'Картовка товара',
      component: () => import('@/components/InfoProduct/InformationProduct.vue')
    }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
