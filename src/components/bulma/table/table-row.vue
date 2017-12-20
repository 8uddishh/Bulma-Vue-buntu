<template>
    <tr>
        <slot v-for="(data, key) in rowdata" v-bind:name="key">
            <bvu-table-cell>
                <template slot>{{data}}</template>
            </bvu-table-cell>
        </slot>
    </tr>
</template>

<script>
import bvuTableCell from './table-cell.vue'
export default {
    props: {
        rowdata: {
            type: Object
        }
    },
    components: {
        'bvu-table-cell': bvuTableCell
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

