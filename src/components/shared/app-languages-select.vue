<template>
    <div class="languages-pop-over">
        <div class="languages-header">
            <div class="columns">
                <div class="column">
                    <span class="tag is-dark is-capitalized"><i class="fa fa-globe"></i> languages</span>
                </div>
                <div class="column">
                    <span class="tag is-dark is-capitalized"><i class="fa fa-clock-o"></i> Timezones</span>
                </div>
            </div>
            <div class="columns languages-search">
                <div class="column">
                    <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="Search">
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
                <div class="column">
                    <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="Search">
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="languages-body columns">
            <div class="column">
                <ul class="languages">
                    <li v-for="language in languages" :key="language.id">
                        <span class="title is-block">{{language.name}}</span>
                        <span class="subtitle">{{language.nativeName}}</span>
                        <span class="tag is-success is-capitalized" v-if="language.enabled">{{language.code}}</span>
                        <span class="tag is-danger is-capitalized" v-else>{{language.code}}</span>
                    </li>
                </ul>
            </div>
            <div class="column">
                <ul class="languages">
                    <li v-for="tz in timezones" :key="tz.id">
                        <span class="title is-block">{{tz.value}}</span>
                        <span class="subtitle">{{tz.text}}</span>
                        <span class="tag is-success is-uppercase">{{tz.abbr}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    props: {
        languages: Array,
        timezones: Array
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-text-color: #eaeaea;
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-language-item-background: rgba(95,93,93, 0.8);
    .languages-pop-over {
        min-width: 700px;
        margin: 0px;
        position: relative;
        padding: 10px;

        .languages-header {
            position: fixed;
            top: 20px;
            left: 12px;
            right: 12px;

            .columns {
                left: 0px;
            }

            .column {
                font-size: 0.85rem;
                font-weight: bold;
                padding: 0px 12px;
                &:first-of-type {
                    padding-right: 0px;
                }

                input {
                    background-color: transparent;
                    border-color: $ubuntu-imprint-color;

                    &::-webkit-input-placeholder {
                        color: $ubuntu-text-color;
                    }
                }
                .fa {
                    margin-right: 5px;
                }
            }

            .languages-search {
                padding-top: 5px;
            }
        }

        .languages-body  {
            margin-top: 55px;

            .column {
                height: 270px;
                overflow-y:hidden;
                padding: 0px 0px 10px 0px;
                &:hover {
                    overflow-y: scroll;
                }
                &::-webkit-scrollbar-track
                {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                    background-color: $ubuntu-imprint-color; // #F5F5F5;
                }
                &::-webkit-scrollbar
                {
                    width: 8px;
                    background-color: $ubuntu-imprint-color; // #F5F5F5;
                }
                &::-webkit-scrollbar-thumb
                {
                    background-image: -webkit-gradient(linear, left bottom, left top, 
                    color-stop(0.44, #9a9ca2), color-stop(0.72, #5f6165), color-stop(0.86, #5a606d));
                }

                .languages {
                    padding: 0px 10px;
                    li {
                        padding: 5px 10px 2px 10px;
                        min-height: 30px;
                        max-width: 450px;
                        border: 1px solid $ubuntu-imprint-color;
                        border-radius: 5px;
                        position: relative;
                        background-color: $ubuntu-language-item-background;
                        margin-bottom: 10px;
                        box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);

                        .title {
                            font-size: 0.75rem;
                            color: $ubuntu-text-color;
                            margin: 0px !important;
                            font-weight: normal;
                        }

                        .subtitle {
                            font-size: 0.65rem;
                            color: #191818;
                            font-weight: bold;
                        }

                        .tag {
                            position: absolute;
                            right: 10px;
                            top: 10px;
                            font-size: 0.65rem;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
</style>

