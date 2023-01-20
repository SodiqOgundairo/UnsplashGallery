<template>
  <main class="w-100 main">
    <div class="row gap-3 m-auto border-bottom w-100 px-4 mb-3 py-3">
      <div class="col-md-4 text-white">
        <h2 class="mb-0">Dashboard</h2>
      </div>
      <div class="col-md-3 text-white align-items-center mt-2">
        <div class="row">
          <div class="col-md-6">
            <router-link to="/" class="text-decoration-none text-white h4 mb-0">
              Feed
            </router-link>
          </div>
          <div class="col-md-6">
            <router-link to="/edit" class="text-decoration-none text-white h4 mb-0">
              Edit
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <form v-on:submit.prevent="handleSearch">
          <label class="visually-hidden" for="search">Search</label>
          <div class="input-group bg-secondary bg-opacity-25 rounded-5">
            <div class="input-group-text bg-none border-0">
              <i class="bx bx-search-alt-2 text-success fs-3"></i>
            </div>
            <input
              type="text"
              v-model="search"
              class="bg-none border-0 py-2"
              id="search"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </div>


    <Feed :unsplashImages="unsplashImages" />

    <!-- </div> -->
    <!-- </div> -->
  </main>
</template>

<script>
// import axios from "axios";
import Feed from "../components/Feed";
import { mapState, mapActions} from 'vuex'
// import store from './store'

export default {
  name: "Main-vue",
  components: {
    Feed,
  },
  
  data() {
    return{
      search: '',
      // unsplashImages: null,
      
    }
  },
  
  
  computed: {
    ...mapState(['unsplashImages', 'searchResults'], {deep: true}), 
  },

  methods: {
    ...mapActions(['getImages', 'searchImages']),

    handleSearch() {
    this.$store.commit('SEARCH_TERM', this.search)
    this.searchImages()
    this.search =''
  }
  },

  created() {
    this.getImages()
  },

  // watch: {
  //   search: {
  //     immediate: true,
  //     handler: function(searchTerm) {
  //     }
  //   }
  // }




  
  // mounted() {
  //   var config = {
  //     method: "get",
  //     url: "https://api.unsplash.com/photos?page=1&per_page=10&client_id=jxOoWtaxCkvo7JKNS8rNH8fgU2C__GWiYkM_ddZ1e6g&page=1",
  //     headers: {},
  //   };

  //   axios(config)
  //     .then((response) => {
  //       console.log(response.data);
  //       this.unsplashImages = response.data;
  //       //   console.log(JSON.stringify(response.data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // methods: {
  //   handleSubmit() {
  //       console.log(this.search)
  //     var config = {
  //       method: "get",
  //       url: `https://api.unsplash.com/search/photos?page=1&per_page=4&query=${this.search}&client_id=jxOoWtaxCkvo7JKNS8rNH8fgU2C__GWiYkM_ddZ1e6g&page=1`,
  //       headers: {},
  //     };

  //     axios(config)
  //       .then((response) => {
  //         console.log(response.data);
  //         this.unsplashImages = response.data.results;
  //         //   console.log(JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
  
};
</script>

<style scoped>
  /*.main {
max-width: 70% !important;
  float: right !important;
 margin-right: auto !important;

}*/
</style>
