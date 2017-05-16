import React from 'react'
import {
    FormGroup,
    FormControl,
    ButtonToolbar,
    ButtonGroup,
    Button
} from 'react-bootstrap'

const FilterControls = (props) => (
    <form>
        <FormGroup>
            <FormControl
                onChange={props.handleSearchPhraseUpdate}
            />
        </FormGroup>

        <FormGroup>
            <ButtonToolbar>
                {
                    props.filterGroups.map(
                        (group, index) => (
                            <ButtonGroup key={index}>
                                {
                                    group.map(
                                        (filter, index) => {
                                            const isActive = props.activeFilterNames.includes(filter.name)
                                            return (
                                                <Button
                                                    key={index}
                                                    active={isActive}
                                                    onClick={() => props.handleFiltersUpdate(filter.name, !isActive)}>
                                                    {filter.label}
                                                </Button>
                                            )
                                        }
                                    )
                                }
                            </ButtonGroup>
                        )
                    )
                }
            </ButtonToolbar>
        </FormGroup>
    </form>
)

export default FilterControls