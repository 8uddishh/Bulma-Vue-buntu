<template>
    <div class="container ubuntu-grid-container box-effect-1">
        <div class="card ubuntu-card header-card">
            <header class="card-header">
                <div class="card-header-title">
                    <slot name="grid-title">
                    </slot>
                </div>
                <div class="card-header-icon">
                    <button class="card-close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </header>
        </div>
        <div class="card ubuntu-card">
            <div class="card-content">
                <div class="content">
                    <div class="columns view-outlet">
                        <div class="column is-four-fifths play-panel">
                            <slot name="grid-table">
                            </slot>
                        </div>
                        <div class="column control-panel">
                            <form>
                                <div class="field">
                                    <div class="control">
                                        <bvu-select :showDefault="true" :collection="sorts" :selected="selectedSort"
                                            :placeholder="'Sort By'" :textField="sortTextField" :keyField="sortKeyField"
                                            @itemSelected="onSortSelected">
                                        </bvu-select>
                                    </div>
                                </div>
                            </form>
                            <slot name="grid-control-panel">
                            </slot>
                            <hr>
                            <bvu-paginate :pages="pages" :selectedPage="selectedPage"
                                :pagesizes="pagesizes" :selectedPageSize="selectedPageSize" 
                                @onPageSelected="onPageSelected" @onPageSizeSelected="onPageSizeSelected">
                            </bvu-paginate>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bvuSelect from './../bulma/select/select.vue'
import bvuSelectItem from './../bulma/select/select-item.vue'
import bvuPaginate from './../bulma/paginate/paginate.vue'
export default {
    components: {
        'bvu-select': bvuSelect,
        'bvu-select-item': bvuSelectItem,
        'bvu-paginate': bvuPaginate
    },
    props: {
        sorts: Array,
        selectedSort: Object,
        sortTextField: String,
        sortKeyField: String
    },
    data () {
        return {
            pagesizes: [
                { pageValue: 1, pageText: '1' },
                { pageValue: 10, pageText: '10' },
                { pageValue: 25, pageText: '25' },
                { pageValue: 50, pageText: '50' },
                { pageValue: 100, pageText: '100' },
                { pageValue: 250, pageText: '250' },
                { pageValue: 500, pageText: '500' },
                { pageValue: -1, pageText: 'All' }
            ],
            selectedPageSize: { pageValue: 25, pageText: '25' },
            pages: [ '1', '2', '3', '4', '5' ],
            selectedPage: '3'
        }
    },
    methods: {
        onSortSelected: function (sort) {
            this.$emit('onSortSelected', sort)
        },
        onPageSizeSelected: function (sort) {
            this.$emit('onPageSizeSelected', sort)
        },
        onPageSelected: function (page) {
            this.selectedPage = page
            console.log(page)
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-dark-border: #5a585a;
    $ubuntu-cool-grey: #4a4a48;
    $ubuntu-orange: #E95420;
    $ubuntu-warm-grey: #e4e4e2;
    $ubuntu-white: #FEFEFF;
    $ubuntu-light-border: #ccccc7;
    $ubuntu-text-color: #363636;
    $overlay-fore-color: #dacbd9;

    $white: #fff;

    .box-effect-1
    {
        position:relative;
        -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }
    .box-effect-1:before, .box-effect-1:after
    {
        content:"";
        position:absolute;
        z-index:-1;
        -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
        -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
        box-shadow:0 0 20px rgba(0,0,0,0.8);
        top:10px;
        bottom:10px;
        left:0;
        right:0;
        -moz-border-radius:100px / 10px;
        border-radius:100px / 10px;
    }

    .box-effect-1:after
    {
        right:10px;
        left:auto;
        -webkit-transform:skew(8deg) rotate(3deg);
        -moz-transform:skew(8deg) rotate(3deg);
            -ms-transform:skew(8deg) rotate(3deg);
            -o-transform:skew(8deg) rotate(3deg);
                transform:skew(8deg) rotate(3deg);
    }

    .ubuntu-grid-container {
        margin: 35px 0px 0px 0px;
        width: 100%;
        max-width: 2000px;

        .header-card {
            z-index: 100;
            position: fixed;
            margin-top: 0px !important;
            top: 35px;
            left: 0px;
            right: 1px;
            border: 0 !important;
            background-color: transparent;
            padding-left: 56px;
            box-shadow: none;

            .card-header {
                border: solid 1px $ubuntu-dark-border;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
        }

        .ubuntu-card {
            border: solid 1px $ubuntu-dark-border;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            margin-top: 35px;
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);

            .card-header {
                .card-header-title {
                    border-top-left-radius: 4px;
                    border-top-right-radius: 0px;
                    padding: 5px 15px;
                    font-size: 0.95rem;
                    background-color: $ubuntu-cool-grey;
                    color: $white;
                }
                .card-header-icon{
                    background-color: $ubuntu-cool-grey;
                    padding: 5px 10px;
                    border-top-right-radius: 5px;

                    .card-close {
                        padding: 0px;
                        border-radius: 50%;
                        height: 20px;
                        width: 20px;
                        font-size: 0.8rem;
                        border: 1px solid $ubuntu-cool-grey;
                        background-color: $ubuntu-orange;
                        cursor: pointer;

                        .fa {
                            &:before {
                                position: absolute;
                                top: 0.75rem;
                                right: 1rem;
                            }
                        }

                        &:hover {
                            border: 1px solid $ubuntu-warm-grey;
                            background-color: $ubuntu-warm-grey;
                        }
                    }
                }
            }
            .card-content {
                padding: 0;
                background-color: $ubuntu-white;
                margin-top: 30px;

                .view-outlet {
                    height: 100%;
                    padding-top: 12px;
                    padding-right: 12px;
                    padding-left: 10px;
                    .play-panel {
                        min-height: 900px;
                        .table {
                            font-size: 0.85rem;
                        }
                    }
                    .control-panel {
                        background-color: $ubuntu-warm-grey;
                        border-left: solid 1px $ubuntu-light-border;
                        border-right: solid 1px $ubuntu-light-border;
                        width: 20%; 
                        position: fixed; 
                        top: 68px; 
                        right: 0px; 
                        bottom: 0px;

                        .field {
                            margin-bottom: 8px;
                            label {
                                font-size: 0.85rem;
                            }
                            input {
                                font-size: 0.85rem;
                                &::-webkit-input-placeholder {
                                    color: $ubuntu-text-color;
                                }
                            }
                            .select {
                                width: 100%;
                                select {
                                    width: 100%;
                                    font-size: 0.85rem;
                                }
                            }
                        }                      
                    }
                }
            }
        }
    }
</style>

