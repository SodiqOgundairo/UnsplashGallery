<template>
    <!-- <div class='col-md-10'> -->
        <div class=" d-flex flex-column gap-2 mb-2" v-for="items in unsplashImages" :key='items'>
            <div class="text-white col-md-3 border-0 rounded-3 position-relative">
                <img :src='items.urls.regular' class='img-fluid car-img ' :alt='items.alt_description' />
                <div class='position-absolute bottom-0 w-100 h-auto p-3 glass bg-secondary bg-opacity-50'>
                    <div class="border-start border-3 ps-2 border-success h-100">

                        MY IMAGE
                    </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>

import axios from 'axios'

export default {
    name: 'Grid-vue',

    
data() {
        return{
            unsplashImages: []
        }

    },

    mounted(){
        var config = {
  method: 'get',
  url: 'https://api.unsplash.com/search/photos?query=london&client_id=jxOoWtaxCkvo7JKNS8rNH8fgU2C__GWiYkM_ddZ1e6g&page=1',
  headers: { }
};

axios(config)
.then((response) => {
  console.log(response.data);
  this.unsplashImages = response.data.results
//   console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
}
}
</script>

<style scoped>
</style>