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
            <router-link to="/" class="text-decoration-none text-white h4 mb-0">
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

  </main>
</template>

<script>
import Feed from "../components/Feed";
import { mapState, mapActions} from 'vuex'

export default {
  name: "Main-vue",
  components: {
    Feed,
  },
  
  data() {
    return{
      search: '',
      
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
  
};
</script>

<style scoped>
</style>
