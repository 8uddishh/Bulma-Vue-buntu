<template>
    <div class="services-pop-over columns">
        <div class="column">
            <div class="tabs is-right">
                <ul>
                    <li class="is-active"><a><i class="fa fa-question-circle"></i> Help</a></li>
                    <li><a><i class="fa fa-download"></i> Downloads</a></li>
                    <li><a><i class="fa fa-exclamation-triangle"></i> Report a problem</a></li>
                    <li><a><i class="fa fa-link"></i>Links</a></li>
                </ul>
            </div>
            <div class="container">
                <div class="columns">
                    <div class="column service-header">Help Title 1</div>
                    <div class="column is-one-third">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="text" placeholder="Search">
                            <span class="icon is-small is-left">
                                <i class="fa fa-search"></i>
                            </span>
                        </p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column service-body has-scroll">
                        <p>
When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it!

Here men from the planet Earth first set foot upon the Moon. July 1969 AD. We came in peace for all mankind.

We have an infinite amount to learn both from nature and from each other

Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before.

It suddenly struck me that that tiny pea, pretty and blue, was the Earth. I put up my thumb and shut one eye, and my thumb blotted out the planet Earth. I didn't feel like a giant. I felt very, very small.
</p><p>
    The Earth was small, light blue, and so touchingly alone, our home that must be defended like a holy relic. The Earth was absolutely round. I believe I never knew what the word round meant until I saw Earth from space.

To go places and do things that have never been done before – that’s what living is all about.

The path of a cosmonaut is not an easy, triumphant march to glory. You have to get to know the meaning not just of joy but also of grief, before being allowed in the spacecraft cabin.

NASA is not about the ‘Adventure of Human Space Exploration’…We won’t be doing it just to get out there in space – we’ll be doing it because the things we learn out there will be making life better for a lot of people who won’t be able to go.

Curious that we spend more time congratulating people who have succeeded than encouraging people who have not.

Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species.
</p>
                    </div>
                    <div class="column is-one-third help-list has-scroll">
                        <ul class="services">
                            <li>
                                <span class="title is-block">Help Title 1</span>
                                <span class="subtitle">Help Subtitle 1</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 2</span>
                                <span class="subtitle">Help Subtitle 2</span>
                                <span class="fa fa-check-circle"></span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 3</span>
                                <span class="subtitle">Help Subtitle 3</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 4</span>
                                <span class="subtitle">Help Subtitle 4</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 5</span>
                                <span class="subtitle">Help Subtitle 5</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 6</span>
                                <span class="subtitle">Help Subtitle 6</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 7</span>
                                <span class="subtitle">Help Subtitle 7</span>
                            </li>
                            <li>
                                <span class="title is-block">Help Title 8</span>
                                <span class="subtitle">Help Subtitle 8</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
    },
    props: {
    }
}
</script>

<style lang="scss" scoped>
//   $ubuntu-settings-notification: rgba(69,142,254, 0.8);
//   $ubuntu-notification-item-background: rgba(95,93,93, 0.8);
//   $ubuntu-actions-notification: rgba(199, 14, 14, 0.8);
//   $ubuntu-reminder-notification: rgba(20, 136, 81, 0.8);
//   $ubuntu-watchlist-notification: rgba(155, 96, 222, 0.8);
//   $ubuntu-events-notification: rgba(164, 171, 27, 0.8);

    $ubuntu-text-color: #eaeaea;
//   $ubuntu-cool-grey: #4a4a48;
//   $ubuntu-orange: #E95420;
//   $ubuntu-dark-border: #5a585a;
   $ubuntu-imprint-color: #7a7a7a;
   $ubuntu-service-item-background: rgba(95,93,93, 0.8);

.services-pop-over {
    min-width: 700px;
    margin: 10px 0px;

    .tabs {
        font-size: 0.75rem;
        margin-bottom: 20px;

        ul {
            border-bottom-color: $ubuntu-imprint-color;
        }
        a {
            color: $ubuntu-imprint-color;
            border-bottom-color: $ubuntu-imprint-color;

            &:hover {
                color: $ubuntu-text-color;
                border-bottom-color: $ubuntu-text-color;
            }

            .fa {
                margin-right: 5px;
            }
        }

        .is-active {
            a {
                color: $ubuntu-text-color;
                border-bottom-color: $ubuntu-text-color;
            }
        }
    }

    .column {
        padding: 0px;
    }

    .service-header {
        font-size: 0.80rem;
        font-weight: bold;
        color: #9c9b9b;
        padding: 5px 15px;
    }

    .service-body {
        font-size:0.75rem;
        max-height: 280px;
    }

    .help-list {
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
        }
    }
    
    
}
</style>

