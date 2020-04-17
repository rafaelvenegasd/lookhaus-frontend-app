<template>
<div class="container ">
    <form action="" class="d-flex flex-column mb-5">
        <div class="content-big-box"> 
            <h4>Create place to live</h4>
            <div class="mr-5">
                <div class="mt-4">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Name</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Type the tittle of your post" aria-label="Name" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between">
                <div>
                    <button type="submit" class="btn transparent-btn mb-4"> Upload photos </button>
                    <div class="d-flex mb-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                        <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mr-4">
                    </div>  

                    <!-- Options -->
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select kind</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select bedrooms</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select bathrooms</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01">Select kitchen conditions</label>
                        </div>
                        <select class="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div> 
                <div class="mt-5">
                    <div class="ml-3">
                        <div class="input-group mb-3 mt-5">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">Location</span>
                            </div>
                            <input type="text" class="form-control" placeholder="Type the location" aria-label="Location" aria-describedby="basic-addon1">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class=" mb-3">
                <div class="mb-2">
                <label for="message">Description</label>
                </div>
                <textarea class="form-control" name="description" id="description" rows="10"></textarea>
            </div>

            <div class="d-flex justify-content-end">
                <div class="w-50">
                    <input type="submit" value="Save & publish">  
                </div>
            </div>
        </div>
    </form> 
</div>
</template>

<script>
export default {
    name: 'Create',
}
</script>

<style>

</style>