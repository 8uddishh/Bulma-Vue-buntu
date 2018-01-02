<template>
    <div class="select-wrapper">
        <span class="caret">▼</span>
        <input type="text" class="select-dropdown" readonly="true" :value="placeholder">
        <ul class="dropdown-content select-dropdown">
            <slot name="default-option">
                <li class="disabled"><span>{{placeholder}}</span></li>
            </slot>
            <slot v-for="entry in collection" :name="`select-item-${entry[keyField]}`">
                <bvu-select-item>
                    <template>
                        <span>{{entry[textField]}}</span>
                    </template>
                </bvu-select-item>
            </slot>
        </ul>
        <select v-model="collection">
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
        }
    },
    components: {
        'bvu-select-item': selectItem
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

