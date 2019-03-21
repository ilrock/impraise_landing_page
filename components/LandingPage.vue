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
      <v-layout row wrap>
        <v-flex xs12 mt-3>
          <span class="title"> Pinned Repositories </span>
        </v-flex>

        <v-flex xs12 md6 mt-3 v-for="repo in account.pinnedRepositories.edges" :key="repo.node.name">
          <v-card hover class="ma-4">
            <v-card-title primary-title>
              {{ repo.node.name }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{ repo.node.description }}
            </v-card-text>
            <v-card-actions >
              <span style="display: flex; align-items: center">
                <span class="dot mr-2" :style="{ backgroundColor: repo.node.languages.edges[0].node.color }"></span>
                {{ repo.node.languages.edges[0].node.name }}
              </span>
              <v-spacer></v-spacer>
              <span class="mr-3">
                <v-icon>star</v-icon>
                {{ repo.node.stargazers.totalCount }}
              </span>
              <span>
                <v-icon>fas fa-code-branch</v-icon>
                {{ repo.node.forks.totalCount }}
              </span>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 mt-3>
          <span class="title"> Pinned Repositories </span>
        </v-flex>

        <v-flex xs12 mt-3 v-for="repo in account.repositories.edges" :key="repo.node.name">
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
