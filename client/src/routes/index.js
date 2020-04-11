import Vue from 'vue'
import getDevice from '../DeviceService'
import VueRouter from 'vue-router'
import DesktopHome from '../views/desktop/Home.vue'
import DesktopLogin from '../views/desktop/Login.vue'
import MobileHome from '../views/mobile/Home.vue'

//Decide if mount a device or a mobile view
var routes = [];

getDevice((err, data) =>{
    if(err){
      console.error(err)
    } 
    else{
        if( data == 'desktop'){
            routes.push({path: '/', name: "DesktopHome", component: DesktopHome })
            routes.push({path: '/login', name: "DesktopLogin", component: DesktopLogin })
        }else{
            routes.push({ path: '/', name: "MobileHome", component: MobileHome })
        }
    return routes;
    }
  });

//Vue router
Vue.use(VueRouter);
const router = new VueRouter({mode: 'history', routes: routes})

export default router;