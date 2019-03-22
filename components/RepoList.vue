<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 mt-3>
        <span class="title"> {{ title }} </span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md6 v-if="searchEnabled">
        <v-text-field v-model="search" label="Search repo by name"/>
      </v-flex>
    </v-layout>
    <v-layout v-if="repos.length === 0" row wrap>
      <span> 
        There are no {{ title.toLowerCase() }}
        <span v-if="search.length > 0"> matching your search </span>
      </span>
    </v-layout>    
    <v-layout v-else row wrap>
      <v-flex xs12 md6 mt-3 v-for="repo in repos" :key="repo.node.url">
        <repo-card :repo="repo"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RepoCard from './RepoCard'

export default {
  components: {
    RepoCard
  },
  props: {
    repos: Array,
    title: String,
    searchEnabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (val) {
      this.$store.dispatch('repos/search', val)
    }
  }
}
</script>

<style>

</style>
