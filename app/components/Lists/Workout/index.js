'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

// Application > Helpers
import date_format from '../../../helpers/date-formatter'

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
        const { } = this.state;
        return(<ul className="list-unstyled list-workouts">
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
        </ul>);
    }

}