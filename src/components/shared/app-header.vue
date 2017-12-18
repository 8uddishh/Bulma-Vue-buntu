<template>
    <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item"><i :class="appicon"></i> &nbsp;{{apptitle}}</a>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                    <p class="control" v-for="link in applinks">
                      <a class="button">
                        <span class="icon is-small">
                            <i :class="link.class"></i>
                          </span>
                      </a>
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        apptitle: String,
        appicon: String,
        applinks: Array
    }
}
</script>

<style lang="scss" scoped>
    $alt-color: #eaeaea;

    nav {
        color: $alt-color;
        font-weight: bold;
        padding: 3px;
        position: fixed;
        top: 0px;
        z-index: 101;
        width: 100%;
        
        .navbar-end {
            .button {
                background-color: transparent !important;
                color: $alt-color;
                border: 0px;
                padding: 0px 5px;
                height: auto;
            }
        }

        .navbar-item {
            color: $alt-color; 
            padding:3px 8px;
        }
    }
</style>

