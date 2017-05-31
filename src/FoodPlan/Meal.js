import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import './style.css'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

const tooltip = (
  <Tooltip id="tooltip"><strong>Kliknij tutaj</strong> aby dodać produkt.</Tooltip>
);

const Meal = (props) => (

  <div>
    <div>
      <p className="mealNameStyle">{props.mealName}</p>
    </div>
    <div className="mealStyle">
      <div>
        <OverlayTrigger placement="top" overlay={tooltip}>
          <LinkContainer to={props.link} className="imgStyle">
            <img src={require('./ico/add.png')} alt=""/>
          </LinkContainer>
        </OverlayTrigger>
        <ul>
          {
            props.products.map(
              (product, index) => <li key={index}>{product.name}</li>
            )
          }
        </ul>
      </div>
    </div>
  </div>
)

export default Meal