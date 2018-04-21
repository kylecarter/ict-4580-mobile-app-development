'use strict';

// Node Modules
import React from 'react'
import underscore from 'underscore'
import {
  Route,
  Switch
} from 'react-router-dom'

// Source > Client > Views
import { FourOhFour, Home } from '../views'

const _ = underscore;

export default class Routes extends React.Component {

  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    return (<div id="app">
      <div className="react-app"><Switch>
        <Route path="/" exact render={ ()=> <Home { ...this.state } /> } />
        <Route render={ ()=> <FourOhFour { ...this.state } /> } />
      </Switch></div>
    </div>);
  }
}