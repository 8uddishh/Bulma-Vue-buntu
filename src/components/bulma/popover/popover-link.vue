<template>
    <a class="button" :class="vclass">
        <span v-if="icononly" class="icon is-small">
            <i :class="icon" ></i>
        </span>
        <span v-else>
            <i v-if="icon" :class="icon" ></i>{{text}}
        </span>
    </a>
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
        },
        vclass: {
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
    $alt-color: #eaeaea;
    .navbar-end {
        .button {
            background-color: transparent;
            color: $alt-color;
            border: 0px;
            padding: 0px 5px;
            height: auto;
            font-size: 1rem;
        }
    }
</style>

