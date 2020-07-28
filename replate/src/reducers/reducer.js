import {FETCHING_DATA, CREATE_NEW_ACCT, GET_BUSINESS, UPDATE_BUSINESS, LOGIN_TO_ACCT, GET_VOL_DATA} from '../actions/allActions';

const initState = {
    isFetching: false,
    currentUser: {
        id: '',
        username: '',
        password: '',
        accountType: ''
    }
};

export const reducer = (state = initState, action) => {
    switch(action.type) {
        case FETCHING_DATA:
            return {...state, isFetching: true};
        case CREATE_NEW_ACCT:
            return {...state, isFetching: false};
        case LOGIN_TO_ACCT:
            console.log('Reducer: Inside LOGIN_TO_ACCT');
            console.log('Payload:', action.payload);
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case GET_BUSINESS:
            return {...state, isFetching: false};
        case UPDATE_BUSINESS:
            return {...state, isFetching: false};
        case GET_VOL_DATA:
            return {...state, isFetching: false, currentUser: {...action.payload}};
        default:
            return state;
    };
}