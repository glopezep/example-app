import React, { Component } from 'react'
import SignupForm from '../auth/containers/SignupForm'
import {
  gql,
  graphql
} from 'react-apollo'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.saveUser = this.saveUser.bind(this)
  }

  async saveUser (e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const { mutate } = this.props
    const newUser = {
      fullname: formData.get('fullname'),
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
      await mutate({ variables: { user: newUser } })
      form.reset()
    } catch (e) {
      alert(e.message)
    }
  }

  render () {
    return (
      <SignupForm saveUser={this.saveUser} />
    )
  }
}

const saveUserMutataion = gql`
mutation saveUser($user: newUser) {
  saveUser(user: $user) {
    username
  }
}
`

export default graphql(saveUserMutataion)(Signup)
