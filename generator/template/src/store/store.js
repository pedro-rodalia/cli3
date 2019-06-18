import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import example from './modules/example'

// axios.defaults.baseURL = ''

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mqPhone: window.matchMedia('(max-width: 767px)')
  },
  getters: {
    isMobile: state => state.mqPhone.matches
  },
  modules: {
    example
  }
})
