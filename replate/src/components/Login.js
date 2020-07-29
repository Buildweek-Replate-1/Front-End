import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {loginRequest} from '../actions/allActions';
import {connect} from 'react-redux';

const blankLogin = {
    username: '',
    password: ''
};

const Login = props => {
    const [credentials, setCredentials] = useState(blankLogin);
    const history = useHistory();

    const updateForm = evt => {
        const {name, value} = evt.target;

        setCredentials({...credentials, [name]: value});
    };

    const submitLogin = evt => {
        evt.preventDefault();

       console.log('Checking credentials on Login.js', credentials);
       props.loginRequest(credentials);
    };


    //Start of Debugging Test Data
    /*
    const testLog = data => {
        console.log('Checking Login account data:', data);
        props.loginRequest(data);
        console.log('Double checking via props:', props.username);
        props.history.push('/volunteer');
    };
    */

    const testBsn = evt => {
        evt.preventDefault();
        console.log('Inside the testBsn function');

        const acctB = {
            username: 'WantCheese',
            password: 'supersize',
            accountType: 'business'
        };

        //testLog(acctB);
        console.log('Checking Bsn Login account data:', acctB);
        props.loginRequest(acctB);
        console.log('Double checking BSN via props:', props.username);
        props.history.push('/business');
    };

    const testVol = evt => {
        evt.preventDefault();
        console.log('Inside the testVol function');

        const acctV = {
            username: 'user012',
            password: 'pw0012',
            accountType: 'volunteer'
        };

        //testLog(acctV);
        console.log('Checking Vol Login account data:', acctV);
        props.loginRequest(acctV);
        console.log('Double checking VOL via props:', props.username);
        props.history.push('/volunteer');
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

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id
    };
};

export default connect(mapStateToProps, {loginRequest})(Login);