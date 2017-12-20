<template>
    <tr>
        <slot v-for="header in headers" v-bind:name="header">
            <bvu-table-header-cell>
                <template slot>{{header}}</template>
            </bvu-table-header-cell>
        </slot>
    </tr>
</template>

<script>
import bvuTableHeaderCell from './table-header-cell.vue'
export default {
    props: {
        headers: {
            type: Array
        }
    },
    components: {
        'bvu-table-header-cell': bvuTableHeaderCell
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

