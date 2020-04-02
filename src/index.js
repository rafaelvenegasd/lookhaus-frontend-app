import Vue from 'vue'
import axios from 'axios';
import router from './routes/index.js'
import App from './views/main.vue'
import './assets/styles/sass/impoter.scss';
import VuePaginate from 'vue-paginate';

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({ el: '#app', router, render: h => h(App) })

