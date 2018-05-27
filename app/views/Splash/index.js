'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

// Application > Helpers
import date_format from '../../helpers/date-formatter'

// Components
import { Lists, Menus, Navs } from '../../components'

// Styles
import styles from './styles.sass'

const _ = underscore;

export default class Splash extends Component {
    constructor( props ) {
        super( props );
        this.state = _.defaults( _.clone( props || {} ), {
            showFlyout: false,
            showContext: false
        });
        this.toggle = this.toggle.bind( this );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.defaults( _.clone( props ), {} );
    }

    render() {
        const { showFlyout, showContext } = this.state;
        return (<article className="page-splash">
            <Menus.Settings />

            <nav id="menu" className="toolbar--purple">
                <div className="container"><div className="row">
                    <div className="col-2 col-sm-1">
                        <Link to='/' onClick={ this.toggle } className={ [ 'fas', 'fa-bars', 'lnkSettings', 'js-nav' ].join( ' ' ) } aria-controls="nav-settings">
                            <span className="sr-only">Show Settings</span>
                        </Link>
                    </div>
                    <div className="col-10 col-sm-11">
                        <h1 className="h1 page-title">Lifetime Stats</h1>
                        <time dateTime={ (()=> new Date())() }>{ date_format() }</time>
                    </div>
                    <div className="col-12 col-sm-12">
                        <Lists.Totals />
                    </div>
                </div></div>
            </nav>

            <section className="container section--content">
                <div className="row last-workout">
                    <div className="col col-sm-6">
                        <div className="card card-content">
                            <Menus.Context />
                            <div className="card-body">
                                <h2 className="h3">Arms</h2>
                                <time dateTime={ (()=> new Date( '2018-04-25' ))() }>{ (()=> (new Date( '2018-04-25' )).toLocaleDateString( undefined, { month: 'short', day: 'numeric', year: 'numeric' } ) )() }</time>
                                <h3 className="h4">Totals</h3>
                                <Lists.Totals />
                                <Lists.Exercise links={ true } />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row workout-list">
                    <div className="col-12 col-sm-6">
                        <h2 className="h4">Recent Workouts</h2>
                        <div className="card card-content">
                            <div className="card-body">
                                <Lists.Workout />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>);
    }

    toggle( e ) {
        e.preventDefault();
        this.setState({
            showFlyout: !this.state.showFlyout,
            showContext: false
        });
        return this;
    }

}