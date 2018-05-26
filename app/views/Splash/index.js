'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

// Application > Helpers
import date_format from '../../helpers/date-formatter'

// Styles
import styles from './styles.sass'

const _ = underscore;

export default class Splash extends Component {
    constructor( props ) {
        super( props );
        this.state = _.defaults( _.clone( props || {} ), {
            showFlyout: false
        });
        this.toggle = this.toggle.bind( this );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.extend( {}, props );
    }

    render() {
        const { showFlyout } = this.state;
        return (<article className="page-splash">
            <nav id="settings" className={ [ 'nav-settings', showFlyout ? 'exposed' : '' ].join( ' ' ).trim() }><div className="content">
                <section className="toolbar--purple">
                    <button className="btn btn-plain fas fa-times close" onClick={ this.toggle } aria-controls="nav-settings"><span className="sr-only">Dismiss</span></button>
                    <div className="row">
                        <div className="col-3 col-sm-3"><img src="" alt="profile photo" className="img-circle" /></div>
                        <div className="col-9 col-sm-9">
                            <p className="username font-weight-700">Sandor Clegains</p>
                            <p className="font-weight-300">sandor.clegains@gmail.com</p>
                        </div>
                    </div>
                </section>
                <section className="section--content">
                    <div className="row">
                        <div className="col-12 col-sm-12">
                            <ul className="list-unstyled list-settings">
                                <li><Link to="/" className="ico ico-heart lnk lnk-text">Home</Link></li>
                                <li><Link to="/" className="ico ico-cog lnk lnk-text">Settings</Link></li>
                                <li><Link to="/" className="ico ico-question-circle lnk lnk-text">Help &amp; Feedback</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div></nav>

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
                        <ul className="list-inline list-stats">
                            <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Vol.</em></li>
                            <li className="list-inline-item"><strong className="stat">25,000</strong> <em className="stat-label">Sets</em></li>
                            <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Reps.</em></li>
                            <li className="list-inline-item"><strong className="stat">100</strong> <em className="stat-label">Exc.</em></li>
                        </ul>
                    </div>
                </div></div>
            </nav>

            <section className="container section--content">
                <div className="row last-workout">
                    <div className="col col-sm-6">
                        <div className="card card-content">
                            <button className="btn btn-plain fas fa-ellipsis-v js-menu" onClick={ this.toggle }><span className="sr-only">Edit Workout</span></button>
                            <div className="card-body">
                                <h2 className="h3">Arms</h2>
                                <time dateTime={ (()=> new Date( '2018-04-25' ))() }>{ (()=> (new Date( '2018-04-25' )).toLocaleDateString( undefined, { month: 'short', day: 'numeric', year: 'numeric' } ) )() }</time>
                                <h3 className="h4">Totals</h3>
                                <ul className="list-inline list-stats">
                                    <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Vol.</em></li>
                                    <li className="list-inline-item"><strong className="stat">25,000</strong> <em className="stat-label">Sets</em></li>
                                    <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Reps.</em></li>
                                    <li className="list-inline-item"><strong className="stat">100</strong> <em className="stat-label">Exc.</em></li>
                                </ul>
                                <ul className="list-unstyled list-progress">
                                    <li>
                                        <h4 className="h5">Bench Press</h4>
                                        <span className="stat">5 sets</span> <span className="stat">50 reps</span>
                                        <div className="progress progress-lifting">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="h5">Bench Press</h4>
                                        <span className="stat">5 sets</span> <span className="stat">50 reps</span>
                                        <div className="progress progress-lifting">
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="h5">Bench Press</h4>
                                        <span className="stat">5 sets</span> <span className="stat">50 reps</span>
                                        <div className="progress progress-lifting">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="h5">Bench Press</h4>
                                        <span className="stat">5 sets</span> <span className="stat">50 reps</span>
                                        <div className="progress progress-lifting">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
                                        </div>
                                    </li>
                                    <li>
                                        <h4 className="h5">Bench Press</h4>
                                        <span className="stat">5 sets</span> <span className="stat">50 reps</span>
                                        <div className="progress progress-lifting">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row workout-list">
                    <div className="col-12 col-sm-6">
                        <h2 className="h4">Recent Workouts</h2>
                        <div className="card card-content">
                            <div className="card-body">
                                <ul className="list-unstyled list-workouts">
                                    <li>
                                        <Link to="/workout/1" className="lnk lnk-plain">
                                            <h3 className="h5">Legs</h3>
                                            <time dateTime={ new Date( '2018-05-25' ) }>{ date_format( '2018-05-25' ) }</time>
                                            <div className="progress progress-lifting">
                                                <div className="progress-bar bg-danger" style={{ width: '25%' }}>5,000 lbs.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workout/2" className="lnk lnk-plain">
                                            <h3 className="h5">Cardio</h3>
                                            <time dateTime={ new Date( '2018-05-23' ) }>{ date_format( '2018-05-23' ) }</time>
                                            <div className="progress progress-lifting">
                                                <div className="progress-bar bg-danger" style={{ width: '25%' }}>5,000 lbs.</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/workout/3" className="lnk lnk-plain">
                                            <h3 className="h5">Arms</h3>
                                            <time dateTime={ new Date( '2018-05-21' ) }>{ date_format( '2018-05-21' ) }</time>
                                            <div className="progress progress-lifting">
                                                <div className="progress-bar bg-danger" style={{ width: '25%' }}>5,000 lbs.</div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>);
    }

    toggle( e ) {
        e.preventDefault();
        this.setState({ showFlyout: !this.state.showFlyout });
        return this;
    }
}