<template>
  <div>
    <Header></Header>
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import  Header  from "./components/header.vue";
import  Footer  from "./components/footer.vue";
import M from 'materialize-css'

export default {
    name: "App",
    components:{
      Header,
      Footer
   },
   mounted () {
    M.AutoInit()
  },
}
</script>

<style>
  @import'~materialize-css/dist/css/materialize.min.css';
</style>