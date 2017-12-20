<template>
    <table class="table">
        <thead>
            <slot name="header">
                <bvu-table-header-row v-bind:headers="headers"></bvu-table-header-row>
            </slot>
        </thead>
        <tbody>
            <slot name="body">
                <bvu-table-row v-for="row in rows" v-bind:key="row[identifier]" v-bind:rowdata="row"></bvu-table-row>
            </slot>
        </tbody>
    </table>
</template>

<script>
import bvuTableHeaderRow from './table-header-row.vue'
import bvuTableRow from './table-row.vue'
export default {
    props: {
        headers: {
            type: Array
        },
        rows: {
            type: Array
        },
        identifier: {
            type: String
        }
    },
    components: {
        'bvu-table-header-row': bvuTableHeaderRow,
        'bvu-table-row': bvuTableRow
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
</style>

