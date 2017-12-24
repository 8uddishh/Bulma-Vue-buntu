<template>
    <div class="services-pop-over columns">
        <div class="column">
            <bvu-tab :tabs="tabs" :selected="selected" @tabSelected="tabSelected">
                <bvu-tab-content slot="help" v-show="selected == 'help'">
                    <template>
                        <app-helps-vue :helps="helps"></app-helps-vue>
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
export default {
    components: {
        'bvu-tab': tab,
        'bvu-tab-content': tabContent,
        'app-helps-vue': appHelpView
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

