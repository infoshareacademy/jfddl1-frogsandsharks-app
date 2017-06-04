import React from 'react'
import * as firebase from 'firebase'





class FacebookLogin extends React.Component {



    state = {user: null};
    loginWithFacebook() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            this.setState({user: result.user});
        }.bind(this));
    }

    logOut() {
        firebase.auth().signOut().then(function () {
            this.setState({user: null});
        }.bind(this));
    }





    render() {
        const user = this.state.user;
        return (
            user ?
                <div>
                    <p>Hi, {user.displayName}!</p>
                    <button onClick={this.logOut.bind(this)}>Log Out</button>
                </div> :
                <button className="fbButton" onClick={this.loginWithFacebook.bind(this)}>Zaloguj się przez Facebook</button>
        )
    }
} ;


export default FacebookLogin