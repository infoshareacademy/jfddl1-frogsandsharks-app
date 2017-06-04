import React from 'react'
import * as firebase from 'firebase'
import {LinkContainer} from 'react-router-bootstrap'

import './userPanel.css'


class UserPanel extends React.Component {
    state = {
        profile: null
    }
    componentWillMount = () => {

    firebase.auth().onAuthStateChanged( user => {
    if (user != null) {
    user.providerData.forEach(profile => {
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
<div id="userPanel">
        <div id="photo">
        <img src={this.state.profile.photoURL} alt="Zdjęcie profilowe" />
        <div id="nameEmail">
        <h1>{this.state.profile.displayName}</h1>
    <p>{this.state.profile.email}</p>
    </div>
    </div>

    </div> : null
}
</div>
);
}
}

export default UserPanel
