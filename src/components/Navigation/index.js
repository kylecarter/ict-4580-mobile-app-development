'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Navigation extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend({
            navOpen: false,
            container: {
                classList: [ 'navigation' ]
            }
        }, props );
        this.toggle = this.toggle.bind( this );
    }

    render() {
        const { container } = this.state;
        return (<nav className={ container.classList.join( ' ' ) } id="navigation"><div className="container">
            <a href="/" className="logo logo-default text-uppercase font-weight-700" rel="bookmark">Gains</a>
            <a href="#navigation-links" className="d-lg-none d-xl-none text-right fa fa-navicon js-toggle-nav" rel="bookmark" aria-controls="navigation-links" onClick={ this.toggle }><span className="sr-only">Show Navigation</span></a>
            <ul className="nav" id="navigation-links">
                <li className="nav-item"><a href="/blog" className="nav-link" rel="bookmark">Blog</a></li>
                <li className="nav-item"><a href="/dashboard" className="nav-link" rel="bookmark">Dashboard</a></li>
                <li className="nav-item"><a href="/falsey" className="nav-link" rel="bookmark">Four Oh Four</a></li>
                <li className="nav-item"><a href="/login" className="btn btn-default" rel="bookmark">Log In</a> <span className="pad">-or-</span> <a href="/register" className="btn btn-primary" rel="bookmark">Sign Up</a></li>
            </ul>
        </div></nav>);
    }

    toggle( e ) {
        e.preventDefault();
        const { container, navOpen } = this.state;
        this.setState({
            navOpen: !navOpen,
            container: {
                classList: !navOpen ? ['navigation', 'nav-open' ] : [ 'navigation' ]
            }
        });
    }
}
