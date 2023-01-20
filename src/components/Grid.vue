<template>
  <div class="row">
  <div class="col-6 col-md-4 col-lg-3 mb-3 rounded-3"
        v-for="items in unsplashImages"
        :key="items">
      <div
        class="text-white border-0 rounded-3 position-relative"
      >
        <img
          :src="items.urls.regular"
          class="img-fluid car-img"
          :alt="items.alt_description"
        />
        <div
          class="bagde bg-secondary position-absolute badge rounded-2 p-2 image-badge"
        >
          <small class="fw-light font-12">color: {{ items.color }}</small>
        </div>
        <div
          class="position-absolute bottom-0 w-100 h-auto p-3 glass bg-secondary bg-opacity-75"
        >
          <div
            class="border-start border-3 ps-2 border-success h-100 d-flex justify-content-between align-items-center"
          >
            <p class="d-flex flex-column">
               IMAGE TITLE
              <span class="d-flex gap-1 align-items-center text-dark font-12">
                <img
                  :src="items.user.profile_image.small"
                  alt="items.user.first_name"
                  class="rounded-circle"
                />
                {{ items.user.first_name }}
                {{ items.user.last_name }}
              </span>
            </p>
            <div class="fs-3 align-items-center">
              <a :href="items.links.download" target="_blank" class="text-decoration-none">
                <i class="ms-auto bx bxs-download text-white"> </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Grid-vue",

//   data() {
//     return {
//       unsplashImages: [],
//     };
//   },

  props: ['unsplashImages'],
};
</script>

<style scoped></style>
