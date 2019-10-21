import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    position: '',
    vuex_proviceList: [],
    userName: ''
  },
  getters: {

  },
  mutations: {
    setPosition (state, value) {
      state.position = value
    },
    setProviceList (state, value) {
      state.vuex_proviceList = value
    },
    setUserName (state, value) {
      state.userName = value
    }
  },
  actions: {
    getPosition ({ commit }, value) {
      commit('setPosition', value)
    },
    getProviceList ({ commit }, value) {
      commit('setProviceList', value)
    }
  }
})
