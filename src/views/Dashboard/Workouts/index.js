'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Workouts extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article className="container">
            <header className="marquee">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </nav>
                <h1 className="page-title h6 sr-only">Dashboard</h1>
            </header>
            <section className="content">
                <h2>Recent Workouts</h2>
                <ul className="list-unstyled row">
                    <li className="col-md-6"><a href="/dashboard/workout/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Arms</h3>
                            <time>Apr. 18, 2018</time>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Volume</span>
                                    <span className="stat-value">500 lbs.</span>
                                </li>
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Sets</span>
                                    <span className="stat-value">30</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Exercises</span>
                                    <span className="stat-value">5</span>
                                </li>
                            </ul>
                        </div>
                    </a></li>
                    <li className="col-md-6"><a href="/dashboard/workout/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Arms</h3>
                            <time>Apr. 18, 2018</time>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Volume</span>
                                    <span className="stat-value">500 lbs.</span>
                                </li>
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Sets</span>
                                    <span className="stat-value">30</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Exercises</span>
                                    <span className="stat-value">5</span>
                                </li>
                            </ul>
                        </div>
                    </a></li>
                    <li className="col-md-6"><a href="/dashboard/workout/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Arms</h3>
                            <time>Apr. 18, 2018</time>
                        </header>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Volume</span>
                                    <span className="stat-value">500 lbs.</span>
                                </li>
                                <li className="border-bottom">
                                    <span className="stat-label text-muted">Total Sets</span>
                                    <span className="stat-value">30</span>
                                </li>
                                <li>
                                    <span className="stat-label text-muted">Total Exercises</span>
                                    <span className="stat-value">5</span>
                                </li>
                            </ul>
                        </div>
                    </a></li>
                </ul>
            </section>
        </article>);
    }
}
