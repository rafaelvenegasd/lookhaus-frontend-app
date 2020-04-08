import Vue from 'vue'
import axios from 'axios';
import router from './routes/index.js'
import App from './App.vue'
// import  DeviceService from "./DeviceService";
// import './assets/styles/importer.scss';
import VuePaginate from 'vue-paginate'

// console.log(message);
// Vue.use(VuePaginate);
// Vue.config.productionTip = false;
// Vue.prototype.$http = axios;

// console.log(DeviceService);
new Vue({ el: '#app', router, render: h => h(App) })
