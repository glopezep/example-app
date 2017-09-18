import React, { Component } from 'react'
import SigninForm from '../auth/SigninForm'
import { Redirect } from 'react-router-dom'
import {
  compose,
  gql,
  graphql
} from 'react-apollo'
import RedirectUser from './components/RedirectUser'

class Signin extends Component {
  constructor (props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
    this.state = {
      isAuthenticated: false,
      isAdmin: false,
    }
  }

  async authenticate (e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    const { authenticateMutation, verifyTokenMutation } = this.props
    let groupName = ''

    try {
      const authenticateResponse = await authenticateMutation({
        variables: { username, password }
      })

      const verifyTokenResponse = await verifyTokenMutation({
        variables: { token: authenticateResponse.data.authenticate.token }
      })


      if (verifyTokenResponse.data.verifyToken.group) {
        groupName = verifyTokenResponse.data.verifyToken.group.name
      }

      const isAdmin = groupName === 'Admin'

      localStorage.token = authenticateResponse.data.authenticate.token

      this.setState({
        isAuthenticated: true,
        isAdmin
      })
    } catch (e) {
      return alert(e.message)
    }
  }


  render () {
    if (this.state.isAuthenticated) {
      return <RedirectUser
        isAdmin={this.state.isAdmin}
      />
    }

    return <SigninForm authenticate={this.authenticate} />
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
)(Signin)
