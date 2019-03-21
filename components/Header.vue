<template>
  <v-layout column wrap class="mb-5">
    <v-list-tile class="grow">
      <v-list-tile-avatar color="grey darken-3">
        <v-img class="elevation-6" :src="account.avatarUrl" />
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ account.login }} | 
          <v-icon>location_on</v-icon> {{ account.location }} |
          <a :href="account.websiteUrl"> <v-icon>link</v-icon> {{ account.websiteUrl }} </a>
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-layout>
</template>

<script>
export default {
  props: {
    account: Object
  }
}
</script>

<style>

</style>
