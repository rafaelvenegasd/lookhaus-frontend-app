<template>
  <div class="container ">
    <div class="d-flex justify-content-between "> 
      <div class="content-big-box">
          <h4>Tittle of the property</h4>
      <div class="mt-4">
          <img src="../assets/images/img.jpg"  width="220px" alt="property-image">
      </div>
      </div>
      <div class="content-big-box">
      <div class="mt-5">
        <div class="ml-3">
            <div class="mb-3">
                <button class="btn mt-4 mb-3" disabled>○ Bargain</button>
                <h5>Price</h5>
            </div>
            <p class="mb-4 paragraph">Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
            <ul class="d-flex justify-content-between">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
    <div class="mt-2 d-flex">
        <div class="mr-4">
            <Maps></Maps>
        </div>
        <div>
            <h5>Details</h5>
            <ul>
                <li>Detail 1</li>
                <li>Detail 2</li>
                <li>Detail 3</li>
                <li>Detail 4</li>
            </ul>
        </div>
    </div>
    <div class="mt-4 mb-5">
        <h5 class="mb-2">Reach the owner!</h5>
        <form action="" class="d-flex flex-column mb-5">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Name</span>
            </div>
            <input type="text" class="form-control" placeholder="Type your name" aria-label="Name" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" class="form-control" placeholder="Type your email" aria-label="Email" aria-describedby="basic-addon1">
          </div>
          <div class=" mb-3">
            <div class="mb-2">
              <label for="message">Message</label>
            </div>
            <textarea class="form-control" name="message" id="message" rows="10"></textarea>
          </div>
        </form>
        <div class="d-flex justify-content-end">
          <div class="w-50">
            <input type="submit" width="50px" value="Reach the owner" v-on:click="reachOwner()">
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import EventBus from '../../event-bus'
import Maps from '../components/maps.vue'

export default {
  name: 'Login',
  components:{
    Maps
  },
  mounted() {
      EventBus.$on('checkItOut', data =>{
          console.log(data);
      })
  }, 
  methods:{
    reachOwner(){
      Swal.fire(
        'Message sended!',
        'The owner will contact to you soon!',
        'success'
      )
    }
  }
}
</script>