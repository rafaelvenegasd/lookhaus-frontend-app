<template>
<header>
  <nav class="navbar navbar-expand-lg navbar-light justify-content-between">
    <router-link tag="li" to="/" exact>
      <a class="navbar-brand v-market-logo router-link-active"><img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo"></a> 
    </router-link>
      <ul class="row navbar">
        <li><a href="#" class="nav-link"><input type="submit" class="btn" value="Post your Place"></a></li> 
        <router-link tag="li" to="/login" exact>
          <a class="nav-link"><button class="btn transparent label">Login</button></a>
        </router-link>
      </ul>
  </nav>
</header>
</template>

<script>
export default {
    name: "Header",
}
</script>

