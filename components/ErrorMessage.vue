<template>
  <v-layout row wrap>
    <v-alert :value="true" type="error">
      {{ message }}
    </v-alert>
  </v-layout>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style>

</style>
