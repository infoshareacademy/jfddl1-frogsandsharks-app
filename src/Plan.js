import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';




class Plan extends React.Component {
        render() {

            var style = {
                color: 'black',
                background: '#49d290'

            };
            return (
                <Grid style={style}>
                    <h1>Twój plan żywieniowy</h1>
                    <Row col={14}>
                        <Col xs={6} md={1}>
                            Poniedziałek
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Wtorek
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Środa
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Czwartek
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Piątek
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Sobota
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                        <Col xs={6} md={1}>
                            Niedziela
                            <div>
                                <p>(dodaj produkty)</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            );
        }
}

export default Plan