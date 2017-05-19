import React from 'react'
import {connect } from 'react-redux'

import {add} from './state/selections'

import {
  Modal,
  Button,
  ButtonToolbar,
  MenuItem,
  DropdownButton
} from 'react-bootstrap'

const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
const mealNames = ['Śniadanie', 'Drugie śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja']

export default connect(
  state => ({

  }),
  dispatch => ({
addSelection: (day, meal, productId) => dispatch(add(day, meal, productId))
  })
)(
 class Popup extends React.Component {
   state = {
     showModal:false,
     day: null,
     meal: null,
     productId: null
   }
    close = () => this.setState({showModal: false})
    open = () => this.setState({showModal: true, productId: this.props.foodUid})


   handleConfirm = () => this.props.addSelection(this.state.day, this.state.meal, this.state.productId)

    render = () => {

      return (
        <div>

          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open}
          >
            Dodaj posiłek
          </Button>

          <Modal show={this.state.showModal} onHide={this.close}>
            <Modal.Body>

              <h4>Wybierz dzień w którym chcesz dodać posiłek</h4>
              <ButtonToolbar>
                <DropdownButton
                  id={1}
                title={this.state.day === null ? 'Wybierz dzień' : this.state.day}
                onSelect={(dayName) => this.setState({day: dayName})}
                >
                {
                dayNames.map(
                (dayName, index) => (
                <MenuItem

                  key={index}
                eventKey={dayName}
                >
                {dayName}
              </MenuItem>
              )
              )
              }
            </DropdownButton>
              </ButtonToolbar>

            <h4>Wybierz posiłek</h4>
            <ButtonToolbar>
              <DropdownButton
                id={1}
                title={this.state.meal === null ? 'Wybierz posiłek' : this.state.meal}
                onSelect={(mealName) => this.setState({meal: mealName})}

              >
                {
                  mealNames.map(
                    (mealName, index) => (
                      <MenuItem
                        key={index}
                      eventKey={mealName}>
                        {mealName}
                      </MenuItem>
                    )
                  )
                }
              </DropdownButton>
            </ButtonToolbar>
          </Modal.Body>

          <Modal.Body>
            <Button onClick={this.handleConfirm}>Zatwierdź</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
})