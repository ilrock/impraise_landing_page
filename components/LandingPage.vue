<template>
  <v-layout row wrap d-flex mt-5>
    <v-card>
      <v-container grid-list-xs>
        <Header :account="account"/>
        <v-layout v-if="account.pinnedRepositories.edges.length > 0" row wrap>
          <v-flex xs12 mt-3>
            <span class="title"> Pinned Repositories </span>
          </v-flex>
          <v-flex xs12 md6 mt-3 v-for="repo in account.pinnedRepositories.edges" :key="repo.node.name">
            <repo-card :repo="repo"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 mt-3>
            <span class="title"> Repositories </span>
          </v-flex>

          <v-flex xs12 md6 mt-3 v-for="repo in account.repositories.edges" :key="repo.node.name">
            <repo-card :repo="repo"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import Header from './Header'
import RepoCard from './RepoCard'

export default {
  props: {
    account: Object
  },
  components: {
    Header,
    RepoCard
  }
}
</script>
<style>
  .dot {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
  }
</style>
