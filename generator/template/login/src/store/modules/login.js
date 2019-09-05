import axios from 'axios'
import jwt from 'jsonwebtoken'
const axiosConfig = {
  baseURL: 'http://localhost:5000/api'
}
axios.defaults.headers.post['Content-Type'] = 'application/json'
const HTTP = axios.create(axiosConfig)

// state
const state = {
  isLoggedIn: false,
  userData: {},
  loader: {
    active: false,
    action: 'login'
  }
}

// getters
const getters = {

  loader () {
    return state.loader
  }

}

// actions
const actions = {

  async login ({ commit }, { keepMeLogged, ...credentials }) {
    try {
      commit('SET_LOADER', { active: true, action: 'login' })
      const { data } = await HTTP.post('login', { ...credentials }) || {}
      commit('SET_USER_DATA', { data, keepMeLogged })
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      commit('SET_LOADER', { active: false })
    }
  },

  async register ({ commit }, credentials) {
    try {
      commit('SET_LOADER', { active: true, action: 'register' })
      await HTTP.post('register', credentials)
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      commit('SET_LOADER', { active: false })
    }
  },

  async confirmRegister ({ commit }, { token }) {
    try {
      commit('SET_LOADER', { active: true, action: 'confirm' })
      await HTTP.post('confirm-register', { token })
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      commit('SET_LOADER', { active: false })
    }
  },

  async resetPassword ({ commit }, { email }) {
    try {
      commit('SET_LOADER', { active: true, action: 'reset' })
      console.log('email', email)
      await HTTP.post('reset-password', { email })
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      commit('SET_LOADER', { active: false })
    }
  },

  async generatePassword ({ commit }, { password, token }) {
    try {
      commit('SET_LOADER', { active: true, action: 'generate' })
      await HTTP.post('generate-password', { password, token })
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      commit('SET_LOADER', { active: false })
    }
  },

  restoreSession ({ commit }) {
    try {
      const tokenizedData = sessionStorage['onesait-sso']
      if (!tokenizedData) return false
      const data = jwt.decode(tokenizedData, 'onesait-sso')
      commit('SET_USER_DATA', { data })
      return true
    } catch (error) {
      return false
    }
  },

  logout ({ commit }) {
    commit('DESTROY_SESSION')
  },

  setUserData ({ commit }, data) {
    commit('SET_USER_DATA', data)
  },

  loader ({ commit }, loader) {
    commit('SET_LOADER', loader)
  }

}

// mutations
const mutations = {

  'SET_LOADER' (state, { active, action }) {
    state.loader.active = active
    state.loader.action = action
  },

  'SET_USER_DATA' (state, { data, keepMeLogged }) {
    state.userData = data
    state.isLoggedIn = true
    if (keepMeLogged) {
      const tokenizedData = jwt.sign(data, 'onesait-sso')
      sessionStorage['onesait-sso'] = tokenizedData
    }
  },

  'DESTROY_SESSION' (state) {
    state.userData = {}
    sessionStorage.removeItem('onesait-sso')
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
