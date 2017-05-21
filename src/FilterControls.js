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

              const element = group.find(
                filterObject => props.activeFilterNames.includes(filterObject.name)
              )

              const title = element === undefined ? 'Wszystkie' : element.label

              return (
                <DropdownButton  bsStyle="primary"
                                 bsSize="large"
                                 id={1}
                                 key={index}
                                 title={title}>
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

    </FormGroup>
  </form>
)

export default FilterControls