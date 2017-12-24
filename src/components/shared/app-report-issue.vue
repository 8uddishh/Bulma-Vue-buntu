<template>
    <div class="report-container">
        <div class="columns">
            <div class="column service-header" v-if="selectedIssue">
                Report a {{selectedIssue.reportTitle}}
            </div>
            <div class="column is-one-third">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="Search Issue Types">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="columns report-body">
            <div v-if="selectedIssue" class="column service-body">
                <form>
                    <div class="field">
                        <label class="label">{{selectedIssue.reportTitle}} Type</label>
                        <div class="control">
                            <div class="select">
                            <select v-model="issueInfo.issueType">
                                <option value="0">Select a {{selectedIssue.reportTitle}} Type</option>
                                <option v-for="issue in selectedIssue.issueTypes" :key="issue.id" v-bind:value="issue.id">
                                    {{issue.issueName}}
                                </option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Describe the issue</label>
                        <div class="control">
                            <textarea v-model="issueInfo.reportDescription" class="textarea" placeholder="Short description of the issue"></textarea>
                        </div>
                    </div>
                    <div class="field is-grouped is-pulled-right">
                        <div class="control">
                            <button class="button"><i class="fa fa-paper-plane"></i> Submit</button>
                        </div>
                        <div class="control">
                            <button class="button is-link"><i class="fa fa-ban"></i> Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="column is-one-third">
                <ul v-for="issue in reportIssues" :key="issue.id" class="services">
                    <li>
                        <span class="title is-block">{{issue.reportTitle}}</span>
                        <span class="subtitle">{{issue.reportSubTitle}}</span>
                        <span v-if="issue.selected" class="fa fa-check-circle"></span>
                    </li>
                </ul>
            </div>
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
        reportIssues: {
            type: Array
        }
    },
    data () {
        return {
            issueInfo: {
                issueType: 0
            }
        }
    },
    computed: {
        selectedIssue: function () {
            if (this.reportIssues && this.reportIssues.length > 0) {
                return this.reportIssues.find(r => r.selected)
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
    $ubuntu-text-color: #eaeaea;
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-service-item-background: rgba(95,93,93, 0.8);
    $ubuntu-subtext-color: #191818;
    $ubuntu-cool-grey: #4a4a48;
    $ubuntu-orange: #E95420;
    $ubuntu-dark-border: #5a585a;
    $ubuntu-link-color: #f9faf9;

    .report-container {
        padding: 5px 0px;
    }

    .report-header {
        position: fixed;
        top: 68px;
        width: 100%;
        padding-top: 5px;

        .column {
            border-right: 1px solid transparent;
        }
    }

    .service-header {
        font-size: 0.80rem;
        font-weight: bold;
        color: #9c9b9b;
        padding: 20px 15px 5px 15px;
    }

    .column:not(:last-child) {
        border-right: 1px solid $ubuntu-imprint-color;
    }

    .service-body {
        font-size:0.75rem;
        label {
            color: #9c9b9b;
        }
        label, select, .textarea {
            font-size:0.75rem !important;
            font-weight: normal;
        }

        .select {
            width: 100%;
            background-color: transparent;
            border-color: $ubuntu-imprint-color;

            select {
                width: 100%;
                background-color: transparent;
                border-color: $ubuntu-imprint-color;
                color: $ubuntu-text-color;
            }
            &::after {
                top: 12px;
                color: $ubuntu-text-color;
            }
        }

        .textarea {
            background-color: transparent;
            border-color: $ubuntu-imprint-color;
            &::-webkit-input-placeholder {
                color: $ubuntu-text-color;
            }
        }

        .button {
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

            .fa {
                margin-right: 5px;
            }

            &:hover, &.is-active {
                background-color: $ubuntu-orange;
            }

            &.is-link {
                background-color: $ubuntu-link-color;
                color: $ubuntu-subtext-color;
                border: 1px solid $ubuntu-orange;
                border-image: linear-gradient(to bottom right, $ubuntu-orange 0%, rgb(180,59,50) 100%);
                border-image-slice: 1;
                box-shadow: 0 1px 6px 0 rgba(195, 84, 19, 0.2), 0 1px 6px 0 rgba(195, 84, 19, 0.19);

                &:hover, &.is-active {
                    background-color: $ubuntu-cool-grey;
                }
            }

            
        }

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
                    color: $ubuntu-subtext-color;
                    font-weight: bold;
                }

                .tag {
                    position: absolute;
                    font-size: 0.65rem;
                    top: 10px;
                    right: 10px;
                    color: $ubuntu-subtext-color;
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
    }
</style>

