<template>
    <div class="user-pop-over columns">
        <div class="column is-one-third avatar">
            <ul>
                <li><img :src="userInfo.avatar" /></li>
                <li><a class="button is-link is-block">Change</a></li>
            </ul>                   
        </div>
        <div class="column">
            <ul>
                <li><a class="button is-link"><i class="fa fa-user"></i> {{userInfo.name}}</a></li>
                <li><a class="button is-link"><i class="fa fa-key fa-rotate-180"></i> Manage credentials</a></li>
                <li><a class="button is-link"><i class="fa fa-tasks"></i> Manage activities</a></li>
                <li><a class="button is-link"><i class="fa fa-cogs"></i> Manage widgets</a></li>
            </ul>
            <ul class="setting-option">
                <li><a class="button is-link"><i class="fa fa-cog"></i></a></li>
                <li><a class="button is-link"><i class="fa fa-lock"></i></a></li>
                <li><a class="button is-link"><i class="fa fa-power-off"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        userInfo: Object
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-text-color: #eaeaea;
    $ubuntu-settings-hover: #3a3838;

    .user-pop-over {
        min-width: 300px;
        margin: 10px;

        ul {
            font-size: 0.75rem;
            font-weight: normal;
            li {
                .is-link {
                    font-size: 0.75rem;
                    font-weight: normal;
                    background-color: transparent;
                    border-color: transparent;
                    color: $ubuntu-text-color;

                    &:hover {
                        color: $ubuntu-text-color;
                    }

                    i {
                        margin-right: 10px;
                    }
                }
            }
        }
        
        .avatar {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            img {
                height: 75px;
                width: 75px;
                max-width: none;
                max-height: none;
                border-radius: 50%;
                border: 1px $ubuntu-imprint-color solid;
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);
            }
        }

        .setting-option {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 10px;

            .is-link {
                border-radius: 50%;
                border: 1px $ubuntu-imprint-color solid;
                height: 35px;
                width: 35px;
                transition: 0.5s all ease;
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);

                .fa {
                    margin: 0px;
                    font-size: 1rem;
                }

                &:hover {
                    background-color: $ubuntu-settings-hover;
                    border: 1px $ubuntu-imprint-color solid;
                }
            }
        }

        hr {
            margin: 10px 0px 10px 0px;
            border-top: 1px solid $ubuntu-imprint-color;
            color: $ubuntu-imprint-color;
        }

        .column:not(:last-child) {
            border-right: 1px solid $ubuntu-imprint-color;
        }
    }
</style>

