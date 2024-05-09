import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductView from "@/views/ProductView.vue";
import CardPage from "@/views/CardPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/product/:id',
    name: 'product-item',
    component: ProductView
  },
  {
    path: '/card',
    name: 'card',
    component: CardPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
