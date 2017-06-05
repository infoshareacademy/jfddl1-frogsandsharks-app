import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Grid, Col, Row} from 'react-bootstrap'
import * as firebase from 'firebase'

import Home from './Home'
import Logo from './Logo'
import Trening from './Trening'
import Foods from './SearchFoods'
import Plan from './FoodPlan/Plan'
import BurgerMenuWrapper from './BurgerMenuWrapper'
import ListOfEffects from './ListOfEffects'
import LoginNew from './Login'
import DataFetcher from './DataFetcher'

const links = [
    {path: '/', label: 'Home'},
    {path: '/foods', label: 'Wyszukiwarka'},
    {path: '/foodplan', label: 'Plan żywieniowy'},
    {path: '/trening', label: 'Trening'}
]

class App extends React.Component {
    state = {
        sidebarOpen: false,
        isLogged: false
    }

    toggleSidebar = (shouldBecomeOpen) => this.setState({
        sidebarOpen: shouldBecomeOpen
    })

    constructor() {
        super()

    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isLogged: true,
                    sidebarOpen: false
                });
                console.log('User IS logged in')
            } else {
                this.setState({
                    isLogged: false
                });
                console.log('User ISNT logged in')
            }
        });
    }

    render = () => {
        const loginBox = (<Router><LoginNew /></Router>);

        const app = (<Router>
            <div>
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
                                    <Route path="/trening" component={Trening}/>
                                    <Route exact path="/foods" component={Foods}/>
                                    <Route path="/foodplan" component={Plan}/>

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
                        <Route exact path="/foods/:foodsId" component={ListOfEffects}/>
                        <Route exact path="/foods/:day/:meal" component={Foods}/>
                        <Route exact path="/foods/:day/:meal/:foodsId" component={ListOfEffects}/>
                    </DataFetcher>
                </div>
            </div>
        </Router>);

        if (this.state.isLogged) {
            return (app)

        } else {
            return (loginBox)
        }


    }
}

export default App;
