import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPendingPickups} from '../../actions/allActions';

import BHead from './BHead';
import BPending from './BPending';
import BAssigned from './BAssigned';
import BComplete from './BComplete';

import TestButton from './TestButton';

const BDashboard = props => {
    useEffect(() => {
        props.getPendingPickups();
        console.log('BPending Pickups foodType check:', props.pickups);
    }, [props.pickups]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <BHead />
            <div style={{display: 'flex', height: '760px', width: '99%', margin: '20px 0', boxSizing: 'border-box'}}>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><TestButton /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><BPending /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><BAssigned /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><BComplete /></div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    console.log('Dashboard state:', state);
    return {
        //username: state.currentUser.username,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {getPendingPickups})(BDashboard);
