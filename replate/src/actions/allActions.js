import axiosWithAuth from '../utils/axiosWithAuth';

export const CONSTANT_STRING = 'CONSTANT_STRING';
export const POST_STRING = 'POST_STRING';
export const POST_THEN_ACTION = 'POST_THEN_ACTION';

export const postRequest = () => dispatch => {
    dispatch({type: POST_STRING});
    axiosWithAuth()
        .post('', someObj)
        .then(res => {
            dispatch({type: POST_THEN_ACTION});
        })
        .catxch()
};

export const getRequest = () => dispatch => {
    dispatch({type: CONSTANT_STRING});
    axiosWithAuth()
        .get('')
        .then()
        .catch()
};

