import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap'

import Home from './Home'
import FirstPage from './FirstPage'
import Foods from './Foods'
import Plan from './Plan'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import ListOfEffects from './ListOfEffects'

const links = [
  { path: '/', label: 'Home' },
  { path: '/firstpage', label: 'FirstPage' },
  { path: '/foods', label: 'Wyszukiwarka'},
  { path: '/foodplan', label: 'Plan żywieniowy'},
  { path: '/listofeffects', label: 'Lista'},
]

class App extends React.Component {

  state = {
    sidebarOpen: false
  }

  toggleSidebar = (shouldBecomeOpen) => this.setState({
    sidebarOpen: shouldBecomeOpen
  })

  render = () => (
    <Router>
      <BurgerMenuWrapper
        isOpen={this.state.sidebarOpen}
        toggleSidebar={this.toggleSidebar}
        onStateChange={(state) => this.toggleSidebar(state.isOpen)}
        links={links}
      >
        <Grid>


          <Row>
            <Col md={12}>
              <Route exact path="/" component={Home}/>
              <Route path="/firstpage" component={FirstPage}/>
              <Route path="/foods" component={Foods}/>
              <Route path="/foodplan" component={Plan}/>
              <Route path="/listofeffects" component={ListOfEffects}/>
              <Route path="/listofeffects/:productId" component={ListOfEffects}/>
            </Col>
          </Row>
        </Grid>
      </BurgerMenuWrapper>
    </Router>

  )
}

export default App;

///////////////////////////////////////////////////////////////////////////


/*
import Topics from './Topics'
import Students from './Students'
import Student from './Student'
import Groups from './Groups'
import Group from './Group'
import Counters from './Counters'
import Counter from './Counter'

import BurgerMenuWrapper from './BurgerMenuWrapper'
import TopNavigation from './TopNavigation'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/topics', label: 'Topics' },
  { path: '/students', label: 'Students' },
  { path: '/groups', label: 'Groups' },
  { path: '/counters', label: 'Counters' },
  { path: '/counter', label: 'Counter' }
]


export default App*/