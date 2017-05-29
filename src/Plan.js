import React from 'react'

import "./FoodPlan/style.css"

import FoodPlan from './FoodPlan'


class Plan extends React.Component {
  render() {
    return (
      <div>
        <h1 className="planNameStyle"><strong>Twój plan żywieniowy</strong></h1>
        <FoodPlan/>
      </div>
    );
  }
}

export default Plan