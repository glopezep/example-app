import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  gql,
  graphql
} from 'react-apollo'

const isAuthenticated = false

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.token ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/signin',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default PrivateRoute
