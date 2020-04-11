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


function loadApp(r) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
            new Vue({ el: '#app', r, render: h => h(App) })
        );
      }, 2000);
    });
  }

  async function asyncCall(r) {
    console.log(router);
    const result = await loadApp(r);
    console.log(result);
    // expected output: 'resolved'
  }
  
  asyncCall(router);



