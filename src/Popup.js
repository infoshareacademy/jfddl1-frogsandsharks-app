import React from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'
//import {LinkContainer, } from 'react-router-bootstrap'


import {add} from './state/selections'
import ShareFb from './Share'

import {
    Modal,
    Button,
    ButtonToolbar,
    MenuItem,
    DropdownButton,
} from 'react-bootstrap'


const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
const mealNames = ['Śniadanie', 'Drugie śniadanie', 'Obiad', 'Podwieczorek', 'Kolacja']


export default connect(
    state => ({}),
    dispatch => ({
        addSelection: (day, meal, productId) => dispatch(add(day, meal, productId))
    })
)(
    class Popup extends React.Component {
        state = {
            showModal: false,
            day: null,
            meal: null,
            productId: null,
            isFormComplete: false
        }
        close = () => this.setState({showModal: false})
        open = () => this.setState({showModal: true, productId: this.props.foodUid, isFormComplete: false})

        handleConfirm = () => {
            this.props.addSelection(this.state.day, this.state.meal, this.state.productId)
            this.setState({
                isFormComplete: true,
                showModal: false
            })
        }

        render = () => {

            return (
                <div>

                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        className="ButtonGo"
                        onClick={this.open}
                    >
                        Dodaj do posiłku
                    </Button>



                    {
                        this.state.isFormComplete ?
                            <Alert bsStyle="success" onDismiss={() => this.setState({isFormComplete: false})}>
                                <h4>Wow! Dodałeś produkt do posiłku!</h4>
                                <p>Dodałeś nowy produkt do posiłku {this.state.meal} w dniu {this.state.day}</p>
                                <p>
                                    <Button bsStyle="success" onClick={() => this.setState({isFormComplete: false})}>Kontynuuj</Button>
                                </p>
                            </Alert> : null
                    }

                    <Modal show={this.state.showModal} onHide={this.close}>

                        <Modal.Body>

                            <h4>Wybierz dzień w którym chcesz dodać posiłek</h4>
                            <ButtonToolbar>
                                <DropdownButton
                                    bsStyle="primary"
                                    className="ButtonGo"
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
                                    bsStyle="primary"
                                    className="ButtonGo"
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

                        <Modal.Footer className="foot">
                            <Button
                                bsStyle="primary"
                                className="ButtonGo leftBtn"
                                onClick={this.handleConfirm}>
                                Zatwierdź
                            </Button>
                            <Button
                                bsStyle="primary"
                                className="ButtonGo"
                                onClick={this.close}>
                                Zamknij
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
    }
)