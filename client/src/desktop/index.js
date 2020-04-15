import Vue from 'vue'
import axios from 'axios';
import router from './routes/index'
import './assets/styles/importer.css';
import VuePaginate from 'vue-paginate'
import 'bootstrap'
import App from './App.vue'

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;



new Vue({ el: '#app', router, render: h => h(App)})