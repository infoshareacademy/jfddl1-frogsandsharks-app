import React from 'react'
import {
    Grid,
    Col,
    Row,
    Image
} from 'react-bootstrap'

const Logo = () => (
    <Grid>
        <Row className="show-grid logoSpace">
        <Col xs={12} md={12} lg={12}>
            <Image src="http://frogs-sharks.jfddl1.is-academy.pl/image/logo.png" id="logo" />
        </Col>
        </Row>
    </Grid>
)
export default Logo