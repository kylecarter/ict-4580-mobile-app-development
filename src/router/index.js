'use strict';

// Node Modules
import React from 'react'
import underscore from 'underscore'
import {
  Route,
  Switch
} from 'react-router-dom'

// Src > Views
import { FourOhFour, Home } from '../views'

// Src > Components
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const _ = underscore;

export default class Routes extends React.Component {

  constructor( props ) {
    super( props );
    this.state = _.extend( {}, props );
  }

  render() {
    return (<div id="app">
      <Navigation />
      <main className="react-app"><Switch>
        <Route path="/" exact render={ ()=> <Home { ...this.state } /> } />
        <Route render={ ()=> <FourOhFour { ...this.state } /> } />
      </Switch></main>
      <Footer/>
    </div>);
  }
}