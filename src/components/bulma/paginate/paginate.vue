<template>
    <div class="page-wrapper">
        <div class="columns is-mobile">
            <div class="column"></div>
            <div class="column"></div>
            <div class="column"></div>
            <div class="column page-select">
                <bvu-select :showDefault="false" :collection="pagesizes" :selected="selectedPageSize"
                    :placeholder="'25'" :textField="'pageText'" :keyField="'pageValue'"
                    @itemSelected="onPageSizeSelected">
                </bvu-select>
            </div>
        </div>
        <nav class="pagination is-small" role="navigation" aria-label="pagination">
            <ul class="pagination-list">
                <li><a class="pagination-link"><i class="fa fa-angle-double-left"></i></a></li>
                <li><a class="pagination-link"><i class="fa fa-angle-left"></i></a></li>
                <li v-for="page in pages" :key="page">
                    <a class="pagination-link" :class="{ 'is-current': selectedPage == page }"
                        @click="onPageSelected(page)">{{page}}</a>
                </li>
                <li><a class="pagination-link"><i class="fa fa-angle-right"></i></a></li>
                <li><a class="pagination-link"><i class="fa fa-angle-double-right"></i></a></li>
            </ul>
        </nav>
    </div>
    
</template>

<script>
import bvuSelect from './../select/select.vue'
import bvuSelectItem from './../select/select-item.vue'
export default {
    components: {
        'bvu-select': bvuSelect,
        'bvu-select-item': bvuSelectItem
    },
    props: {
        pagesizes: Array,
        selectedPageSize: Object,
        pages: Array,
        selectedPage: String
    },
    data () {
        return {
        }
    },
    methods: {
        onPageSizeSelected: function (sort) {
            this.$emit('onPageSizeSelected', sort)
        },
        onPageSelected: function (page) {
            this.$emit('onPageSelected', page)
        }
    }
}
</script>

<style lang="scss" scoped>
$ubuntu-orange: #E95420;
$ubuntu-white: #FEFEFF;
$ubuntu-light-border: #ccccc7;
$ubuntu-text-color: #363636;


.columns {
    margin-bottom: 0px;
    .column {
        padding: 0px;

        &.page-select {
            padding-right: 12px;
        }
    }
}
.pagination {
    .pagination-list {
        margin-left: 0px;
        margin-top: 0px;
        list-style-type: none;
        justify-content: space-evenly;

        li {
            margin: 0px;

            a {
                padding: 2px;
                height: 22px;
                width: 8px;
                font-size: 0.60rem;
                border-radius: 50%;
                color: $ubuntu-text-color;
                border: 1px solid $ubuntu-light-border;
                background-color: #f9faf9;

                &:hover {
                    background-color: $ubuntu-orange;
                    border: 1px solid $ubuntu-orange;
                    color: $ubuntu-white;
                }
                    
                &.is-current {
                    background-color: $ubuntu-orange;
                    border: 1px solid $ubuntu-orange;
                    color: $ubuntu-white;
                }
            }
        }
    }
}
</style>

