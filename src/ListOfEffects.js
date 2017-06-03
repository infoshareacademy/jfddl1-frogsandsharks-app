import React from 'react';

import {
  Grid,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

import Foods from './SearchFoods'
import Popup from './Popup';
import ShareFb from './Share'
import MyComponent from "./state/Chart";

class ListOfEffects extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      foods: [],
    }

    fetch(
      process.env.PUBLIC_URL + '/data/foods.json'
    ).then(
      response => response.json()
    ).then(
      foods => this.setState({
        foods: foods
      })
    )
  }

  render() {

    const foodsId = this.props.match.params.foodsId;

    const currentFood = this.state.foods.filter(
      foods => foods.uid === foodsId
    );
    console.log('#', currentFood);
    var data = [];
    if (currentFood[0]) {
      data = [
        {label: "Biako", value: currentFood[0].protein * 4, color: "#008000"},
        {label: "Węglowodany", value: currentFood[0].carbohydrate * 4, color: "#3b5998"},
        {label: "Tłuszcze", value: currentFood[0].fat * 9, color: "#FFA500"}
      ];
    }
    return (
      <Grid>
        {
          currentFood.map(
            foods => (
              <Row key={foods.uid} className="show-grid">
                <Col>
                  <Row>
                    <Col lg={4}>
                      <Foods/>
                    </Col>
                    <Col xs={12} md={5} lg={5}>


                      <ListGroup key={foods.uid}>
                        <h1>W 100 gramach produktu</h1>
                        <ListGroupItem>Nazwa : {foods.name} </ListGroupItem>
                        <ListGroupItem>Kategoria : {foods.category}</ListGroupItem>
                        <ListGroupItem>Kalorie : {foods.energy} </ListGroupItem>
                        <ListGroupItem>Białko : {foods.protein} </ListGroupItem>
                        <ListGroupItem>Węglowodany : {foods.carbohydrate} </ListGroupItem>
                        <ListGroupItem>Tłuszcze : {foods.fat} </ListGroupItem>
                      </ListGroup>


                      <Row>
                        <Col lg={8}>
                          <Popup foodUid={foods.uid}/>
                        </Col>
                        <Col lg={4}>
                          <ShareFb/>
                        </Col>

                      </Row>

                    </Col>
                    <Col lg={3}>
                      <MyComponent data={data}/>
                    </Col>
                  </Row>
                </Col>
              </Row>
          )
          )
        }

      </Grid>
    )

  }
}


export default ListOfEffects
