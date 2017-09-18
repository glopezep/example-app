import React from 'react'
import { Link } from 'react-router-dom'

const SigninForm = (props) => (
  <form onSubmit={props.authenticate}>
      <h2>Sign in</h2>
      <p>Username: <input type="text" name="username" /></p>
      <p>Password: <input type="text" name="password" /></p>
      <button>Login</button>
      <Link to='/signup'>
        <button>Signup</button>
      </Link>
  </form>
)

export default SigninForm
