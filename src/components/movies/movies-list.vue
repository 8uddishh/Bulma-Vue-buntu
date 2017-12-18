<template>
    <app-simple-grid>
        <h3 slot="grid-title">Movies</h3>

        <form slot="grid-control-panel">
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Search by name/id...">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Select genre</option>
                            <option>With options</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="question"> Digital
                    </label>
                    <label class="radio">
                        <input type="radio" name="question"> Blu-ray
                    </label>
                </div>
            </div>
            <div class="field is-grouped is-search-action">
                <div class="control is-pulled-right">
                    <button class="button is-link">Search</button>
                </div>
                <div class="control is-pulled-right">
                    <button class="button is-link">Clear</button>
                </div>
            </div>
        </form>
    </app-simple-grid>
</template>

<script>

import appSimpleGrid from './../shared/app-simple-grid.vue'

export default {
    components: {
        'app-simple-grid': appSimpleGrid
    },
    data () {
        return {
            title: 'Movies List'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

