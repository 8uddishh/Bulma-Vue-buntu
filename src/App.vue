<template>
  <div id="app">
    <app-header :apptitle="title" :appicon="icon">
      <template slot="left-links">
        <p class="control">
          <bvu-popover :icon="'fa fa-bell'">
            <bvu-popover-content slot="popover-content">
              <template slot>
                <div id="notifications-pop-over" class="columns">
                  <div class="column">
                    <div class="is-uppercase notification-header">
                      Notifications
                    </div>
                    <ul class="notifications">
                      <li v-for="notification in notifications" :key="notification.id">
                        {{notification.message}}
                        <div class="notification-icon" :class="notification.class"><i :class="notification.icon"></i></div>
                      </li>
                    </ul>
                  </div>
                  <div class="column is-two-fifths">
                    <bvu-calendar></bvu-calendar>
                    <div class="is-pulled-right">
                      <a class="button">
                        <span class="tag is-light">10</span>
                        <span>Actions Required</span>
                      </a>
                    </div>
                  </div>
                </div>
              </template>
            </bvu-popover-content>
          </bvu-popover>

          <bvu-popover :icon="'fa fa-power-off'">
            <bvu-popover-content slot="popover-content">
              <template slot>
                <div id="user-pop-over" class="columns">
                  <div class="column is-one-third avatar">
                    <ul>
                      <li><img :src="userInfo.avatar" /></li>
                      <li><a class="button is-link is-block">Change</a></li>
                    </ul>
                    
                  </div>
                  <div class="column">
                    <ul>
                      <li><a class="button is-link"><i class="fa fa-user"></i> {{userInfo.name}}</a></li>
                      <li><a class="button is-link"><i class="fa fa-key fa-rotate-180"></i> Manage credentials</a></li>
                      <li><a class="button is-link"><i class="fa fa-tasks"></i> Manage activities</a></li>
                      <li><a class="button is-link"><i class="fa fa-cogs"></i> Manage widgets</a></li>
                      <li><a class="button is-link"><i class="fa fa-globe"></i> {{userInfo.language}}</a></li>
                      <li><a class="button is-link"><i class="fa fa-clock-o"></i> {{userInfo.timezone}}</a></li>
                    </ul>
                    <ul class="setting-option">
                      <li><a class="button is-link"><i class="fa fa-cog"></i></a></li>
                      <li><a class="button is-link"><i class="fa fa-lock"></i></a></li>
                      <li><a class="button is-link"><i class="fa fa-power-off"></i></a></li>
                    </ul>
                  </div>
                </div>
                
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
import popover from './components/bulma/popover/popover.vue'
import popoverContent from './components/bulma/popover/popover-content.vue'
import calendar from './components/bulma/calendar/calendar.vue'

import appHeader from './components/shared/app-header.vue'
import appLeftAside from './components/shared/app-left-aside.vue'
import appLauncher from './components/shared/app-launcher.vue'

export default {
  name: 'app',
  components: {
    'bvu-popover': popover,
    'bvu-popover-content': popoverContent,
    'bvu-calendar': calendar,
    'app-header': appHeader,
    'app-left-aside': appLeftAside,
    'app-launcher': appLauncher
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
          language: 'English',
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
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
  $ubuntu-text-color: #eaeaea;
  $ubuntu-settings-hover: #3a3838;
  $ubuntu-imprint-color: #7a7a7a;

  $ubuntu-settings-notification: rgba(69,142,254, 0.8);
  $ubuntu-notification-item-background: rgba(95,93,93, 0.8);
  $ubuntu-actions-notification: rgba(199, 14, 14, 0.8);
  $ubuntu-reminder-notification: rgba(20, 136, 81, 0.8);
  $ubuntu-watchlist-notification: rgba(155, 96, 222, 0.8);
  $ubuntu-events-notification: rgba(164, 171, 27, 0.8);
  
  $ubuntu-dark-border: #5a585a;
  $ubuntu-cool-grey: #4a4a48;
  $ubuntu-orange: #E95420;

  .ubuntu-container {
        margin: 0px;
        height: 100%;
        max-width: 3000px;
        width: 100%;
        padding: 0px;
        background-color: transparent;
        padding: 0px 0px 0px 55px;
  }

  .popover-content {

    .columns {
      .column:not(:last-child) {
        border-right: 1px solid $ubuntu-imprint-color;
      }
    }

    ul {
      font-size: 0.75rem;
      font-weight: normal;
      li {
        .is-link {
          font-size: 0.75rem;
          font-weight: normal;
          background-color: transparent;
          border-color: transparent;
          color: $ubuntu-text-color;
          &:hover {
            color: $ubuntu-text-color;
          }

          i {
            margin-right: 10px;
          }
        }
      }
    }

    .setting-option {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top: 10px;

      .is-link {
        border-radius: 50%;
        border: 1px $ubuntu-imprint-color solid;
        height: 35px;
        width: 35px;
        transition: 0.5s all ease;
        box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);

        .fa {
          margin: 0px;
          font-size: 1rem;
        }

        &:hover {
          background-color: $ubuntu-settings-hover;
          border: 1px $ubuntu-imprint-color solid;
        }
      }
    }

    hr {
      margin: 10px 0px 10px 0px;
      border-top: 1px solid $ubuntu-imprint-color;
      color: $ubuntu-imprint-color;
    }
  }

  #user-pop-over {
    min-width: 300px;
    margin: 10px;
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      img {
        height: 75px;
        width: 75px;
        max-width: none;
        max-height: none;
        border-radius: 50%;
        border: 1px $ubuntu-imprint-color solid;
        box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);
      }
    }
  }

  #notifications-pop-over {
    min-width: 700px;
    margin: 10px;

    a {
      font-size: 0.75rem;
      background-color: $ubuntu-cool-grey;
      min-width: 150px;
      color: $ubuntu-text-color;
      border: 1px solid $ubuntu-dark-border;
      font-weight: normal;
      margin-top: 10px;
      border: 1px solid white;
      border-image: linear-gradient(to bottom right, $ubuntu-imprint-color 0%, #8f94a9 100%);
	    border-image-slice: 1;
      height: 2rem;
      transition: all 0.5s ease;
      box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);

      .tag {
        margin-right: 5px;
        border-radius: 10px;
        padding: 0px 5px;
        font-size: 0.6rem;
      }

      &:hover, &.is-active {
        background-color: $ubuntu-orange;
      }
    }

    .notification-header {
      color: $ubuntu-imprint-color;
      font-size: 0.75rem;
      margin-bottom: 10px;
      font-weight: normal;
    }

    .is-two-fifths {
      max-width: 240px;
    }

    .notifications {
      li {
        padding: 10px 10px 10px 80px;
        min-height: 50px;
        max-width: 410px;
        border: 1px solid $ubuntu-imprint-color;
        border-radius: 5px;
        position: relative;
        background-color: $ubuntu-notification-item-background;
        margin-bottom: 10px;
        box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);

        .notification-icon {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 60px;
          background-color: $ubuntu-settings-notification;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:after {
            width: 0; 
            height: 0; 
            position:absolute;
            left: 60px;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid $ubuntu-settings-notification;
            content: '';
          }

          &.notication-action {
            background-color: $ubuntu-actions-notification;

            &:after {
              border-left: 10px solid $ubuntu-actions-notification;
            }
          }

          &.notication-reminder {
            background-color: $ubuntu-reminder-notification;

            &:after {
              border-left: 10px solid $ubuntu-reminder-notification;
            }
          }

          &.notication-watchlist {
            background-color: $ubuntu-watchlist-notification;

            &:after {
              border-left: 10px solid $ubuntu-watchlist-notification;
            }
          }

          &.notication-event {
            background-color: $ubuntu-events-notification;

            &:after {
              border-left: 10px solid $ubuntu-events-notification;
            }
          }

          .fa {
            font-size: 2rem;
          }
        }
      }
    }
  }
</style>
