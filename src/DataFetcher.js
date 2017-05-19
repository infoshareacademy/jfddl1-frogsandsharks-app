import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchProducts } from './state/products'

export default withRouter(connect(
  null,
  dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
  })
)(
  class DataFetcher extends React.Component {
    componentWillMount() {
      this.props.fetchProducts()
    }

    render() {
      return <div>{this.props.children}</div>
    }
  }
))