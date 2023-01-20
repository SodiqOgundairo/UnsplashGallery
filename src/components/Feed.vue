<template>
    <div class="col-sm-10 m-auto">
        <div class="row mb-1 mt-5 m-auto">
          <router-link
            to="/"
            class="col-sm-1 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/tree.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Nature</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-2 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/battery.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Technology</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-1 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/unicorn.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Animal</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-1 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/hamburger.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Food</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-1 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/house.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Building</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-1 m-auto text-decoration-none d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 w-auto my-2"
          >
            <img
              src="../assets/img/ball.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Sport</span>
            </div>
          </router-link>
          <router-link
            to="/"
            class="col-sm-1 m-auto d-flex align-items-center text-white rounded-5 bg-secondary bg-opacity-25 p-2 text-decoration-none w-auto my-2"
          >
            <!-- <a class="text-decoration-none"> -->
      
            <img
              src="../assets/img/car.png"
              alt="avatar"
              width="20"
              height="20"
              class="rounded-circle"
            />
            <div class="d-flex flex-column">
              <span class="font-12   d-sm-inline mx-1">Car</span>
            </div>
            <!-- </a> -->
          </router-link>
          <div class="col-sm-1 m-auto text-white rounded-5 bg-secondary bg-opacity-25 p-2 dropdown w-auto my-2">
            <a
              class="dropdown-toggle text-decoration-none text-white"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >More</a
            >
            <ul class="dropdown-menu">
              <li class="dropdown-item">Item 1</li>
            </ul>
          </div>
        </div>

    </div>

    <div class="row px-4">
            <Grid :unsplashImages='unsplashImages' />  
</div>
</template>

<script>
import Grid from "../components/Grid";
// import axios from "axios";

export default {
  name: "Feed-vue",

  components: {
    Grid,
  },

  // data(){
  //   return{
  //     unsplashImages: null,
  //   }
  // },

  
  props: ['unsplashImages'],

  
};
</script>

<style scoped></style>
