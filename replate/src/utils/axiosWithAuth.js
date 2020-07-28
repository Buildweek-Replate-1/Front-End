import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {Authorization: token},
        //baseURL: 'https://cors-anywhere.herokuapp.com/https://replate-backend.herokuapp.com'
        baseURL: 'https://replate-backend.herokuapp.com'
    });
};

export default axiosWithAuth;