import React, { Component } from 'react'
import { usersQuery } from '../../users/components/UserList'
import {
  gql,
  graphql
} from 'react-apollo'

class SignupForm extends Component {
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
      await mutate({
        variables: { user: newUser },
        refetchQueries: [ { query: usersQuery } ]
      })
      form.reset()
    } catch (e) {
      alert(e.message)
    }
  }

  render () {
    return (
      <form onSubmit={this.saveUser}>
        <div>
          <h2>{this.props.title || 'Sign up'}</h2>
          <p>Fullname: <input type="text" name="fullname" /></p>
          <p>Username: <input type="text" name="username" /></p>
          <p>Email: <input type="email" name="email" /></p>
          <p>Password: <input type="password" name="password" /></p>
          <p>Avatar: <input type="file" name="avatart" /></p>
          <button>{this.props.title || 'Sign up'}</button>
        </div>
      </form>
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

export default graphql(saveUserMutataion)(SignupForm)
