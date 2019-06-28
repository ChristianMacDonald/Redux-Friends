import React from 'react';
import { Redirect } from 'react-router-dom';
import { FriendsListView } from '../views';

const PrivateRoute = props => {
    return (localStorage.getItem('token') === null) ? <Redirect to="/" /> : <FriendsListView />;
}

export default PrivateRoute;