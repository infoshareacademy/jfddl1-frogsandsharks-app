import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import './style.css'

const Meal = (props) => (

  <LinkContainer to="foods">
    <div>
      <p className="mealNameStyle">{props.mealName}</p>
      <div className="mealStyle">
        <ul>
          {
            props.products.map(
              (product, index) => <li key={index}>{product.name}</li>
            )
          }
        </ul>
      </div>
    </div>
  </LinkContainer>
)

export default Meal