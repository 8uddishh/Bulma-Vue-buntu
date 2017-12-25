<template>
    <div>
        <div class="columns helpheader">
            <div class="column service-header" v-if="selectedHelp">
                <span class="tag is-dark">{{selectedHelp.helpTitle}}</span>
            </div>
            <div class="column is-one-third">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="Search Helps">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="columns helpbody">
            <div v-if="selectedHelp" class="column service-body has-scroll">
                <p v-for="content in selectedHelp.helpContents" :key="content">
                    {{content}}
                </p>
            </div>
            <div class="column is-one-third help-list has-scroll">
                <ul class="services">
                    <li v-for="help in helps" :key="help.id" @click="selectHelp(help.id)">
                        <span class="title is-block">{{help.helpTitle}}</span>
                        <span class="subtitle">{{help.helpSubTitle}}</span>
                        <span v-if="selectedHelp && selectedHelp.id === help.id" class="fa fa-check-circle"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import fbaxios from './../../utilities/data-extensions'
export default {
    data () {
        return {
            helps: [],
            selectedHelp: null
        }
    },
    methods: {
        tabSelected: function (selected) {
            this.selected = selected
        },
        selectHelp: function (id) {
            this.selectedHelp = this.helps.find(h => h.id === id)
        }
    },
    created () {
        fbaxios.get('https://basic-bot-b6287.firebaseio.com/helps.json')
            .then(data => {
                this.helps = data
                if (this.helps && this.helps.length > 0) {
                    this.selectedHelp = this.helps[0]
                }
            })
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-text-color: #eaeaea;
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-service-item-background: rgba(95,93,93, 0.8);

    .helpheader {
        position: fixed;
        top: 68px;
        width: 100%;
        padding-top: 5px;

        .column {
            border-right: 1px solid transparent;
        }
    }

    .help-list {
        max-height: 280px;
    }

    .helpbody {
        margin-top: 45px;
    }

    .service-header {
        font-size: 0.80rem;
        font-weight: bold;
        color: #9c9b9b;
        padding: 20px 15px 5px 15px;
    }

    .service-body {
        font-size:0.75rem;
        max-height: 280px;
    }
    
    .container {
        width: 100%;
        .column {
            padding: 0px 15px;
        }

        input {
            background-color: transparent;
            border-color: $ubuntu-imprint-color;
            margin-bottom: 10px;
            &::-webkit-input-placeholder {
                color: $ubuntu-text-color;
            }
        }

        .services {
            li {
                padding: 5px 10px 2px 10px;
                min-height: 30px;
                max-width: 450px;
                border: 1px solid $ubuntu-imprint-color;
                border-radius: 5px;
                position: relative;
                background-color: $ubuntu-service-item-background;
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);
                margin-bottom: 10px;
                cursor: pointer;

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

                .fa {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    font-size: 1rem;
                    font-weight: bold;
                    color:#23d160;
                }
            }
        }

        .has-scroll {
            overflow-y: hidden;
            &:hover {
                overflow-y: scroll;
            }
            &::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                background-color: $ubuntu-imprint-color; // #F5F5F5;
            }
            &::-webkit-scrollbar {
                width: 8px;
                background-color: $ubuntu-imprint-color; // #F5F5F5;
            }
            &::-webkit-scrollbar-thumb {
                background-image: -webkit-gradient(linear, left bottom, left top, 
                color-stop(0.44, #9a9ca2), color-stop(0.72, #5f6165), color-stop(0.86, #5a606d));
            }
        }
    }
</style>

