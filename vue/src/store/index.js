import Vue from 'vue'
import Vuex from 'vuex'

const state = {
  color_theme: false
}

const getters = {
  getColorTheme: (state) => {
    return state.color_theme
  },
}

const actions = {}

const mutations = {
  setColorTheme (state, data) {
    state.color_theme = data
    localStorage.setItem('color_theme', data)
  }
}


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})