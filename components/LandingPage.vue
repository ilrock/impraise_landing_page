<template>
  <v-layout row wrap d-flex mt-5>
    <v-card>
      <v-container grid-list-xs>
        <Header :account="account"/>
        <repo-list 
          v-if="account.pinnedRepositories.edges.length > 0"
          title="Pinned repositories"
          :repos="account.pinnedRepositories.edges" />
        <repo-list 
          title="Repositories"
          :searchEnabled="true"
          :repos="repos" />
        <Loader v-if="loading" />
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
import Header from './Header'
import RepoList from './RepoList'
import Loader from './Loader'

export default {
  components: {
    Header,
    RepoList,
    Loader
  },
  data () {
    return {
      bottom: false,
      loading: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
  },
  computed: {
    account () {
      return this.$store.getters['accounts/account']
    },
    repos () {
      return this.$store.getters['repos/repos']
    }
  },
  watch: {
    bottom (bottom) {
      if (bottom) {
        this.addRepos()
      }
    }
  },
  methods: {
    bottomVisible () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY + 500 >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
    async addRepos () {
      this.loading = true

      await this.$store.dispatch('repos/loadMore')

      this.loading = false
    }
  }
}
</script>
