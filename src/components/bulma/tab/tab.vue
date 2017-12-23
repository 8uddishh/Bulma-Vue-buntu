<template>
    <div>
        <div class="tabs is-right">
            <ul>
                <bvu-tab-link @tabSelected="tabSelected" v-for="tab in tabs" :key="tab.name"  :tab="tab"></bvu-tab-link>
            </ul>
        </div>
        <slot v-for="tab in tabs" :name="tab.name">
            <bvu-tab-content v-show="selected == tab.name">
                <template>
                    Tab content for {{tab.name}}
                </template>
            </bvu-tab-content>
        </slot>
    </div>
</template>

<script>
import tabLink from './tab-link.vue'
import tabContent from './tab-content.vue'
export default {
    props: {
        tabs: {
            type: Array
        },
        selected: {
            type: String
        }
    },
    components: {
        'bvu-tab-link': tabLink,
        'bvu-tab-content': tabContent
    },
    data () {
        return {
        }
    },
    methods: {
        tabSelected: function (selected) {
            this.selected = selected
            this.tabs.filter(t => t.isActive)
                .forEach(t => {
                    if (t.name !== selected) {
                        t.isActive = false
                    }
                })
            this.$emit('tabSelected', selected)
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-text-color: #eaeaea;

    .popover-content {
        .container {
            width: 100%;
            .column {
                padding: 0px 15px;
            }
        }
        .tabs {
            font-size: 0.75rem;
            margin-bottom: 20px;

            ul {
                border-bottom-color: $ubuntu-imprint-color;
            }
        }
    }
</style>

