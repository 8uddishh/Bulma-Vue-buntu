<template>
    <div class="calendar">
        <div class="calendar-nav">
            <div class="calendar-nav-left">
            <button class="button is-text">
                <i class="fa fa-chevron-left"></i>
            </button>
            </div>
            <div>March 2017</div>
            <div class="calendar-nav-right">
            <button class="button is-text">
                <i class="fa fa-chevron-right"></i>
            </button>
            </div>
        </div>
        <div class="calendar-container">
            <div class="calendar-header">
            <div class="calendar-date">Sun</div>
            <div class="calendar-date">Mon</div>
            <div class="calendar-date">Tue</div>
            <div class="calendar-date">Wed</div>
            <div class="calendar-date">Thu</div>
            <div class="calendar-date">Fri</div>
            <div class="calendar-date">Sat</div>
            </div>
            <div class="calendar-body">
            <div class="calendar-date is-disabled"><button class="date-item">26</button></div>
            <div class="calendar-date is-disabled"><button class="date-item">27</button></div>
            <div class="calendar-date is-disabled"><button class="date-item">28</button></div>
            <div class="calendar-date"><button class="date-item">1</button></div>
            <div class="calendar-date"><button class="date-item">2</button></div>
            <div class="calendar-date"><button class="date-item">3</button></div>
            <div class="calendar-date tooltip" data-tooltip="Today"><button class="date-item is-today">4</button></div>
            <div class="calendar-date tooltip" data-tooltip="Not available" disabled=""><button class="date-item">5</button></div>
            <div class="calendar-date"><button class="date-item">6</button></div>
            <div class="calendar-date"><button class="date-item">7</button></div>
            <div class="calendar-date tooltip" data-tooltip="You have appointments"><button class="date-item">8</button></div>
            <div class="calendar-date"><button class="date-item">9</button></div>
            <div class="calendar-date"><button class="date-item">10</button></div>
            <div class="calendar-date"><button class="date-item">11</button></div>
            <div class="calendar-date"><button class="date-item">12</button></div>
            <div class="calendar-date"><button class="date-item">13</button></div>
            <div class="calendar-date"><button class="date-item">14</button></div>
            <div class="calendar-date"><button class="date-item">15</button></div>
            <div class="calendar-date calendar-range range-start"><button class="date-item is-active">16</button></div>
            <div class="calendar-date calendar-range"><button class="date-item">17</button></div>
            <div class="calendar-date calendar-range"><button class="date-item">18</button></div>
            <div class="calendar-date calendar-range"><button class="date-item">19</button></div>
            <div class="calendar-date calendar-range range-end"><button class="date-item is-active">20</button></div>
            <div class="calendar-date"><button class="date-item">21</button></div>
            <div class="calendar-date"><button class="date-item">22</button></div>
            <div class="calendar-date"><button class="date-item">23</button></div>
            <div class="calendar-date"><button class="date-item">24</button></div>
            <div class="calendar-date"><button class="date-item">25</button></div>
            <div class="calendar-date"><button class="date-item">26</button></div>
            <div class="calendar-date"><button class="date-item">27</button></div>
            <div class="calendar-date"><button class="date-item">28</button></div>
            <div class="calendar-date"><button class="date-item">29</button></div>
            <div class="calendar-date"><button class="date-item">30</button></div>
            <div class="calendar-date"><button class="date-item">31</button></div>
            <div class="calendar-date is-disabled"><button class="date-item">1</button></div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    props: {
    },
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="sass" scoped>
$calendar-border: none !default
$calendar-border-radius: $radius-small !default
$calendar-header-color: $primary !default
$calendar-date-hover: $white-ter !default
$calendar-today-background: transparent !default
$calendar-today-border-color: $primary !default
$calendar-today-color: $primary !default
$calendar-range-background-color: lighten($primary, 50%) !default

=css3-prefix($property, $value)
  -webkit-#{$property}: #{$value}
  -khtml-#{$property}: #{$value}
  -moz-#{$property}: #{$value}
  -ms-#{$property}: #{$value}
  -o-#{$property}: #{$value}
  #{$property}: #{$value}

=calendar
  .calendar
    background: $white
    border: $calendar-border
    border-radius: $calendar-border-radius
    display: block
    min-width: 20rem
    text-align: center
    max-width: 20rem
    &.is-active
      display: initial
    .calendar-nav
      align-items: center
      background: $calendar-header-color
      color: $white
      border-top-left-radius: $radius-small
      border-top-right-radius: $radius-small
      display: flex
      align-items: center
      justify-content: space-between
      font-size: $size-5
      padding: .5rem
      .calendar-nav-left, .calendar-nav-right
        flex-basis: auto
        flex-grow: 0
        flex-shrink: 0
        .button
          text-decoration: none
          color: $white
          &:hover
            background: transparent
            color: $white-ter
      .calendar-nav-left
        align-items: center
        justify-content: flex-start
      .calendar-nav-right
        align-items: center
        justify-content: flex-end
    .calendar-header, .calendar-body
      display: flex
      flex-wrap: wrap
      justify-content: center
      padding: .2rem 0
    .calendar-header .calendar-date, .calendar-body .calendar-date
      flex: 0 0 14.28%
      max-width: 14.28%
    .calendar-header
      background: darken($calendar-header-color, 5%)
      color: findColorInvert( $calendar-header-color )
      font-size: $size-7
    .calendar-body
      padding: 0
      color: $grey
    .calendar-date
      border: 0
      padding: .4rem
      .date-item
        appearance: none
        background: transparent
        border: .1rem solid transparent
        border-radius: 100%
        color: $text
        cursor: pointer
        height: 2.2rem
        line-height: 1.4rem
        outline: none
        padding: .3rem
        position: relative
        text-align: center
        text-decoration: none
        transition: all .2s ease
        vertical-align: middle
        white-space: nowrap
        width: 2.2rem
        &.is-today
          background: $calendar-today-background
          border-color: $calendar-today-border-color
          color: $calendar-today-color
        &:focus
          background: $calendar-date-hover
          border-color: $calendar-date-hover
          color: findColorInvert( $calendar-date-hover )
          text-decoration: none
        &:hover
          background: $calendar-date-hover
          border-color: $calendar-date-hover
          color: findColorInvert( $calendar-date-hover )
          text-decoration: none
        &.is-active
          background: $primary
          border-color: $primary
          color: findColorInvert( $primary )
      &.is-disabled,
      &[disabled]
        .date-item, .calendar-event
          cursor: default
          opacity: .25
          pointer-events: none
    .calendar-range
      position: relative
      &::before
        background: $calendar-range-background-color
        content: ""
        height: 2.2rem
        left: 0
        position: absolute
        right: 0
        top: 50%
        transform: translateY(-50%)
      &.range-start::before
        left: 50%
      &.range-end::before
        right: 50%
      .date-item
        color: $primary

    &.is-large
      max-width: 100%
      .calendar-body
        .calendar-date
          border-bottom: $calendar-border
          border-right: $calendar-border
          display: flex
          flex-direction: column
          height: 11rem
          padding: 0
          &:nth-child(7n)
            border-right: 0
          &:nth-last-child(-n+7)
            border-bottom: 0
      .date-item
        align-self: flex-end
        height: 2.2rem
        margin-right: .5rem
        margin-top: .5rem
      .calendar-range
        &::before
          top: 1.9rem
        &.range-start::before
          left: auto
          width: 1.9rem
        &.range-end::before
          right: 1.9rem
      .calendar-events
        flex-grow: 1
        line-height: 1
        overflow-y: auto
        padding: .5rem
      .calendar-event
        background-color: $grey
        border-radius: $radius-small
        color: $white
        display: block
        font-size: 1rem
        margin: .2rem auto
        overflow: hidden
        padding: .3rem .4rem
        text-align: left
        text-overflow: ellipsis
        vertical-align: baseline
        white-space: nowrap
        @each $name, $pair in $colors
          $color: nth($pair, 1)
          $color-invert: nth($pair, 2)
          &.is-#{$name}
            background-color: $color
            color: $color-invert

.datepicker
  display: none
  &.is-active
    display: flex
    .calendar
      min-width: 20rem
      max-width: 20rem
      position: relative
      margin: 0 auto
      max-height: calc(100vh - 40px)
  +calendar

+calendar
</style>
