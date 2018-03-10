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
    
</style>

