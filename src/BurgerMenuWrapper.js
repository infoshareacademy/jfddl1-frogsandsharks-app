import React from 'react'
import { slide as BurgerMenu } from 'react-burger-menu'
import * as firebase from 'firebase'
import { Link } from 'react-router-dom'

import './userStyle.css'


const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#fff'
  },
  bmMenu: {
    background: '#006666',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#267E74'
  },
  bmItemList: {
    color: '#000',
    padding: '0.8em'
  },

  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }

}

class BurgerMenuWrapper extends React.Component {



  logout = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    })
  }

  render = () => {
    return (
    <div id="outer-container">
      <BurgerMenu
        onStateChange={this.props.onStateChange}
        isOpen={this.props.isOpen}
        styles={styles}
        pageWrapId={ "page-wrap" }
        outerContainerId={ "outer-container" }
      >
        <div id="userProfile"><img src={require('./img/userPhotoMin.png')}/><h3>Maria Kowalska</h3></div>
        {
          this.props.links.map(
            (link, index) => (
              <Link id="links" key={index} to={link.path} onClick={() => this.props.toggleSidebar(false)}>{link.label}</Link>
            )
          )}
        {
          <Link id="links"  to={'/'} onClick={() => this.logout()}>Wyloguj</Link>
        }
      </BurgerMenu>
      <div id="page-wrap">
        {
          this.props.children
        }
      </div>
    </div>
    )
  }
}

export default BurgerMenuWrapper