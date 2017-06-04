import React from 'react'
import {Form, FormGroup, FormControl, Col, ControlLabel, Alert} from 'react-bootstrap'
import * as firebase from 'firebase'
import {LinkContainer} from 'react-router-bootstrap'


class UserPanel extends React.Component {
    componentWillMount = () => {

        firebase.auth().onAuthStateChanged( user => {
            if (user != null) {
                user.providerData.forEach(function (profile) {
                    console.log("Sign-in provider: "+profile.providerId);
                    console.log("  Provider-specific UID: "+profile.uid);
                    console.log("  Name: "+profile.displayName);
                    console.log("  Email: "+profile.email);
                    console.log("  Photo URL: "+profile.photoURL);
                });
            } else {
                // No user is signed in.
            }
        });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default UserPanel
