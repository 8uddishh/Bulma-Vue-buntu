<template>
    <li @click="onSelect">
        <slot>
        </slot>
    </li>
</template>

<script>
export default {
    props: {
        item: Object
    },
    data () {
        return {
        }
    },
    methods: {
        onSelect: function () {
            this.$emit('onItemSelected', this.item)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

