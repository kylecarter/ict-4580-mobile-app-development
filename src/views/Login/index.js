'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Login extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<form action="" className="content">
            <div className="container">
                <div className="card">
                    <header className="card-header">
                        <h1 className="card-title h5">Log In to Your Gains Account</h1>
                    </header>
                    <div className="card-body">
                        <fieldset>
                            <label htmlFor="username">Email Address</label>
                            <input type="text" className="form-control" id="username" name="username" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </fieldset>
                    </div>
                    <footer className="card-footer">
                        <a href="/dashboard" className="btn btn-primary" rel="bookmark">Log In</a>
                        <a href="/register" rel="bookmark">Don&rsquo;t have an account; create one here.</a>
                    </footer>
                </div>
            </div>
        </form>);
    }
}
