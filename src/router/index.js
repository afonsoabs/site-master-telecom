import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Planos from '../views/Planos.vue'
import Sobre from '../views/Sobre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/contatos',
    name: 'Contato',
    component: Contato
  },

  {
    path: '/planos',
    name: 'Planos',
    component: Planos
  },

  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
