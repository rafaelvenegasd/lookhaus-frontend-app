<template>
  <div class="container">
    <div class="d-flex justify-content-between ">
        <div class="content-big-box">
            <h4>Find your perfect place to live</h4>

            <!-- <VueFaqAccordion :items="myItems"/> -->

            <!-- Collapse  -->
            <div id="accordion" class="d-flex accordion">
                <div class="card mr-4">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse"  data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            +     Kind
                            </button>
                        </h5>
                    </div>
                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="Flat" v-model="item_selected" value="flat" class="mr-2 btn-radio" v-on:click="checkFilter('kind')" ><label for="Flat">Flat / Apartment</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="House" v-model="item_selected" value="home" class="mr-2 btn-radio" v-on:click="checkFilter('kind')"><label for="House">House</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="Duplex" v-model="item_selected" value="duplex" class="mr-2 btn-radio" v-on:click="checkFilter('kind')"><label for="Duplex">Duplex</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="Penthouses" v-model="item_selected" value="penthouses" class="mr-2 btn-radio" v-on:click="checkFilter('kind')"><label for="Penthouses">Penthouses</label>
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

                        
                        <div class="slidecontainer" >
                            <input type="range" min="100" max="1200" steps="100" v-model="item_selected" value="500" v-on:click="checkFilter('price')" class="slider">
                            <div class="d-flex">
                                <div v-for="value in 12" class="mr-2">
                                    <span >{{value * 100}}</span>
                                </div>
                            </div>

                            <!-- <datalist id="tickmarks" v-for="num in nums"> 
                                <option :value=num :label=num />
                            </datalist> -->
                        </div>
                    </div>
                    </div>
                </div>

                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     Bedrooms
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="studio" v-model="item_selected" value="0" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms')" ><label for="studio">Studio</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="1_bedroom" v-model="item_selected" value="1" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms')"><label for="1_bedroom">1 bedroom</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="2_bedroom" v-model="item_selected" value="2" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms')"><label for="2_bedroom">2 bedrooms</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="3_bedroom" v-model="item_selected" value="3" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms')"><label for="3_bedroom">3 bedrooms</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="more_bedroom" v-model="item_selected" value="more" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms')"><label for="more_bedroom">More or 3 bedrooms</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     bathrooms
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="1_bedroom" v-model="item_selected" value="1" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms')"><label for="1_bedroom">1 bathroom</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="2_bedroom" v-model="item_selected" value="2" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms')"><label for="2_bedroom">2 Bathrooms</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="more_bedroom" v-model="item_selected" value="more" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms')"><label for="more_bedroom">More or 2 Bathrooms</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     Kitchen
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="fully" v-model="item_selected" value="fully fitted" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen')" ><label for="fully">Fully fitted</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="furnished" v-model="item_selected" value="furnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen')"><label for="furnished">Furnished</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="unfurnished" v-model="item_selected" value="unfurnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen')"><label for="unfurnished">Unfurnished</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div class="card mr-4">
                    <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        +     Conditions
                        </button>
                    </h5>
                    </div>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body">
                        <div>
                            <div>
                                <input type="radio" name="radioBtn" id="new" v-model="item_selected" value="new" class="mr-2 btn-radio" v-on:click="checkFilter('condition')" ><label for="new">New fitted</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="good" v-model="item_selected" value="good" class="mr-2 btn-radio" v-on:click="checkFilter('condition')"><label for="good">Good conditions</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="renovation" v-model="item_selected" value="need renovation" class="mr-2 btn-radio" v-on:click="checkFilter('condition')"><label for="renovation">Needs renovation</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- <div class="card mr-4">
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
                                <input type="radio" name="radioBtn" id="ago" v-model="item_selected" value="" class="mr-2 btn-radio" v-on:click="checkFilter('kind')" ><label for="ago">48H ago</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="week" v-model="item_selected" value="" class="mr-2 btn-radio" v-on:click="checkFilter('kind')"><label for="week">Last week</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="month" v-model="item_selected" value="" class="mr-2 btn-radio" v-on:click="checkFilter('kind')"><label for="month">Last month</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> -->

                <!-- <div class="card mr-4">
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
                                <input type="radio" name="radioBtn" id="op1" class="mr-2 btn-radio"  ><label for="op1">Pets allowed</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="op2" class="mr-2 btn-radio" ><label for="op2">Option 2</label>
                            </div>
                            <div>
                                <input type="radio" name="radioBtn" id="op3" class="mr-2 btn-radio" ><label for="op3">Option 3</label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> -->

            </div>
            <!-- End Collapse -->
        
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
                                                <li>Kind: {{item.kind}} </li>
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
                                                <input type="submit" class="btn" value="Check it out" :id="item._id" v-on:click="checkItOut(item._id)">
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
import {getPropertiesById, getPropertiesByParams} from '../../axios-service'

export default {
  name: 'Houses',
  data(){
    return {
        type: 'home',  
        paginate:['items'],
        items: [],
        item_selected: ''
    }
  },
    components: {
        VueFaqAccordion
  },
  mounted() {
      EventBus.$on('searching', data =>{
            this.items = data;
      })
  }, 
  methods:{
      checkItOut(id){
          getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('checkItOut', data);
                }
            })
      },
      checkFilter(paramName){
            getPropertiesByParams(this.type + 's', paramName, this.item_selected, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    console.log(this.items);
                    this.items = data;
                }
            })
      } 
  }
}
</script>