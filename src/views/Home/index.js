'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Home extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<article>
          <header className="marquee"><div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="page-title">Up your Gains</h1>
                <p className="desc">Focus on your workout not on your metrics.</p>
              </div>
            </div>
          </div>
          </header>
          <section className="features">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h2>Tools to help you reach your workout goals.</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <span className="fa fa-bar-chart" aria-hidden="true"></span>
                  <h2 className="h5">Real Metrics on Your Performance</h2>
                  <p>See how your workouts are improving and track your over all progress.</p>
                </div>
                <div className="col-md-4 text-center">
                  <span className="fa fa-database" aria-hidden="true"></span>
                  <h2 className="h5">Manage Your Data Better</h2>
                  <p>No more writing down on scraps of paper or managing clunky spreadsheets.</p>
                </div>
                <div className="col-md-4 text-center">
                  <span className="fa fa-calculator" aria-hidden="true"></span>
                  <h2 className="h5">Gaines Does the Math for You</h2>
                  <p>Focus on the things that matter and leave the grunt work for us.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="spotlight">
            <div className="container">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </section>
          <section className="spotlight">
            <div className="container">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </section>
          <section className="spotlight">
            <div className="container">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </section>
        </article>);
    }
}
