import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_DATA = 'FETCHING_DATA';
export const CREATE_NEW_ACCT = 'CREATE_NEW_ACCT';
export const LOGIN_TO_ACCT = 'LOGIN_TO_ACCT';
export const GET_BUSINESS = 'GET_BUSINESS';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const GET_BSN_DATA = 'GET_BSN_DATA';
export const GET_VOL_DATA = 'GET_VOL_DATA';
export const GET_ALL_PICKUPS = 'GET_ALL_PICKUPS';
export const CREATE_PICKUP = 'CREATE_PICKUP';
export const TEST_CREATE_PICKUP = 'TEST_CREATE_PICKUP';

//let theUser = localStorage.getItem('user');

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
            console.log('Testing token at Login:', localStorage);
            dispatch({type: LOGIN_TO_ACCT, payload: currentAcct});
        })
        .catch(err => {
            console.log('Unable to login to acct');
            console.dir(err);
        })
};

export const testPickup = testOrder => dispatch => {
    console.log('Inside action to create a test pickup order');
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .post('/pickup', testOrder)
        .then(res => {
            console.log('Test Pickup: Checking data', res.data);
            dispatch({type: TEST_CREATE_PICKUP});
        })
        .catch(err => {
            console.log('Unable to create the test pickup order');
            console.dir(err);
        })
};

export const newPickup = currentOrder => dispatch => {};


// READS -- /business, /volunteer, /business/username, /volunteer/username, /pickup
// export const getBusiness = () => dispatch => {
//     dispatch({type: FETCHING_DATA})
//     axiosWithAuth()
//         .get('/business')
//         .then(res => {
//             console.log('');
//             const fetchedData = {}; // <-- This needs to be filled, placeholder for now
//             dispatch({type: GET_BUSINESS, payload: fetchedData});
//         })
//         .catch(err => {
//             console.log('');
//         })
// };

export const getVolunteer = () => dispatch => {};

export const getBUser = (username) => dispatch => {
    console.log('Inside getBUser in actions. Passed username is:', username);
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .get(`/business/${username}`)
        .then(res => {
            console.log('Testing fetched business username:', res.data);
            dispatch({type: GET_BSN_DATA, payload: res.data});
        })
        .catch(err => {
            console.log('Error fetching specified Business Username');
            console.dir(err);
        })
};

export const getVUser = (username) => dispatch => {
    console.log('Inside getVUser in actions. Passed username is:', username);
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .get(`/volunteer/${username}`)
        .then(res => {
            console.log('Testing fetched volunteer username:', res.data);
            dispatch({type: GET_VOL_DATA, payload: res.data});
        })
        .catch(err => {
            console.log('Error fetching specified Volunteer Username');
            console.dir(err);
        })
};

export const getPendingPickups = () => dispatch => {
    console.log('Inside Pending Pickups');
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .get('/pickup')
        .then(res => {
            console.log('Checking pickup list', res.data);
            dispatch({type: GET_ALL_PICKUPS, payload: res.data});
        })
        .catch(err => {
            console.log('Error fetching pending pickup orders');
            console.dir(err);
        })

};


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