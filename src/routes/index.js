import Vue from 'vue'
import App from '../web/views/main.vue'
import Login from '../web/views/login.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login }
]
  
const router = new VueRouter({
    routes
})

export default router