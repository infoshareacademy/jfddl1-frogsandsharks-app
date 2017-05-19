import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
//import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import foods from './state/foods'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    ),
    //persistState()
)

const reducer = combineReducers({
    foods: foods
})

const store = createStore(
    reducer,
    enhancer
)

export default store



