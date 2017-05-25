import React from 'react';

import {
  Grid,
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap'

import Foods from './Foods'
import Popup from './Popup';
import ShareFb from './Share'

class ListOfEffects extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      foods: []
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
    const foodsId = this.props.match.params.foodsId
    return (
      <Grid>
        {
          this.state.foods.filter(
            foods => foods.uid === foodsId
          ).map(
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

/*
 import React from 'react'

 class Student extends React.Component {

 constructor(props) {
 super(props)

 this.state = {
 students: []
 }

 fetch(
 process.env.PUBLIC_URL + '/data/students.json'
 ).then(
 response => response.json()
 ).then(
 students => this.setState({
 students: students
 })
 )
 }

 render() {
 const studentId = parseInt(this.props.match.params.studentId, 10)
 return (
 <div>
 Student: {studentId}
 {
 this.state.students.filter(
 student => student.id === studentId
 ).map(
 student => (
 <ul key={student.id}>
 <li>{student.name}</li>
 <li>{student.city}</li>
 </ul>
 )
 )
 }
 </div>
 )
 }
 }

 export default Student
 */