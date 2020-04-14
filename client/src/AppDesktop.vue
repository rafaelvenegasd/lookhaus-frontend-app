<template>
  <div>
    <Header></Header>
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import  Header  from "./components/web/header.vue";
import  Footer  from "./components/web/footer.vue";

export default {
    name: "AppDesktop", 
    components:{
      Header, 
      Footer
   }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>