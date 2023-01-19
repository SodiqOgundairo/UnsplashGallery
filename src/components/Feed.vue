<template>

    <div class="d-flex justify-content-center gap-2 mb-2">
        <router-link to="/" class="text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/tree.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class="font-12 d-none d-sm-inline mx-1">Nature</span>
                </div>
        </router-link>
        <router-link to="/" class="text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/battery.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Technology</span>
                </div>
        </router-link>
        <router-link to="/" class="text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/unicorn.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Animal</span>
                </div>
        </router-link>
        <router-link to="/" class="text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/hamburger.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Food</span>
                </div>
        </router-link>
        <router-link to="/" class="text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/house.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Building</span>
                </div>
        </router-link>
        <router-link to="/" class=" text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 ">
            <img src="../assets/img/ball.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Sport</span>
                </div>
        </router-link >
        <router-link to="/" class="d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 text-decoration-none">
            <!-- <a class="text-decoration-none"> -->

                <img src="../assets/img/car.png" alt="avatar" width="20" height="20" class="rounded-circle">
                <div class="d-flex flex-column">
                    <span class=" font-12 d-none d-sm-inline mx-1">Car</span>
                </div>
            <!-- </a> -->
        </router-link>
        <div class="text-white rounded-5 bg-secondary bg-opacity-25 p-2 dropdown ">
            <a class="dropdown-toggle text-decoration-none text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">More</a>
            <ul class="dropdown-menu">
                <li class="dropdown-item">Item 1</li>
            </ul>
        </div>
    </div>

    <div class="row">
        <div class="col-md-10">

            <Grid/>
        <Grid/>
        </div>
    </div>

</template>

<script>
import Grid from '../components/Grid'


export default {
    name: 'Feed-vue',

    components:{
        Grid
    },
}

</script>

<style scoped>
</style>