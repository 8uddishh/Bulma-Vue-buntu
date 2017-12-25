<template>
    <div>
        <div class="columns download-header">
            <div class="column service-header" v-if="selectedDownload">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" :placeholder="'Search ' + selectedDownload.downloadTitle">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
            <div class="column is-one-third">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="Search Downloads">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="columns download-body">
            <div v-if="selectedDownload" class="column service-body has-scroll">
                <ul class="services">
                    <li v-for="link in selectedDownload.downloadLinks" :key="link.downloadLink" >
                        <span class="title is-block">{{link.downloadText}}</span>
                        <span class="subtitle">{{link.downloadInfo}}</span>
                        <span class="tag is-success is-capitalized">{{link.language}}</span>
                    </li>
                </ul>
            </div>
            <div class="column is-one-third download-list">
                <ul class="services">
                    <li v-for="download in downloads" :key="download.id" >
                        <span class="title is-block">{{download.downloadTitle}}</span>
                        <span class="subtitle">{{download.downloadSubTitle}}</span>
                        <span v-if="download.selected" class="fa fa-check-circle"></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
        downloads: {
            type: Array
        }
    },
    data () {
        return {
        }
    },
    computed: {
        selectedDownload: function () {
            if (this.downloads && this.downloads.length > 0) {
                return this.downloads.find(d => d.selected)
            }
            return null
        }
    },
    methods: {
        tabSelected: function (selected) {
            this.selected = selected
        }
    }
}
</script>

<style lang="scss" scoped>
    $ubuntu-text-color: #eaeaea;
    $ubuntu-imprint-color: #7a7a7a;
    $ubuntu-service-item-background: rgba(95,93,93, 0.8);
    $ubuntu-subtext-color: #191818;

    .download-header {
        position: fixed;
        top: 68px;
        width: 100%;
        padding-top: 5px;

        .column {
            border-right: 1px solid transparent;
        }
    }

    .download-list {
        max-height: 280px;
    }

    .download-body {
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
        max-height: 240px;
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

                .title {
                    font-size: 0.75rem;
                    color: $ubuntu-text-color;
                    margin: 0px !important;
                    font-weight: normal;
                }

                .subtitle {
                    font-size: 0.65rem;
                    color: $ubuntu-subtext-color;
                    font-weight: bold;
                }

                .tag {
                    position: absolute;
                    font-size: 0.65rem;
                    top: 10px;
                    right: 10px;
                    color: $ubuntu-subtext-color;
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

