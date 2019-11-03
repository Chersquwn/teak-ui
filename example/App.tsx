import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ButtonPage from './routes/ButtonPage'
import PopupPage from './routes/PopupPage'
import ModalPage from './routes/ModalPage'
import ToastPatge from './routes/ToastPatge'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        {/* <Route exact component={} path="/" /> */}
        <Route component={ButtonPage} path="/button" />
        <Route component={PopupPage} path="/popup" />
        <Route component={ModalPage} path="/modal" />
        <Route component={ToastPatge} path="/toast" />
      </Switch>
    </Router>
  )
}

export default App
