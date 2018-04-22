'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Workout extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article className="container">
            <header className="marquee">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/dashboard" rel="bookmark">Dashboard</a></li>
                        <li className="breadcrumb-item"><a href="/dashboard/workout/1" rel="bookmark">Arms</a></li>
                        <li className="breadcrumb-item active">Bench Press</li>
                    </ol>
                </nav>
                <h1 className="page-title h2">Bench Press</h1>
                <ul className="list-unstyled">
                    <li className="border-bottom">
                        <span className="stat-label text-muted">Total Volume</span>
                        <span className="stat-value">300 lbs.</span>
                    </li>
                    <li className="border-bottom">
                        <span className="stat-label text-muted">Total Sets</span>
                        <span className="stat-value">5</span>
                    </li>
                    <li>
                        <span className="stat-label text-muted">Total Reps</span>
                        <span className="stat-value">50</span>
                    </li>
                </ul>
            </header>
            <section className="content">
                <h2>Sets</h2>
                <ul className="list-unstyled row">
                    <li className="col-md-6"><div className="card">
                        <header className="card-header">
                            <h3 className="card-title h5">Set</h3>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Amount Lifted</span>
                                    <span className="stat-value">100 lbs.</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Reps</span>
                                    <span className="stat-value">10</span>
                                </li>
                            </ul>
                        </div>
                    </div></li>
                    <li className="col-md-6"><div className="card">
                        <header className="card-header">
                            <h3 className="card-title h5">Set</h3>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Amount Lifted</span>
                                    <span className="stat-value">100 lbs.</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Reps</span>
                                    <span className="stat-value">10</span>
                                </li>
                            </ul>
                        </div>
                    </div></li>
                    <li className="col-md-6"><div className="card">
                        <header className="card-header">
                            <h3 className="card-title h5">Set</h3>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Amount Lifted</span>
                                    <span className="stat-value">100 lbs.</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Reps</span>
                                    <span className="stat-value">10</span>
                                </li>
                            </ul>
                        </div>
                    </div></li>
                    <li className="col-md-6"><div className="card">
                        <header className="card-header">
                            <h3 className="card-title h5">Set</h3>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Amount Lifted</span>
                                    <span className="stat-value">100 lbs.</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Reps</span>
                                    <span className="stat-value">10</span>
                                </li>
                            </ul>
                        </div>
                    </div></li>
                    <li className="col-md-6"><div className="card">
                        <header className="card-header">
                            <h3 className="card-title h5">Set</h3>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Amount Lifted</span>
                                    <span className="stat-value">100 lbs.</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Reps</span>
                                    <span className="stat-value">10</span>
                                </li>
                            </ul>
                        </div>
                    </div></li>
                </ul>
            </section>
        </article>);
    }
}
