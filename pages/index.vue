<template>
  <v-container grid-list-xs>
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <v-autocomplete
          v-model="selected"
          :search-input.sync="search"
          :items="accounts"
          hide-no-data
          hide-selected
          item-value="login"
          item-text="login"
          label="Search GitHub Accounts"
          prepend-icon="mdi-database-search"
          return-object>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-tile-content v-text="data.item"></v-list-tile-content>
            </template>
            <template v-else>
              <v-list-tile-avatar>
                <img :src="data.item.avatar_url">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title> {{ data.item.login }}</v-list-tile-title>
              </v-list-tile-content>
            </template>
          </template>
        </v-autocomplete>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      search: null,
      accounts: []
    }
  },
  watch: {
    async search (val) {
      if (val.length > 2) {
        const { data: accounts } = await this.$axios(`https://api.github.com/search/users?q=${val}`)
        this.accounts = accounts.items
      } else this.accounts = []
    },
  },
  methods: {
    onLogin () {
      this.$auth.loginWith('github')
        .then((res) => {})
    }
  }
}
</script>
