import React from 'react'


import DayView from './FoodPlan/DayView'



const divstyle = {
  display: 'flex',
  justifyContent: 'space-between'

};
const FoodPlan = () => (

<div style={divstyle}>
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