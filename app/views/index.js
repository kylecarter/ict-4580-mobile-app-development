'use strict'

// Node Modules
import React, { Component } from 'react'
import {
    HashRouter as Router,
    Route,
    NavLink as Link
  } from 'react-router-dom'

// Views
import Splash from './Splash'

export default class Main extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (<Router><div className="ract-app">
            <main id="content">
                <Route exact path="/" component={ Splash }/>
            </main>
        </div></Router>);
    }
}