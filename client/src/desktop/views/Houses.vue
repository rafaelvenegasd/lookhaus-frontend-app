<template>
  <div class="container">
    <div class="d-flex justify-content-between ">
        <div class="content-big-box">
            <h4>Find your perfect place to work</h4>

            <!-- Collapse  -->
            <!-- <VueFaqAccordion :items="myItems"/> -->

            <div id="accordion" class="d-flex accordion">
                <div class="card mr-4">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            +     Kind
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div>  
                            <div>
                                <input type="radio" name="kind" id="Private" class="mr-2 btn-radio" checked><label for="Private">Private</label>
                            </div>
                            <div>
                                <input type="radio" name="kind" id="Coworking" class="mr-2 btn-radio"><label for="Coworking">Co-working</label>
                            </div>
                            <div>
                                <input type="radio" name="kind" id="Security" class="mr-2 btn-radio"><label for="Security">Security systen</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        +     Price
                        </button>
                    </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                        <div class="slidecontainer">
                            <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     Published
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="published" id="ago" class="mr-2 btn-radio" checked><label for="ago">48H ago</label>
                            </div>
                            <div>
                                <input type="radio" name="published" id="week" class="mr-2 btn-radio"><label for="week">Last week</label>
                            </div>
                            <div>
                                <input type="radio" name="published" id="month" class="mr-2 btn-radio"><label for="month">Last month</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        +     Others
                        </button>
                    </h5>
                    </div>
                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="others" id="op1" class="mr-2 btn-radio" checked><label for="op1">Pets allowed</label>
                            </div>
                            <div>
                                <input type="radio" name="others" id="op2" class="mr-2 btn-radio"><label for="op2">Option 2</label>
                            </div>
                            <div>
                                <input type="radio" name="others" id="op3" class="mr-2 btn-radio"><label for="op3">Option 3</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <!-- End Collapse -->

            <div class="content-big-box">
                <!-- <paginate ref="paginator" name = "items" :list = "items" :per = "3"> -->
                    <div v-for="item in items" :key="item.item_id">
                        <div class="d-flex">
                            <div class="card mr-2" style="width: 18rem;">
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
                <!-- </paginate>
                <paginate-links for="items" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
                </paginate-links> -->
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
        items: [],
        // myItems: [
        //   {
        //     title: 'Kind',
        //     value: `
        //         <input type="radio" name="kind" id="Private" class="mr-2 btn-radio" checked><label for="Private">Private</label>
        //         <input type="radio" name="kind" id="Coworking" class="mr-2 btn-radio"><label for="Coworking">Co-working</label>
        //         <input type="radio" name="kind" id="Security" class="mr-2 btn-radio"><label for="Security">Security systen</label>
        //     `,
        //     category: 'kind'
        //   },
        //   {
        //     title: 'How long is a day and year on Venus?',
        //     value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
        //     category: 'Tab-2'
        //   },
        //   {
        //     title: 'What animal smells like popcorn?',
        //     value: 'Binturongs smell like popcorn.',
        //     category: 'Tab-2'
        //   }
        // ]
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