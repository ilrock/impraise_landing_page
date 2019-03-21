<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-text-field v-model="search" label="Search for a GitHub account" />
        <v-btn color="success" @click="onSearch">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="selected" row wrap d-flex mt-5>
      <landing-page :account="selected"/>
    </v-layout>
  </v-container>
</template>

<script>
import getDetails from '../graphql'
import LandingPage from '../components/LandingPage'

export default {
  components: {
    LandingPage
  },
  data () {
    return {
      search: '',
      selected: null
    }
  },
  methods: {
    onLogin () {
      this.$auth.loginWith('github')
        .then((res) => {})
    },
    async onSearch () {
      const handle = this.search
      const { data: res } = await this.$axios.post('https://api.github.com/graphql', getDetails(handle))
      console.log(res.data.search.edges[0].node)
      this.selected = res.data.search.edges[0].node
    }
  }
}
</script>
