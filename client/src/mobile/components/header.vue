<template>
<header>

  <nav>
    <div class="nav-wrapper white">
      <router-link tag="li" to="/" exact>
        <a class="brand-logo"><img alt="Lookhaus logo" class="logo" src="../assets/images/logos/black.png"></a> 
      </router-link>

      <a href="#" data-target="mobile-demo" class="sidenav-trigger blacked"><i class="material-icons">menu</i></a>
      
      <ul class="right hide-on-med-and-down">

        <li><router-link tag="li" v-if="authenticated" to="/create-home" exact>
          <a class="waves-effect waves-light btn">Post a place to live</a>
        </router-link></li>

        <li><router-link tag="li" v-if="authenticated" to="/create-office" exact>
          <a class="waves-effect waves-light btn">Post a Place to work</a>
        </router-link></li>

        <li><router-link tag="li" v-if="authenticated" to="/user-profile" exact>
          <a>Hello {{this.username}}</a>
        </router-link></li>

        <li><router-link v-if="authenticated" to="/log-in" v-on:click.native="logout()">
          <a>Logout</a>
        </router-link></li>

        <li><router-link v-if="!authenticated" tag="li" to="/log-in">
          <a class="waves-effect waves-light btn">Login</a>
        </router-link></li>
      </ul>
    </div>
  </nav>

  <ul class="right sidenav" id="mobile-demo">
      <li><router-link tag="li" v-if="authenticated" to="/create-home" exact>
        <a>Post a place to live</a>
      </router-link></li>

      <li><router-link tag="li" v-if="authenticated" to="/create-office" exact>
        <a class="waves-effect waves-light btn">Post a Place to work</a>
      </router-link></li>

      <li><router-link tag="li" v-if="authenticated" to="/user-profile" exact>
        <a class="waves-effect waves-light btn">Hello {{this.username}}</a>
      </router-link></li>

      <li><router-link v-if="authenticated" to="/log-in" v-on:click.native="logout()">
        <a>Logout</a>
      </router-link></li>

      <li><router-link v-if="!authenticated" tag="li" to="/log-in">
        <a>Login</a>
      </router-link></li>
  </ul>



  <!-- <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <router-link tag="li" to="/" exact>
      <a class="navbar-brand v-market-logo router-link-active"><img alt="Lookhaus logo" src="../assets/images/logos/black-small.png" class="logo"></a> 
    </router-link>
      <ul class="row navbar">
        <li><router-link tag="li" v-if="authenticated" to="/create-home" exact>
          <a class="nav-link"><input type="submit" class="btn" value="Post a place to live"></a>
        </router-link></li>

        <li><router-link tag="li" v-if="authenticated" to="/create-office" exact>
          <a class="nav-link"><input type="submit" class="btn" value="Post a Place to work"></a>
        </router-link></li>

        <li><router-link tag="li" v-if="authenticated" to="/user-profile" exact>
          <a class="nav-link">Hello {{this.username}}</a>
        </router-link></li>

        <li><router-link v-if="authenticated" to="/log-in" v-on:click.native="logout()">
          <a class="nav-link">Logout</a>
        </router-link></li>

        <li><router-link v-if="!authenticated" tag="li" to="/log-in">
          <a class="nav-link"><input type="submit" class="btn" value="Login"></a>
        </router-link></li>
      </ul>
  </nav> -->
</header>
</template>

<script>
import EventBus from '../../event-bus'

export default {
    name: "Header",
    data() {
      return {
          authenticated: false,
          username: ''
      }
    },
    mounted() {
      if(localStorage.getItem('access_token')){
        this.authenticated = true;
      }

      EventBus.$on('username', username =>{
          this.username = username;
          this.authenticated = true;
      })
    }, 
    methods: {
      logout() {
          this.authenticated = false;
          localStorage.removeItem('access_token');
      }
    }
}
</script>

