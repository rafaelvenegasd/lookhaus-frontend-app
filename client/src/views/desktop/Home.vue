<template>
  <div>
    <div class="img-searcher-container d-flex justify-content-center">
      <div class="d-flex justify-content-center align-items-center flex-column container">
        <div class="searcher-container">
          <div class="d-flex justify-content-center align-items-center flex-column container mb-3">
            <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mb-2 pt-3"> 
            <span>Find the perfect place</span>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-column container">
            <div>
              <input type="radio" name="place" id="live" class="mr-2 btn-radio" checked><label for="place" class="mr-3">Place to live</label>
              <input type="radio" name="place" id="work" class="mr-2 btn-radio"><label for="place">Place to work / Office</label>
            </div>
          </div>
          <div id="searcher" class="d-flex justify-content-center align-items-center flex-column container mb-4">
              <input type="text" placeholder="Type city, town, etc." class="col-form-label-sm">
              <input type="submit" value="Search" class="btn">
          </div>
        </div>
      </div>
    </div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
        <ul class="navbar-nav d-flex justify-content-between container">
          <li class="nav-item "><img src="../../assets/images/small-figures/home.png" alt="small-image" class="small-figure mr-3"><span>Find places to work and places to live</span></li> 
          <li class="nav-item "><img src="../../assets/images/small-figures/filter.png" alt="small-image" class="small-figure mr-3"><span>Fully customisable with loads of filters</span></li>
          <li class="nav-item "><img src="../../assets/images/small-figures/website.png" alt="small-image" class="small-figure mr-3"><span>Moderated by Lookhaus experts</span></li>
        </ul> 
      </nav>
    </div> 
  </div>
</template>

<script>
// import EventBus from '../assets/js/event-bus'
// import {getDetails} from '../assets/js/axios-service'
export default {
  name: 'DesktopHome',
  data() {
      return {
          message: '', 
          id: ''
      }
    },
    methods:{
        search(){
          // getDetails(this.message, (err, data) =>{
          //       if(err){
          //           console.error(err)
          //       } 
          //       else{
          //           this.id = data[0].item_id;
          //           EventBus.$emit('searching', this.message);
          //           EventBus.$emit('chart', this.id);
          //       }
          //   })

        }
    }
}
</script>