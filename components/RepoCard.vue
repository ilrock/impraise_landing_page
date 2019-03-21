<template>
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
</template>

<script>
export default {
  props: {
    repo: Object
  }
}
</script>

<style>

</style>
