<template>
    <div class="popover-wrapper">
        <bvu-popover-link :icon="icon" :icononly="icononly" :text="text" :vclass="vclass">
        </bvu-popover-link>
        <slot name="popover-content">
            <bvu-popover-content>
                <template>
                    no content
                </template>
            </bvu-popover-content>
        </slot>
    </div>
</template>

<script>

import popoverLink from './popover-link.vue'
import popoverContent from './popover-content.vue'
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
    components: {
        'bvu-popover-link': popoverLink,
        'bvu-popover-content': popoverContent
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
    $ubuntu-cool-grey: #4a4a48;
    $popup-border: #413e3b;

    .popover-wrapper {
        position: relative;
        display: inline-block;

        .popover-content {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            right: -10px;
            top: 50px;
            transform: translate(0,10px);
            background-color: $ubuntu-cool-grey;
            padding: 1.5rem;
            box-shadow: 0 2px 5px 0 $popup-border;
            width: auto;
            padding: 10px;

            &:before {
                position: absolute;
                z-index: -1;
                content: '';
                right: 10px;
                top: -8px;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent $ubuntu-cool-grey transparent;
                transition-duration: 0.3s;
                transition-property: transform;
            }
        }

        &:hover .popover-content {
            z-index: 10;
            opacity: 1;
            visibility: visible;
            transform: translate(0,-20px);
            transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
        }
    }
</style>

