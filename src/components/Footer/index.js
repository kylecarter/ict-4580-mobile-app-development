'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Footer extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<footer>Footer</footer>);
    }
}
