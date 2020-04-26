<template>
  <div class="container">
    <div class="center">
        <h6>Find your perfect place to live</h6>
    </div>

    <ul class="collapsible">
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Kind</div>
            <div class="collapsible-body">
                <form action="">
                    <p>
                        <label><input type="radio" name="radioBtn" id="Flat" v-on:click="checkFilter('kind', 'flat')"> <span>Flat / Apartment</span></label>
                    </p>
                    <p>
                        <label><input type="radio" name="radioBtn" id="House"  v-on:click="checkFilter('kind', 'home')"> <span>House</span></label>
                    </p>
                    <p>
                        <label><input type="radio" name="radioBtn" id="Duplex" v-on:click="checkFilter('kind', 'duplex')"> <span>Duplex</span></label>
                    </p>
                    <p>
                        <label><input type="radio" name="radioBtn" id="Penthouses" v-on:click="checkFilter('kind', 'penthouses')"> <span>Penthouses</span></label>
                    </p>
                </form>
            </div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Price</div>
            <div class="collapsible-body">
                <form action="#">
                    <p class="range-field">
                        <input type="range" name="priceInput" id="priceInput" min="100" max="1200" step="10" value="500" v-model="price" :v-on:click="checkFilter('price', price)" oninput="priceOutput.value = priceInput.value" class="slider">
                    </p>
                </form>
                <output name="priceOutput" id="priceOutput">500</output>
            </div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Bedrooms</div>
            <div class="collapsible-body">
                <p>
                    <label><input type="radio" name="radioBtn" id="studio" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 0)"> <span> Studio </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="1_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 1)"> <span> 1 bedroom </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="2_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 2)"> <span> 2 bedrooms </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="more_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bedrooms', 'more')"> <span> More or 2 bedrooms </span></label>
                </p>
            </div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Bathrooms</div>
            <div class="collapsible-body">
                <p>
                    <label><input type="radio" name="radioBtn" id="1_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 1)"> <span> 1 bathroom </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="2_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 2)"> <span> 2 Bathrooms </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="more_bedroom" class="mr-2 btn-radio" v-on:click="checkFilter('bathrooms', 'more')"> <span> More or 2 Bathrooms </span></label>
                </p>
            </div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Kitchen</div>
            <div class="collapsible-body">
                <p>
                    <label><input type="radio" name="radioBtn" id="fully" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'fully fitted')"> <span> Fully fitted </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="furnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'furnished')"> <span> Furnished </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="unfurnished" class="mr-2 btn-radio" v-on:click="checkFilter('kitchen', 'unfurnished')"> <span> Unfurnished </span></label>
                </p>
            </div>
        </li>
        <li>
            <div class="collapsible-header"><i class="material-icons">add_box</i>Conditions</div>
            <div class="collapsible-body">
                <p>
                    <label><input type="radio" name="radioBtn" id="new" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'new')"> <span> New fitted </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="good" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'good')"> <span> Good conditions </span></label>
                </p>
                <p>
                    <label><input type="radio" name="radioBtn" id="renovation" class="mr-2 btn-radio" v-on:click="checkFilter('condition', 'need renovation')"> <span> Needs renovation </span></label>
                </p>
            </div>
        </li>
        <li>
            <div class="container">
                <select v-on:change="checkFilter('sort', 'invert')">
                    <option value="newer" selected>Newer</option>
                    <option value="older">Older</option>
                </select>
            </div>
        </li>
    </ul>
        
  <!-- <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div> -->



    <div class="content-big-box center row">
        <paginate ref="paginator" name = "items" :list = "items" :per = "4">
            <div class="justify-center col s12 m7">
                <div v-for="item in paginated('items')" :key="item.item_id">
                    <div class="card mb-4" style="width: 18rem;">
                        <div class="card-image">
                            <img class="card-img-top" :src="item.photos[0]" alt="House Image">  
                        </div>
                        <div class="card-content">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><h5 class="card-title">{{item.name}}</h5></li>
                                <li class="list-group-item">
                                    <ul>
                                        <li>Kind: {{item.kind}} </li>
                                        <li>Bathroom: {{item.bathrooms}}</li>
                                        <li>Bedroom: {{item.bedrooms}}</li>
                                    </ul>
                                </li>
                                <li class="list-group-item">Address: {{item.street}}, {{item.city}} </li>
                                <li class="list-group-item">
                                    <div class="mb-3">
                                        <span>{{item.price}} Euros </span>
                                    </div>
                                    <div class="card-action">
                                        <router-link tag="li" to="/home-detail" exact>
                                            <input type="submit" value="Check it out" :id="item._id" v-on:click="checkItOut(item._id)">
                                        </router-link>
                                    </div>
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
</template>

<script>
import EventBus from '../../event-bus'
import {getPropertiesById, getPropertiesByParams} from '../../axios-service'
import M from 'materialize-css'

export default {
  name: 'Houses',
  data(){
    return {
        type: 'home',  
        paginate:['items'],
        selected: '',
        items: [],
        price: 0
    }
  },
  mounted() {
    
    const selectItems = document.querySelectorAll('select');
    const instances = M.FormSelect.init(selectItems, null);

    const collapsibleItems = document.querySelectorAll('.collapsible');
    const instance = M.Collapsible.init(collapsibleItems, null);

    EventBus.$on('searching', data =>{
        this.items = data;
        console.log(this.items);
    })
  }, 
  methods:{
      async checkItOut(id){
          await getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('checkItOut', data);
                }
            })
      },
      checkFilter(paramName, param, event){
            param = this.price;
            getPropertiesByParams(this.type + 's', paramName, param, (err, data) =>{
                try{
                    if (data.length > 0){
                        return this.items = data;
                     }
                }
                catch(err){ 
                    console.error(err)
                } 
            })
      } 
  }
}
</script>