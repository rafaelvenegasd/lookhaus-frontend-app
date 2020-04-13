<template>



  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a href="/" class="navbar-brand v-market-logo router-link-active"><img alt="Lookhaus logo" src="../../assets/images/logos/white-small.png" class="logo"></a> 
    <button type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button> 
    <div id="navbarNav" class="collapse navbar-collapse justify-content-end">
      <ul class="navbar-nav">
        <li class="nav-item active "><a href="#" class="nav-link"><button class="btn-primary"> Post your Place </button></a></li> 
        <li class="nav-item active label"><a href="#" class="nav-link">Log in</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
// import EventBus from '../assets/js/event-bus'
// import {getDetails} from '../assets/js/axios-service'
export default {
    name: "Navbar",
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

