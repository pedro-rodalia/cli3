import axios from 'axios'
const axiosConfig = {
  baseURL: '../../../public/static/fake-login.json'
}
const HTTP = axios.create(axiosConfig)

// state
const state = {
  loading: false,
  isPasswordText: false,
  mqPhone: window.matchMedia('(max-width: 767px)')
}

// getters
const getters = {
  getLoaderState () {
    return state.loading
  },
  getIsMobile () {
    return state.mqPhone.matches
  },
  getIsPasswordForm () {
    return state.isPasswordText
  }
}

// actions
const actions = {
  async login ({ commit }, data) {
    /********************************************
    // Bloque a modificar con la API del proyecto
    ********************************************/
    let endPoint = data.email ? 'password' : 'login'
    try {
      const response = await HTTP.get() // esto será un post
      if (endPoint === 'login' && response.data[endPoint].user === data.username &&
        response.data[endPoint].password === data.password) {
        response.data = response.data[endPoint]
        return response
      } else if (endPoint === 'password' && response.data[endPoint].email === data.email) {
        response.data = response.data[endPoint]
        return response
      } else {
        throw new Error('Incorrect username or password')
      }
    } catch (error) {
      console.log(error)
      return error
    }
  },
  loader ({ commit }, actions) {
    commit('SET_LOADER', actions)
  }
}

// mutations
const mutations = {
  'SET_LOADER' (state, actions) {
    state.loading = actions.loader === true
    state.isPasswordText = actions.password === true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
