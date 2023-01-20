<template>
    <div class="">
        <!-- <div class="row flex-nowrap"> -->
        <div class="d-flex">
          <Sidebar />
          .col-8.float-end
          <div class="col-sm-9 col-md-10 col ms-auto">
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
          
 
            </main>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Feed-vue',
}
</script>

<style scoped>
</style>