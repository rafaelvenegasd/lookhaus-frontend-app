import Vue from 'vue'
import axios from 'axios';
import router from './routes/index.js'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/web/importer.css';
import './assets/styles/mobile/importer.css';
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({ el: '#app', router, render: h => h(App) })
