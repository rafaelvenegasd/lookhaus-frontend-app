import Vue from 'vue'
import axios from 'axios';
import './routes/index'
import './assets/styles/web/importer.css';
import './assets/styles/mobile/importer.css';
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;


