<template>
  <div>
    <!-- <Navbar></Navbar> -->
    <div>
      <router-view/>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// import  Navbar  from "./components/web/navbar";
// import  Footer  from "./components/web/footer";

export default {
    name: "AppMobile", 
  //   components:{
  //     Navbar, 
  //     Footer
  //  }
}
</script>

<style>
  @import'~bootstrap/dist/css/bootstrap.css';
</style>