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
          <section className="features text-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>Tools to help you reach your workout goals.</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <span className="fa fa-bar-chart" aria-hidden="true"></span>
                  <h3 className="h5">Real Metrics on Your Performance</h3>
                  <p>See how your workouts are improving and track your over all progress.</p>
                </div>
                <div className="col-lg-4">
                  <span className="fa fa-database" aria-hidden="true"></span>
                  <h3 className="h5">Manage Your Data Better</h3>
                  <p>No more writing down on scraps of paper or managing clunky spreadsheets.</p>
                </div>
                <div className="col-lg-4">
                  <span className="fa fa-calculator" aria-hidden="true"></span>
                  <h3 className="h5">Gaines Does the Math for You</h3>
                  <p>Focus on the things that matter and leave the grunt work for us.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="spotlight spotlight-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-8 col-lg-push-6 col-xl-push-4 spotlight-icon">
                  <span className="fa fa-dashboard" aria-hidden="true"></span>
                </div>
                <div className="col-lg-6 col-xl-4 col-lg-pull-6 col-xl-pull-8">
                    <h2 className="h3">Real Data for Real Gains</h2>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="spotlight spotlight-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 spotlight-icon">
                  <span className="fa fa-cogs" aria-hidden="true"></span>
                </div>
                <div className="col-lg-4">
                    <h2 className="h3">Tools Built for You</h2>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                </div>
              </div>
            </div>
          </section>
          <section className="spotlight spotlight-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-xl-8 col-lg-push-6 col-xl-push-4 spotlight-icon">
                  <span className="fa fa-cloud" aria-hidden="true"></span>
                </div>
                <div className="col-lg-6 col-xl-4 col-lg-pull-6 col-xl-pull-8">
                    <h2 className="h3">Review Your Stats from Any Device</h2>
                    <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.</p>
                </div>
              </div>
            </div>
          </section>
            <section className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h2 className="h2">Get Started Measuring Your Gains Today</h2>
                            <a href="/register" className="btn btn-default" rel="bookmark">Sign Up</a>
                        </div>
                    </div>
                </div>
            </section>
        </article>);
    }
}
