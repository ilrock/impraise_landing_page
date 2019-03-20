<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-text-field v-model="search" label="Search for a GitHub account"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    onLogin () {
      this.$auth.loginWith('github')
        .then((res) => {})
    }
  }
}
</script>
