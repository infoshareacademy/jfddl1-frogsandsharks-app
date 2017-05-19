import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'


const Meal = (props) => (

  <LinkContainer to="foods">
    <div>
      <h5>{props.mealName}</h5>
      <ul>
        {
          props.products.map(
            (product, index) => <li key={index}>{product.name}</li>
          )
        }
      </ul>
    </div>
  </LinkContainer>
)

export default Meal