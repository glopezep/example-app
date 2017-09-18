import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <h2>Greeting</h2>
        <p>Welcome  </p>
        <Link to={{
          pathname: '/admin',
          state: {
            isAdmin: this.props.isAdmin
          }
        }}>
          admin
        </Link>
      </div>
    )
  }
}

export default Home
