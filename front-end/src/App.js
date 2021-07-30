import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home.js'
import LoginForm from './Components/LoginForm'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Script from './Components/Script'

export default function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/scripts' exact component={Script} />
        <Route path='/home/' exact component={Home} />
        <Route path='/login' exact component={LoginForm} />
      </Switch>
    </Router>
    </>
  )
}
