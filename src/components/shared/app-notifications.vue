<template>
    <div class="notifications-pop-over columns">
        <div class="column">
            <div class="notif-container">
              <ul class="notifications">
                <li v-for="notification in notifications" :key="notification.id">
                    {{notification.message}}
                    <div class="notification-icon" :class="notification.class">
                        <i :class="notification.icon"></i>
                    </div>
                </li>
              </ul>
              <div class="is-uppercase notification-header">
                Notifications
              </div>
            </div>
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

<script>
import calendar from './../bulma/calendar/calendar.vue'
export default {
    components: {
        'bvu-calendar': calendar
    },
    props: {
        notifications: Array
    }
}
</script>

<style lang="scss" scoped>
  $ubuntu-settings-notification: rgba(69,142,254, 0.8);
  $ubuntu-notification-item-background: rgba(95,93,93, 0.8);
  $ubuntu-actions-notification: rgba(199, 14, 14, 0.8);
  $ubuntu-reminder-notification: rgba(20, 136, 81, 0.8);
  $ubuntu-watchlist-notification: rgba(155, 96, 222, 0.8);
  $ubuntu-events-notification: rgba(164, 171, 27, 0.8);

  $ubuntu-text-color: #eaeaea;
  $ubuntu-cool-grey: #4a4a48;
  $ubuntu-orange: #E95420;
  $ubuntu-dark-border: #5a585a;
  $ubuntu-imprint-color: #7a7a7a;

.notifications-pop-over {
    min-width: 700px;
    margin: 10px 0px;

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
      position: fixed;
      top: 20px;
      width: 60%;
      padding-bottom: 5px;
      background-color: $ubuntu-cool-grey;
    }

    .is-two-fifths {
      max-width: 240px;
    }

    .notif-container {
      max-height: 320px;
      overflow-y: hidden;
      position: relative;

      &:hover {
        overflow-y: scroll;
      }

      &::-webkit-scrollbar-track
      {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: $ubuntu-imprint-color; // #F5F5F5;
      }

      &::-webkit-scrollbar
      {
        width: 8px;
        background-color: $ubuntu-imprint-color; // #F5F5F5;
      }

      &::-webkit-scrollbar-thumb
      {
        background-image: -webkit-gradient(linear, left bottom, left top, 
          color-stop(0.44, #9a9ca2), color-stop(0.72, #5f6165), color-stop(0.86, #5a606d));
      }
    }

    .notifications {
      font-size: 0.75rem;
      font-weight: normal;
      margin-top: 30px;
      li {
        padding: 10px 10px 10px 80px;
        min-height: 50px;
        max-width: 430px;
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
    .column:first-child {
      padding: 12px 10px 12px 0px;
    }
    .column:not(:last-child) {
        border-right: 1px solid $ubuntu-imprint-color;
        &:hover {
          border-right: 1px solid transparent;
        }
    }
  }
</style>

