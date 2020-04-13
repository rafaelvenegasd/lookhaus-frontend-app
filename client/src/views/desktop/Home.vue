<template>
  <!-- <div class="img-searcher-container"> -->
    <div class="img-searcher-container d-flex justify-content-center">
      <div class="d-flex justify-content-center align-items-center flex-column container">
        <div class="searcher-container">
          <div class="d-flex justify-content-center align-items-center flex-column container mb-3">
            <img alt="Lookhaus logo" src="../../assets/images/logos/black-small.png" class="logo mb-2 pt-3"> 
            <span>Find the perfect place</span>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-column container">
            <div>
              <input type="radio" name="place" id="live" class="mr-2 btn-radio"><label for="place" class="mr-3">Place to live</label>
              <input type="radio" name="place" id="work" class="mr-2 btn-radio"><label for="place">Place to work / Office</label>
            </div>
          </div>
            <div id="searcher" class="d-flex justify-content-center align-items-center flex-column container mb-4">
                <input type="text" placeholder="Type city, town, etc." class="col-form-label-sm">
                <input type="submit" value="Search" class="btn">
            </div>
          </div>
        </div>
      </div> 
    <!-- </div> -->
</template>

<script>

export default {
  name: 'DesktopHome',
}
</script>