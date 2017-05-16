import React from 'react'


import DayView from './FoodPlan/DayView'



var style = {
  color: 'black',
  background: '#96dbc8',
  display: 'flex',
  justifyContent: 'space-between'

};
const FoodPlan = () => (

<div style={style}>
    <DayView/>
    <DayView/>
    <DayView/>
    <DayView/>
    <DayView/>
    <DayView/>
    <DayView/>
</div>
)

export default FoodPlan