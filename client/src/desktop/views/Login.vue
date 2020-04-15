<template>
  <div class="container ">
    <div class="d-flex justify-content-between "> 
      <div class="content-big-box">
      <div class="content-big-box">
        <h4>Don´t have an accout yet?</h4>
        <p>Join the community of ownwers and enjoy a fully equiped
          platform to post your properties!
        </p>
        <router-link tag="li" to="/sign-up" exact>
          <input type="submit" class="btn" value="Create an account">
        </router-link>
      </div>
      </div>
      <div class="content-big-box">
      <div class="content-big-box">
        <form action="" class="d-flex flex-column container mb-3">
          <h4 class="mb-4">Log in to your account </h4>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Email</span>
            </div>
            <input type="email" class="form-control" placeholder="Type your email" aria-label="Email" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Password</span>
            </div>
            <input type="password" class="form-control" placeholder="Type your password" aria-label="Email" aria-describedby="basic-addon1">
          </div>
          <input type="submit" value="Log in to an existent account">
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>