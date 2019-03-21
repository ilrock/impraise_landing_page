import { getRepos, searchRepos } from '../graphql'

export const state = () => ({
  repos: []
})

export const getters = {
  repos (state) {
    return state.repos
  }
}

export const mutations = {
  setRepos (state, payload) {
    state.repos = payload
  }
}

export const actions = {
  async getRepos ({ commit }, payload) {
    const { data: res} = await this.$axios.post('https://api.github.com/graphql', getRepos(payload))
    commit('setRepos', res.data.search.edges)
  },
  async search ({ rootState, commit, dispatch }, payload) {
    if (payload.length > 0) {
      const { data: res } = await this.$axios.post('https://api.github.com/graphql', searchRepos(payload, rootState.accounts.account.login))
      commit('setRepos', res.data.search.edges)
    } else {
      console.log('all repos')
      dispatch('getRepos', rootState.accounts.account.login)
    }    
  }
}
