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
            <header className="marquee">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/dashboard" rel="bookmark">Dashboard</a></li>
                        <li className="breadcrumb-item active">Arms</li>
                    </ol>
                </nav>
                <h1 className="page-title h2">Arms</h1>
                <time>Apr. 18, 2018</time>
            </header>
            <section className="content">
                <h2>Exercises</h2>
                <ul className="list-unstyled row">
                    <li className="col-md-6"><a href="/dashboard/exercise/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Bench Press</h3>
                        </header>
                        <div className="card-body">
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
                        </div>
                    </a></li>
                    <li className="col-md-6"><a href="/dashboard/exercise/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Dumbbell Rows</h3>
                        </header>
                        <div className="card-body">
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
                        </div>
                    </a></li>
                      <li className="col-md-6"><a href="/dashboard/exercise/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Incline Bench Press</h3>
                        </header>
                        <div className="card-body">
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
                        </div>
                    </a></li>
                      <li className="col-md-6"><a href="/dashboard/exercise/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Dumbbell Press</h3>
                        </header>
                        <div className="card-body">
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
                        </div>
                    </a></li>
                      <li className="col-md-6"><a href="/dashboard/exercise/1" className="card" rel="bookmark">
                        <header className="card-header">
                            <h3 className="card-title h5">Dumbbell Curls</h3>
                        </header>
                        <div className="card-body">
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
                        </div>
                    </a></li>
                  </ul>
            </section>
        </article>);
    }
}
