import {FETCHING_DATA, DONE_WITH_DATA, LOGIN_TO_ACCT, GET_ALL_PICKUPS, CREATE_PICKUP, UPDATE_PICKUP, GET_USER_DATA} from '../actions/allActions';

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
        case DONE_WITH_DATA:
            return {...state, isFetching: false};
        case LOGIN_TO_ACCT:
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case CREATE_PICKUP:
            return {...state, isFetching: false, pickups: [...state.pickups, {...action.payload, status: 'Pending', businessAccountID: state.currentUser.id}]};
        case GET_USER_DATA:
            return {...state, isFetching: false, currentUser: {...action.payload}};
        case GET_ALL_PICKUPS:
            return {...state, isFetching: false, pickups: [...action.payload]};
        case UPDATE_PICKUP:
            const updatedPickups = state.pickups.filter(eachPU => {
                return eachPU.id !== action.payload.id
            });
            return {...state, isFetching: false, pickups: [...updatedPickups, action.payload]};
        default:
            return state;
    };
}