import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import SignupForm from '../auth/containers/SignupForm'
import UserList from '../users/components/UserList'

class Admin extends Component {
  constructor (props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout () {
    if (localStorage.token) delete localStorage.token
    this.props.history.push('/signin')
  }

  render () {
    if (!this.props.location.state || !this.props.location.state.isAdmin) {
      return <Redirect to={{ pathname: '/' }} />
    }

    return (
      <div>
        <h2> Manage Users</h2>
        <button onClick={this.logout}>logout</button>
        <div>
          <SignupForm title='Add an user' />
        </div>
        <div>
          <form name="add-user-form" >
            <table>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Username </th>
                  <th>Email</th>
                  <th>isActive</th>
                  <th>Group</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <UserList users={[1, 2, 3]}/>
            </table>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}


export default Admin
