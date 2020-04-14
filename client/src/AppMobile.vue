<template>
  <div>
    <!-- <Header></Header> -->
    <div>
      <router-view/>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import  Header  from "./components/web/header.vue";
// import  Footer  from "./components/web/footer.vue";

export default {
    name: "AppMobile", 
  //   components:{
  //     Header, 
  //     Footer
  //  }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>