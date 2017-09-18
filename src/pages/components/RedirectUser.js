import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const RedirectUser = (props) => {
  if (!props.isAdmin) {
    return (
      <Redirect to={{
        pathname: '/',
        state: { isAdmin: props.isAdmin }
      }}/>
    )
  }

  return (
    <Redirect to={{
      pathname: '/admin',
      state: { isAdmin: props.isAdmin }
    }}/>
  )
}

export default RedirectUser
