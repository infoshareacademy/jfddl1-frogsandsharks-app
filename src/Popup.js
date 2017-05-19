import React from 'react'
import {
  Popover,
  Tooltip,
  Modal,
  Button,
  ButtonToolbar,
  MenuItem,
  DropdownButton
} from 'react-bootstrap'

class Popup extends React.Component {
  state = {
    showModal: false
  }

  close = () => this.setState({showModal: false})

  open = () => this.setState({showModal: true})

  render = () => {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

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
                <MenuItem>Poniedziałek</MenuItem>
                <MenuItem>Wtorek</MenuItem>
                <MenuItem>Środa</MenuItem>
                <MenuItem>Czwartek</MenuItem>
                <MenuItem>Piątek</MenuItem>
                <MenuItem>Sobota</MenuItem>
                <MenuItem>Niedziela</MenuItem>
              </DropdownButton>
            </ButtonToolbar>

            <h4>Wybierz posiłek</h4>
            <ButtonToolbar>
              <DropdownButton id={1} title={'Wybierz posiłek'}>
                <MenuItem>Sniadanie</MenuItem>
                <MenuItem>Drugie śniadanie</MenuItem>
                <MenuItem>Obiad</MenuItem>
                <MenuItem>Podwieczorek</MenuItem>
                <MenuItem>Kolacja</MenuItem>
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