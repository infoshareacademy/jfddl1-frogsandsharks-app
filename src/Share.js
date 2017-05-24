import React from 'react'
import {
    ShareButtons
} from 'react-share';
import {Button} from 'react-bootstrap'

const {
    FacebookShareButton,
} = ShareButtons
const shareUrl = 'http://app.frogs-sharks.jfddl1.is-academy.pl' + window.location.pathname


class ShareFb extends React.Component {

    render() {
        return (

            <FacebookShareButton
                url={shareUrl}
                description="ptrainer  to aplikacja która pomoże ci w osiągnięciu wymarzonego celu. Zadba o
                        Twój trening
                        od strony technicznej, dobierze zestaw ćwiczeń oraz rospisze dietę."
                picture="http://frogs-sharks.jfddl1.is-academy.pl/image/logo.png"
                title="ptrainer - Najlepszy trener personalny w sieci">
                <Button bsStyle="primary" bsSize="large"> Udostępnij </Button>
            </FacebookShareButton>


        )
    }
}

export default ShareFb