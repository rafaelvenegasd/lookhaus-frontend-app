<template>
  <div>
    <Navbar></Navbar>
    <div class="d-flex mt-2 mb-2 container">
        <Content></Content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Content from '../components/content.vue'
import Footer from '../components/footer.vue'

export default {
  name: "App",
  components:{
    Navbar,
    Content, 
    Footer
  }
}
</script>