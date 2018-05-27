'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

const _ = underscore;

const Item = ( item, index )=> <li className="list-inline-item"><strong className="stat">{ item.stat }</strong> <em className="stat-label">{ item.label }</em></li>;

export default class Totals extends Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.defaults( _.clone( props ), {} );
    }

    render() {
        const { } = this.state;
        return(<ul className="list-inline list-stats">
        <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Vol.</em></li>
        <li className="list-inline-item"><strong className="stat">25,000</strong> <em className="stat-label">Sets</em></li>
        <li className="list-inline-item"><strong className="stat">1,000,000</strong> <em className="stat-label">Reps.</em></li>
        <li className="list-inline-item"><strong className="stat">100</strong> <em className="stat-label">Exc.</em></li>
    </ul>);
    }

}