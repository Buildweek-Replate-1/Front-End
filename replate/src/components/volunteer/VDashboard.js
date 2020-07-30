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
    }, []);

    return (
        <div style={{width: '100%', height: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '100%', height: '16%'}}>
                <VHead />
            </div>
            <div style={{display: 'flex', height: '84%', width: '100%'}}>
                <div style={{width: '42%', height: '100%', boxSizing: 'border-box', display: 'flex'}}>
                    <div style={{width: '100%', height: '100%', background: '#9EAA4E'}}>
                        <VPending />
                    </div>
                </div>
                <div style={{width: '58%', height: '100%', boxSizing: 'border-box', display: 'flex'}}>
                    <div style={{width: '50%', height: '100%'}}>
                        <VAssigned />
                    </div>
                    <div style={{width: '50%', height: '100%', background: '#464133', color: 'white'}}>
                        <VComplete />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    //console.log('Dashboard state:', state);
    return {
        //username: state.currentUser.username,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {getPendingPickups})(VDashboard);
