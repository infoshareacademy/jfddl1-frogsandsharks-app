import React from 'react';

import {
  Grid,
  Col,
  Row,
  Nav,
  Navbar,
  NavItem,
  Panel,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'


class ListOfEffects extends React.Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4} lg={4}>
            <Row>
              <Col lg={12}>
                <div>Photo</div>
              </Col>
              <Col lg={12}>
                <div>Button</div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={5} lg={5}>

              <ListGroup>
                <h1>W 100 gramach produktu</h1>
                <ListGroupItem>Nazwa : </ListGroupItem>
                <ListGroupItem>Kategoria : </ListGroupItem>
                <ListGroupItem>Kalorie : </ListGroupItem>
                <ListGroupItem>Białko : </ListGroupItem>
                <ListGroupItem>Węglowodany : </ListGroupItem>
                <ListGroupItem>Cukry : </ListGroupItem>
                <ListGroupItem>Tłuszcze : </ListGroupItem>
              </ListGroup>

          </Col>
          <Col xs={12} md={3} lg={3}>
            <div>Button</div>
          </Col>
        </Row>
      </Grid>
    )

  }
}


export default ListOfEffects