import React, {Component} from 'react';



import Sidebar from './Sidebar'
import Navigation from './Navigation'
import './App.css';

import ListOfEffects from './ListOfEffects';

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
