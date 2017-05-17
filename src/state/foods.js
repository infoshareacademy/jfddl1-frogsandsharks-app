const initialState = {
    foods: [],
    searchPhrase: '',
    activeFilterNames: ['category_none']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_FOODS__SUCCESS':
            return {
                ...state,
                foods: action.foods
            }
        case 'UPDATE_FILTERS':
            return {
                ...state,
                activeFilterNames: state.activeFilterNames.filter(
                    item => {
                        const itemPrefix = item.split('_')[0]
                        const filterNamePrefix = action.filterName.split('_')[0]
                        return itemPrefix !== filterNamePrefix
                    }
                ).concat(action.enabled === true ? action.filterName : [])
            }
        case 'UPDATE_SEARCH_PHRASE':
            return {
                ...state,
                searchPhrase: action.searchPhrase,
                activeFilterNames: state.activeFilterNames.filter(
                    item => !['phrase', 'category_none'].includes(item)
                ).concat('phrase')
            }
        default:
            return state
    }
}