import Vuex from 'vuex'
import axios from 'axios'


let API_KEY = 'mOJ3W-MQfoPQhFv1iMKV2JUIPTevcEfeUzxxnNm9cCs'

export default new Vuex.Store({
  state: {
    unsplashImages: null,
    searchTerm: ''
  },

  mutations: {
    UNSPLASH_API(state, unsplashImages){
      state.unsplashImages = unsplashImages
    },

    SEARCH_TERM(state, searchTerm) {
      state.searchTerm = searchTerm
    }
  }, 

  actions: {
    getImages({ commit }) {
      axios.get(`https://api.unsplash.com/photos?page=1&per_page=10&client_id=${API_KEY}`)
      .then(response => {
        commit('UNSPLASH_API', response.data)
      })
    },

    searchImages({ commit, state }) {
      console.log(state.searchTerm)
      axios.get(`https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${state.searchTerm}&page=1&per_page=10`)
      .then(response => {
        commit('SEARCH_TERM', response.data.results)
        state.unsplashImages = response.data.results 
        console.log(response.data.results)
      })
    },

 
  }
})
