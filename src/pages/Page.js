import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Signin from './Signin'
import Signup from './Signup'
import PrivateRoute from './components/PrivateRoute'

const Page = () => (
  <Router>
    <main>
      <Route exact path='/signin' component={Signin}/>
      <Route exact path='/signup' component={Signup}/>
      <PrivateRoute exact path='/' component={Home} />
      <PrivateRoute exact path='/admin' component={Admin}/>
    </main>
  </Router>
)

export default Page
