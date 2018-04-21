'use strict'

// Node Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Source > Routes
import Routes from './router'

ReactDOM.hydrate((
  <Router>
    <Routes { ...window.__APP_INITIAL_STATE__ } />
  </Router>
), document.getElementById( 'app' ));
