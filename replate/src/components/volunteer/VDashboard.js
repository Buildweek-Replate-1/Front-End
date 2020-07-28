import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getVUser} from '../../actions/allActions';

import VHead from './VHead';

const VDashboard = props => {
    useEffect(() => {
        props.getVUser(props.username);
        console.log('Dashboard useEffect - Testing data:', props.username);
    }, [props.username]);

    const vName = props.username;
    console.log('Dashboard: Testing vName:', vName);

    return (
        <VHead />
    );
};

const mapStateToProps = state => {
    console.log('Dashboard state:', state);
    return {
        username: state.currentUser.username
    };
};

export default connect(mapStateToProps, {getVUser})(VDashboard);