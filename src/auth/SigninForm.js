import React from 'react'

const SigninForm = (props) => (
  <form onSubmit={props.authenticate}>
    <div>
      <h2> Login</h2>
      <p>Username: <input type="text" name="username" /></p>
      <p>Password: <input type="text" name="password" /></p>
      <button>Login</button>
    </div>
  </form>
)

export default SigninForm
