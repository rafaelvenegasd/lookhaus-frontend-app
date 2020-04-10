import Vue from 'vue'
import axios from 'axios';
import router from './routes/index.js'
import App from './App.vue'
import DeviceService from './DeviceService'
import 'bootstrap'
import './assets/styles/web/importer.css';
import './assets/styles/mobile/importer.css';
import VuePaginate from 'vue-paginate'

const deviceDetector = new DeviceService('http://localhost:3000/device/');

deviceDetector.getDevice((err, data) =>{
    if(err){console.error(err)} 
    else{console.log(data)}
});

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({ el: '#app', router, render: h => h(App) })
