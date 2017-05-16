import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    Grid,
    Col,
    Row,
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'
import {
    IndexLinkContainer,
    LinkContainer
} from 'react-router-bootstrap'

import Home from './Home'
import About from './About'
import Search from './Search'


const Navigation = () => (
    <Router>
        <Grid>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem href="#">Home</NavItem>
                    </IndexLinkContainer>
                    <LinkContainer to="/about">
                        <NavItem href="#">About</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/search">
                        <NavItem href="#">Wyszukiwanie</NavItem>
                    </LinkContainer>

                </Nav>
            </Navbar>

            <Row>
                <Col md={12}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/search" component={Search}/>

                </Col>
            </Row>
        </Grid>


    </Router>
)


export default Navigation
