import React from 'react'

import {LinkContainer} from 'react-router-bootstrap'

import {
    Grid,
    Col,
    Row,
    Thumbnail,
} from 'react-bootstrap'

const Logo = () => (

    <Grid>
        <Row className="show-grid logoSpace">
        <Col xs={12} md={12} lg={12}>
            <LinkContainer to="/">
                <Thumbnail style="background-color:#DEDEDE" src="http://frogs-sharks.jfddl1.is-academy.pl/image/logo.png" id="logo" href="/"/>
            </LinkContainer>
        </Col>
        </Row>
    </Grid>

)
export default Logo