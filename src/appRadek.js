import React from 'react'
import { form, FormControl, FormGroup } from 'react-bootstrap'


class appRadek extends React.Component () {
  render () {
    return (
      <form>

        <FormGroup>
          <ControlLabel> Wprowadź wyszukiwany produkt </ControlLabel>
          <FormControl type="text" placaholder="wpisz nazwe produktu"/>

        </FormGroup>
      </form>
    )
  }

}

export default appRadek