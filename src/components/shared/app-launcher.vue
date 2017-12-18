<template>
    <div class="app-launcher-panel" :class="{ 'close': !launchapp }">
        <div class="app-launch-inner">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-one-third">
                        <div class="control has-icons-left has-icons-right is-search">
                            <input class="input" type="email" placeholder="Type to search...">
                            <span class="icon is-small is-left">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <ul class="appmenus">
                            <li v-for="applink in applinks">
                                <a :title="applink.title" class="icon icon-bg">
                                    <span :class="applink.class"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="columns overlay-footer">
                    <div class="column is-one-third">
                        <div class="field has-addons">
                            <p class="control">
                                <a class="button is-active">
                                    <span>Frequent</span>
                                </a>
                            </p>
                            <p class="control">
                                <a class="button">
                                    <span>All</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>

<script>

import { bus } from './../../main'

export default {
    props: {
        applinks: Array
    },
    data () {
        return {
            launchapp: false
        }
    },
    created () {
        bus.$on('launch-app', launch => {
            this.launchapp = launch
        })
    }
}
</script>

<style lang="scss" scoped>
    $anchor-color: #eaeaea;
    $anchor-hover-color: rgba(104, 101, 101, 0.6);
    $launcher-background-image: '~/src/assets/ubuntu-original-2016-hd-3840x2160.jpg';
    $launcher-overlay-inner: rgba(78, 40, 28, 0.45);
    $overlay-fore-color: #dacbd9;

    $ubuntu-dark-border: #5a585a;
    $ubuntu-cool-grey: #4a4a48;
    $ubuntu-orange: #E95420;

    .app-launcher-panel {
        position: absolute;
        background-image: url($launcher-background-image);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 100;
        bottom: 0px;
        top: 36px;
        right: 0px;
        left: 55px;
        box-shadow: inset 0px 0px 170px 50px rgba(0,0,0,0.4);
        transition: all 1s ease-in-out;

        .app-launch-inner {
            background-color: $launcher-overlay-inner;
            top: 0px;
            bottom:0px;
            position: absolute;
        }

        &.close {
            top: -2000px;
            left: -2000px;
            height: 0;
        }

        .container {
            height: 100%;
        }

        .columns {
            display: flex;
            align-items: center;
            justify-content: center;
            filter: none;
            
            
            &:first-of-type {
                margin-top: 0px;
                padding-top: 10px;
            }

            .is-search {
                .input {
                    background-color: rgba(71,71,71,0.81);
                    color: $overlay-fore-color;
                    border-color: $ubuntu-dark-border;
                    font-size: 0.85rem;
    
                    &::-webkit-input-placeholder {
                        color: $overlay-fore-color;
                    }
                }

                span {
                    font-size: 0.85rem;
                }
            }

            &.overlay-footer {
                position: absolute;
                bottom: 15;
                width: 100%;

                .column {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    a {
                        font-size: 0.85rem;
                        background-color: $ubuntu-cool-grey;
                        min-width: 150px;
                        color: $overlay-fore-color;
                        border: 1px solid $ubuntu-cool-grey;
                        font-weight: bold;

                        &:hover {
                            background-color: $ubuntu-orange;
                        }
    
                        &.is-active {
                            background-color: $ubuntu-orange;
                        }
                    }
                }
                
            }
        }
        
        ul {
            list-style: none;
            margin: 0px;
            li {
                float: left;
                padding: 10px 0px;
                margin: 0px 10px;

                a {
                    &:hover {
                        background-color: lighten($anchor-hover-color, 0.5);
                        border-radius: 3px;
                        color: darken($anchor-color, 0.7);
                        border: 1px solid lighten($anchor-hover-color, 0.5);
                    }
                }
            }
        }
    }    
</style>

