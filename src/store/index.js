import Vue from 'vue'
import Vuex from 'vuex'
import users from '../data/data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    options: {
      page: 1,
      totalItems: 0
    },
    items: []
  },
  mutations: {
    setOptions (state, payload) {
      state.options = payload
    },
    setItems (state, { items, totalItems }) {
      state.items = items
      Vue.set(state.options, 'totalItems', totalItems)
    }
  },
  actions: {
    queryItems (context) {
      return new Promise((resolve) => {
        const { sortBy, descending, page, rowsPerPage } = context.state.options

        setTimeout(() => {
          let items = users.slice()
          const totalItems = items.length

          if (sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          context.commit('setItems', { items, totalItems })

          resolve()
        }, 1000)
      })
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    options (state) {
      return state.options
    },
    items (state) {
      return state.items
    }
  }
})
