import { getRepos } from '../graphql'

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
  }
}
