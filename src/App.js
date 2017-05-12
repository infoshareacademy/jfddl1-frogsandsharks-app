import React, { Component } from 'react';


import logo from './logo.svg';
import Sidebar from './Sidebar'
import Navigation from './Navigation'
import './App.css';

class App extends Component {
  render() {
   return (
      <Navigation/>,
          <Sidebar/>
   )
  }
}

export default App;
