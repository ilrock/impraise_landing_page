<template>
  <v-card hover class="ma-4" :href="repo.node.url" target="_blank">
    <v-card-title primary-title class="title">
      {{ repo.node.name }}   
    </v-card-title>
    <small class="pl-3"> Last updated on {{ repo.node.updatedAt.split('T')[0] }}</small>
    <v-divider class="mt-3"></v-divider>
    <v-card-text>
      {{ repo.node.description }}
    </v-card-text>
    <v-card-actions class="card-footer">
      <span v-if="repo.node.languages.edges.length > 0" style="display: flex; align-items: center">
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
      <span v-if="repo.node.licenseInfo" class="ml-3">
        <v-icon>fas fa-certificate</v-icon>
        {{ repo.node.licenseInfo.name.split(' ')[0] }}
      </span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    repo: Object
  }
}
</script>

<style>
.card-footer {
  font-weight: 100;
  font-size: 12px;
}
</style>
