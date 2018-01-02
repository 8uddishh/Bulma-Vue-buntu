<template>
    <app-simple-grid>
        <h3 slot="grid-title">Movies</h3>
        <bvu-table slot="grid-table" v-bind:headers="headers">
            <bvu-table-row slot="body" v-for="movie in movies" v-bind:key="movie['id']" v-bind:rowdata="movie">
                <bvu-table-cell slot="name">
                    <a v-bind:href="`/movies/${movie.id}`" v-bind:title="movie.name">
                        {{movie.name}}
                    </a>
                </bvu-table-cell>
                <bvu-table-cell slot="qtyAvailable">
                    <span v-if="movie.qtyAvailable < 5" class="tag is-danger">{{movie.qtyAvailable}}</span>
                    <span v-else-if="movie.qtyAvailable < 10" class="tag is-warning">{{movie.qtyAvailable}}</span>
                    <span v-else class="tag is-success">{{movie.qtyAvailable}}</span>
                </bvu-table-cell>
                <bvu-table-cell slot="cost">
                    {{movie.cost | currency}}
                </bvu-table-cell>
            </bvu-table-row>
        </bvu-table>
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
            <div class="field">
                <div class="control">
                    <bvu-select :collection="testList" :placeholder="'Select an option'" :textField="'name'" :keyField="'id'">
                    </bvu-select>
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
import bvuTableRow from './../bulma/table/table-row.vue'
import bvuTableCell from './../bulma/table/table-cell.vue'
import bvuSelect from './../bulma/select/select.vue'
import bvuSelectItem from './../bulma/select/select-item.vue'

export default {
    components: {
        'app-simple-grid': appSimpleGrid,
        'bvu-table': bvuTable,
        'bvu-table-row': bvuTableRow,
        'bvu-table-cell': bvuTableCell,
        'bvu-select': bvuSelect,
        'bvu-select-item': bvuSelectItem
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
            ],
            testList: [
                { id: 1, name: 'Test list #1', desc: 'Test list #1' },
                { id: 2, name: 'Test list #2', desc: 'Test list #2' },
                { id: 3, name: 'Test list #3', desc: 'Test list #3' },
                { id: 4, name: 'Test list #4', desc: 'Test list #4' },
                { id: 5, name: 'Test list #5', desc: 'Test list #5' },
                { id: 6, name: 'Test list #6', desc: 'Test list #6' }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

