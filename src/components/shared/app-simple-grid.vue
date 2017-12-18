<template>
    <div class="container ubuntu-grid-container">
        <div class="card ubuntu-card">
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
            <div class="card-content">
                <div class="content">
                    <div class="columns view-outlet">
                        <div class="column is-four-fifths play-panel">
                            <slot name="grid-table">
                            </slot>
                        </div>
                        <div class="column control-panel">
                            <slot name="grid-control-panel">
                            </slot>
                            <hr>
                            <nav class="pagination is-small" role="navigation" aria-label="pagination">
                                <ul class="pagination-list">
                                    <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                                    <li><a class="pagination-link" aria-label="Goto page 45">2</a></li>
                                    <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">3</a></li>
                                    <li><a class="pagination-link" aria-label="Goto page 47">4</a></li>
                                    <li><a class="pagination-link" aria-label="Goto page 86">5</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
        }
    },
    methods: {
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
    $white: #fff;

    .ubuntu-grid-container {
        margin: 0px;
        width: 100%;
        max-width: 2000px;

        .ubuntu-card {
            border: solid 1px $ubuntu-dark-border;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            margin-left: 2px;
            margin-right: 2px;
            box-shadow: 0 1px 5px rgba(0,0,0,0.45), 0 1px 5px rgba(0,0,0,0.45);
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
                        border: 1px solid $ubuntu-orange;
                        background-color: $ubuntu-orange;
                        cursor: pointer;

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

                .view-outlet {
                    height: 100%;
                    padding-top: 12px;
                    padding-right: 12px;
                    padding-left: 10px;
                    .play-panel {
                        overflow-y: scroll;
                        .table {
                            font-size: 0.85rem;
                        }
                    }
                    .control-panel {
                        background-color: $ubuntu-warm-grey;
                        border-left: solid 2px $ubuntu-light-border;

                        .field {
                            margin-bottom: 8px;
                            label {
                                font-size: 0.85rem;
                            }
                            input {
                                font-size: 0.85rem;
                            }
                            .select {
                                width: 100%;
                                select {
                                    width: 100%;
                                    font-size: 0.85rem;
                                }
                            }
                        }

                        .pagination {
                            .pagination-list {
                                margin-left: 0px;
                                list-style-type: none;
                                justify-content: space-evenly;
                            }
                        }
                        
                    }
                }
            }
        }
    }
</style>

