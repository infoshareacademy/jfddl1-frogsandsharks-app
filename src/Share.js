import React from 'react'


console.log(window.location.pathname)

const frameStyle ={
border: 'none',
    overflow: 'hidden'
}


class ShareFb extends React.Component {


    render() {

        return (


            <iframe src="https://www.facebook.com/plugins/share_button.php?href=http://app.frogs-sharks.jfddl1.is-academy.pl/foods/331978e8-fa98-4d46-84f5-4ff4e2d9a4f5%2Fdocs%2Fplugins%2F&layout=button&size=large&mobile_iframe=true&width=72&height=28&appId" width={72} height={28} style={frameStyle} scrolling="no" frameBorder={0} allowTransparency="true"></iframe>
        )
    }
}

export default ShareFb