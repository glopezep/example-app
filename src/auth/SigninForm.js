import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { compose } from 'react-apollo'

import {
  gql,
  graphql
} from 'react-apollo'


class SigninForm extends Component {
  constructor(props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.state = {
      token: ''
    }
  }

  async authenticate(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    const { authenticateMutation, verifyTokenMutation } = this.props

    try {
      const res = await authenticateMutation({ variables: { username, password } })
      const { token } = res.data.authenticate

      if (!localStorage.token) localStorage.token = token

      const { data } = await verifyTokenMutation({ variables: { token }})

      if (data.verifyToken.group.name !== 'Admin') {
        this.props.history.push('/')
      } else {
        this.props.history.push('/admin')
      }
    } catch (e) {
      alert(e)
    }
  }

  render() {
    return (
      <form onSubmit={this.authenticate}>
        <div>
          <h2> Login</h2>
          <p>Username: <input type="text" name="username" /></p>
          <p>Password: <input type="text" name="password" /></p>

          <button>
            Login
          </button>
        </div>
      </form>
    )
  }
}

const authenticateMutation = gql`
mutation authenticate($username: String!, $password: String!) {
  authenticate(username: $username, password: $password) {
    token
  }
}
`

const verifyTokenMutation = gql`
mutation verifyToken($token: String!) {
  verifyToken(token: $token) {
    username
    group {
      name
    }
  }
}
`

export default compose(
  graphql(authenticateMutation, { name: 'authenticateMutation' }),
  graphql(verifyTokenMutation, { name: 'verifyTokenMutation' })
)(SigninForm)


// graphql(authenticateMutation)(SigninForm)
