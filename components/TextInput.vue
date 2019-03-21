<template>
  <v-layout row wrap>
    <v-flex xs12 md6 offset-md3>
      <v-input>
        <v-text-field v-model="$parent.search" label="Search for a GitHub organization" />
        <template slot="append">
          <v-btn color="primary" @click="$parent.onSearch">Search</v-btn>
        </template>
      </v-input> 
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
