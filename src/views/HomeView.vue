<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <Sidebar />
      <Main />

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
