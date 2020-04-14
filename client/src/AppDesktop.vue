<template>
  <div>
    <Navbar></Navbar>
      <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import  Navbar  from "./components/web/navbar.vue";
import  Footer  from "./components/web/footer.vue";

export default {
    name: "AppDesktop", 
    components:{
      Navbar, 
      Footer
   }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>