import React, { Component } from 'react'

class Admin extends Component {
  render () {
    return (
      <div>
        <h2> Manage Users</h2>
        <div>
          <form name="add-user-form" >
            <p>Add user: <input type="text" name="add-user" />   <button > Add</button></p>
          </form>
        </div>
        <div>
          <form name="add-user-form" >
            <table>
              <tr>
                <th>Full Name</th>
                <th>Username </th>
                <th>Email</th>
                <th>Password</th>
                <th>Avatar</th>
                <th>isActive</th>
                <th>Group</th>
                <th>Remove</th>

              </tr>
              <tr>
                <td>Full Name</td>
                <td>Username </td>
                <td>Email</td>
                <td>Password</td>
                <td>Avatar</td>
                <td>isActive</td>
                <td>Group</td>
                <td><input type="checkbox" /> </td>

              </tr>
              <tr>
                <td>Full Name</td>
                <td>Username </td>
                <td>Email</td>
                <td>Password</td>
                <td>Avatar</td>
                <td>isActive</td>
                <td>Group</td>
                <td><input type="checkbox" /> </td>
              </tr>
              <tr>
                <td>Full Name</td>
                <td>Username </td>
                <td>Email</td>
                <td>Password</td>
                <td>Avatar</td>
                <td>isActive</td>
                <td>Group</td>
                <td><input type="checkbox" /> </td>
              </tr>
            </table>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default Admin
