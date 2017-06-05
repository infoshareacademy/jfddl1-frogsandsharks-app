import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App'
import './index.css'
import store from './store'
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

var config = {
  apiKey: "AIzaSyBPvx8Yw4Egka7vZs7MDzfenpt6xCb1yi8",
  authDomain: "ptrainer-1e21c.firebaseapp.com",
  databaseURL: "https://ptrainer-1e21c.firebaseio.com",
  projectId: "ptrainer-1e21c",
  storageBucket: "ptrainer-1e21c.appspot.com",
  messagingSenderId: "266477979996"
}
firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
