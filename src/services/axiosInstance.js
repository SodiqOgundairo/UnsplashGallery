
import axios from "axios"
// // import { csrfToken } from "./csrfToken";

// // call this first and there will be a token response.token

// // const foreignUrl= 'https://event-reservation-system.herokuapp.com';


// // const encodedUrl = btoa(unescape(encodeURIComponent(foreignUrl)))
// // const scraperUrl = 'https://laravel-csrf-scrapper.herokuapp.com/csrf_scraper.php';
// // scraperUrl+'?url=' + encodedUrl
// //  console.log(scraperUrl+'?url=' + encodedUrl)

// // attach token to end point (/api/event/register etc...) 
// // PLEASE READ UP ON AXIOS SAME-ORIGIN, X-CSRF, X-CORS


// // let csrf = csrfToken().csrfTokenSet



// const axiosInstance = axios.create({
//     //pass baseURL, Headers in here
//     // baseURL: scraperUrl+'?url=' + encodedUrl
//     // baseURL: 'https://event-reservation-system.herokuapp.com',
//     baseURL: 'https://api.unsplash.com',
// })

// // axios.defaults.headers.post['Authorization'] = `Bearer ${user}`
// // axios.defaults.headers.post['Authorization'] = 'Bearer' + user
// // axios.defaults.headers.common['Authorization'] = 'Bearer'
// // axios.defaults.headers.common['Content-Type'] = 'application/json'
// // axios.defaults.headers.common['X-CSRF-TOKEN'] = `${csrf}`
// // axios.defaults.headers.common['Access-Control-Allow-Access-Control-Allow-Credentials'] = true


// axiosInstance.interceptors.request.use((config) => {
//     let params = new URLSearchParams();
//     // config.headers.common['Content-Type'] = 'application/json'
//     // config.headers.common['Accept'] = 'application/json'
//     // config.headers.common['Access-Control-Allow-Access-Control-Allow-Credentials'] = true
//     // config.headers.common['Accept-Version'] = 'v1'
//     // config.headers.common['Secret-Key'] = 'se8ejQmuW-H_oCWLlQMGnOBaBmV9dCtSEtLf9eLu8w4'
//     config.headers.common['client_ID'] = 'jxOoWtaxCkvo7JKNS8rNH8fgU2C__GWiYkM_ddZ1e6g'
//     config.params = params
//     return config 
// }) 

// // store
// export default axiosInstance

let API_KEY = 'jxOoWtaxCkvo7JKNS8rNH8fgU2C__GWiYkM_ddZ1e6g'

const axiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export default {
    // getPhotos({ page, perPage, orderBy }) {
    getPhotos() {
      return axiosInstance.get(
        `/collections/17098/photos?client_id=${API_KEY}`
        // `/collections/17098/photos?client_id=${API_KEY}&page=${page}&per_page=${perPage}&order_by=${orderBy}`
      )
    }
  }
  