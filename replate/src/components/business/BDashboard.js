import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPendingPickups} from '../../actions/allActions';
import BHead from './BHead';
import BPending from '../business/BPending';
import BAssigned from '../business/BAssigned';
import BComplete from '../business/BComplete';
​

import OrderForm from './OrderForm';
​
const BDashboard = props => {
    useEffect(() => {
        props.getPendingPickups();
        console.log('BPending Pickups foodType check:', props.pickups);
    }, [props.pickups]);
​
    return (
        <div style={{width: '100%', height: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '100%', height: '16%'}}>
                <BHead />
            </div>
            <div style={{display: 'flex', height: '84%', width: '100%'}}>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#2F323A', color: '#D9332A'}}><OrderForm /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#9EAA4E'}}><BPending /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><BAssigned /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#464133', color: 'white'}}><BComplete /></div>
            </div>
        </div>
    );
};
​
const mapStateToProps = state => {
    return {
        //username: state.currentUser.username,
        pickups: state.pickups
    };
};
​
export default connect(mapStateToProps, {getPendingPickups})(BDashboard);
