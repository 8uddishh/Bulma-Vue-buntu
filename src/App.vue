<template>
  <div id="app">
    <app-header :apptitle="title" :appicon="icon">
      <template slot="left-links">
        <p class="control">
          <bvu-popover :text="userInfo.language" :icononly="false">
            <bvu-popover-content slot="popover-content">
              <template slot>
                <app-languages-select :languages="languages" :timezones="timezones"></app-languages-select>
              </template>
            </bvu-popover-content>
          </bvu-popover>
          <bvu-popover :icon="'fa fa-bell'" :icononly="true">
            <bvu-popover-content slot="popover-content">
              <template slot>
                <app-notifications :notifications="notifications"></app-notifications>  
              </template>
            </bvu-popover-content>
          </bvu-popover>

          <bvu-popover :icon="'fa fa-power-off'" :icononly="true">
            <bvu-popover-content slot="popover-content">
              <template slot>
                <app-user-minimum :userInfo="userInfo"></app-user-minimum>
              </template>
            </bvu-popover-content>
          </bvu-popover>
        </p>
      </template>
    </app-header>
    <app-left-aside :asidelinks="asidelinks"></app-left-aside>
    <div class="container ubuntu-container">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
    <app-launcher :applinks="applinks"></app-launcher>
  </div>
</template>

<script>
import fbaxios from './utilities/data-extensions'
import popover from './components/bulma/popover/popover.vue'
import popoverContent from './components/bulma/popover/popover-content.vue'

import appHeader from './components/shared/app-header.vue'
import appLeftAside from './components/shared/app-left-aside.vue'
import appLauncher from './components/shared/app-launcher.vue'
import appLanguagesSelect from './components/shared/app-languages-select.vue'
import appNotifications from './components/shared/app-notifications.vue'
import appUserMinimum from './components/shared/app-user-minimum.vue'

export default {
  name: 'app',
  components: {
    'bvu-popover': popover,
    'bvu-popover-content': popoverContent,
    'app-header': appHeader,
    'app-left-aside': appLeftAside,
    'app-launcher': appLauncher,
    'app-languages-select': appLanguagesSelect,
    'app-notifications': appNotifications,
    'app-user-minimum': appUserMinimum
  },
  data () {
    return {
        title: 'BulmaVuebuntu',
        icon: 'fa fa-linux',
        links: [
          {
            title: 'User Settings',
            class: 'fa fa-cog'
          },
          {
            title: 'Help',
            class: 'fa fa-question-circle'
          },
          {
            title: 'Contact Us',
            class: 'fa fa-envelope'
          },
          {
            title: 'Notifications',
            class: 'fa fa-comments'
          },
          {
            title: 'Log Off',
            class: 'fa fa-power-off'
          }
        ],
        asidelinks: [
          { title: 'Search', class: 'icon-search', href: 'search' },
          { title: 'Books', class: 'icon-books', href: 'books' },
          { title: 'Movies', class: 'icon-movies', href: 'movies' },
          { title: 'Music', class: 'icon-music', href: 'music' }
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
        ],
        userInfo: {
          name: 'Senthilkumar Baliah',
          avatar: 'https://lh3.googleusercontent.com/-wQaUAwFEBZs/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof2lDN6qOil-VKAS4rAW7S9IjMAMOw/s192-c-mo/photo.jpg',
          language: 'En',
          timezone: 'CST- Central Standard Time'
        },
        notifications: [
          {
            id: 1,
            class: 'notication-action',
            icon: 'fa fa-exclamation-circle',
            message: 'Action requires your approval'
          },
          {
            id: 2,
            class: '',
            icon: 'fa fa-user',
            message: 'You have a new permission'
          },
          {
            id: 3,
            class: 'notication-reminder',
            icon: 'fa fa-clock-o',
            message: 'Reminder for movie'
          },
          {
            id: 4,
            class: 'notication-watchlist',
            icon: 'fa fa-binoculars',
            message: 'Starwars bundle sells 1000 units'
          },
          {
            id: 5,
            class: 'notication-event',
            icon: 'fa fa-calendar',
            message: 'The Rooster Bar by John Grisham book launch'
          },
          {
            id: 6,
            class: 'notication-watchlist',
            icon: 'fa fa-binoculars',
            message: 'Your request is pending approval for 2 days'
          },
          {
            id: 7,
            class: 'notication-event',
            icon: 'fa fa-calendar',
            message: 'Marvel comics sale'
          }
        ],
        languages: [],
        timezones: []
    }
  },
  created () {
    fbaxios.get('https://basic-bot-b6287.firebaseio.com/languages.json')
      .then(data => {
        this.languages = data
      })
    fbaxios.get('https://basic-bot-b6287.firebaseio.com/timezones.json')
      .then(data => {
        this.timezones = data
      })
  }
}
</script>

<style lang="scss" scoped>
  $ubuntu-imprint-color: #7a7a7a;
  $ubuntu-settings-hover: #3a3838;

  .ubuntu-container {
        margin: 0px;
        height: 100%;
        max-width: 3000px;
        width: 100%;
        padding: 0px;
        background-color: transparent;
        padding: 0px 0px 0px 55px;
  }
</style>
