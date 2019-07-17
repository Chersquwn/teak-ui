import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ButtonDemo from '../packages/Button/demo'
import PopupDemo from '../packages/Popup/demo'
import ModalDemo from '../packages/Modal/demo'
import ToastDemo from '../packages/Toast/demo'

const App = (): ReactElement => {
  return (
    <Router>
      <Switch>
        {/* <Route exact component={} path="/" /> */}
        <Route component={ButtonDemo} path="/button" />
        <Route component={PopupDemo} path="/popup" />
        <Route component={ModalDemo} path="/modal" />
        <Route component={ToastDemo} path="/toast" />
      </Switch>
    </Router>
  )
}

export default App
