import React from 'react'

const SignupForm = (props) => (
  <form onSubmit={props.saveUser}>
    <div>
      <h2>Sign up</h2>
      <p>Fullname: <input type="text" name="fullname" /></p>
      <p>Username: <input type="text" name="username" /></p>
      <p>Email: <input type="email" name="email" /></p>
      <p>Password: <input type="password" name="password" /></p>
      <p>Avatar: <input type="file" name="avatart" /></p>
      <button>Sign up</button>
    </div>
  </form>
)

export default SignupForm
