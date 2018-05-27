'use strict'

// Node Modules
import underscore from 'underscore'
import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

const _ = underscore;

const Item = ( link, item, index )=> {
    const volume =( ()=> {
        const sets = item.sets;
        let obj = {
            total: 0,
            percent: '0%', //calculate off workout volume. get number from parentNode.
        };
        return obj;
    })();

    if ( !link ) {
        return (<li key={ 'react.progress.item.' + item.id + '.' + index  }>
        <h4 className="h5">{ title }</h4>
        <span className="stat">{ item.sets.length } sets</span> <span className="stat">{ item.workout.volume } reps</span>
        <div className="progress progress-lifting">
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: volume.percent }} aria-valuenow={ volume.percent } aria-valuemin="0" aria-valuemax="100">{ volume.total } lbs.</div>
        </div>
    </li>);
    }

    return (<li key={ 'react.progress.item.' + item.id + '.' + index  }><Link to={ '/workout/' + item.workout.id + '/exercise/' + item.id } className="lnk lnk-text">
        <h4 className="h5">{ title }</h4>
        <span className="stat">{ item.sets.length } sets</span> <span className="stat">{ item.workout.volume } reps</span>
        <div className="progress progress-lifting">
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: volume.percent }} aria-valuenow={ volume.percent } aria-valuemin="0" aria-valuemax="100">{ volume.total } lbs.</div>
        </div>
    </Link></li>);
}

export default class Exercises extends Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    static getDerivedStateFromProps( props, state ) {
        return _.defaults( _.clone( props ), {} );
    }

    render() {
        const { links } = this.state;
        return(<ul className="list-unstyled list-progress">
        <li><Link to="/workout/4/exercise/1" className="lnk lnk-text">
            <h4 className="h5">Bench Press</h4>
            <span className="stat">5 sets</span> <span className="stat">50 reps</span>
            <div className="progress progress-lifting">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
            </div>
        </Link></li>
        <li><Link to="/workout/4/exercise/1" className="lnk lnk-text">
            <h4 className="h5">Bench Press</h4>
            <span className="stat">5 sets</span> <span className="stat">50 reps</span>
            <div className="progress progress-lifting">
                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
            </div>
        </Link></li>
        <li><Link to="/workout/4/exercise/1" className="lnk lnk-text">
            <h4 className="h5">Bench Press</h4>
            <span className="stat">5 sets</span> <span className="stat">50 reps</span>
            <div className="progress progress-lifting">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
            </div>
        </Link></li>
        <li><Link to="/workout/4/exercise/1" className="lnk lnk-text">
            <h4 className="h5">Bench Press</h4>
            <span className="stat">5 sets</span> <span className="stat">50 reps</span>
            <div className="progress progress-lifting">
                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
            </div>
        </Link></li>
        <li><Link to="/workout/4/exercise/1" className="lnk lnk-text">
            <h4 className="h5">Bench Press</h4>
            <span className="stat">5 sets</span> <span className="stat">50 reps</span>
            <div className="progress progress-lifting">
                <div className="progress-bar bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">250 lbs.</div>
            </div>
        </Link></li>
    </ul>);
    }

}