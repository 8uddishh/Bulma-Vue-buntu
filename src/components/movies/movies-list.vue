<template>
    <app-simple-grid>
        <h3 slot="grid-title">Movies</h3>
        <bvu-table slot="grid-table" v-bind:headers="headers" v-bind:identifier="'id'" v-bind:rows="movies"></bvu-table>
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
import bvuTable from './../bulma/table/table.vue'

export default {
    components: {
        'app-simple-grid': appSimpleGrid,
        'bvu-table': bvuTable
    },
    data () {
        return {
            title: 'Movies List',
            headers: ['Id', 'Movie Name', 'Year', '# Available', 'Cost'],
            movies: [
                { id: 1, name: 'The Wizard of Oz', year: 1939, qtyAvailable: 3, cost: 10 },
                { id: 2, name: 'Citizen Kane', year: 1941, qtyAvailable: 5, cost: 10 },
                { id: 3, name: 'Get Out', year: 2017, qtyAvailable: 10, cost: 15.99 },
                { id: 4, name: 'The Third Man', year: 1949, qtyAvailable: 8, cost: 8.66 },
                { id: 5, name: 'Mad Max: Fury Road', year: 2015, qtyAvailable: 15, cost: 15.99 }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

