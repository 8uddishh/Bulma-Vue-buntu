<template>
    <tr>
        <slot v-for="(data, key) in rowdata" v-bind:name="key">
            <table-cell>
                <template slot>{{data}}</template>
            </table-cell>
        </slot>
    </tr>
</template>

<script>
import tableCell from './table-cell.vue'
export default {
    props: {
        rowdata: {
            type: Object
        }
    },
    components: {
        'table-cell': tableCell
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

