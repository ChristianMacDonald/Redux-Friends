import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE, ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_FAILURE } from '../actions';

const initialState = {
    friends: [],
    loggingIn: false,
    fetchingFriends: false,
    addingFriend: false,
    error: null
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN_START:
            return {
                ...state,
                loggingIn: true,
                error: null
            };
        case LOG_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: null
            };
        case LOG_IN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            }
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true,
                error: null
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                fetchingFriends: false,
                error: null
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                addingFriend: true,
                error: null
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                friends: action.payload,
                addingFriend: false
            }
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                addingFriend: false,
                error: action.payload
            }
        default:
            return state;
    }
}