'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class FourOhFour extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article className="container">
            <h1 className="page-title" style={{ marginTop: '30px' }}>404, page not found</h1>
            <p>Oops! Use this link to get back <a href="/" rel="bookmark">home</a>.</p>
        </article>);
    }
}
