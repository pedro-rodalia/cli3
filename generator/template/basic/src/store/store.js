import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import example from './modules/example'

// axios.defaults.baseURL = ''

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    busy: false,
    mqPhone: window.matchMedia('(max-width: 767px)')
  },
  getters: {
    isBusy: state => state.busy,
    isMobile: state => state.mqPhone.matches
  },
  mutations: {
    'SET_BUSYNESS' (state, payload) {
      state.busy = payload
    }
  },
  modules: {
    example
  }
})
