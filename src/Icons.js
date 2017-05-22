import React from 'react'

import FontAwesome from 'react-fontawesome'

var HomeIcon = React.createClass({
  render: function () {
    return (
      <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size='2x'
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#fff' }}
      />
    );
  }
});

export default HomeIcon
