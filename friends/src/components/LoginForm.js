import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions';

const LoginForm = props => {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            props.logIn();
        }}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" />
            <br />
            <input type="submit" />
        </form>
    );
}

export default connect(() => ({}), { logIn })(LoginForm);