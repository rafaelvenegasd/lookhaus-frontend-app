<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <router-link tag="li" to="/" exact>
      <a class="navbar-brand v-market-logo router-link-active"><img alt="Lookhaus logo" src="../assets/images/logos/black-small.png" class="logo"></a> 
    </router-link>
      <ul class="row navbar">
        <li><router-link tag="li" to="/create-property" exact>
          <a href="#" class="nav-link"><input type="submit" class="btn" value="Post your Place"></a>
        </router-link></li>
        
        <li><router-link tag="li" to="/log-in" exact>
          <a class="nav-link">Login</a>
        </router-link></li>
      </ul>
  </nav>
</header>
</template>

<script>
export default {
    name: "Header",
}
</script>

