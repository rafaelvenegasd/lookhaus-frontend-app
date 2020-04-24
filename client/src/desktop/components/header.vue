<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <router-link tag="li" to="/" exact>
      <a class="navbar-brand v-market-logo router-link-active"><img alt="Lookhaus logo" src="../assets/images/logos/black-small.png" class="logo"></a> 
    </router-link>
      <ul class="row navbar">
        <li><router-link tag="li" v-if="authenticated" to="/create-property" exact>
          <a class="nav-link"><input type="submit" class="btn" value="Post your Place"></a>
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
  </nav>
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
        console.log(this.authenticated);

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

