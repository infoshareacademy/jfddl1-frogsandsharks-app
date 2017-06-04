import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Alert} from 'react-bootstrap'
import * as firebase from 'firebase'
import {LinkContainer} from 'react-router-bootstrap'


class UserPanel extends React.Component {
    componentWillMount = () => {

        firebase.auth().onAuthStateChanged( user => {
            if (user != null) {
                user.providerData.forEach(function (profile) {
                    this.setState({ profile: profile })
                });
            } else {
                // No user is signed in.
            }
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.profile ?
                        <div>
                            <h1>{this.state.profile.email}</h1>
                            <img src={this.state.profile.photoURL} alt="Zdjęcie profilowe" />
                        </div> : null
                }
            </div>
        );
    }
}

export default UserPanel
