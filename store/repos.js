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
  },
  appendToRepos (state, payload) {
    state.repos = [...state.repos, ...payload]
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
      dispatch('getRepos', rootState.accounts.account.login)
    }    
  },
  loadMore ({ commit, state, rootState }) {
    return new Promise(async (resolve) => {
      const login = rootState.accounts.account.login
      const last = state.repos[state.repos.length - 1].cursor

      console.log(last)

      const { data: res} = await this.$axios.post('https://api.github.com/graphql', getRepos(login, last))

      resolve()
      commit('appendToRepos', res.data.search.edges)
    })
  },
}
