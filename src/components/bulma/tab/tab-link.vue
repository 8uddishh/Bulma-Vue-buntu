<template>
    <li :class="{ 'is-active': tab.isActive }">
        <a class="is-capitalized" @click.prevent="select"><i :class="tab.icon"></i> {{tab.text}}</a>
    </li>
</template>

<script>
export default {
    props: {
        tab: {
            type: Object
        }
    },
    components: {
    },
    data () {
        return {
        }
    },
    methods: {
        select: function () {
            this.tab.isActive = true
            this.$emit('tabSelected', this.tab.name)
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-text-color: #eaeaea;
    a {
        color: $ubuntu-imprint-color;
        border-bottom-color: $ubuntu-imprint-color;

        &:hover {
            color: $ubuntu-text-color;
            border-bottom-color: $ubuntu-text-color;
        }

        .fa {
            margin-right: 5px;
        }
    }

    .is-active {
        a {
            color: $ubuntu-text-color !important;
            border-bottom-color: $ubuntu-text-color !important;
        }
    }
</style>

