import {FETCHING_DATA, CREATE_NEW_ACCT, GET_BUSINESS, UPDATE_BUSINESS, LOGIN_TO_ACCT} from '../actions/allActions';

const initState = {
    isFetching: false
};

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCHING_DATA:
            return {...state, isFetching: true};
        case CREATE_NEW_ACCT:
            return {...state, isFetching: false};
        case LOGIN_TO_ACCT:
            return {...state, isFetching: false};
        case GET_BUSINESS:
            return {...state, isFetching: false};
        case UPDATE_BUSINESS:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    };
}