import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import TheLab from './views/the-lab'
import Page from './views/page'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={TheLab} exact path="/the-lab" />
        <Route component={Page} path="**" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
