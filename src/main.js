import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import './assets/css/main.css' 

// Bootsrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


// ICONS
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/boxicons/css/boxicons.css'


createApp(App).use(store).use(router).mount('#app')
