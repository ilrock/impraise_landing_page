export const state = () => ({
  
})

export const actions = {
  // Autologin your users on refresh
  // Change /users/me with your current user endpoint
  async nuxtServerInit({ commit }) {
    const token = this.$cookies.get('token')
    if (token) {
      const { data: user} = await this.$axios.get('/users/me', {
        headers: {
          token
        }
      })

      commit('users/setCurrentUser', user)
    }
  }
}
