<template>
    <tr>
        <slot v-for="header in headers" v-bind:name="header">
            <table-header-cell>
                <template slot>{{header}}</template>
            </table-header-cell>
        </slot>
    </tr>
</template>

<script>
import tableHeaderCell from './table-header-cell.vue'
export default {
    props: {
        headers: {
            type: Array
        }
    },
    components: {
        'table-header-cell': tableHeaderCell
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

