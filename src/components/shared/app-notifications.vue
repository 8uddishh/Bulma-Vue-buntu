<template>
    <div class="notifications-pop-over columns">
        <div class="column">
            <div class="is-uppercase notification-header">
                Notifications
            </div>
            <ul class="notifications">
                <li v-for="notification in notifications" :key="notification.id">
                    {{notification.message}}
                    <div class="notification-icon" :class="notification.class">
                        <i :class="notification.icon"></i>
                    </div>
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
      font-size: 0.75rem;
      font-weight: normal;
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
    .column:not(:last-child) {
        border-right: 1px solid $ubuntu-imprint-color;
    }
  }
</style>

