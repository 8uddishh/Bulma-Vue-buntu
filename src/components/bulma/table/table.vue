<template>
    <table class="table">
        <thead>
            <slot name="header">
                <table-header-row v-bind:headers="headers"></table-header-row>
            </slot>
        </thead>
        <tbody>
            <slot name="body">
                <table-row v-for="row in rows" v-bind:key="row[identifier]" v-bind:rowdata="row"></table-row>
            </slot>
        </tbody>
    </table>
</template>

<script>
import tableHeaderRow from './table-header-row.vue'
import tableRow from './table-row.vue'
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
        'table-header-row': tableHeaderRow,
        'table-row': tableRow
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

