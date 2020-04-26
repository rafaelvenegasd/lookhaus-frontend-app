<template>
<div class="container ">
    <div class="d-flex justify-content-between "> 
        <div class="content-big-box">
            <div class="d-grid">
                <img src="../../assets/images/img.jpg" alt="logo" class="profile-photo mb-3">
                <div class="mb-3 text-center">
                    <div>
                        <h4>Profile info</h4>
                    </div>        
                    <h6>{{ username }}</h6>
                    <h6>{{ email }}</h6>
                </div>
            </div>
        </div>

        <div>

            <div class="d-flex">
                <div class="content-big-box mr-4">
                    <paginate ref="paginator" name = "homes" :list = "homes" :per = "1">
                        <div class="d-flex">
                            <div v-for="item in paginated('homes')" :key="item.item_id">
                                <div class="card mr-5 ml-2" style="width: 18rem;">
                                    <figure class="d-flex text-right m-0">
                                        <img class="card-img-top" :src="item.photos[0]" alt="House Image">  
                                    </figure>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><h5 class="card-title">{{item.name}}</h5></li>
                                            <li class="list-group-item">
                                                <ul>
                                                    <li>Kind: {{item.kind}} </li>
                                                    <li>Bathroom: {{item.bathrooms}}</li>
                                                    <li>Bedroom: {{item.bedrooms}}</li>
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Address: {{item.street}}, {{item.city}} </li>
                                            <li class="list-group-item">
                                                <div class="mb-3">
                                                    <span>{{item.price}} Euros </span>
                                                </div>
                                                <!-- <router-link tag="li" to="/update-property" exact>
                                                    <input type="submit" class="btn mb-2" value="Edit Property" v-on:click="goToUpdate(item._id)">
                                                </router-link>
                                                <button type="submit" class="btn transparent-btn mb-4" v-on:click="deleteProperty()"> Delete Property </button> -->
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </paginate>
                    <paginate-links for="homes" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
                    </paginate-links>
                </div>
                <div class="content-big-box mr-4">
                    <paginate ref="paginator" name = "offices" :list = "offices" :per = "1">
                        <div class="d-flex">
                            <div v-for="item in paginated('offices')" :key="item.item_id">
                                <div class="card mr-5 ml-2" style="width: 18rem;">
                                    <figure class="d-flex text-right m-0">
                                        <img class="card-img-top" :src="item.photos[0]" alt="House Image">  
                                    </figure>
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><h5 class="card-title">{{item.name}}</h5></li>
                                            <li class="list-group-item">
                                                <ul>
                                                    <li>Kind: {{item.kind}} </li>
                                                    <li>Bathroom: {{item.bathrooms}}</li>
                                                    <li>Bedroom: {{item.bedrooms}}</li>
                                                </ul>
                                            </li>
                                            <li class="list-group-item">Address: {{item.street}}, {{item.city}} </li>
                                            <li class="list-group-item">
                                                <div class="mb-3">
                                                    <span>{{item.price}} Euros </span>
                                                </div>
                                                <!-- <router-link tag="li" to="/update-property" exact>
                                                    <input type="submit" class="btn mb-2" value="Edit Property" v-on:click="goToUpdate(item._id)">
                                                </router-link>
                                                <button type="submit" class="btn transparent-btn mb-4" v-on:click="deleteProperty()"> Delete Property </button> -->
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </paginate>
                    <paginate-links for="offices" :show-step-links="true" :simple="{ prev: 'Anterior', next: 'Siguiente' }">
                    </paginate-links>
                </div>
            </div>

            <div class="d-flex justify-content-end">
                <div class="mt-5 w-50">
                    <router-link tag="li" to="/create-office" exact>
                        <input type="submit" class="btn mb-2" value="Add a place to work">
                    </router-link>
                    <router-link tag="li" to="/create-home" exact>
                        <input type="submit" class="btn mb-2" value="Add a place to live">
                    </router-link>
                </div>
            </div>

        </div>
    </div>
</div>

</template>

<script>
import Swal from 'sweetalert2'
import {getPropertiesById} from '../../../axios-service'
import EventBus from '../../../event-bus'

export default {
    name: 'Profile',
    data(){
        return {
            type: '',  
            paginate:['homes', 'offices'],
            price: 0, 
            token: null, 
            email: '', 
            username: '', 
            homes_ids: [], 
            offices_ids: [], 
            offices: [], 
            homes: []
        }
    },
    mounted() {
        this.token = localStorage.getItem('access_token');
        this.username = localStorage.getItem('username');
        this.email = localStorage.getItem('email');
        this.homes_ids = localStorage.getItem('homes_ids');
        this.offices_ids = localStorage.getItem('offices_ids');

        if(this.homes_ids =! []){
            this.homes_ids.prototype.forEach(id_item => {
                this.type = 'home';
                getPropertiesById(this.type, id_item, (err, data) =>{
                    if(err){
                        console.error(err)
                    } 
                    else{
                        this.properties.push(data);
                    }
                })
            });
        }

        if(this.offices_ids =! []){
            this.offices_ids.prototype.forEach(id_item => {
                this.type = 'office';
                getPropertiesById(this.type, id_item, (err, data) =>{
                    if(err){
                        console.error(err)
                    } 
                    else{
                        this.properties.push(data);
                    }
                })
            });
        }
    }, 
    methods:{
        async goToUpdate(id){
            await getPropertiesById(this.type, id, (err, data) =>{
                if(err){
                    console.error(err)
                } 
                else{
                    EventBus.$emit('goToUpdate', data);
                }
            })
        },
        deleteProperty(){
            event.preventDefault();
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.value) {
                    swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                    )
                }
            })
        }
    }
}
</script>
