<template>
    <div class="calendar">
        <div class="calendar-nav">
            <div class="calendar-nav-left">
            <button class="button is-text">
                <i class="fa fa-chevron-left"></i>
            </button>
            </div>
            <div>{{consts.months[month]}} {{year}}</div>
            <div class="calendar-nav-right">
            <button class="button is-text">
                <i class="fa fa-chevron-right"></i>
            </button>
            </div>
        </div>
        <div class="calendar-container">
            <div class="calendar-header">
            <div class="calendar-date" v-for="(day, index) in consts.weekdaysShort" :key="index">{{day}}</div>
            </div>
            <div class="calendar-body">
                <div v-for="day in days" :key="day.id" class="calendar-date" 
                    :class="{'is-disabled': day.isDisabled}">
                    <button class="date-item" :class="{'is-today': day.isToday, 'is-active': day.isSelected}">{{day.day}}</button>
                </div>
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
            nowDate: null,
            consts: {
                weekStart: 1,
                previousMonth: 'Previous Month',
                nextMonth: 'Next Month',
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
            }
        }
    },
    methods: {
        isLeapYear: function (year) {
            // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        },
        getDaysInMonth: function (year, month) {
            return [31, this.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
        },
        compareDates: function (a, b) {
            // weak date comparison (use setToStartOfDay(date) to ensure correct result)
            console.log(a.getTime(), b.getTime(), a.getTime() === b.getTime())
            return a.getTime() === b.getTime()
        }
    },
    computed: {
        month: function () {
            if (this.nowDate) {
                return this.nowDate.getMonth()
            }
            return 0
        },
        year: function () {
            if (this.nowDate) {
                return this.nowDate.getFullYear()
            }
            return 0
        },
        days: function () {
            let daysarr = []
            if (this.nowDate) {
                let days = this.getDaysInMonth(this.year, this.month)
                let before = new Date(this.year, this.month, 1).getDay()
                if (this.consts.weekStart > 0) {
                    before -= this.consts.weekStart - 1
                    if (before < 0) {
                        before += 7
                    }
                }

                let cells = days + before
                let after = cells
                while (after > 7) {
                    after -= 7
                }
                cells += 7 - after

                for (var i = 0; i < cells; i++) {
                    let day = new Date(this.year, this.month, 1 + (i - before))
                    let isBetween = false
                    let isSelected = false
                    let isSelectedIn = false
                    let isSelectedOut = false
                    let isToday = this.compareDates(day, this.nowDate)
                    let isEmpty = i < before || i >= (days + before)
                    let isDisabled = false

                    if (!isSelected) {
                        isSelectedIn = false
                        isSelectedOut = false
                    }

                    if (day.getMonth() !== this.month) {
                        isDisabled = true
                    }

                    daysarr.push({
                        id: i,
                        day: day.getDate(),
                        isSelected: isSelected,
                        isToday: isToday,
                        isDisabled: isDisabled,
                        isEmpty: isEmpty,
                        isBetween: isBetween,
                        isSelectedIn: isSelectedIn,
                        isSelectedOut: isSelectedOut
                    })
                }
            }

            return daysarr
        }
    },
    created () {
        this.nowDate = new Date()
        this.nowDate.setHours(0, 0, 0, 0)
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

                .fa {
                    color:$ubuntu-imprint-color;
                }
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

                        &:hover, &.is-active {
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

