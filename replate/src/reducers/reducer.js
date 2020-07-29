import {FETCHING_DATA, CREATE_NEW_ACCT, GET_BUSINESS, UPDATE_BUSINESS, LOGIN_TO_ACCT, GET_ALL_PICKUPS, CREATE_PICKUP} from '../actions/allActions';
import {GET_BSN_DATA, GET_VOL_DATA, TEST_CREATE_PICKUP} from '../actions/allActions';

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
            console.log('LOGIN Payload:', action.payload);
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case CREATE_PICKUP:
            return {...state, isFetching: false};
        case GET_BUSINESS:
            return {...state, isFetching: false};
        case UPDATE_BUSINESS:
            return {...state, isFetching: false};
        case GET_BSN_DATA:
            console.log('Reducer: Inside GET_BSN_DATA');
            console.log('BSN_DATA Payload:', action.payload);
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case GET_VOL_DATA:
            console.log('Reducer: Inside GET_VOL_DATA');
            console.log('VOL_DATA Payload:', action.payload);
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case GET_ALL_PICKUPS:
            console.log('Reducer: Inside GET_ALL_PICKUPS');
            console.log('PICKUPS Payload:', action.payload);
            return {...state, isFetching: false, pickups: [...action.payload]};
        case TEST_CREATE_PICKUP:
            return {...state, isFetching: false};
        default:
            return state;
    };
}