import React from 'react'
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import {Button, Image} from 'react-bootstrap'

const {
  FacebookShareButton,
} = ShareButtons

const shareUrl = 'http://app.frogs-sharks.jfddl1.is-academy.pl' + window.location.pathname
const FacebookIcon = generateShareIcon('facebook')

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
        <Button bsSize="small">
          <Image src="http://audioenhancement.com/wp-content/uploads/2014/05/Share-on-Facebook-SM-1024x198.png"
                 id="fbButton" responsive={true}/>



        </Button>
      </FacebookShareButton>



</div>
    )
  }
}

export default ShareFb