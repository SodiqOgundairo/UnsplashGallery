<template>
    <!-- <div class="container-fluid"> -->
        <!-- <div class="row flex-nowrap"> -->
            <div class="sidebar overflow-y-scroll col-md-2 col-xl-2 px-sm-2  px-0 bg-none border-right">
                <div class="d-flex flex-column align-items-center my-3 align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" class="d-flex justify-content-between align-items-center pb-4 mb-md-3 me-md-auto text-white text-decoration-none border-bottom w-100">
                    <span class="font-sm-12 fs-6 d-sm-inline">STGallery</span>
                    <i class='icon fs-4 ms-auto bx bx-left-arrow-alt text-success'></i>
                </a>

                <div class="accordion accordion-flush border-bottom w-100 mb-4" id="accordionFlushExample">


                      <div class="accordion-item">
                        <h2 class="accordion-header  bg-none " id="flush-headingTwo">
                          <button class="accordion-button px-0 shadow-none bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <i class=' fs-5 me-2 bx bxs-dashboard text-white d-none d-sm-inline'></i>
                            <span class="fs-6"> Dashboard</span>
                          </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body bg-dark">
                            <ul class="list-unstyled ">
                                <li class=" text-white mb-md-2 mb-3">
                                    <i class="bi bi-columns text-white me-2"></i>
                            <span class="font-12 d-sm-inline"> Feed</span>

                                </li>
                                <li class="text-white mb-3 mb-md-2">
                                    <i class='bx bx-edit text-white me-2'></i>
                            <span class="font-12 d-sm-inline"> Edit</span>
                                    
                                </li>
                                <li class="text-white mb-2">
                                    <i class='bx bx-search-alt-2 text-white me-2'></i>
                            <span class="font-12 d-sm-inline"> Search</span>
                                    
                                </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                  </div>

                  <div class="d-flex flex-column mb-5">
                    
                   <a href="/" class="d-flex justify-content-between align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none">
                    
                       <i class=' ms-md-auto bx bx-compass text-success'></i>
                    <span class="font-13 d-sm-inline">Explore</span>
                </a>

                   <a href="/" class="d-flex justify-content-between align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none">
                    
                       <i class=' ms-md-auto bx bx-bookmark-alt-plus text-success'></i>
                    <span class=" font-13 d-sm-inline">Bookmark</span>
                </a>

                   <a href="/" class="d-flex justify-content-between align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none ">
                    
                       <i class='  ms-md-auto bx bx-download text-success'></i>
                    <span class=" font-13 d-sm-inline">Downloads</span>
                </a>

                   <a href="/" class="d-flex justify-content-between align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none w-100">
                    
                       <i class='  ms-md-auto bx bx-bell text-success'></i>
                    <span class=" font-13 d-sm-inline">Notification</span>
                    <span class="badge badge-sm bg-success me-auto">2</span>
                </a>

                  </div>

                  <div class="bag position-absolute d-none d-md-block ">
                    <img src="../assets/img/bag.png" class="img-fluid " />
                  </div>

                  <div class="d-none d-md-block  my-4 bg-secondary bg-opacity-25 p-2 pt-4 pb-3 rounded-3 h-auto">
                    <p class="d-flex justify-content-between align-items-center mb-0 me-md-auto w-100 d-none d-sm-inline font-12 lh-1 ">Upload your photos according to the

                    </p>
                    <p class="d-flex justify-content-between align-items-center mb-0 me-md-auto text-white w-100">
                      <span class="text-success d-sm-inline">Calendar <span class="text-white">!</span> </span>
                      <i class='d-none d-md-inline fs-4 ms-auto bx bxs-left-arrow-circle text-success'></i>
                  </p>
                  </div>

                  <div class="d-flex flex-column border-bottom w-100 mb-4">
                    
                    <a href="/" class="d-flex justify-content-around align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none ">
                     
                        <i class='ms-auto bx bx-cog text-success'></i>
                     <span class="font-13 d-none d-sm-inline">Settings</span>
                 </a>
 
                    <a href="/" class=" d-flex justify-content-between align-items-center pb-0 mb-2 mb-md-3 me-auto text-white text-decoration-none">
                     
                        <i class='ms-auto bx bx-error-circle text-success'></i>
                     <span class=" font-13 d-none d-sm-inline">Help</span>
                 </a>
 
                   </div>
                
                    <div class="d-block d-md-flex align-items-center text-white ">
                        <img src="../assets/img/avatar.png" alt="avatar" width="50" height="50" class="rounded-circle">
                            <div class="d-flex flex-column">
                                <span class="d-none d-sm-inline mx-1">Brooklyn</span>
                                <span class="d-none font-13 d-sm-inline mx-1 text-success"><i class='bx bxs-circle font-12'></i>Account Pro</span>
                            </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col py-3">
                Content area...
            </div> -->
        <!-- </div> -->
    <!-- </div> -->
</template>

<script>

export default {
  name: 'Sidebar-vue',

}

</script>

<style scoped>
.border-right {
    border-right: 2px solid gray;
}

.sidebar{
    max-width:25% !important;
    height: 800px;
    position:fixed;
}




</style>