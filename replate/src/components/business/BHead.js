import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {getBUser} from '../../actions/allActions';

const BHead = props => {
    useEffect(() => {
        props.getBUser(props.username);
        console.log('Dashboard useEffect - Testing data:', props.username);
    }, [props.username]);

    const history = useHistory();

    const editUser = () => {};

    const submitLogout = () => {
        history.push('/');
    };

    return (
        <div>
            <p>Header Section of Dashboard</p>
            <h1>Welcome {props.username}</h1>
            <input type='button' value='Edit Acct' onClick={editUser} />
            <input type='button' value='Log Out' onClick={submitLogout} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id
    };
};

export default connect(mapStateToProps, {getBUser})(BHead);