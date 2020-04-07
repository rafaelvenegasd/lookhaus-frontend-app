import Vue from 'vue'
import axios from 'axios';
import router from './routes/web/index.js'
import App from './views/web/main.vue'
// import message from './device-detector'
// import './assets/styles/importer.scss';  
import VuePaginate from 'vue-paginate'

// console.log(message);
Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({ el: '#app', router, render: h => h(App) })