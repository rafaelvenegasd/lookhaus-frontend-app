<template>
  <div>
    
    <div class="img-searcher-container"></div>
    <div class="container">
      <div class="grid-center mt-4">
        <img alt="Lookhaus logo" src="../assets/images/logos/black-small.png" class="logo mb-2">
        <span>Find the perfect place</span>
      </div>
      <div>
      <div>
        <form action="#" class="d-flex justify-center mt-4">
          <p class="mr-4">
            <label>
              <input name="group1" type="radio" checked value="homes" v-model="item_selected"/>
              <span>Place to live</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" value="offices" v-model="item_selected" />
              <span>Place to work / Office</span>
            </label>
          </p>
        </form>
      </div>

        <!-- <div class="input-field col s12">
            <select v-model="item_selected">
                <option disabled selected value="">Select a kind of property</option>
                <option value="homes">Place to live</option>
                <option value="offices">Place to work / Office</option>
            </select>
            <label>Kind</label>
        </div> -->
        
        <router-link tag="li" :to="item_selected" exact>
          <input type="submit" value="Search" v-on:click="search()">
        </router-link>
      </div>
    </div>

    <div class="d-flex container justify-center">
      <div class="grid-center mt-3 mr-3">
        <img src="../assets/images/small-figures/home.png" alt="small-image" class="small-figure mt-3">
        <img src="../assets/images/small-figures/filter.png" alt="small-image" class="small-figure mt-3">
        <img src="../assets/images/small-figures/website.png" alt="small-image" class="small-figure mt-3">
      </div>
      <div class="d-grid mt-3 justify-left">
        <span class="mt-3">Find places to work and places to live</span>
        <span class="mt-3">Fully customisable with loads of filters</span>
        <span class="mt-3">Moderated by Lookhaus experts</span>
      </div>
    </div> 

  </div>
</template>

<script>
import EventBus from '../../event-bus'
import {getProperties} from '../../axios-service'

export default {
  name: 'Home',
  data() {
      return {
          message: '',
          item_selected: ''  
      }
    },
    methods:{
        search(){
          getProperties(this.item_selected, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('searching', data);
                }
            })
        }
    }
}
</script>

