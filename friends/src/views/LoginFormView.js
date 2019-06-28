import React from 'react';
import { connect } from 'react-redux';
import { LoginForm } from '../components';

const LoginFormView = props => {
    return (
        <div>
            <LoginForm />
        </div>
    );
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(LoginFormView);