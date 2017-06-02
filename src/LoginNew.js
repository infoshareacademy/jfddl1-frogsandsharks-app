import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Button, Alert} from 'react-bootstrap'
import * as firebase from 'firebase'
import Logo from './Logo'


var provider = new firebase.auth.GoogleAuthProvider()

class LoginNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showAlert: false
        }
    }

    signInNewUsers = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                console.log('signUp success')
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log('signUp fail')
            });
    }

    login = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            // TODO - show some message - this lib is great for this - toastr
            this.setState({
                showAlert: true
            })
            console.log('Login failed!')
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
                        </Col>
                    </FormGroup>

                </Form>

                {
                    this.state.showAlert ?
                        <Alert bsStyle="warning" onDismiss={() => this.setState({showAlert: false})}>
                            <h4>Niepoprawny login lub hasło</h4>
                        </Alert> : null
                }

            </div>
        )
    }

}

export default LoginNew