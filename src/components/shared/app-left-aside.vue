<template>
    <div class="aside-background">
        <div class="vertical-menu">
            <aside class="menu">
                <ul class="menu-list">
                    <router-link tag="li" v-for="link in asidelinks" :key="link.href" :to="link.href">
                        <a :title="link.title" class="icon icon-sm">
                            <span :class="link.class"></span>
                        </a>
                    </router-link>
                </ul>
            </aside>

            <aside class="menu bottom-top">
                <ul class="menu-list">
                <li><a title="Applications Launch" @click.prevent="showApplicationLauncher()"><i class="fa fa-th"></i></a></li>
                </ul>
            </aside>
        </div> 
    </div>
</template>

<script>
import { bus } from './../../main'

export default {
    props: {
        asidelinks: Array
    },
    data () {
        return {
            launchapp: false
        }
    },
    methods: {
        showApplicationLauncher: function () {
            this.launchapp = !this.launchapp
            bus.$emit('launch-app', this.launchapp)
        }
    }
}
</script>

<style lang="scss" scoped>
    $navbar-vertical-background-color: rgba(33, 31, 31, 0.3);
    $anchor-color: #eaeaea;
    $anchor-hover-color: rgba(104, 101, 101, 0.6);
    $background-image: '~/src/assets/ubuntu-original-2016-hd-3840x2160.jpg';

    .aside-background {
        position: fixed;
        top: 35px;
        bottom: 0px;
        background-image: url($background-image);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        z-index: 101;
        width: 55px;
    }

    .vertical-menu {
        position: fixed;
        top: 35px;
        bottom: 0px;
        background-color: $navbar-vertical-background-color;
        z-index: 102;

        li:first-of-type {
            margin-top: 5px;
        }

        .menu {
            &.bottom-top {
                position: absolute;
                bottom: 0px;

                a {
                    color: $anchor-color;
                    transition: all 1s ease;
                    border: 1px solid transparent;
                    margin-top: 0px;
                    .fa {
                        font-size: 1.7rem;
                    }
                }
            }

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
</style>

