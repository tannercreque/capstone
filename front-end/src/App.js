import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import LoginForm from './Components/LoginForm'

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login' exact component={LoginForm} />
      </Switch>
    </Router>
    </>
  )
}
