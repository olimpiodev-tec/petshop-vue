import { createRouter, createWebHistory } from 'vue-router'
import Produtos from './Produtos.vue'
import Detalhe from './Detalhe.vue'


const routes = [
  { path: '/', name: 'Produtos', component: Produtos },
  { path: '/detalhes/:id', name: 'Detalhes', component: Detalhe}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
