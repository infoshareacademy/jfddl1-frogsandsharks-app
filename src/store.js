import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
//import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import foods from './state/foods'
import products from './state/products'
import selections from './state/selections'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk
    ),
    //persistState()
)

const reducer = combineReducers({
    foods,
    selections,
    products
})

const store = createStore(
    reducer,
    enhancer
)

export default store



