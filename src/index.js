import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// import App from './App'
import Test from './Test'
import './index.css'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Test />
    </Provider>,
    document.getElementById('root')
)
