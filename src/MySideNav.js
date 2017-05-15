import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import {
    Button,
    Modal,
    Grid,
    Col,
    Row,
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'

import  './MySideNav.css'
import {
    IndexLinkContainer,
    LinkContainer
} from 'react-router-bootstrap'
import Home from './Home'
import FirstPage from './FirstPage'

class MySideNav extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (

            <Grid fluid>
                <Menu>
                    <Link to="/" id="home" className="menu-item" href="/">Home</Link>
                    <Link to="/firstpage" id="about" className="menu-item" href="/about">About</Link>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>

                <Row>
                    <Col md={12} lg={12} xs={12}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/firstpage" component={FirstPage}/>
                    </Col>
                </Row>
            </Grid>


        );
    }
}

export default MySideNav