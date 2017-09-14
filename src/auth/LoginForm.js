import React, { Component } from 'react'

import {
  gql,
  graphql
} from 'react-apollo'


class LoginForm extends Component {
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
    const { mutate } = this.props

    try {
      const res = await mutate({
        variables: { username, password }
      })
      this.setState({ token: res.data.authenticate.value })
    } catch (e) {
      alert(e)
    }
  }

  render() {
    return (
      <form onSubmit={this.authenticate}>
        <p>
          Token: {this.state.token || 'Empty'}
        </p>
        <input type='text' name='username' />
        <input type='text' name='password'/>
        <button>Login</button>
      </form>
    )
  }
}

const authenticateMutation = gql`
  mutation authenticate($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      value
    }
  }
`

export default graphql(authenticateMutation)(LoginForm)
