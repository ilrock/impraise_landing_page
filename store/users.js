export const state = () => ({
  currentUser: null
})

export const getters = {
  currentUser (state) {
    return state.currentUser
  }
}

export const mutations = {
  setCurrentUser (state, payload) {
    state.currentUser = payload
  }
}

export const actions = {
  async createAccount ({ commit }, { email, password, name}) {
    const { data: user, headers } = await this.$axios.post('/users', { email, password, name})

    this.$cookies.set('token', headers['x-auth-token'])
    commit('setCurrentUser', user)
  },
  async login ({ commit }, { email, password }) {
    const { data: user, headers } = await this.$axios.post('/auth/login', { email, password })

    this.$cookies.set('token', headers['x-auth-token'])
    commit('setCurrentUser', user)
  },
  async getCurrentUser({ commit }) {
    const { data: user } = await this.$axios.get('/users/me')
    commit('setCurrentUser', user)
  }
}

// export const state = () => ({
  
// })

// export const getters = {

// }

// export const mutations = {
  
// }

// export const actions = {

// }
