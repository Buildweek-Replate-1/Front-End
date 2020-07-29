import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

const VHead = props => {
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
        username: state.currentUser.username
    };
};

export default connect(mapStateToProps, {})(VHead);