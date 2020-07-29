import React from 'react';
import {connect} from 'react-redux';

const BComplete = props => {
    const testCompletes = (foodArray) => {
        let cmp = [];
        for(let item = 0; item < foodArray.length; item++) {
            if(foodArray[item].status === 'Complete') {
                if(foodArray[item].businessAccountID === props.id) {
                    cmp.push(foodArray[item]);
                }
            }
        }
 
        console.log('Testing filtered foodList:', cmp);
 
        return cmp.length > 0 ? cmp.map(cmpItem => <div>{cmpItem.foodType}</div>) : <div>None</div>};

    return (
        <div>
            <h3>Completed Pickups</h3>
            <p>Test ALL Pickups</p>
            {props.pickups.length > 0 ? props.pickups.map(item => <div>{item.foodType}</div>) : <div>None</div>}
            <br /><p>Test Completed ONLY</p>
            {testCompletes(props.pickups)}
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

export default connect(mapStateToProps, {})(BComplete);