import React from 'react'
import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'

import {LinkContainer} from 'react-router-bootstrap'


import {add} from './state/selections'

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
    withRouter(class Popup extends React.Component {
        state = {
            showModal: false,
            day: null,
            meal: null,
            productId: null,
            isFormComplete: false
        }

        componentWillMount() {
            console.log('popup props', this.props);
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

        handleConfirmWithDayAndMealFromURL = () => {
            this.props.addSelection(this.props.match.params.day, this.props.match.params.meal, this.props.match.params.foodsId)
            this.setState({
                isFormComplete: true,
                showModal: false
            })
        }

        render = () => {

            return (
                <div>


                    {
                        this.props.match.params.day ?
                            <Button
                                bsStyle="primary"
                                bsSize="small"
                                className="ButtonGo"
                                onClick={this.handleConfirmWithDayAndMealFromURL}
                            >
                                Dodaj do aktualnego posiłku
                            </Button> :
                            <Button
                                bsStyle="primary"
                                bsSize="small"
                                className="ButtonGo"
                                onClick={this.open}
                            >
                                Wybierz posiłek, by dodać produkt
                            </Button>
                    }

                    {
                        this.state.isFormComplete ?
                            <Alert bsStyle="success" onDismiss={() => this.setState({isFormComplete: false})}>
                                <h4>Zaktualizowałeś swój jadłospis!</h4>
                                <p>Dodałeś nowy produkt do posiłku {this.state.meal} w dniu {this.state.day}</p>
                                <p>
                                    <LinkContainer to="/foodplan">
                                        <button className="ButtonGo"
                                                onClick={() => this.setState({isFormComplete: false})}>Przejdź do
                                            jadłospisu
                                        </button>
                                    </LinkContainer>
                                </p>
                            </Alert> : null
                    }

                    <Modal show={this.state.showModal} onHide={this.close}>

                        <Modal.Body>

                            <h4>Wybierz dzień w którym chcesz dodać posiłek</h4>
                            <ButtonToolbar>
                                <DropdownButton
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
                                className="ButtonGo leftBtn"
                                onClick={this.handleConfirm}>
                                Zatwierdź
                            </Button>
                            <Button
                                className="ButtonGo"
                                onClick={this.close}>
                                Zamknij
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
    })
)