import { createStore } from 'vuex'

const store = createStore({
  state: {
    selectedCat: null
  },
  getters: {
    category: state => {
      return state.selectedCat
    }
  },
  mutations: {
    setCat (state, cat) {
      state.selectedCat = cat
    }
  }
})

export default store
