import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPendingPickups} from '../../actions/allActions';

import VHead from './VHead';
import VPending from './VPending';
import VAssigned from './VAssigned';
import VComplete from './VComplete';

const VDashboard = props => {
    useEffect(() => {
        props.getPendingPickups();
        console.log('VPending Pickups foodType check:', props.pickups);
    }, [props.pickups]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <VHead />
            <div style={{display: 'flex', height: '760px', width: '99%', margin: '20px 0', boxSizing: 'border-box'}}>
                <div style={{width: '50%', height: '100%', boxSizing: 'border-box'}}>
                    <div style={{width: '100%', height: '100%'}}>
                        <VPending />
                    </div>
                </div>
                <div style={{width: '50%', height: '100%', boxSizing: 'border-box', display: 'flex'}}>
                    <div style={{width: '50%', height: '100%'}}>
                        <VAssigned />
                    </div>
                    <div style={{width: '50%', height: '100%'}}>
                        <VComplete />
                    </div>
                </div>
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

export default connect(mapStateToProps, {getPendingPickups})(VDashboard);
