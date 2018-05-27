'use strict'

// Node Modules
import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    NavLink as Link
  } from 'react-router-dom'

// Views
import Exercise from './Exercise'
import Splash from './Splash'
import Workout from './Workout'

export default class Main extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (<Router><div className="ract-app">
            <main id="content">
                <Route exact path="/" component={ Splash } />
                <Route exact path="/workout/:id" component={ Workout } />
                <Route exact path="/workout/:workout/exercise/:exercise" component={ Exercise } />
            </main>
        </div></Router>);
    }
}