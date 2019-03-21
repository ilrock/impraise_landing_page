<template>
  <v-layout row wrap d-flex mt-5>
    <v-card>
      <v-container grid-list-xs>
        <Header :account="account"/>
        <repo-list 
          v-if="account.pinnedRepositories.edges.length > 0" 
          title="Pinned repositories"
          :repos="account.pinnedRepositories.edges" />
        <repo-list 
          v-if="repos.length > 0" 
          title="Repositories"
          :repos="repos" />
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import Header from './Header'
import RepoList from './RepoList'

export default {
  components: {
    Header,
    RepoList
  },
  computed: {
    account () {
      return this.$store.getters['accounts/account']
    },
    repos () {
      return this.$store.getters['repos/repos']
    }
  }
}
</script>
