<template>
<div class="container ">
    <div class="d-flex justify-content-between "> 
        <div class="content-big-box">
            <div class="d-grid">
                <img src="../../assets/images/img.jpg" alt="logo" class="profile-photo mb-3">
                <button type="submit" class="btn transparent-btn mb-4"> Change avatar </button>
                <form action="" class="d-flex flex-column container mb-3">
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
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">Password</span>
                        </div>
                        <input type="password" class="form-control" placeholder="Type your password" aria-label="Email" aria-describedby="basic-addon1">
                    </div>
                    <input type="submit" value="Save">
                </form>
            </div>
        </div>

        <div class="content-big-box">
            <h4>Published properties</h4>
            <div class="d-flex">
                <div class="card mr-3" style="width: 18rem;">
                    <figure class="d-flex text-right m-0">
                            <button class="btn floating" disabled>○ Bargain</button>
                        <img class="card-img-top" src="../../assets/images/cover2.jpg" alt="House Image">  
                    </figure>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 class="card-title">Card title</h5></li>
                            <li class="list-group-item">
                                <ul>
                                    <li>item1</li>
                                    <li>item2</li>
                                    <li>item3</li>
                                </ul>
                            </li>
                            <li class="list-group-item">Dirección</li>
                            <li class="list-group-item">
                                <div class="mb-3">
                                    <span>Price</span>
                                </div>
                                <router-link tag="li" to="/update-property" exact>
                                    <input type="submit" class="btn mb-2" value="Edit Property">
                                </router-link>
                                <button type="submit" class="btn transparent-btn mb-4"> Delete Property </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card" style="width: 18rem;">
                    <figure class="d-flex text-right m-0">
                            <button class="btn floating" disabled>○ Bargain</button>
                        <img class="card-img-top" src="../../assets/images/cover2.jpg" alt="House Image">  
                    </figure>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><h5 class="card-title">Card title</h5></li>
                            <li class="list-group-item">
                                <ul>
                                    <li>item1</li>
                                    <li>item2</li>
                                    <li>item3</li>
                                </ul>
                            </li>
                            <li class="list-group-item">Dirección</li>
                            <li class="list-group-item">
                                <div class="mb-3">
                                    <span>Price</span>
                                </div>
                                <router-link tag="li" to="/update-property" exact>
                                    <input type="submit" class="btn mb-2" value="Edit Property">
                                </router-link>
                                <button type="submit" class="btn transparent-btn mb-4"> Delete Property </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-end">
                <div class="mt-5 w-50">
                    <router-link tag="li" to="/create-property" exact>
                        <input type="submit" class="btn mb-2" value="Add a place to work">
                    </router-link>
                    <router-link tag="li" to="/create-property" exact>
                        <input type="submit" class="btn mb-2" value="Add a place to live">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Profile',
}
</script>

<style>

</style>