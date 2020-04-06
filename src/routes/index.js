import Vue from 'vue'
import App from '../views/main.vue'
import Login from '../views/login.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login }
]
  
const router = new VueRouter({
    routes
})

export default router