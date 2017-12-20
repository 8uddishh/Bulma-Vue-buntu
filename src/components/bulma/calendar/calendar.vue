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
            <div class="calendar-date">S</div>
            <div class="calendar-date">M</div>
            <div class="calendar-date">T</div>
            <div class="calendar-date">W</div>
            <div class="calendar-date">T</div>
            <div class="calendar-date">F</div>
            <div class="calendar-date">S</div>
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
            <div class="calendar-date"><button class="date-item is-active">16</button></div>
            <div class="calendar-date"><button class="date-item">17</button></div>
            <div class="calendar-date"><button class="date-item">18</button></div>
            <div class="calendar-date"><button class="date-item">19</button></div>
            <div class="calendar-date"><button class="date-item is-active">20</button></div>
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

<style lang="scss" scoped>
    $popup-border: #413e3b;
    $ubuntu-text-color: #eaeaea;
    $ubuntu-imprint-color: #969591;
    $ubuntu-orange: #E95420;

    .popover-content {
        .calendar {
            min-width: 10rem;
            font-size: 1rem;
            background-color: transparent;
            color: $ubuntu-text-color;

            .calendar-nav {
                font-size: 0.75rem;
                font-weight: normal;
                background-color: transparent;
                color: $ubuntu-text-color;
            }

            .calendar-container {
                background-color: transparent;
                .calendar-header {
                    font-size: 0.75rem;
                    font-weight: normal;
                    background-color: transparent;
                    color: $ubuntu-text-color;

                    .calendar-date {
                        color: $ubuntu-imprint-color;
                    }
                }
            }

            .calendar-body {
                .calendar-date {
                    padding: 6.4px 0px;
                    .date-item {
                        font-size: 0.6rem;
                        color: $ubuntu-text-color;

                        &.is-today {
                            background-color: $ubuntu-orange;
                            border-color: $ubuntu-orange;
                        }

                        &.is-active {
                            background-color: $popup-border;
                            border-color: $ubuntu-orange;
                        }

                        line-height: 1rem;
                            width: 28px;
                            height: 28px;
                    }
                }
            }
        }
    }
</style>

