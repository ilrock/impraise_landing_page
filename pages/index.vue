<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-input>
          <v-text-field v-model="search" label="Search for a GitHub organization" />
          <template slot="append">
            <v-btn color="primary" @click="onSearch">Search</v-btn>
          </template>
        </v-input> 
      </v-flex>
    </v-layout>
    <v-layout v-if="loading" row wrap text-xs-center class="loading-container">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
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
      loading: false,
      selected: null
    }
  },
  methods: {
    async onSearch () {
      const handle = this.search
      this.loading = true
      const { data: res } = await this.$axios.post('https://api.github.com/graphql', getDetails(handle))
      this.selected = res.data.search.edges[0].node
      this.loading = false
    }
  }
}
</script>
<style>
  .loading-container {
    display: flex;
    justify-content: center;
  }
</style>
