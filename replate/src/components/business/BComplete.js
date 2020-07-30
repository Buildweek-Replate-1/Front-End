import React from 'react';
import {connect} from 'react-redux';

​
const BComplete = props => {
    console.log(props)
    return (
        <div>
            <h1>Pending Pickup Requests</h1>
        </div>
    
    )
​}



const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id,
        pickups: state.pickups
    };
};
​
export default connect(mapStateToProps, {UPDATE_PICKUP})(BComplete);