import { LOG_IN_SUCCESS } from '../actions';

export const addTokenToLocalStorage = store => next => action => {
    if (action.type === LOG_IN_SUCCESS) {
        localStorage.setItem('token', action.payload);
    }
    next(action);
}