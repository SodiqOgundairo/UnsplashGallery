<template>
  <div class="">
    <!-- <div class="row flex-nowrap"> -->
    <div class="d-flex">
      <Sidebar />
      .col-8.float-end
      <div class="col-sm-8 col-md-10 col ms-auto">

        <Main />
      </div>
    </div>
  </div>
</template>

<script>

import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Main,
  }
}
</script>
