import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Admin from './Admin'
import Signin from './Signin'
import Signup from './Signup'
import PrivateRoute from './components/PrivateRoute'

const Page = () => (
  <Router>
    <Switch>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <PrivateRoute exact path='/admin' component={Admin} />
      <PrivateRoute exact path='/' component={Home} />
    </Switch>
  </Router>
)

export default Page
