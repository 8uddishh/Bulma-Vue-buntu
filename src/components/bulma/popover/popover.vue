<template>
    <div class="popover-wrapper">
        <bvu-popover-link :icon="icon">
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
    .popover-wrapper {
        position: relative;
        display: inline-block;

        .popover-content {
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: -150px;
            transform: translate(0,10px);
            background-color: #BFBFBF;
            padding: 1.5rem;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            width: auto;

            &:before {
                position: absolute;
                z-index: -1;
                content: '';
                right: calc(50% - 10px);
                top: -8px;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent #BFBFBF transparent;
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

