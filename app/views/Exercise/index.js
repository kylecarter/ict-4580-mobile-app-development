'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

// Application > Helpers
import date_format from '../../helpers/date-formatter'

// Components
import { Lists, Menus } from '../../components'

// Styles
import styles from './styles.sass'

const _ = underscore;

export default class Set extends Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.defaults( _.clone( props ), {} );
    }

    render() {
        return(<article className="page-exercise">
            <nav className="toolbar--red"><div className="container"><div className="row">
                <div className="col-2 no-padding-right"><Link to="/workout/4" className="fas fa-arrow-left lnk lnk-text"><span className="sr-only">Back to main page</span></Link></div>
                <div className="col-5 no-padding"><h1 className="h1 page-title">Bench Press</h1></div>
                <div className="col-5"><Menus.Context /></div>
            </div></div></nav>
            <section className="section--content">
            </section>
        </article>);
    }
}