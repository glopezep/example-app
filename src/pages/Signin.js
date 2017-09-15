import React, { Component } from 'react'
import SigninForm from '../auth/SigninForm'

class Signin extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SigninForm {...this.props}/>
    )
  }
}

export default Signin
