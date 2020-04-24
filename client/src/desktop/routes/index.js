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
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Offices from '../views/Offices.vue'
import Houses from '../views/Houses.vue'
import Detail from '../views/Detail.vue'
import Create from '../views/user-profile/Create.vue'
import Update from '../views/user-profile/Update.vue'
import Profile from '../views/user-profile/Profile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isPublic: true
    }
  },
  {
    path: '/log-in',
    name: 'Login',
    component: Login, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/sign-up',
    name: 'Signup',
    component: Signup, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/offices',
    name: 'Offices',
    component: Offices, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/homes',
    name: 'Houses',
    component: Houses, 
    meta: {
      isPublic: true
    }
  },
  {
    path: '/create-property',
    name: 'Create',
    component: Create
  },
  {
    path: '/update-property',
    name: 'Update',
    component: Update 
  },
  {
    path: '/user-profile',
    name: 'Profile',
    component: Profile, 
  },
  {
    path: '/property-detail',
    name: 'Detail',
    component: Detail, 
    meta: {
      isPublic: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

function existToken() {
  return localStorage.getItem('access_token');
}

if (!(record => record.meta.isPublic) || !existToken()) {
    router.replace({ name: "Home" });
} 


// router.beforeEach((to, from, next) => {
//   if (!(record => record.meta.isPublic) || !Auth.loggedIn()) {
//       next({
//           path: '/login',
//           query: { redirect: to.fullPath }
//       })
//   } else {
//         router.replace({ name: "Home" });
//   }
// });

export default router

