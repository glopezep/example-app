import React from 'react'

const User = (props) => {
  if (!props.editing) {
    return (
      <tr>
        <td>{props.fullname}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
        <td>{props.isActive ? 'yes' : 'no'}</td>
        <td>{props.group ? props.group.name : ''}</td>
        <td><input type="checkbox" /> </td>
      </tr>
    )
  }

  return (
    <tr>
      <td><input value={props.fullname}/></td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>{props.isActive ? 'yes' : 'no'}</td>
      <td>{props.group ? props.group.name : ''}</td>
      <td><input type="checkbox" /> </td>
    </tr>
  )
}

export default User
