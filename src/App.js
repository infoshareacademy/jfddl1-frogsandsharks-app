import React, {Component} from 'react';



import Sidebar from './Sidebar'
import Navigation from './Navigation'
import ListOfEffects from './ListOfEffects';

import './App.css';



class App extends Component {
  render() {
    return (
      <ListOfEffects/>,
      <Navigation />,
      <Sidebar />

    )
  }


}

export default App;
