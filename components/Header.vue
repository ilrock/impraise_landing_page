<template>
  <v-layout column wrap class="mb-5">
    <v-list-tile avatar class="grow">
      <v-list-tile-avatar>
        <v-img :src="account.avatarUrl" />
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ account.login }}
        </v-list-tile-title>
        <v-list-tile-sub-title>
           <v-icon>location_on</v-icon> {{ account.location }}
        </v-list-tile-sub-title>
        <v-list-tile-sub-title>
          <a :href="account.websiteUrl"> <v-icon>link</v-icon> {{ account.websiteUrl }} </a>
        </v-list-tile-sub-title>
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
