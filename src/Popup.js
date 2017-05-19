import React from 'react'
import {
  Modal,
  Button,
  ButtonToolbar,
  MenuItem,
  DropdownButton
} from 'react-bootstrap'

const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
const mealNames = ['Śniadanie', 'Drugie śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja']

class Popup extends React.Component {
  state = {
    showModal: false


  }
  close = () => this.setState({showModal: false})
  open = () => this.setState({showModal: true})
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
            <Modal.Title>Wybierz dzień w którym chcesz dodać posiłek</Modal.Title>
            <ButtonToolbar>
              <DropdownButton id={1} title={'Wybierz dzień'}>
                {
                  dayNames.map(
                    (dayName, index) => (
                      <MenuItem
                        key={index}>
                        {dayName}
                      </MenuItem>
                    )
                  )
                }
              </DropdownButton>
            </ButtonToolbar>

            <h4>Wybierz posiłek</h4>
            <ButtonToolbar>
              <DropdownButton id={1} title={'Wybierz posiłek'}>
                {
                  mealNames.map(
                    (mealName, index) => (
                      <MenuItem
                        key={index}>
                        {mealName}
                      </MenuItem>
                    )
                  )
                }
              </DropdownButton>
            </ButtonToolbar>
          </Modal.Body>

          <Modal.Body>
            <Button>Zatwierdź</Button>
            <Button onClick={this.close}>Close</Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default Popup