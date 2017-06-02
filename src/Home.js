import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'

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

        <Row className="show-grid instruction">
            <Col xs={12} md={12} lg={12}>
                <h1>Instrukcja</h1>
                <p className="instructionDescription">Aby dodać posiłek do swojego planu żywieniowego wybierz na stronie głównej lub w menu bocznym rozwijanym "Wyszukiwarka".
                Następnie wybierz posiłek którego szukasz i dodaj go do wybranego przez siebie dnia i posiłku. Jednocześnie informujemy,
                    że aplikacja jest ciągle rozwijana, więc odnośniki <strong>"Trening" i "Powiadomienia" nie sa jeszcze aktywne.</strong></p>
            </Col>
        </Row>
        <Row className="show-grid options">
            <Col xs={12} md={4}>
                <Thumbnail src={require('./img/addDiet.png')} alt="Dodaj posiłek do diety" className="dashboardBlock">
                    <h3>Dodaj produkty do jadłospisu</h3>
                    <p>Kliknij w przycisk poniżej aby przejść do wyszukiwarki produktów</p>
                    <p>
                        <LinkContainer to="/foods">
                         <Button bsStyle="primary"  className="ButtonGo">Wyszukiwarka</Button>
                        </LinkContainer>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={12} md={4}>
                <Thumbnail src={require('./img/addTraining.png')} alt="Dodaj trening" className="dashboardBlock">
                    <h3>Trening</h3>
                    <p>Do swojej diety dodaj odpowiedni plan treningowy by uzyskać lepsze efekty.</p>
                    <p>
                        <Button bsStyle="primary" className="ButtonGo">Trening</Button>&nbsp;

                    </p>
                </Thumbnail>
            </Col>
            <Col xs={12} md={4}>
                <Thumbnail src={require('./img/addAlarm.png')} alt="Dodaj powiadomienia" className="dashboardBlock">
                    <h3>Powiadomienia</h3>
                    <p>Jeżeli często zdarza Ci się zapomnieć o diecie czy treningu to ustaw powiadomienia.</p>
                    <p>
                        <Button bsStyle="primary" className="ButtonGo">Powiadomienia</Button>&nbsp;

                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
)

export default Home
