import { getDetails } from '../graphql'

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
  resetAccount ({ commit }) {
    commit('setAccount', null)
  },
  setAccount ({ commit, dispatch }, payload) {
    commit('setAccount', payload)
    dispatch('repos/getRepos', payload.login, { root:true })
  },
  async getAccount ({ dispatch }, payload) {
    const { data: res } = await this.$axios.post('https://api.github.com/graphql', getDetails(payload))

    if (res.data.search.edges.length > 0) {
      dispatch('setAccount', res.data.search.edges[0].node)
    } else {
      throw new Error('There has been an error while fetching the account details. Make sure that the account is an organization')
    }
  }
}
