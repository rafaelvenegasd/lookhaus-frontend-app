import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/web/Home.vue'
// import  DeviceService from "../DeviceService";

// console.log(DeviceService);
Vue.use(VueRouter);

const routes = [
    { path: '/', name: "Home", component: Home },
]
  
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router