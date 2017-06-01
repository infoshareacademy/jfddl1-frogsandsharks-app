import React from 'react'
import {
  ShareButtons
} from 'react-share';
import {Button, Image} from 'react-bootstrap'

const {
  FacebookShareButton,
} = ShareButtons

const shareUrl = 'http://app.frogs-sharks.jfddl1.is-academy.pl' + window.location.pathname


class ShareFb extends React.Component {

  render() {
    return (
<div>
      <FacebookShareButton
        windowWidth={555}
        windowHeight={640}
        url={shareUrl}
        description="ptrainer  to aplikacja która pomoże ci w osiągnięciu wymarzonego celu. Zadba o
                        Twój trening
                        od strony technicznej, dobierze zestaw ćwiczeń oraz rospisze dietę."
        picture="http://frogs-sharks.jfddl1.is-academy.pl/image/logo.png"
        title="ptrainer - Najlepszy trener personalny w sieci">
        <button id="fbButton">
          <Image src={require('./img/Share-on-Facebook.png')}
                  responsive={true}/>



        </button>
      </FacebookShareButton>



</div>
    )
  }
}

export default ShareFb