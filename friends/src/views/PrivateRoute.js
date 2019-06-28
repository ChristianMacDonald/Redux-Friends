import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FriendsListView } from '../views';

const PrivateRoute = props => {
    return (localStorage.getItem('token') === null) ? <Redirect to="/" /> : <FriendsListView />;
}

const mapStateToProps = state => {
    return {};
}

export default connect(mapStateToProps, {})(PrivateRoute);