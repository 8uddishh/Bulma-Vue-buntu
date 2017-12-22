<template>
    <div class="languages-pop-over columns">
        <div class="column">
            <nav class="panel">
                <p class="panel-heading is-uppercase"><i class="fa fa-globe"></i> languages</p>
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="Search">
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
                <div class="panel-block">
                    <ul class="languages">
                        <li v-for="language in languages" :key="language.id">
                            <span class="title is-block">{{language.name}}</span>
                            <span class="subtitle">{{language.nativeName}}</span>
                            <span class="tag is-success is-capitalized" v-if="language.enabled">{{language.code}}</span>
                            <span class="tag is-danger is-capitalized" v-else>{{language.code}}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="column">
            <nav class="panel">
                <p class="panel-heading is-uppercase"><i class="fa fa-clock-o"></i> Timezones</p>
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <input class="input is-small" type="text" placeholder="Search">
                        <span class="icon is-small is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </p>
                </div>
                <div class="panel-block">
                    <ul class="languages">
                        <li v-for="tz in timezones" :key="tz.id">
                            <span class="title is-block">{{tz.value}}</span>
                            <span class="subtitle">{{tz.text}}</span>
                            <span class="tag is-success is-uppercase">{{tz.abbr}}</span>
                        </li>
                    </ul>
                </div>
            </nav>
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

        .panel {
            .panel-heading {
                background-color: $ubuntu-imprint-color;
                border: 1px solid $ubuntu-imprint-color;
                font-size: 0.85rem;
                font-weight: bold;
                padding-top: 20px;

                .fa {
                font-size: 1.2rem;
                }
            }

            .panel-block {
                border: 1px solid $ubuntu-imprint-color;
                input {
                    background-color: transparent;
                    border-color: transparent;

                    &::-webkit-input-placeholder {
                        color: $ubuntu-text-color;
                    }
                }
                &:first-of-type {
                    padding: 0px;
                    border-bottom: 1px solid transparent;
                }

                &:not(:first-of-type) {
                    position: relative;
                    height: 300px;
                    overflow-y:hidden;
                    padding: 10px 0px;
                    border: 1px solid $ubuntu-imprint-color;
                    &:hover {
                        overflow-y:scroll;
                    }
                }
            }
        }

        .column {
            padding: 0px;
        }

        .column:not(:last-child) {
            margin-right: 10px;
            border-right: 1px solid transparent;
        }

        .languages {
            position:absolute; 
            top: 10px;
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
                    font-size: 0.85rem;
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
</style>

