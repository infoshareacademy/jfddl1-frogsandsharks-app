import React from 'react'

import {
    Grid,
    Col,
    Row,
    Thumbnail,
    Button,
} from 'react-bootstrap'


import './home.css'

const Home = () => (
    <Grid>
        <Row className="show-grid logoSpace">
            <Col xs={12} md={12} lg={12}><img alt="" src="https://s-media-cache-ak0.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg" id="logo"/></Col>
        </Row>
        <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>
                <h1>Instrukcja</h1>
                <p>Jakis tekst sajdkn sak fsdfjs dkjf sdh sdlf jskfj ldjf sdfjsd lfjs dlfs async f j
                 jsdkfskdjf sdjkf jsdlfjsdklfjs dfkl jfslkdjf sldfjsldj fsdklfj kjf sdjsd flksdjf</p>
            </Col>
        </Row>
        <Row className="show-grid options">
            <Col xs={6} md={4}>
                <Thumbnail src="http://www.iconsfind.com/wp-content/uploads/2015/10/20151012_561baa03bcbc6.png" alt="250x250" >
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
