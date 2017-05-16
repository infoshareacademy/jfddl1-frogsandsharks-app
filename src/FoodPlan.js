import React from 'react'
import { Row } from 'react-flexbox-grid';

import dayView from './dayView'



var style = {
  color: 'black',
  background: '#96dbc8',
  display: 'flex',
  justifyContent: 'space-between'

};
const FoodPlan = () => (

<div>
  <Row style={style}>
    <dayView/>
    <dayView/>
    <dayView/>
    <dayView/>
    <dayView/>
  </Row>
</div>
)

export default FoodPlan