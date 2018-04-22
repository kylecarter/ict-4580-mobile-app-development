'use strict'

//Node Modules
import React from 'react'
import underscore from 'underscore'

const _ = underscore;

export default class Register extends React.Component {
    constructor( props ) {
        super( props );
        this.state = _.extend( {}, props );
    }

    render() {
        return (<form action="" className="content">
            <div className="container">
                <div className="card">
                    <header className="card-header">
                        <h1 className="card-title h5">Create Your Gains Account</h1>
                    </header>
                    <div className="card-body">
                        <fieldset>
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" className="form-control" id="firstname" name="firstname" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" className="form-control" id="lastname" name="lastname" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="username">Email Address</label>
                            <input type="text" className="form-control" id="username" name="username" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="passwordretype">Retype Password</label>
                            <input type="password" className="form-control" id="passwordretype" name="passwordretype" />
                        </fieldset>
                    </div>
                    <footer className="card-footer">
                        <a href="/dashboard" className="btn btn-primary" rel="bookmark">Create Account</a>
                        <a href="/register" rel="bookmark">Already have an account; log in here.</a>
                    </footer>
                </div>
            </div>
        </form>);
    }
}
