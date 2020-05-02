import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import API_Version from '../views/APIVersion.vue'
import About from '../views/About.vue'
import Example from '../views/Example.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/example',
    name: 'Example',
    component: Example
  },
  {
    path: '/API-version',
    name: 'API Version',
    component: API_Version
  }
]

const router = new VueRouter({
  routes
})

export default router
