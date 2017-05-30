import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Button} from 'react-bootstrap'
import * as firebase from 'firebase'
import Logo from './Logo'


var provider = new firebase.auth.GoogleAuthProvider()

class LoginNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  signInNewUsers = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function() {
        console.log('signUp success')
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log('signUp fail')
      });
  }

  login = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
      // TODO - show some message - this lib is great for this - toastr
      console.log('Login failed!')
    })
  }


  loginGoogle = () => {
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
    }).catch(function (error) {
      // Handle Errors here.
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
              <Button type="submit" bsStyle="primary" bsSize="small" className="ButtonGo">
                Zaloguj
              </Button>
              <Button bsStyle="primary" bsSize="small" className="ButtonGo" onClick={this.signInNewUsers}>
                Zarejestruj się
              </Button>
              <Button bsStyle="primary" bsSize="small" className="ButtonGo" onClick={this.logout}>
                Wyloguj
              </Button>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <button type="submit" onClick={this.loginGoogle}>
                Logowanie przez google
              </button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }

}

export default LoginNew