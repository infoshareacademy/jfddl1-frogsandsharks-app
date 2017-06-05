import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Alert} from 'react-bootstrap'
import * as firebase from 'firebase'
import Logo from './Logo'
import FacebookLogin from './FacebookLogin'


var provider = new firebase.auth.GoogleAuthProvider()

class LoginNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showLoginAlert: false,
            showSignAlert: false
        }
    }

    signInNewUsers = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                console.log('signUp success')
            })
            .catch((error) => {
                // Handle Errors here.
                this.setState({
                    showSignAlert: true
                })
                console.log('signUp fail')
            });
    }

    login = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState({
                showLoginAlert: true
            })
        })
    }


    loginGoogle = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
        }).catch(function (error) {
        });
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <div>
                <Logo/>

                <h1>Logowanie</h1>

                <Form horizontal onSubmit={this.login}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={8}>
                            <FormControl required type="email" placeholder="Email" value={this.state.email}
                                         onChange={this.handleEmailChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <FormControl type="password" placeholder="Password" value={this.state.password}
                                         onChange={this.handlePasswordChange}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <button type="submit" className="ButtonGo">
                                Zaloguj
                            </button>
                            <button className="ButtonGo" onClick={this.signInNewUsers}>
                                Zarejestruj się
                            </button>

                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <button type="submit" className="GpButton" onClick={this.loginGoogle}>
                                Zaloguj przez Google+
                            </button>
                            <FacebookLogin/>
                        </Col>
                    </FormGroup>

                </Form>

                {
                    this.state.showLoginAlert ?
                        <Alert bsStyle="danger" onDismiss={() => this.setState({showLoginAlert: false})}>
                            <h4>Niepoprawny login lub hasło</h4>
                        </Alert> : null
                }
                {
                    this.state.showSignAlert ?
                        <Alert bsStyle="danger" onDismiss={() => this.setState({showSignAlert: false})}>
                            <h4>Błąd rejestracji</h4>
                            <p>Twój e-mail jest nieprawidłowy lub znajduje się już w bazie</p>
                        </Alert> : null
                }

            </div>
        )
    }

}

export default LoginNew