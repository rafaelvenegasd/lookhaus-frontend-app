import VueRouter from 'vue-router'
import Vue from 'vue'
import DeviceService from '../DeviceService'
import DesktopHome from '../views/desktop/Home.vue'
import MobileHome from '../views/mobile/Home.vue'

//Decide if mount a device or a mobile view
const deviceDetector = new DeviceService('http://localhost:3000/device/');
const routes = [];
deviceDetector.getDevice((err, data) =>{
    if(err){console.error(err)} 
    else{
        if( data == 'desktop'){
            routes.push({path: '/', name: "DesktopHome", component: DesktopHome })
            console.log(routes)
        }else{
            routes.push({ path: '/', name: "MobileHome", component: MobileHome })
            console.log(routes)
        }
    }
});


Vue.use(VueRouter);
  
const router = new VueRouter({
    mode: 'history',
    routes
})

console.log(router);

export default router