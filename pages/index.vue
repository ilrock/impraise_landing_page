<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-text-field v-model="search" label="Search for a GitHub account" />
        <v-btn color="success" @click="onSearch">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <landing-page :account="selected"/>
    </v-layout>
  </v-container>
</template>

<script>
import getDetails from '../graphql'

export default {
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
      
      this.selected = res.data.search.edges[0].node
    }
  }
}
</script>
