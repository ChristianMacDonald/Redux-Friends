import React from 'react';
import { connect } from 'react-redux';

const LoginForm = props => {
    return (
        <form>
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

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(LoginForm);