import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'


import Navigation from './Navigation'
import MySideNav from './MySideNav'
import './App.css';


class App extends Component {
  render() {
   return (
      <Router><MySideNav/></Router>
   )
  }
}

export default App;
