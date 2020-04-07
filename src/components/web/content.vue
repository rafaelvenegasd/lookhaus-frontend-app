<template>
  <div>
    <paginate ref="paginator" name = "items" :list = "items" :per = "3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Current Price</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="item in paginated('items')" :key="item.item_id">
            <td>{{item.item_name}}</td>
          </tr> -->
        </tbody>
      </table>
      </paginate>
      <paginate-links for="items" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
      </paginate-links>
    
  </div>
</template>

<script>
import axios from 'axios'
import EventBus from '../assets/js/event-bus'
import {getContentFromApi} from '../../common/js/axios-service'
export default {
  name: "Content",
  data() {
    return {
      paginate:['items'],
      items: [], name: ''
    };
  },
  mounted() {
    getContentFromApi((err, data) =>{
      if(err){
        console.error(err)
      } 
      else{
        // this.items = data;
        console.log(data);
      }
    });
  }, 
  methods:{
    getDetails(name, id)
    {
      EventBus.$emit('searching', name);
      EventBus.$emit('chart', id);
    }
  }
}
</script>

