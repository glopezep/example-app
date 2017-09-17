import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  gql,
  graphql
} from 'react-apollo'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)
    this.verifyToken = this.verifyToken.bind(this)
    this.state = {
      isLoading: true,
      isAuthenticated: false
    }
  }

  async verifyToken () {
    try {
      if (!localStorage.token) {
        return this.setState({ isLoading: false, isAuthenticated: false })
      }

      const token = localStorage.token
      const { mutate } = this.props
      await mutate({ variables: { token } })
      this.setState({ isLoading: false, isAuthenticated: true })

    } catch (e) {
      alert(e.message)
      delete localStorage.token
      this.setState({ isLoading: false, isAuthenticated: false })
    }
  }

  async componentDidMount () {
    await this.verifyToken()
  }

  render () {
    const { component: Component, ...rest } = this.props
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <Route {...rest} render={props => {
        if (!this.state.isAuthenticated) {
          return (
            <Redirect to={{
              pathname: '/signin',
              state: { from: props.location }
            }}/>
          )
        }
        return <Component {...props}/>
      }}/>
    )
  }
}

const verifyTokenMutation = gql`
mutation verifyToken($token: String!) {
  verifyToken(token: $token) {
    username
    group {
      name
    }
  }
}`

export default graphql(verifyTokenMutation)(PrivateRoute)
