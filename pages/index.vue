<template>
  <v-container grid-list-xs>
    <text-input />
    <loader v-if="loading" />
    <landing-page v-if="selected" :account="selected"/>
    <error-message v-if="error" :message="error" />
  </v-container>
</template>

<script>
import { getDetails } from '../graphql'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import TextInput from '../components/TextInput'
import LandingPage from '../components/LandingPage'

export default {
  components: {
    LandingPage,
    TextInput,
    Loader,
    ErrorMessage
  },
  data () {
    return {
      search: '',
      loading: false,
      error: null,
    }
  },
  computed: {
    selected () {
      return this.$store.getters['accounts/account']
    }
  },
  methods: {
    async onSearch () {
      try {
        this.error = null
        this.loading = true

        const { data: res } = await this.$axios.post('https://api.github.com/graphql', getDetails(this.search))

        if (res.data.search.edges.length > 0) {
          this.$store.dispatch('accounts/setAccount', res.data.search.edges[0].node)
        } else {
          throw new Error('There has been an error while fetching the account details. Make sure that the account is an organization')
        }
        
        this.loading = false
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
