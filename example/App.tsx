import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ButtonDemo from '../packages/Button/demo'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        {/* <Route exact component={} path="/" /> */}
        <Route component={ButtonDemo} path="/button" />
      </Switch>
    </Router>
  )
}

export default App
