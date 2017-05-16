import React from 'react'
import {
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    DropdownButton,
    MenuItem,
    Button
} from 'react-bootstrap'
import ListOfFood from './ListOfFood'

const Search = () =>  (

    <Form >
        <FormGroup>
          <ControlLabel> Wprowadź wyszukiwany produkt </ControlLabel>
          <FormControl  type="text" placeholder="wpisz nazwe produktu"/>
        </FormGroup>

       <DropdownButton id="dropdown-custom-1" title="Kategorie">
           <MenuItem eventKey="1">Owoce</MenuItem>
           <MenuItem eventKey="2">Warzywa</MenuItem>
           <MenuItem eventKey="3">Mięso</MenuItem>
           <MenuItem eventKey="4">Ryby</MenuItem>
           <MenuItem eventKey="5">Nabiał</MenuItem>
           <MenuItem eventKey="6">Dodatki</MenuItem>
           <MenuItem eventKey="7">Produkty Śniadaniowe</MenuItem>
           <MenuItem eventKey="8">Fast-Food</MenuItem>
       </DropdownButton>
       <Button>Szukaj</Button>

        <ListOfFood/>


      </Form>


)

export default Search