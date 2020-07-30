import {FETCHING_DATA, CREATE_NEW_ACCT, GET_BUSINESS, UPDATE_BUSINESS, LOGIN_TO_ACCT, GET_VOL_DATA, GET_ALL_PICKUPS, CREATE_PICKUP} from '../actions/allActions';
import {UPDATE_PICKUP} from '../actions/allActions';

const initState = {
    isFetching: false,
    currentUser: {
        id: '',
        username: '',
        password: '',
        accountType: ''
    },
    pickups: {
        id: '',
        businessAccountID: '',
        volunteerAccountID: '',
        foodType: '',
        amount: '',
        preferredPickupTime: '',
        status: ''
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
        case CREATE_PICKUP:
            return {...state, isFetching: false};
        case GET_BUSINESS:
            return {...state, isFetching: false};
        case UPDATE_BUSINESS:
            return {...state, isFetching: false};
        case GET_VOL_DATA:
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case GET_ALL_PICKUPS:
            return {...state, isFetching: false, };
        case UPDATE_PICKUP:
            return {...state, isFetching: false, pickups: [...action.payload]};
        default:
            return state;
    };
}