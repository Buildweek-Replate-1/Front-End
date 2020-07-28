import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';
import {loginRequest} from '../actions/allActions';
import {connect} from 'react-redux';

const blankLogin = {
    username: '',
    password: ''
};

const Login = props => {
    const [credentials, setCredentials] = useState(blankLogin);

    const updateForm = evt => {
        const {name, value} = evt.target;

        setCredentials({...credentials, [name]: value});
    };

    const submitLogin = evt => {
        evt.preventDefault();

    /*
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                console.log('Testing credentials from Login.js:', res.data);
                localStorage.setItem('token', res.data.payload);
            })
            .catch(err => {
                console.log('Error logging in to acct from Login.js');
            })
    */

       console.log('Checking credentials on Login.js', credentials);
       loginRequest(credentials);
    };


    //Start of Debugging Test Data
    const testLog = data => {
        // axiosWithAuth()
        //     .post('/login', data)
        //     .then(res => {
        //         console.log('I am inside the axios method in Login Form');
        //         localStorage.setItem('token', res.data.payload)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        console.log('Checking Login account data:', data)
        props.loginRequest(data);
    };

    const testBsn = evt => {
        evt.preventDefault();
        console.log('Inside the testBsn function');

        const acctB = {
            username: 'WantCheese',
            password: 'supersize',
            accountType: 'business'
        };

        testLog(acctB);
    };

    const testVol = evt => {
        evt.preventDefault();
        console.log('Inside the testVol function');

        const acctV = {
            username: 'ShopofHorrors',
            password: 'pleasework',
            accountType: 'volunteer'
        };

        testLog(acctV);
    };
    //End of Debugging Test Data

    return (
        <div>
            <form style={{width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={submitLogin}>
                <h2>Login form</h2>
                <div style={{width: '350px', display: 'flex', justifyContent: 'space-between'}}>
                    <input type='button' value='Log Business' onClick={testBsn} />
                    <input type='button' value='Log Volunteer' onClick={testVol} />
                    <Link to='/register'><input type='button' value='Create New Acct' /></Link>
                </div>
            </form>
        </div>
    );
};

export default connect(null, {loginRequest})(Login);