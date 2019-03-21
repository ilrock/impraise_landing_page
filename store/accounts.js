export const state = () => ({
  account: null
})

export const getters = {
  account (state) {
    return state.account
  }
}

export const mutations = {
  setAccount (state, payload) {
    state.account = payload
  }
}

export const actions = {
  setAccount ({ commit, dispatch }, payload) {
    commit('setAccount', payload)
    dispatch('repos/getRepos', payload.login, { root:true })
  }
}
