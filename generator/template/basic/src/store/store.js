import Vue from 'vue'
import Vuex from 'vuex'

import example from './modules/example'
<%_ if(options.addLogin) { _%>
import login from './modules/login'
<%_ } _%>
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
    example<%_ if(options.addLogin) { _%>,
    login<%_ } _%>
  }
})
