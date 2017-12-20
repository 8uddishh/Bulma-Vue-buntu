<template>
    <div class="nav-background">
        <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item"><i :class="appicon"></i> &nbsp;{{apptitle}}</a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <slot name="left-links"></slot>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        apptitle: String,
        appicon: String
    }
}
</script>

<style lang="scss" scoped>
    $alt-color: #eaeaea;
    $background-image: '~/src/assets/ubuntu-original-2016-hd-3840x2160.jpg';

    .nav-background {
        background-image: url($background-image);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 35px;
        position: fixed;
        z-index: 101;
        top: 0px;
    }

    nav {
        color: $alt-color;
        font-weight: bold;
        padding: 3px;
        position: fixed;
        top: 0px;
        z-index: 102;
        width: 100%;

        .navbar-item {
            color: $alt-color; 
            padding:3px 8px;
        }
    }
</style>

