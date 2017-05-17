import React from 'react'
import { connect } from 'react-redux'

import FilterControls from './FilterControls'
import FoodsTable from './FoodsTable'

import { foods as filters } from './_utils/filters'
import { foodFilterGroups  as filterGroups } from './_utils/FilterGroups'

class Foods extends React.Component {
    componentWillMount = () => {
        fetch(
            process.env.PUBLIC_URL + '/data/foods.json'
        ).then(
            response => response.json()
        ).then(
            foods => this.props.setFoods(foods)
        )
    }

    render = () => (
        <div>
            <h3>Wprowadź wyszukiwany produkt</h3>

            <FilterControls
                filterGroups={filterGroups}
                handleSearchPhraseUpdate={this.props.updateSearchPhrase}
                handleFiltersUpdate={this.props.updateFilters}
                activeFilterNames={this.props.activeFilterNames}
            />

            <FoodsTable
                foods={
                    this.props.foods.filter(
                        food => this.props.activeFilterNames.map(
                            filterName => filters[filterName]
                        ).every(
                            currentFunction => currentFunction(food, this.props.searchPhrase)
                        )
                    )
                }
            />
        </div>
    )
}

export default connect(
    state => ({
        foods: state.foods.foods,
        activeFilterNames: state.foods.activeFilterNames,
        searchPhrase: state.foods.searchPhrase
    }),
    dispatch => ({
        setFoods: (foods) => dispatch({
            type: 'FETCH_FOODS__SUCCESS',
            foods: foods
        }),
        updateFilters: (filterName, enabled) => dispatch({
            type: 'UPDATE_FILTERS',
            filterName: filterName,
            enabled: enabled
        }),
        updateSearchPhrase: event => dispatch({
            type: 'UPDATE_SEARCH_PHRASE',
            searchPhrase: event.target.value
        })
    })
)(Foods)