'use strict';

// Node Modules
import React from 'react'
import underscore from 'underscore'
import {
  Route,
  Switch
} from 'react-router-dom'

// Src > Views
import { Blog, Dashboard, FourOhFour, Home, Login, Register } from '../views'

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
        <Route path="/blog" exact render={ ()=> <Blog.List { ...this.state } /> } />
        <Route path="/blog/post/:id" exact render={ ()=> <Blog.Post { ...this.state } /> } />
        <Route path="/dashboard" exact render={ ()=> <Dashboard.Workouts { ...this.state } /> } />
        <Route path="/dashboard/workout/:id" exact render={ ()=> <Dashboard.Session { ...this.state } /> } />
        <Route path="/dashboard/exercise/:id" exact render={ ()=> <Dashboard.Exercise { ...this.state } /> } />
        <Route path="/login" exact render={ ()=> <Login { ...this.state } /> } />
        <Route path="/register" exact render={ ()=> <Register { ...this.state } /> } />
        <Route render={ ()=> <FourOhFour { ...this.state } /> } />
      </Switch></main>
      <Footer/>
    </div>);
  }
}