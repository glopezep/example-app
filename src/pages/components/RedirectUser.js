import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const RedirectUser = (props) => {
  if (!props.isAdmin) {
    return (
      <Redirect to={{
        pathname: '/'
      }}/>
    )
  }

  return (
    <Redirect to={{
      pathname: '/admin'
    }}/>
  )
}

export default RedirectUser
