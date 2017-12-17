<template>
  <div id="app">
    <app-header v-bind:apptitle="title" v-bind:appicon="icon" v-bind:applinks="links"></app-header>
    <app-left-aside v-bind:asidelinks="asidelinks"></app-left-aside>
    <div class="container ubuntu-container">
      <router-view/>
    </div>
    <app-launcher v-bind:applinks="applinks"></app-launcher>
  </div>
</template>

<script>

import appHeader from './components/shared/app-header.vue'
import appLeftAside from './components/shared/app-left-aside.vue'
import appLauncher from './components/shared/app-launcher.vue'

export default {
  name: 'app',
  components: {
    'app-header': appHeader,
    'app-left-aside': appLeftAside,
    'app-launcher': appLauncher
  },
  data () {
    return {
        title: 'BulmaVuebuntu',
        icon: 'fa fa-linux',
        links: [
          { title: 'User Settings', class: 'fa fa-cog' },
          { title: 'Help', class: 'fa fa-question-circle' },
          { title: 'Contact Us', class: 'fa fa-envelope' },
          { title: 'Notifications', class: 'fa fa-comments' },
          { title: 'Log Off', class: 'fa fa-power-off' }
        ],
        asidelinks: [
          { title: 'Search', class: 'icon-search' },
          { title: 'Books', class: 'icon-books' },
          { title: 'Movies', class: 'icon-movies' },
          { title: 'Music', class: 'icon-music' }
        ],
        applinks: [
          { title: 'Search', class: 'icon-search' },
          { title: 'Books', class: 'icon-books' },
          { title: 'Movies', class: 'icon-movies' },
          { title: 'Music', class: 'icon-music' },
          { title: 'Games', class: 'icon-games' },
          { title: 'Memberships', class: 'icon-memberships' },
          { title: 'Orders', class: 'icon-orders' },
          { title: 'Shipments', class: 'icon-shipments' },
          { title: 'Users', class: 'icon-users' },
          { title: 'Roles', class: 'icon-roles' },
          { title: 'Settings', class: 'icon-settings' },
          { title: 'Administration', class: 'icon-admin' },
          { title: 'Bookmarks', class: 'icon-bookmark' },
          { title: 'History', class: 'icon-history' },
          { title: 'Watchlist', class: 'icon-watchlist' },
          { title: 'Market', class: 'icon-market' },
          { title: 'Cases', class: 'icon-cases' },
          { title: 'Help', class: 'icon-help' }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .ubuntu-container {
        margin: 0px 0px 0px 55px;
        height: 100%;
        max-width: 3000px;
        width: 100%;
        padding: 0px;
  }
</style>
