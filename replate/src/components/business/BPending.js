import React from 'react';
import {connect} from 'react-redux';
import {GET_ALL_PICKUPS} from '../../actions/allActions';
​
​
function BPending (props){
    console.log(props)
return (
    <div>
        <h1>Pending Pickup Requests</h1>
    </div>

)

};
​
const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id,
        pickups: state.pickups
    };
};
​
export default connect(mapStateToProps, {GET_ALL_PICKUPS})(BPending);