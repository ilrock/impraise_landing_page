<template>
  <v-card>
    <v-container grid-list-xs>
      <v-layout column wrap>
        <v-list-tile class="grow">
          <v-list-tile-avatar color="grey darken-3">
            <v-img class="elevation-6" :src="account.avatarUrl" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ account.login }} | 
              <v-icon>location_on</v-icon> {{ account.location }} | 
              <v-icon>link</v-icon> {{ account.websiteUrl }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-layout>
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
</template>

<script>
import RepoCard from '../components/RepoCard'

export default {
  props: {
    account: Object
  },
  components: {
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
