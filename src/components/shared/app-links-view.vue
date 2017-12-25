<template>
    <div class="links-container">
        <div class="columns links-header">
            <div class="column">
                <p class="control has-icons-left">
                    <input class="input is-small" type="text" placeholder="Search links">
                    <span class="icon is-small is-left">
                        <i class="fa fa-search"></i>
                    </span>
                </p>
            </div>
        </div>
        <div class="columns links-body">
            <div class="column service-body has-scroll">
                <ul class="services">
                    <li v-for="link in links" :key="link.id" :data-link="link.linkValue">
                        <span class="title is-block">{{link.linkTitle}}</span>
                        <span class="subtitle">{{link.linkSubTitle}}</span>
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
        links: {
            type: Array
        }
    },
    data () {
        return {
            issueInfo: {
                issueType: 0
            }
        }
    },
    computed: {
        selectedIssue: function () {
            if (this.reportIssues && this.reportIssues.length > 0) {
                return this.reportIssues.find(r => r.selected)
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
    $ubuntu-cool-grey: #4a4a48;
    $ubuntu-orange: #E95420;
    $ubuntu-dark-border: #5a585a;
    $ubuntu-link-color: #f9faf9;

    .links-header {
        .column {
            padding: 5px 10px 0px 10px;
        }
    }

    input {
        background-color: transparent;
        border-color: $ubuntu-imprint-color;
        margin-bottom: 10px;
        &::-webkit-input-placeholder {
            color: $ubuntu-text-color;
        }
    }

    .service-body {
        font-size:0.75rem;
        width: 100%;
        max-height: 260px;

        .services {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            li {
                padding: 5px 10px 2px 10px;
                min-height: 30px;
                border: 1px solid $ubuntu-imprint-color;
                border-radius: 5px;
                position: relative;
                background-color: $ubuntu-service-item-background;
                box-shadow: 0 1px 6px 0 rgba(0,0,0,.2),0 1px 6px 0 rgba(0,0,0,.19);
                margin: 0px 10px 10px 10px;
                min-width: 150px;
                
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
            }
        }
    }

    .has-scroll {
        overflow-y: scroll;
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
</style>

