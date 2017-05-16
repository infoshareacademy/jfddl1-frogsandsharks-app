import React from 'react'


import FoodPlan from './FoodPlan'


class Plan extends React.Component {
  render() {
    return (
      <div>
        <h1>Twój plan żywieniowy</h1>
        <FoodPlan/>
      </div>
    );
  }
}

export default Plan