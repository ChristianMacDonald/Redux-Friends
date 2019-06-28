import Axios from 'axios';
import axiosWithAuth from '../axiosAuth';

export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE';

export const logIn = () => dispatch => {
    dispatch({ type: LOG_IN_START });
    Axios.post('http://localhost:5000/api/login', { username: 'Lambda School', password: 'i<3Lambd4' })
    .then(res => {
        console.log(res);
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: LOG_IN_FAILURE, payload: err });
    });
}

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth().get('http://localhost:5000/api/friends')
    .then(res => {
        console.log(res);
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err });
    });
}