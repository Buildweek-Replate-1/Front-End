import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {getBUser} from '../../actions/allActions';
​
const BHead = props => {
    useEffect(() => {
        props.getBUser(props.username);
        console.log('Dashboard useEffect - Testing data:', props.username);
    }, [props.username]);
​
    const history = useHistory();
​
    const editUser = () => {};
​
    const submitLogout = () => {
        history.push('/');
    };
​
    return (
        <div style={{width: '100%', height: '100%', boxSizing: 'border-box', background: '#EACEA4', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <div style={{color: '#D9332A'}}><h1>Welcome {props.username}</h1></div>
            <div>
                <input type='button' style={{margin: '0 5px'}} value='Edit Acct' onClick={editUser} />
                <input type='button' style={{margin: '0 5px'}} value='Log Out' onClick={submitLogout} />
            </div>
        </div>
    );
};
​
const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id
    };
};
​
export default connect(mapStateToProps, {getBUser})(BHead);