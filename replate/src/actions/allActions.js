import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_DATA = 'FETCHING_DATA';
export const CREATE_NEW_ACCT = 'CREATE_NEW_ACCT';
export const LOGIN_TO_ACCT = 'LOGIN_TO_ACCT';
export const GET_BUSINESS = 'GET_BUSINESS';
export const GET_VOLUNTEER = 'GET VOLUNTEER';
export const UPDATE_BUSINESS = 'UPDATE_BUSINESS';
export const UPDATE_VOLUNTEER = 'UPDATE_VOLUNTEER';
export const GET_VOL_DATA = 'GET_VOL_DATA';

export const GET_BUS_DATA = 'GET_BUS_DATA';

export const GET_ALL_PICKUPS = 'GET_ALL_PICKUPS';
export const CREATE_PICKUP = 'CREATE_PICKUP';
export const UPDATE_PICKUP = 'UPDATE_PICKUP';


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
            dispatch({type: LOGIN_TO_ACCT, payload: currentAcct});

        })
        .catch(err => {
            console.log('Unable to login to acct');
            console.dir(err);
        })
};

export const newPickup = currentOrder => dispatch => {
    console.log('Inside action to create new Pickup Order');
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .post('/pickup', currentOrder)
        .then(res => {
            console.log('New Pickup: Checking data:', res.data);
            dispatch({type: CREATE_PICKUP});
        })
        .catch(err => {
            console.log('Unable to create the new Pickup Order');
            console.dir(err);
        })
};


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

export const getBusUser = (username) => dispatch => {
    dispatch({type: GET_BUS_DATA})
    axiosWithAuth()
    .get(`/business/${username}`)
    .then(res => {
        const fetchedBusUser = {};
        dispatch({type: GET_BUSINESS, payload: res.data});
    })
    .catch(err => {
        console.log('');
    })
};

export const getVUser = (username) => dispatch => {
    console.log('Inside getVUser in actions', username);
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
            dispatch({type: GET_ALL_PICKUPS});
        })
        .catch(err => {
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

export const updatePickup = pickupData => dispatch => {
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
        .put(`/pickup/${pickupData.id}`, pickupData)
        .then(res => {
            console.log('Updated Pickup Order, checking new data:', res.data);
            dispatch({type: UPDATE_PICKUP, payload: res.data});
        })
        .catch(err => {
            console.log('Error updating Pickup Order');
            console.dir(err);
        })
};


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