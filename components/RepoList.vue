<template>
  <v-layout row wrap>
    <v-flex xs12 mt-3>
      <span class="title"> {{ title }} </span>
    </v-flex>
    <v-flex xs12 md6 mt-3 v-for="repo in repos" :key="repo.node.name">
      <repo-card :repo="repo"/>
    </v-flex>
  </v-layout>
</template>

<script>
import RepoCard from './RepoCard'

export default {
  components: {
    RepoCard
  },
  props: {
    repos: Array,
    title: String
  }
}
</script>

<style>

</style>
