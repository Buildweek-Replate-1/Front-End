import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_DATA = 'FETCHING_DATA';
export const CREATE_NEW_ACCT = 'CREATE_NEW_ACCT';
export const LOGIN_TO_ACCT = 'LOGIN_TO_ACCT';
export const GET_BUSINESS = 'GET_BUSINESS';
export const GET_VOLUNTEER = 'GET VOLUNTEER';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const UPDATE_VOLUNTEER = 'UPDATE_VOLUNTEER';

// CREATES -- /register, /login, /pickup
export const registerRequest = newAcct => dispatch => {
    console.log('Inside registerRequest');
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .post('/register', newAcct)
        .then(res => {
            console.log('Registering new acct:', res.data);
            dispatch({type: CREATE_NEW_ACCT});
        })
        .catch(err => {
            console.log('Unable to register new acct');
            console.dir(err);
        })
};

export const loginRequest = currentAcct => dispatch => {
    console.log('Inside loginRequest');
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .post('/login', currentAcct)
        .then(res => {
            console.log('Testing data when logging in:', res.data);
            localStorage.setItem('token', res.data.token);
            dispatch({type: LOGIN_TO_ACCT});
        })
        .catch(err => {
            console.log('Unable to login to acct');
            console.dir(err);
        })
};

export const newPickup = () => dispatch => {};


// READS -- /business, /volunteer, /business/username, /volunteer/username, /pickup
export const getBusiness = () => dispatch => {
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .get('/business')
        .then(res => {
            console.log('');
            const fetchedData = {}; // <-- This needs to be filled, placeholder for now
            dispatch({type: GET_BUSINESS, payload: fetchedData});
        })
        .catch(err => {
            console.log('');
        })
};

export const getVolunteer = () => dispatch => {};

export const getBUser = () => dispatch => {};

export const getVUser = () => dispatch => {};


// UPDATES -- /business/username, /volunteer/username, /pickup/id
export const updateBUser = businessData => dispatch => {
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .put(`/business/${businessData.username}`, businessData)
        .then(res => {
            console.log('', res.data);
            dispatch({type: UPDATE_BUSINESS, payload: res.data});
        })
        .catch(err => {
            console.log('');
        })
};

export const updateVUser = volunteerData => dispatch => {};

export const updatePickup = pickupData => dispatch => {};


// DELETES -- /business/username, /volunteer/username, /pickup/delete
export const deleteBusiness = bData => dispatch => {
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .delete(`/business/${bData.username}`)
        .then(res => {
            console.log('');
        })
        .catch(err => {
            console.log('');
        })
};

export const deleteVolunteer = vData => dispatch => {};

export const deletePickup = puData => dispatch => {};