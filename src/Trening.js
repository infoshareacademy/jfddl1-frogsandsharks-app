import React from 'react'
import {
    Grid,
    Col,
    Row,
    Thumbnail,
    Button
} from 'react-bootstrap'
import FacebookLogin from "./FacebookLogin";

const Trening = () => (
    <Grid>
        <Row className="show-grid instruction">
            <Col xs={12} md={12} lg={12}>
                <img src={require('./img/work.png')} alt="Dodaj posiłek do diety"/>
                <h1>Trwają prace</h1>
                <p className="instructionDescription"> <strong>Funkcja "Trening" nie jest jeszcze ukończona</strong>
                Nasi programiści dokładją wszelkich starań by jak najszybciej ukończyć tę funkcję.</p>
            </Col>
        </Row>
<FacebookLogin/>
    </Grid>
)



export default Trening