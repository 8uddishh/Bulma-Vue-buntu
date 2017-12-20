<template>
    <div class="popover-content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String
        },
        icononly: {
            type: Boolean
        },
        text: {
            type: String
        }
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

