import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import './style.css'

const Sniadanie = () => (

  <LinkContainer to="foods" className="sniad">

      <ul >
        <li>(śniadanie)</li>
        <li>(śniadanie)</li>
        <li>(śniadanie)</li>
        <li>(śniadanie)</li>
      </ul>

  </LinkContainer>
)

export default Sniadanie