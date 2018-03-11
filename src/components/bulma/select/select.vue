<template>
    <div class="select-wrapper">
        <span class="caret">▼</span>
        <input type="text" class="select-dropdown" readonly="true" :value="selectedText || placeholder" @click="openMenu(this)">
        <ul class="dropdown-content select-dropdown" :class="{ 'is-active' : isOpen }" :style="{ width: dropDowmnWidth + 'px'}">
            <slot name="default-option">
                <li class="disabled" @click="clearSelect"><span>{{placeholder}}</span></li>
            </slot>
            <slot v-for="entry in collection" :name="`select-item-${entry[keyField]}`">
                <bvu-select-item :item="entry" @onItemSelected="itemSelected">
                    <template>
                        <span>{{entry[textField]}}</span>
                    </template>
                </bvu-select-item>
            </slot>
        </ul>
        <select v-model="selected[this.keyField]">
            <option value="0">{{placeholder}}</option>
            <option v-for="entry in collection" :key="entry[keyField]" v-bind:value="entry[keyField]">
                {{entry[textField]}}
            </option>
        </select>
    </div>
</template>

<script>
import selectItem from './select-item.vue'
export default {
    props: {
        collection: {
            type: Array
        },
        keyField: {
            type: String
        },
        textField: {
            type: String
        },
        placeholder: {
            type: String
        },
        selected: Object
    },
    components: {
        'bvu-select-item': selectItem
    },
    data () {
        return {
            isOpen: false,
            dropDowmnWidth: 0,
            selectedText: null
        }
    },
    methods: {
        openMenu: function () {
            this.isOpen = true
            if (this.isOpen) {
                this.dropDowmnWidth = this.$el.querySelector('input.select-dropdown')
                    .getBoundingClientRect()
                    .width
            }
        },
        itemSelected: function (item) {
            this.isOpen = false
            this.selectedText = item[this.textField]
            this.$emit('itemSelected', item)
        },
        clearSelect: function () {
            this.isOpen = false
            this.selectedText = null
            this.$emit('itemSelected', null)
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-light-border: #ccccc7;
    $overlay-fore-color: #fff;
    $ubuntu-orange: #E95420;

    .select-wrapper {
        position: relative;

        &.valid+label, &.invalid+label {
            width: 100%;
            pointer-events: none
        }

        input.select-dropdown {
            position: relative;
            cursor: pointer;
            background-color: transparent;
            border: 1px solid $ubuntu-light-border;
            border-radius: 3px;
            outline: none;
            height: 2.25rem;
            line-height: 1.5rem;
            width: 100%;
            font-size: 0.85rem;
            margin: 0 0 10px 0;
            padding-bottom: calc(0.375em - 1px);
            padding-left: calc(0.625em - 1px);
            padding-right: calc(1em - 1px);
            padding-top: calc(0.375em - 1px);
            display: block;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &:disabled {
                color: rgba(0,0,0,0.42);
                cursor: default;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none
            }
        }

        span.caret {
            color: initial;
            position: absolute;
            right: 8px;
            top: 0;
            bottom: 0;
            height: 10px;
            margin: auto 0;
            font-size: 8.5px;
            line-height: 10px
        }

        &+label {
            position: absolute;
            top: -26px;
            font-size: .8rem
        }

        &:disabled {
            color: rgba(0,0,0,0.42)
        }

        select {
            display: none;
        }

        &.disabled span.caret,&.disabled+label {
            color: rgba(0,0,0,0.42)
        }

        i {
            color: rgba(0,0,0,0.3)
        }

        .select-dropdown {
            list-style: none;
            font-size: 0.85rem;
            margin: 0px;
            display:none;
            position: absolute; 
            top: 0px; 
            left: 0px; 
            cursor: pointer;

            li.disabled,li.disabled>span,li.optgroup {
                color: rgba(0,0,0,0.3);
                background-color: transparent
            }

            &.is-active {
                display: block;
            }

            &.dropdown-content {
                z-index: 200;
                li {
                    padding-bottom: calc(0.15em - 1px);
                    padding-left: calc(0.625em - 1px);
                    padding-right: calc(0.625em - 1px);
                    padding-top: calc(0.15em - 1px);

                    &.active {
                        background-color: transparent
                    }

                    &:hover {
                        color: $overlay-fore-color;
                        background-color: $ubuntu-orange;
                    }

                    &.selected {
                        background-color: rgba(0,0,0,0.03)
                    }

                    img {
                        height: 40px;
                        width: 40px;
                        margin: 5px 15px;
                        float: right
                    }

                    &.optgroup {
                        border-top: 1px solid #eee
                    }

                    &.optgroup.selected>span {
                        color: rgba(0,0,0,0.7)
                    }

                    &.optgroup>span {
                        color: rgba(0,0,0,0.4)
                    }

                    &.optgroup ~ li.optgroup-option {
                        padding-left: 1rem
                    }
                }
            }
        }
    }
    
    .prefix ~ .select-wrapper {
        margin-left: 3rem;
        width: 92%;
        width: calc(100% - 3rem)
    }
    
    .prefix ~ label {
        margin-left: 3rem
    }
</style>

