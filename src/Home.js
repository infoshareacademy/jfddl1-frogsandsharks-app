import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    Grid,
    Col,
    Row,
    Thumbnail,
    Button,
} from 'react-bootstrap'
import {
    IndexLinkContainer,
    LinkContainer
} from 'react-router-bootstrap'

const Home = () => (
    <Grid>
        <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>Logo pTrainer</Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>
                <h1>Instrukcja</h1>
                <p>Jakis tekst sajdkn sak fsdfjs dkjf sdh sdlf jskfj ldjf sdfjsd lfjs dlfs async f j
                 jsdkfskdjf sdjkf jsdlfjsdklfjs dfkl jfslkdjf sldfjsldj fsdklfj kjf sdjsd flksdjf</p>
            </Col>
        </Row>
        <Row className="show-grid">
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;

                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;

                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;

                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
)

export default Home
