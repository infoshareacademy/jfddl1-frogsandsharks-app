import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Grid, Col, Row} from 'react-bootstrap'

import Home from './Home'
import Logo from './Logo'
import FirstPage from './FirstPage'
import Foods from './Foods'
import Plan from './Plan'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import ListOfEffects from './ListOfEffects'
import LoginNew from './LoginNew'
import DataFetcher from './DataFetcher'

const links = [
    {path: '/', label: 'Home'},
    {path: '/firstpage', label: 'FirstPage'},
    {path: '/foods', label: 'Wyszukiwarka'},
    {path: '/foodplan', label: 'Plan żywieniowy'},
    {path: '/loginnew', label: 'Login'},
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
            <div>
                <BurgerMenuWrapper
                    isOpen={this.state.sidebarOpen}
                    toggleSidebar={this.toggleSidebar}
                    onStateChange={(state) => this.toggleSidebar(state.isOpen)}
                    links={links}
                >
                    <Grid>


                        <Row>
                            <Col md={12}>

                                <Route path="/" component={Logo}/>
                                <Route className="menu-item" exact path="/" component={Home}/>
                                <Route path="/firstpage" component={FirstPage}/>
                                <Route exact path="/foods" component={Foods}/>
                                <Route path="/foodplan" component={Plan}/>
                                <Route path="/loginnew" component={LoginNew}/>

                            </Col>
                        </Row>
                    </Grid>
                </BurgerMenuWrapper>

                <DataFetcher>
                    {
                        links.map(
                            (route, index) => (
                                <Route key={index} exact path={route.path} component={route.component}/>
                            )
                        )
                    }
                    <Route path="/foods/:foodsId" component={ListOfEffects}/>
                </DataFetcher>
            </div>

        </Router>

    )
}

export default App;
