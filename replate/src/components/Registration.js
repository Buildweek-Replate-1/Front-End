import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {registerRequest} from '../actions/allActions';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';

const blankFields = {
    bvName: '',
    businessAddress: '',
    phoneNumber: '',
    username: '',
    password: '',
    accountType: ''
};

const Registration = props => {
    const testPost = passedObj => {
        // axiosWithAuth()
        //     .post('/register', passedObj)
        //     .then(res => {
        //         console.log('Inside testPost in Register Form. Data:', res.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        console.log('Testing registered account data', passedObj);
        props.registerRequest(passedObj);
    };
    const [newAcct, setNewAcct] = useState(blankFields);

    const updateValues = evt => {
        const {name, value} = evt.target;
    
        setNewAcct({...newAcct, [name]: value});
    };

    const submitForm = evt => {
        evt.preventDefault();
    
        newAcct.bvName.trim();
        newAcct.businessAddress.trim();
        newAcct.phoneNumber.trim();
        newAcct.username.trim();
        newAcct.password.trim();

        if(newAcct.accountType === 'business') {
            //This uses key 'businessName' instead of 'volunteerName'
            let bsnAcct = {
                username: newAcct.username,
                password: newAcct.password,
                businessName: newAcct.bvName,
                businessAddress: newAcct.businessAddress,
                phoneNumber: newAcct.phoneNumber,
                accountType: newAcct.accountType
            };
            console.log('bsnAcct is', bsnAcct);
            //registerRequest(bsnAcct);

            axiosWithAuth()
                .post('/register', bsnAcct)
                .then(res => {
                    console.log('Registering new acct:', res.data);
                })
                .catch(err => {
                    console.log('Unable to register new acct');
                })
        } else if(newAcct.accountType === 'volunteer') {
            //This uses key 'volunteerName' instead of 'businessName' and doesn't use an address, at all
            let volAcct = {
                username: newAcct.username,
                password: newAcct.password,
                volunteerName: newAcct.bvName,
                phoneNumber: newAcct.phoneNumber,
                accountType: newAcct.accountType
            };
            console.log('volAcct is', volAcct);
            //registerRequest(volAcct);

            axiosWithAuth()
                .post('/register', volAcct)
                .then(res => {
                    console.log('Registering new acct:', res.data);
                })
                .catch(err => {
                    console.log('Unable to register new acct');
                })
        }
    };

    //Start of TEST DATA

    const submitBsn = evt => {
        evt.preventDefault();
        let bsn = {
            username: 'WantCheese',
            password: 'supersize',
            businessName: 'Burger Town',
            businessAddress: '4300 Main St',
            phoneNumber: '800-475-2000',
            accountType: 'business'
        };

        testPost(bsn);
    };

    const submitVol = evt => {
        evt.preventDefault();
        let vol = {
            username: 'ShopofHorrors',
            password: 'pleasework',
            volunteerName: 'Rick Moranis',
            phoneNumber: '714-555-0876',
            accountType: 'volunteer'
        };

        testPost(vol);
    };
    //End of TEST DATA

    return (
        <div>
            <form style={{width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={submitForm}>
                <h2>Register form</h2>
                <div style={{width: '350px', display: 'flex', justifyContent: 'space-between'}}>
                    <input type='button' value='Test Business' onClick={submitBsn} />
                    <input type='button' value='Test Volunteer' onClick={submitVol} />
                    <Link to='/'><input type='button' value='Already have an account' /></Link>
                </div>
            </form>
        </div>
    );
};

export default connect(null, {registerRequest})(Registration);