import React, { Component } from 'react'
import User from './User'
import {
  gql,
  graphql
} from 'react-apollo'


class UserList extends Component {
  constructor (props) {
    super(props)
    this.edit = this.edit.bind(this)
  }

  edit (e, id) {
    console.log(id)
  }

  render () {
    if (!this.props.users) {
      return (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      )
    }

    if (this.props.data.loading) {
      return (
        <tbody>
          <tr>
            <td>Loading...</td>
          </tr>
        </tbody>
      )
    }

    return (
      <tbody>
        {this.props.data.users.map(user => (
          <User key={user.id} {...user} edit={(e) => this.edit(e, user.id)}/>
        ))}
      </tbody>
    )
  }
}

export const usersQuery = gql`
  query getUsers {
    users {
      id
      fullname
      username
      email
      isActive
      group {
        name
      }
    }
  }
`

export default graphql(usersQuery)(UserList)
