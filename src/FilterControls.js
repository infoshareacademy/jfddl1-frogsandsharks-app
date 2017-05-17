import React from 'react'
import {
  FormGroup,
  FormControl,
  ButtonToolbar,
  DropdownButton,
  MenuItem
} from 'react-bootstrap'

const FilterControls = (props) => (
  <form>
    <FormGroup>
      <FormControl
        placeholder="Wprowadź nazwę produktu"
        onChange={props.handleSearchPhraseUpdate}
      />
    </FormGroup>

    <FormGroup>

      <ButtonToolbar>
        {
          props.filterGroups.map(
            (group, index) => {

              const title = group.find(
                filterObject => props.activeFilterNames.includes(filterObject.name)
              ).label

              return (
                <DropdownButton key={index} title={title}>
                  {
                    group.map(
                      (filter, index) => {
                        const isActive = props.activeFilterNames.includes(filter.name)
                        return (
                          <MenuItem
                            key={index}
                            active={isActive}
                            onSelect={() => props.handleFiltersUpdate(filter.name, !isActive)}>
                            {filter.label}
                          </MenuItem>
                        )
                      }
                    )

                  }
                </DropdownButton>
              )
            }
          )
        }
      </ButtonToolbar>
      {/*<ButtonToolbar>*/}
        {/*{*/}
          {/*props.filterGroups.map(*/}
            {/*(group, index) => (*/}
              {/*<ButtonGroup key={index}>*/}
                {/*{*/}
                  {/*group.map(*/}
                    {/*(filter, index) => {*/}
                      {/*const isActive = props.activeFilterNames.includes(filter.name)*/}
                      {/*return (*/}
                        {/*<Button*/}
                          {/*key={index}*/}
                          {/*active={isActive}*/}
                          {/*onClick={() => props.handleFiltersUpdate(filter.name, !isActive)}>*/}
                          {/*{filter.label}*/}
                        {/*</Button>*/}
                      {/*)*/}
                    {/*}*/}
                  {/*)*/}
                {/*}*/}
              {/*</ButtonGroup>*/}
            {/*)*/}
          {/*)*/}
        {/*}*/}
      {/*</ButtonToolbar>*/}
    </FormGroup>
  </form>
)

export default FilterControls