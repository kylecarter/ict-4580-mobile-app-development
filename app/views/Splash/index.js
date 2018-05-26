'use strict'

// Node Modules
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

// Styles
import styles from './styles.sass'

export default class Splash extends Component {
    constructor( props ) {
        super( props );
        this.toggle = this.toggle.bind( this );
    }

    render() {
        return (<article className="page-splash">
            <nav id="menu" className="toolbar--purple">
                <div className="container"><div className="row">
                    <div className="col-1">
                        <Link to='/' onClick={ this.toggle } className={ [ 'fas', 'fa-bars', 'lnkSettings', 'js-nav' ].join( ' ' ) }>
                            <span className="sr-only">Show Settings</span>
                        </Link>
                    </div>
                    <div className="col-11">
                        <h1 className="h1 page-title">Lifetime Stats</h1>
                        <time dateTime={ (()=> new Date())() }>{ (()=> (new Date()).toLocaleDateString( undefined, { month: 'short', day: 'numeric', year: 'numeric' } ) )() }</time>
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
                <div className="row">
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
            </section>
        </article>);
    }

    toggle( e ) {
        e.preventDefault();
        return this;
    }
}