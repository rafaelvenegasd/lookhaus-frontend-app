// import Vue from 'vue'
// import getDevice from '../../DeviceService'
// import VueRouter from 'vue-router'
// import AppDesktop from '../AppDesktop.vue'
// import AppMobile from '../AppMobile.vue'
// import DesktopHome from '../views/desktop/Home.vue'
// import DesktopLogin from '../views/desktop/Login.vue'
// import MobileHome from '../views/mobile/Home.vue'

// //Decide if mount a device or a mobile view
// getDevice((err, data) =>{
//     if(err){
//       console.error(err)
//     }
//     else{
//         if( data == 'desktop'){
//             var routes = [{path: '/', name: "DesktopHome", component: DesktopHome }, {path: '/login', name: "DesktopLogin", component: DesktopLogin }];
//             Vue.use(VueRouter);
//             const router = new VueRouter({mode: 'history', routes})
//             new Vue({ el: '#app', router, render: h => h(AppDesktop)})
//         }else{
//             var routes = [{ path: '/', name: "MobileHome", component: MobileHome }];
//             Vue.use(VueRouter);
//             const router = new VueRouter({mode: 'history', routes})
//             new Vue({ el: '#app', router, render: h => h(AppMobile)})
//         }
//     }
//   });





import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router

