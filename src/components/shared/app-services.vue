<template>
    <div class="services-pop-over columns">
        <div class="column">
            <bvu-tab :tabs="tabs" :selected="selected" @tabSelected="tabSelected">
                <bvu-tab-content slot="help" v-show="selected == 'help'">
                    <template>
                        <div class="columns">
                            <div class="column service-header">Help Title 1</div>
                            <div class="column is-one-third">
                                <p class="control has-icons-left">
                                    <input class="input is-small" type="text" placeholder="Search">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-search"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div class="columns">
                            <div v-if="selectedHelp" class="column service-body has-scroll">
                                <p v-for="content in selectedHelp.helpContents" :key="content">
                                    {{content}}
                                </p>
                            </div>
                            <div class="column is-one-third help-list has-scroll">
                                <ul v-for="help in helps" :key="help.id" class="services">
                                    <li>
                                        <span class="title is-block">{{help.helpTitle}}</span>
                                        <span class="subtitle">{{help.helpSubTitle}}</span>
                                        <span v-if="help.selected" class="fa fa-check-circle"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </template>
                </bvu-tab-content>
            </bvu-tab>
        </div>
    </div>
</template>

<script>
import tab from './../bulma/tab/tab.vue'
import tabContent from './../bulma/tab/tab-content.vue'
export default {
    components: {
        'bvu-tab': tab,
        'bvu-tab-content': tabContent
    },
    props: {
        helps: {
            type: Array
        }
    },
    data () {
        return {
            tabs: [
                { name: 'help', text: 'help', isActive: true, icon: 'fa fa-question-circle' },
                { name: 'downloads', text: 'downloads', isActive: false, icon: 'fa fa-download' },
                { name: 'reportproblem', text: 'report a problem', isActive: false, icon: 'fa fa-exclamation-triangle' },
                { name: 'links', text: 'links', isActive: false, icon: 'fa fa-link' }
            ],
            selected: 'help'
        }
    },
    computed: {
        selectedHelp: function () {
            if (this.helps && this.helps.length > 0) {
                return this.helps.find(h => h.selected)
            }
            return null
        }
    },
    methods: {
        tabSelected: function (selected) {
            this.selected = selected
        }
    }
}
</script>

<style lang="scss" scoped>
//   $ubuntu-settings-notification: rgba(69,142,254, 0.8);
//   $ubuntu-notification-item-background: rgba(95,93,93, 0.8);
//   $ubuntu-actions-notification: rgba(199, 14, 14, 0.8);
//   $ubuntu-reminder-notification: rgba(20, 136, 81, 0.8);
//   $ubuntu-watchlist-notification: rgba(155, 96, 222, 0.8);
//   $ubuntu-events-notification: rgba(164, 171, 27, 0.8);

    $ubuntu-text-color: #eaeaea;
//   $ubuntu-cool-grey: #4a4a48;
//   $ubuntu-orange: #E95420;
//   $ubuntu-dark-border: #5a585a;
   $ubuntu-imprint-color: #7a7a7a;
   $ubuntu-service-item-background: rgba(95,93,93, 0.8);

.services-pop-over {
    min-width: 700px;
    margin: 10px 0px;

    .column {
        padding: 0px;
    }
    .column:not(:last-child) {
        border-right: 1px solid $ubuntu-imprint-color;
        &:hover {
          border-right: 1px solid transparent;
        }
    }

    .service-header {
        font-size: 0.80rem;
        font-weight: bold;
        color: #9c9b9b;
        padding: 5px 15px;
    }

    .service-body {
        font-size:0.75rem;
        max-height: 280px;
    }

    .help-list {
        max-height: 280px;
    }

    .container {
        width: 100%;
        .column {
            padding: 0px 15px;
        }

        input {
            background-color: transparent;
            border-color: $ubuntu-imprint-color;
            margin-bottom: 10px;
            &::-webkit-input-placeholder {
                color: $ubuntu-text-color;
            }
        }

        .services {
            li {
                padding: 5px 10px 2px 10px;
                min-height: 30px;
                max-width: 450px;
                border: 1px solid $ubuntu-imprint-color;
                border-radius: 5px;
                position: relative;
                background-color: $ubuntu-service-item-background;
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);
                margin-bottom: 10px;

                .title {
                    font-size: 0.75rem;
                    color: $ubuntu-text-color;
                    margin: 0px !important;
                    font-weight: normal;
                }

                .subtitle {
                    font-size: 0.65rem;
                    color: #191818;
                    font-weight: bold;
                }

                .fa {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    font-size: 1rem;
                    font-weight: bold;
                    color:#23d160;
                }
            }
        }

        .has-scroll {
            overflow-y: hidden;
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
    }
    
    
}
</style>

