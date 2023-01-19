<template>
    <main class="col row">
    <!-- <main class="col row py-3 ps-5 ms-5"> -->
    <!-- <div class=" col-md-11 ms-auto"> -->
    <!-- <div class=" ms-3"> -->

        <div class="d-flex justify-content-between align-items-center border-bottom w-100 px-4 mb-5 py-3">
                <h3 class="text-white mb-0">Dashboard</h3>
            <div class="d-flex justify-content-between gap-5">
                <router-link to="/" class="text-white text-decoration-none h5 mb-0 feed">Feed</router-link>
                <router-link to="/edit" class="text-white text-decoration-none h5 mb-0">Edit</router-link>
            </div>
            <div class="d-flex justify-content-center align-items-center rounded-5  bg-secondary bg-opacity-50">
                    <label class="visually-hidden" for="search">Search</label>
                    <div class="input-group">
                      <div class="input-group-text bg-none border-0">
                        <i class='bx bx-search-alt-2 text-success fs-3'></i>           
                      </div> 
                      <input type="text" class="bg-none border-0 w-75" id="search" placeholder="Search">
                    </div>
                  </div>
        </div>

        <Feed />

        <!-- </div> -->
        <!-- </div> -->
    </main>
</template>

<script>
import Feed from '../components/Feed'

export default{
    name: 'Main-vue',
    components: {
        Feed,
    },
}


</script>

<style scoped>
</style>