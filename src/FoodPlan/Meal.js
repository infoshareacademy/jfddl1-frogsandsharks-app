import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import './style.css'
import {Tooltip, OverlayTrigger} from 'react-bootstrap'

import {connect} from 'react-redux'

import {remove} from "../state/selections"

const tooltip = (
  <Tooltip id="tooltip"><strong>Kliknij tutaj</strong> aby dodać produkt.</Tooltip>
);


export default connect(
  state => ({
    productId: state.selections
  }),
  dispatch => ({
    removeFromFavorites: (productId) => dispatch(remove(productId))
  })
)(
  function Meal(props) {
    return (
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
                  (product, index) => <li key={index} onClick={() => props.removeFromFavorites(product.uid)}>{product.name}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
)
