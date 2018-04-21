'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Home extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<h1>It's Magic</h1>);
    }
}
