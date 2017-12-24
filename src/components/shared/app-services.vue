<template>
    <div class="services-pop-over columns">
        <div class="column">
            <bvu-tab :tabs="tabs" :selected="selected" @tabSelected="tabSelected">
                <bvu-tab-content slot="help" v-show="selected == 'help'">
                    <template>
                        <app-helps-vue :helps="helps"></app-helps-vue>
                    </template>
                </bvu-tab-content>
                <bvu-tab-content slot="downloads" v-show="selected == 'downloads'">
                    <template>
                        <app-downloads-vue :downloads="downloads"></app-downloads-vue>
                    </template>
                </bvu-tab-content>
                <bvu-tab-content slot="reportproblem" v-show="selected == 'reportproblem'">
                    <template>
                        <app-report-vue :reportIssues="reportIssues"></app-report-vue>
                    </template>
                </bvu-tab-content>
            </bvu-tab>
        </div>
    </div>
</template>

<script>
import tab from './../bulma/tab/tab.vue'
import tabContent from './../bulma/tab/tab-content.vue'
import appHelpView from './../shared/app-helps-view.vue'
import appDownloadView from './../shared/app-downloads-view.vue'
import appReportIssues from './../shared/app-report-issue.vue'
export default {
    components: {
        'bvu-tab': tab,
        'bvu-tab-content': tabContent,
        'app-helps-vue': appHelpView,
        'app-downloads-vue': appDownloadView,
        'app-report-vue': appReportIssues
    },
    props: {
        helps: {
            type: Array
        },
        downloads: {
            type: Array
        },
        reportIssues: {
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
    },
    methods: {
        tabSelected: function (selected) {
            this.selected = selected
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-imprint-color: #7a7a7a;

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
    }
</style>

