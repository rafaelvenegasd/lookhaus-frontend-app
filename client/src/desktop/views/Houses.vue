<template>
  <div class="container">
    <div class="d-flex justify-content-between ">
        <div class="content-big-box">
            <h4>Find your perfect place to work</h4>

            <VueFaqAccordion :items="myItems"/>
        
            <div class="content-big-box">
                <paginate ref="paginator" name = "items" :list = "items" :per = "4">
                    <div class="d-flex">
                        <div v-for="item in paginated('items')" :key="item.item_id">
                            <div class="card mr-5 ml-2" style="width: 18rem;">
                                <figure class="d-flex text-right m-0">
                                    <div :v-if="item.bargain ">
                                        <button class="btn floating" disabled >○ Bargain</button>
                                    </div>
                                    <img class="card-img-top" :src="item.photos[0]" alt="House Image">  
                                </figure>
                                <div class="card-body">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><h5 class="card-title">{{item.name}}</h5></li>
                                        <li class="list-group-item">
                                            <ul>
                                                <li>Kind: {{item.kind}}</li>
                                                <li>Bathroom: {{item.bathrooms}}</li>
                                                <li>Bedroom: {{item.bedrooms}}</li>
                                            </ul>
                                        </li>
                                        <li class="list-group-item">Dirección</li>
                                        <li class="list-group-item">
                                            <div class="mb-3">
                                                <span>{{item.price}} Euros </span>
                                            </div>
                                            <router-link tag="li" to="/property-detail" exact>
                                                <input type="submit" class="btn" value="Check it out" :id="item._id" v-on:click="checkItOut()">
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </paginate>
                <paginate-links for="items" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
                </paginate-links>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../../event-bus'
import VueFaqAccordion from 'vue-faq-accordion'
import {getPropertiesById} from '../../axios-service'

export default {
  name: 'Houses',
  data(){
    return {
        type: 'home', 
        id: '', 
        paginate:['items'],
        value: 50,
        items: [],
        myItems: [
          {
            title: 'Kind',
            value: `
                <div>
                    <input type="radio" name="kind" id="Private" class="mr-2 btn-radio" checked><label for="Private">Private</label>
                </div>
                <div>
                    <input type="radio" name="kind" id="Coworking" class="mr-2 btn-radio"><label for="Coworking">Co-working</label>
                </div>
                <div>
                    <input type="radio" name="kind" id="Security" class="mr-2 btn-radio"><label for="Security">Security systen</label>
                </div>
            `,
            category: 'kind'
          },
          {
            title: 'Price',
            value: `
                <div class="slidecontainer">
                    <input type="range" >
                    <span v-text="value"></span>
                </div>
            `,
            category: 'Price'
          },
          {
            title: 'Published',
            value: `
                <div>
                    <input type="radio" name="published" id="ago" class="mr-2 btn-radio" checked><label for="ago">48H ago</label>
                </div>
                <div>
                    <input type="radio" name="published" id="week" class="mr-2 btn-radio"><label for="week">Last week</label>
                </div>
                <div>
                    <input type="radio" name="published" id="month" class="mr-2 btn-radio"><label for="month">Last month</label>
                </div>
            `,
            category: 'Published'
          },
          {
            title: 'Others',
            value: `
                <div>
                    <input type="checkbox" name="others" id="op1" class="mr-2 btn-radio" checked><label for="op1">Pets allowed</label>
                </div>
                <div>
                    <input type="checkbox" name="others" id="op2" class="mr-2 btn-radio"><label for="op2">Option 2</label>
                </div>
                <div>
                    <input type="checkbox" name="others" id="op3" class="mr-2 btn-radio"><label for="op3">Option 3</label>
                </div>
            `,
            category: 'Others'
          }

        ]
    }
  },
    components: {
        VueFaqAccordion
  },
  mounted() {
      EventBus.$on('searching', data =>{
          this.items = data;
          console.log(this.items)
      })
  }, 
  methods:{
      checkItOut(){
          getPropertiesById( this.type, this.id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('checkItOut', data);
                }
            })
      }
  }
}
</script>