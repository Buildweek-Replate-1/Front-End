import React from 'react';
import {connect} from 'react-redux';

const BAssigned = props => {
    const testAssigned = (foodArray) => {
        let asgn = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Assigned') {
                if(foodArray[item].businessAccountID === props.id) {
                    asgn.push(foodArray[item]);
                }
            }
        }
 
        console.log('Testing filtered foodList:', asgn);
 
        return asgn.length > 0 ? asgn.map(asgnItem => <div>{asgnItem.foodType}</div>) : <div>None</div>
    };

    return (
        <div>
            <h3>Assigned Pickups</h3>
            <p>Test ALL Pickups</p>
            {props.pickups.length > 0 ? props.pickups.map(item => <div>{item.foodType}</div>) : <div>None</div>}
            <br /><p>Test Assigned ONLY</p>
            {testAssigned(props.pickups)}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {})(BAssigned);