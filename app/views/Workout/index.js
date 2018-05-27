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

export default class Workout extends Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.defaults( _.clone( props ), {} );
    }

    render() {
        return(<article className="page-workout">
            <nav className="toolbar--blue"><div className="container"><div className="row">
                <div className="col-2 no-padding-right"><Link to="/" className="fas fa-arrow-left lnk lnk-text"><span className="sr-only">Back to main page</span></Link></div>
                <div className="col-5 no-padding"><h1 className="h1 page-title">Arms</h1></div>
                <div className="col-5"><Menus.Context /></div>
            </div></div></nav>
            <section className="section--content"><div className="container">
                <div className="card card-content meta-workout">
                    <div className="card-body">
                        <h2 className="h4">Description</h2>
                        <p>Ryan Adams, whose new album Prisoner is out this Friday, was the latest guest on Marc Maron’s podcast “WTF.” Adams discussed encountering the Rolling Stones early in his career (and talking penny loafers with drummer Charlie Watts), his struggles with addiction in the Easy Tiger era...</p>
                        <h2 className="h4">Date</h2>
                        <time dateTime={ new Date() }>{ date_format() }</time>
                    </div>
                </div>
                <div className="card card-content">
                    <div className="card-body">
                        <h2 className="h3">Totals</h2>
                        <Lists.Totals />
                        <Lists.Exercise links={ true } />
                    </div>
                </div>
            </div></section>
        </article>);
    }
}