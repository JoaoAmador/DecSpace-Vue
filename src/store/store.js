import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    email: null,
    msg: null,
    msg2: null,
    msg3: null,
    success: null,
    success2: null,
    success3: null,
    isUserLoggedIn: false,
    project: null,
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      state.isUserLoggedIn = !!(token)
    },
    setUser (state, user) {
      state.user = user
    },
    setMsg (state, msg) {
      state.msg = msg
    },
    setMsg2 (state, msg2) {
      state.msg2 = msg2
    },
    setMsg3 (state, msg3) {
      state.msg3 = msg3
    },
    setSuccess (state, success) {
      state.success = success
    },
    setSuccess2 (state, success2) {
      state.success2 = success2
    },
    setSuccess3 (state, success3) {
      state.success3 = success3
    },
    setProject (state, project) {
      state.project = project
    },
    setEmail (state, email) {
      state.email = email
    },
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setMsg ({commit}, msg) {
      commit('setMsg', msg)
    },
    setMsg2 ({commit}, msg2) {
      commit('setMsg2', msg2)
    },
    setMsg3 ({commit}, msg3) {
      commit('setMsg3', msg3)
    },
    setSuccess ({commit}, success) {
      commit('setSuccess', success)
    },
    setSuccess2 ({commit}, success2) {
      commit('setSuccess2', success2)
    },
    setSuccess3 ({commit}, success3) {
      commit('setSuccess3', success3)
    },
    setProject ({commit}, project) {
      commit('setProject', project)
    },
    setEmail ({commit}, email) {
      commit('setEmail', email)
    },
  }
})
