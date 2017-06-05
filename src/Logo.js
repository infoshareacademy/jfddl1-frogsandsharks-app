import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Grid, Col, Row, Thumbnail } from 'react-bootstrap'


const Logo = () => (

    <Grid id="logoDesign">
        <Row className="show-grid logoSpace" >
        <Col xs={12} md={12} lg={12}>
            <LinkContainer to="/">
                <Thumbnail src={require('./img/logo.png')} id="logo" href="/"/>
            </LinkContainer>
        </Col>
        </Row>
    </Grid>

)
export default Logo